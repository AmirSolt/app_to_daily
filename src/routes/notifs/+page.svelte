<script lang="ts">

	import { Accordion } from '@skeletonlabs/skeleton';
	import NotifItem from '$lib/comp/ui/notif/NotifItem.svelte';
	import ReportFilter from '$lib/comp/ui/filter/ReportFilter.svelte';

	export let data;
	const {
		userData,
		ads,
	} = data;

</script>
<div>
	<h1>
		Notifications
	</h1>
	<p>
		Filters {userData.reportFilters.length}
	</p>
	<p>
		Number of notifications in past week: {userData.zoneReports.length}
	</p>

</div>


<br>
<hr>
<br>

<ReportFilter filters={userData.reportFilters} />

<br>
<hr>
<br>


<div class="flex flex-col justify-center items-center gap-4">
	{#each userData.zoneReports as report}
		<NotifItem report={report} />
	{/each}
</div>
