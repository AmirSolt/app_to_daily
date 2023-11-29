<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { SvelteComponent } from 'svelte';
	import type { Report } from '@prisma/client';

	export let parent:SvelteComponent
	export let report:Report
	
	// Modal
	const modalStore = getModalStore();

</script>


<!-- @component -->
{#if $modalStore[0]}
	<div class="card p-4 w-full shadow-sm flex flex-col gap-4">
        <h1>{report.crimeType}</h1>
        <p>{report.occur_at}</p>
        <p>
            Map, center report
        </p>
	</div>
{/if}

