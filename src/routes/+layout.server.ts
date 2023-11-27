import { fetchUserData, fetchAdContents } from '$lib/funcs/database.server.js';
import * as zoneForm from '$lib/comp/ui/zone/zoneForm.server.js';
import * as filterForm from '$lib/comp/ui/filter/filterForm.server.js';
import type { Session } from "@supabase/supabase-js";
import { error } from '@sveltejs/kit';

export const load = async (event) => {
    let session:Session|null = await event.locals.getSession()
    if(session==undefined){
        const { data, error:err } = await event.locals.supabaseAuthServer.auth.signUp({
            email: 'example123@email.com',
            password: 'example-password',
        })
        if (err != null) {
            throw error(400, {
                message: err.message,
            })
        }
        session = data.session
    }

    console.log(session)

    return {
        userData: fetchUserData(session?.user),
        adContents: fetchAdContents(session?.user),
        forms:{
            zone:zoneForm.loadComp(event),
            filter:filterForm.loadComp(event),
        },
    }
};
