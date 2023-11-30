import { ADMIN_SECRET } from '$env/static/private'
import prisma from '$lib/funcs/prisma.server.js';
import { CrimeType, Region, type User } from '@prisma/client';
import { error } from '@sveltejs/kit';


export const POST = async (event) => {
    const { adminSecret, isFirstTime } = await event.request.json();

    if(ADMIN_SECRET !== adminSecret){
        throw error(400, {
            message: 'Wrong secret',
        });
    }

    let rawReports:any[] = []
    let minutesBack = 60
    const region = Region.TORONTO
    if(isFirstTime){
        minutesBack = 60 * 24 * 7
    }
    
    
    const dateStr = getDateStrMinutesAgo(minutesBack)
    const order_by = "HOUR"
    const query_date_str = `REPORT_DATE_EST >= date '${dateStr} 00:00:00'`
    const whereStatementUrlified = encodeURIComponent(query_date_str)
    
    const rawReportsUrl = `https://services.arcgis.com/S9th0jAJ7bqgIRjw/ArcGIS/rest/services/YTD_CRIME_WM/FeatureServer/0/query?where=${whereStatementUrlified}&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=${order_by}&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`   
    const response = await fetch(rawReportsUrl)
    let data = await response.json() 
    if(response.ok){
        rawReports = data["features"] as any[]
    }else{
        throw error(400, {
            message: data,
        });
    }
  
    // * check if ids exist
    // * occur_at
    // * crimeType
    // * convert string_null to null
    const newReports = await prisma.report.create({
        data:rawReports.map(raw=>{
            const occur_at = raw["attributes"]["OCC_DATE_EST"] + raw["attributes"]["HOUR"]
            return {
                id:raw["attributes"][""],
                neighborhood:removeNeighExtraChars(raw["attributes"]["NEIGHBOURHOOD_158"]),
                locationType:raw["attributes"]["LOCATION_CATEGORY"], 
                crimeType:raw["attributes"]["CRIME_TYPE"] as CrimeType,
                occur_at:occur_at,
                region:region,
                long:raw["geometry"]["x"],
                lat:raw["geometry"]["y"],
            }
        })
    })


    // proximity calc
    // call function that:
        // create reportOnZones for each region for each zone
        // get all users that had reportOnZones added but that were not filtered
    
    
    const users:User[] = await prisma.zoneReportNotif(newReports.map(n=>n.id), region)

    console.log(`>> ${users.length} many users recieved notif`)
    // push notif to users
    

    return new Response()
};




function getDateStrMinutesAgo(minutesAgo: number): string {
    // Get the current date and time
    let date = new Date();

    // Subtract the given number of minutes
    date.setMinutes(date.getMinutes() - minutesAgo);

    // Format the date and time
    let year = date.getUTCFullYear();
    let month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
    let day = ("0" + date.getUTCDate()).slice(-2);
    let hours = ("0" + date.getUTCHours()).slice(-2);
    let minutes = ("0" + date.getUTCMinutes()).slice(-2);
    let seconds = ("0" + date.getUTCSeconds()).slice(-2);

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


function removeNeighExtraChars(inputString: string): string {
    let result: string = "";
    let flag: boolean = false;   // True when between "(" and ")"

    for (let char of inputString) {
        if (char === "(") {
            flag = true;
        } else if (char === ")") {
            flag = false;
        } else if (!flag) {
            result += char;
        }
    }

    return result;
}