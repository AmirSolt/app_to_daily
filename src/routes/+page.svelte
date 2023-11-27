<script lang="ts">
	export let data;
	const {
		profile,
		adContents,
		forms,
	} = data;

	console.log(profile)
	console.log(adContents)
	console.log(forms)

	// let centerMap:Point
	// let scannedReports:Report[]=[]
</script>




<!-- <script lang="ts">
	import AdvertBanner from '$lib/comp/ui/advert/AdvertBanner.svelte';
	import CreateZoneButton from '$lib/comp/ui/zone/CreateZoneButton.svelte';
	import ReportFilter from '$lib/comp/ui/filter/ReportFilter.svelte';
	import ScannerButton from '$lib/comp/ui/scanner/ScannerButton.svelte';

	export let data;
	const {
		userData,
		ads,
	} = data;
	let centerMap:GeoPoint
	let scannedReports:Report[]=[]


</script>



{#if ads.length>0}
	<div>
		<AdvertBanner advert={ads[0]} {userData} />
	</div>
{/if}

<br>
<hr>
<br>


<ReportFilter filters={userData.reportFilters} />


<br>
<hr>
<br>

<div>

	<ScannerButton bind:scannedReports={scannedReports} {centerMap} filters={userData.reportFilters} />
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

 -->
