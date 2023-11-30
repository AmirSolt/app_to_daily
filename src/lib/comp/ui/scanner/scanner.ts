import type { CrimeType, Report } from "@prisma/client";
import { error } from "@sveltejs/kit";

export async function scan(point:GeoPoint, filters:CrimeType[]):Promise<Report[]>{

    const response = await fetch("/api/scanner", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            point,
            filters
        }),
    });

    let data = await response.json()
    if(response.ok){
        return data.reports
    }

    throw error(400, {
        message: 'Scanner Failed!',
    });
}

