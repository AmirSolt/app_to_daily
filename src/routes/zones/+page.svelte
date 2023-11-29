<script lang="ts">
	import CreateZoneButton from '$lib/comp/ui/zone/CreateZoneButton.svelte';
	import ZoneItem from '$lib/comp/ui/zone/ZoneItem.svelte';

	export let data;
	$:( {
		user,
		adContents,
		forms,
	} = data );

</script>

<div>
	<h1>
		Zones
	</h1>
	<p>
		Number of zones {user.zones.length}
	</p>
</div>

<br>
<hr>
<br>

<div>
    <CreateZoneButton />
</div>

<br>
<hr>
<br>

<div class="flex flex-col gap-2">
	{#each user.zones as zone (zone.id)}
		<ZoneItem {zone}/>
	{/each}
</div>

