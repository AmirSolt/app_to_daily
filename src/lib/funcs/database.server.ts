

import { PUBLIC_SUPABASE_URL } from '$env/static/public'
import { PRIVATE_SERVICE_ROLE_KEY_SUPABASE } from '$env/static/private'
import { createClient } from '@supabase/supabase-js'
import type { Database } from '$lib/utils/database.types'
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


export async function fetchProfile(user:User|undefined):Promise<Database["public"]["Tables"]["profiles"]["Row"]|null>{
    if(user==undefined){
        console.log("No User")
        return null
    }
    const { data, error: err } = await supabaseAdmin
        .from('profiles')
        .select(`*,zones(*)`)
        .eq('id', user.id)
        .single()
    if (err != null) {
        throw error(400, {
            message: err.message,
        })
    }
    return data
}

export async function fetchAdContents(user:User|undefined):Promise<Database["public"]["Tables"]["advert_content"]["Row"][]|null>{
    if(user==undefined){
        console.log("No User")
        return null
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