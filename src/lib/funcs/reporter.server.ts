import { error } from "@sveltejs/kit"
import prisma from "./prisma.server"
import { Region, CrimeType } from "@prisma/client"

export enum DateQueryType {
    OCC_DATE_AGOL = "OCC_DATE_AGOL",
    REPORT_DATE_AGOL = "REPORT_DATE_AGOL",
}


export async function saveReportsByDate(fromDate:Date, dateType:DateQueryType){
    let rawReports:any[] = []
    const region:Region = Region.TORONTO

    const fromDateStr = UTCToStr(fromDate)
    const query_date_str = `${dateType} >= date '${fromDateStr} 00:00:00'`
    const whereStatementUrlified = encodeURIComponent(query_date_str)
    const rawReportsUrl = `https://services.arcgis.com/S9th0jAJ7bqgIRjw/ArcGIS/rest/services/YTD_CRIME_WM/FeatureServer/0/query?where=${whereStatementUrlified}&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`   
    const response = await fetch(rawReportsUrl)
    let data = await response.json() 
    if(response.ok){
        rawReports = data["features"] as any[]
    }else{
        throw error(400, {
            message: data,
        });
    }

    // filter null fields
    rawReports = rawReports.filter(raw=>{
        return (
        raw["attributes"]!=null ||
        raw["attributes"]["CRIME_TYPE"]!=null ||
        raw["attributes"][DateQueryType.OCC_DATE_AGOL]!=null ||
        raw["attributes"]["HOUR"]!=null ||
        raw["geometry"]!=null
        )
    })
  
    return await prisma.report.createMany({
        data:rawReports.map(raw=>{
            const occurAt = setDateToSpecificHour(raw["attributes"][DateQueryType.OCC_DATE_AGOL], raw["attributes"]["HOUR"])
            return {
                id:raw["attributes"]["EVENT_UNIQUE_ID"],
                neighborhood:removeNeighExtraChars(raw["attributes"]["NEIGHBOURHOOD_158"]),
                locationType:raw["attributes"]["LOCATION_CATEGORY"], 
                crimeType:crimeTypeCleaning(raw["attributes"]["CRIME_TYPE"]) as CrimeType,
                occurAt:occurAt,
                region:region,
                long:raw["geometry"]["x"],
                lat:raw["geometry"]["y"],
            }
        }),
        skipDuplicates: true,
    })

}





function UTCToStr(date:Date): string {
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



function setDateToSpecificHour(epochTime: number, hour: number): Date {
    const date = new Date(epochTime);
    date.setUTCHours(hour, 0, 0, 0);
    return date;
}


function crimeTypeCleaning(rawCrimeType:string){
    return rawCrimeType.toUpperCase().replace(/\s+/g, '_');
}

