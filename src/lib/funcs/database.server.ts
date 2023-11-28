

import { PUBLIC_SUPABASE_URL } from '$env/static/public'
import { PRIVATE_SERVICE_ROLE_KEY_SUPABASE } from '$env/static/private'
import { createClient } from '@supabase/supabase-js'
import type { Database, UserData } from '$lib/utils/database.types'
import type { User } from '@supabase/supabase-js'
import { error } from '@sveltejs/kit'


// Create a single supabase client for interacting with your database
export const supabaseAdmin = createClient(
    PUBLIC_SUPABASE_URL,
    PRIVATE_SERVICE_ROLE_KEY_SUPABASE,
    {
        auth: { persistSession: false },
    }
)


export async function fetchUserData(user:User|undefined):Promise<UserData>{
    if(user==undefined){
        console.log("No User")
        throw error(400, {
            message: "User is not logged in",
        })
    }
    const { data, error: err } = await supabaseAdmin
        .from('profiles')
        .select(`*,zones(*,zone_reports(reports(*)))`)
        .eq('id', user.id)
        .single()
    if (err != null) {
        throw error(400, {
            message: err.message,
        })
    }

    let response:UserData = {
        profile:removeKey(data,"zones") as Database["public"]["Tables"]["profiles"]["Row"],
        zones:removeKey(data.zones,"zone_reports") as Database["public"]["Tables"]["zones"]["Row"][],
        zoneReports:data.zones.map((r:any)=>r.zone_reports.map((e:any)=>e.reports)).flat() as Database["public"]["Tables"]["reports"]["Row"][],
    }

    

    return response
}

export async function fetchAdContents(user:User|undefined):Promise<Database["public"]["Tables"]["advert_content"]["Row"][]>{
    if(user==undefined){
        console.log("No User")
        return []
    }
    const { data, error: err } = await supabaseAdmin
        .from('advert_content')
        .select(`*`)
    if (err != null) {
        throw error(400, {
            message: err.message,
        })
    }
    return data
}

// export async function insertUsageReport(usageReport:UsageReport):Promise<boolean>{
//     const { data, error: err } = await supabaseAdmin
//         .from('usage_reports')
//         .insert(usageReport)
//     if (err != null) {
//         return false
//     }
//     return true
// }


function removeKey(obj:any,key:string){
    let copy = JSON.parse(JSON.stringify(obj))
    delete copy[key]
    return copy
}