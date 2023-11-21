<script lang="ts">
	import AdvertBanner from '$lib/comp/ui/AdvertBanner.svelte';
	import CreateZoneLink from '$lib/comp/ui/CreateZoneLink.svelte';

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

<div>

	<p>
		Filters {userData.reportFilters.length}
	</p>

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
	<CreateZoneLink />
	<p>
		Number of zones {userData.zones.length}
	</p>
</div>


