import { ADMIN_SECRET } from '$env/static/private'
import prisma from '$lib/funcs/prisma.server.js';
import type { Profile } from '@prisma/client';
import { error } from '@sveltejs/kit';


export const POST = async (event) => {
    const { adminSecret, isFirstTime } = await event.request.json();

    if(ADMIN_SECRET !== adminSecret){
        throw error(400, {
            message: 'Wrong secret',
        });
    }
    
    const profiles:Profile[] = await prisma.zoneReportNotif(newReports.map(n=>n.id), region)

    console.log(`>> ${profiles.length} many profiles recieved notif`)
    // push notif to profiles
    

    return new Response()
};

