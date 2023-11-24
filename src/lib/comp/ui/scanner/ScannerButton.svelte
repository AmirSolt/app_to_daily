<script lang="ts">
	import type { CrimeTypes } from "$lib/utils/globals";


    import { scan } from "./scanner";
    export let centerMap:GeoPoint
    export let scannedReports:Report[]
    export let filters:CrimeTypes[]
    async function onScan(){
        
        scannedReports = await scan(centerMap, filters)
    }


</script>

<button type="button" class="btn variant-filled" on:click={onScan}>
    Scan this area
</button>