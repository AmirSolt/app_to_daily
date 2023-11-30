import { json } from '@sveltejs/kit';
import type { Report } from '@prisma/client';
import prisma from '$lib/funcs/prisma.server';


export async function scan(event:any){
    const { point, filters } = await event.request.json();
    // filter reports

    const radius = 5
    let reports:Report[] =  await prisma.scanReports(point.long, point.lat, radius)

    reports = reports.filter(r=>!filters.includes(r.crimeType))

    return json({reports})
}