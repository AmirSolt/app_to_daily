import { ADMIN_SECRET } from '$env/static/private'
import prisma from '$lib/funcs/prisma.server.js';
import type { User } from '@prisma/client';
import { error } from '@sveltejs/kit';


export const POST = async (event) => {
    const { adminSecret, isFirstTime } = await event.request.json();

    if(!ADMIN_SECRET === adminSecret){
        throw error(400, {
            message: 'Wrong secret',
        });
    }

    if(isFirstTime){
        // fetch time window a week
    }
    // fetch reports
    const rawReports:any[] = []

    // insert to database
    await prisma.report.create({
        data:rawReports.map(raw=>{
            return {

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