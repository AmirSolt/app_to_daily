<script lang="ts">
	import AdvertBanner from '$lib/comp/ui/advert/AdvertBanner.svelte';
	import CreateZoneButton from '$lib/comp/ui/zone/CreateZoneButton.svelte';
	import ReportFilter from '$lib/comp/ui/filter/ReportFilter.svelte';
	import ScannerButton from '$lib/comp/ui/scanner/ScannerButton.svelte';
	import type { Database } from '$lib/utils/database.types.js';
	export let data;
	const {
		userData,
		adContents,
		forms,
	} = data;


	let centerMap:GeoPoint
	let scannedReports:Database["public"]["Tables"]["reports"]["Row"][]=[]
</script>






{#if adContents.length>0}
	<div>
		<AdvertBanner />
	</div>
{/if}

<br>
<hr>
<br>


<ReportFilter  />


<br>
<hr>
<br>

<div>

	<ScannerButton bind:scannedReports={scannedReports} point={centerMap} />
	<h1>
		Map
	</h1>

	<p>
		Zone Reports {userData.zoneReports.length}
	</p>

	<p>
		Scanned Reports {scannedReports.length}, No scans done: 1.Ask GPS 2.First Zone 3.Default Some Point
	</p>

	<p>
		Total Reports {userData.zoneReports.length + scannedReports.length}
	</p>
</div>

<br>
<hr>
<br>

<div>
	<CreateZoneButton />
	<p>
		Number of zones {userData.zones.length}
	</p>
</div>


