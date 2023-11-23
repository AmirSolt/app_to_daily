<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { SvelteComponent } from 'svelte';
	export let parent:SvelteComponent
	export let report:Report
	
	// Modal
	const modalStore = getModalStore();

</script>


<!-- @component -->
{#if $modalStore[0]}
	<div class="card p-4 w-full shadow-sm flex flex-col gap-4">
        <h1>{report.crimeType}</h1>
        <p>{report.occurDate}</p>
        <p>
            Map, center report
        </p>
	</div>
{/if}

