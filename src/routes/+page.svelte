<script lang="ts">
	import AdvertBanner from '$lib/comp/ui/advert/AdvertBanner.svelte';
	import CreateZoneButton from '$lib/comp/ui/zone/CreateZoneButton.svelte';
	import ReportFilter from '$lib/comp/ui/filter/ReportFilter.svelte';
	import ScannerButton from '$lib/comp/ui/scanner/ScannerButton.svelte';
	import type { Report } from '@prisma/client';
	export let data;
	$:( {
		profile,
		adContents,
		forms,
	} = data );


	let centerMap:GeoPoint
	let scannedReports:Report[]=[]

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
<p>
	crimeTypeFilters: {profile.crimeTypeFilters}
</p>

<br>
<hr>
<br>

<div>

	<ScannerButton bind:scannedReports={scannedReports} point={centerMap} />
	<h1>
		Map
	</h1>

	<p>
		Zone Reports {profile.zoneReports.length}
	</p>

	<p>
		Scanned Reports {scannedReports.length}, No scans done: 1.Ask GPS 2.First Zone 3.Default Some Point
	</p>

	<p>
		Total Reports {profile.zoneReports.length + scannedReports.length}
	</p>
</div>

<br>
<hr>
<br>

<div>
	<CreateZoneButton />
	<p>
		Number of zones {profile.zones.length}
	</p>
</div>


