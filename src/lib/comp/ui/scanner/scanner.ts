import type { CrimeTypes } from "$lib/utils/globals"
import type { Database } from "$lib/utils/database.types";

export async function scan(point:GeoPoint, filters:CrimeTypes[]):Promise<Database["public"]["Tables"]["reports"]["Row"][]>{
    console.log("Scan")


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

    

    return await response.json()
}

