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

export const POST = async ({request}) => {
    const { point, filters } = await request.json();


    // filter reports
    example = example
        .filter(r=>!filters.includes(r.crimeType))

    console.log("/api/scanner")

    return json(example)
};