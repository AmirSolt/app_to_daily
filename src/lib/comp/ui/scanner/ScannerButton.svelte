<script lang="ts">
    import { page } from "$app/stores";
    import type { CrimeType, Report } from "@prisma/client";

    import { scan } from "./scanner";
    export let point:GeoPoint
    export let scannedReports:Report[]
    let filters:CrimeType[] = $page.data.profile.crimeTypeFilters

    async function onScan(){
        const newScannedReports:Report[] = await scan(point, filters)
        scannedReports.push(...newScannedReports)
    }


</script>

<button type="button" class="btn variant-filled" on:click={onScan}>
    Scan this area
</button>