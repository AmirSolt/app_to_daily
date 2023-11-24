interface UserData{
    id:string
    zones:Zone[]
    zoneReports:Report[]
    reportFilters:CrimeTypes[]
}


// =======================================

interface Report{
    id:string
    point:GeoPoint
    crimeType:CrimeTypes
    occurDate:Date
}

interface Zone{
    id:string
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
    id:string
    iconImg:string
    title:string
    body:string
    url:string
    actionButton:string
}

// =======================================

interface GeoPoint{
    x:number
    y:number
}

