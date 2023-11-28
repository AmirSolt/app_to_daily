<script lang="ts">
	import type { CrimeTypes } from "$lib/utils/globals";
    import { page } from "$app/stores";
    import type { Database } from "$lib/utils/database.types";

    import { scan } from "./scanner";
    export let point:GeoPoint
    export let scannedReports:Database["public"]["Tables"]["reports"]["Row"][]
    let filters:CrimeTypes[] = $page.data.user.report_filters

    async function onScan(){
        const newScannedReports:Database["public"]["Tables"]["reports"]["Row"][] = await scan(point, filters)
        scannedReports.push(...newScannedReports)
    }


</script>

<button type="button" class="btn variant-filled" on:click={onScan}>
    Scan this area
</button>