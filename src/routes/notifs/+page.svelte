<script lang="ts">

	import { Accordion } from '@skeletonlabs/skeleton';
	import NotifItem from '$lib/comp/ui/notif/NotifItem.svelte';
	import ReportFilter from '$lib/comp/ui/filter/ReportFilter.svelte';

	export let data;
	$:( {
		profile,
		adContents,
		forms,
	} = data );


</script>
<div>
	<h1>
		Notifications
	</h1>
	<p>
		Filters {profile.crimeTypeFilters.length}
	</p>
	<p>
		Number of notifications in past week: {profile.zoneReports.length}
	</p>

</div>


<br>
<hr>
<br>

<ReportFilter />

<br>
<hr>
<br>


<div class="flex flex-col justify-center items-center gap-4">
	{#each profile.zoneReports as zoneReport (zoneReport.report.id)}
		<NotifItem report={zoneReport.report} />
	{/each}
</div>
