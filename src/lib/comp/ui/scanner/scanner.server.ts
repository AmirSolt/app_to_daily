import { json } from '@sveltejs/kit';
import { CrimeTypes } from "$lib/utils/globals"



let example = [
    { 
        point:{x:1,y:1},
        crimeType:CrimeTypes.breakAndEnter,
        occurDate:new Date(),
    } as Report,
    { 
        point:{x:1,y:1},
        crimeType:CrimeTypes.robbery,
        occurDate:new Date(),
    } as Report,
]


export async function scan(event:any){
    const { point, filters } = await event.request.json();

    // filter reports
    example = example
        .filter(r=>!filters.includes(r.crimeType))

    console.log("/api/scanner")

    return json(example)
}