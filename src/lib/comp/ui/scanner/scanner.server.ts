import { json } from '@sveltejs/kit';
import { CrimeType, type Report } from '@prisma/client';
import prisma from '$lib/funcs/prisma.server';


export async function scan(event:any){
    const { point, filters } = await event.request.json();
    // filter reports

    const reports:Report[] = [] 

    // function

    // reports
    // data.user.zoneReports = data.user.zoneReports
    //                                 .filter(r=>!data.user.crimeTypeFilters.includes(r.report.crimeType))

    console.log(">>> Scanned reports",reports)
    return json({})
}