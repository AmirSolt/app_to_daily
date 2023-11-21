interface UserData{
    zones:Zone[]
    zoneReports:Report[]
    reportFilters:CrimeType[]
}


// =======================================

interface Report{
    id:string
    point:GeoPoint
    crimeType:CrimeType
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

enum CrimeType{
    breakAndEnter = "break and enter",
    robbery = "robbery",
}
