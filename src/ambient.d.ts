interface UserData{
    zones:Zone[]
    zoneReports:Report[]
    reportFilters:ReportFilter[]
}


// =======================================

interface Report{
    point:GeoPoint
    crimeType:"break and enter"|"robbery"
}

interface ReportFilter{
    crimeType:"break and enter"|"robbery"
}

interface Zone{
    label:string
    point:GeoPoint
    radius:number
    address:string
}

interface Notif{
    title:string
    body:string
    reports:Report[]
}

interface Advert{
    iconImg:string
    title:string
    body:string
    link:string
}

// =======================================

interface GeoPoint{
    x:number
    y:number
}
