<script lang="ts">
	import AdvertBanner from '$lib/comp/ui/advert/AdvertBanner.svelte';
	import CreateZoneButton from '$lib/comp/ui/zone/CreateZoneButton.svelte';
	import ReportFilter from '$lib/comp/ui/filter/ReportFilter.svelte';

	export let data;
	const {
		userData,
		ads,
	} = data;


</script>



{#if ads.length>0}
	<div>
		<AdvertBanner advert={ads[0]} />
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


	<h1>
		Map
	</h1>

	<p>
		Zone Reports {userData.zoneReports.length}
	</p>

	<p>
		Scanned Reports {0}, No scans done: 1.Ask GPS 2.First Zone 3.Default Some Point (No Scan)
	</p>

	<p>
		Total Reports {userData.zoneReports.length + 0}
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


