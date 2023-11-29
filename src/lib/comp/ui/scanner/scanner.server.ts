import { json } from '@sveltejs/kit';
import { CrimeType } from '@prisma/client';


export async function scan(event:any){
    const { point, filters } = await event.request.json();

    // filter reports
    // reports
    // data.user.zoneReports = data.user.zoneReports
    //                                 .filter(r=>!data.user.crimeTypeFilters.includes(r.report.crimeType))


    return json({})
}