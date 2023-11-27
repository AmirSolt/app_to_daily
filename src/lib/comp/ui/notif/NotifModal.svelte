<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { SvelteComponent } from 'svelte';
    import type { Database } from "$lib/utils/database.types";

	export let parent:SvelteComponent
	export let report:Database["public"]["Tables"]["reports"]["Row"]
	
	// Modal
	const modalStore = getModalStore();

</script>


<!-- @component -->
{#if $modalStore[0]}
	<div class="card p-4 w-full shadow-sm flex flex-col gap-4">
        <h1>{report.crime_type}</h1>
        <p>{report.occur_at}</p>
        <p>
            Map, center report
        </p>
	</div>
{/if}

