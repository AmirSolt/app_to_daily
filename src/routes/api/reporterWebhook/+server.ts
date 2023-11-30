import { ADMIN_SECRET } from '$env/static/private'
import prisma from '$lib/funcs/prisma.server.js';
import type { User } from '@prisma/client';
import { error } from '@sveltejs/kit';


export const POST = async (event) => {
    const { adminSecret, isFirstTime } = await event.request.json();

    if(ADMIN_SECRET !== adminSecret){
        throw error(400, {
            message: 'Wrong secret',
        });
    }

    let minutesBack = 60
    if(isFirstTime){
        minutesBack = 60 * 24 * 7
    }
    
    let rawReports:any[] = []

    dateStr = date.strftime('%Y-%m-%d')
    const order_by = "HOUR"
    const query_date_str = `REPORT_DATE_EST >= date '${dateStr} 00:00:00'`
    const whereStatementUrlified = urllib.parse.quote_plus(query_date_str)
    
    const rawReportsUrl = `https://services.arcgis.com/S9th0jAJ7bqgIRjw/ArcGIS/rest/services/YTD_CRIME_WM/FeatureServer/0/query?where=${whereStatementUrlified}&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=${order_by}&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`   
    const response = await fetch(rawReportsUrl)
    let data = await response.json() 
    if(response.ok){
        rawReports = data
    }else{
        throw error(400, {
            message: data,
        });
    }
  

    // insert to database
    await prisma.report.create({
        data:rawReports.map(raw=>{
            return {
                id:'',
                crimeType:"",
                occur_at:"",
                region:"",
                reportOnZones:"",
                long:"",
                lat:"",
            }
        })
    })


    // proximity calc
    // call function that:
        // create reportOnZones for each region for each zone
        // get all users that had reportOnZones added but that were not filtered
    
    
    const users:User[] = []

    // push notif to users
    

    return new Response()
};