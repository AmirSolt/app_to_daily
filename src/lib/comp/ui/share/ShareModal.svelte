<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { SvelteComponent } from 'svelte';
	export let parent:SvelteComponent
	
	// Modal
	const modalStore = getModalStore();

	

</script>


<!-- @component -->
{#if $modalStore[0]}
	<div class="card p-4 w-full shadow-sm flex flex-col gap-4">
        <h1>Share</h1>
        <img src="" alt="QR code">
        <!-- .... -->
	</div>
{/if}

