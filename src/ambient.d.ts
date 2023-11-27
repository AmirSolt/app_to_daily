import type { Database } from '$lib/utils/database.types'

interface UserData{
    profile:Database["public"]["Tables"]["profiles"]["Row"]
    zones:Database["public"]["Tables"]["zones"]["Row"][]
    zoneReports:Database["public"]["Tables"]["reports"]["Row"][]
}

interface GeoPoint{
    x:number
    y:number
}