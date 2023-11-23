<script lang="ts">
	import CreateZone from '$lib/comp/ui/zone/CreateZone.svelte';
	import ZoneItem from '$lib/comp/ui/zone/ZoneItem.svelte';

	export let data;
	const {
		userData,
		ads,
	} = data;

</script>

<div>
	<h1>
		Zones
	</h1>
	<p>
		Number of zones {userData.zones.length}
	</p>
</div>

<br>
<hr>
<br>

<div>
    <CreateZone />
</div>

<br>
<hr>
<br>

<div class="flex flex-col gap-2">
	{#each userData.zones as zone}
		<ZoneItem zone={zone}/>
	{/each}
</div>


