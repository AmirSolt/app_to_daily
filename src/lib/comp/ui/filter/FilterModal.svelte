<script lang="ts">
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import type { SvelteComponent } from 'svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
    import { CrimeTypes } from '$lib/utils/globals';
	export let filters:CrimeTypes[]
	const modalStore = getModalStore();

</script>

<!-- @component -->
{#if $modalStore[0]}
	<div class="card p-4 w-full shadow-sm flex flex-col gap-4">

		<div>
			<header class="text-2xl font-bold">Title</header>
			<article>Body</article>
		</div>

		<form class="flex flex-col gap-6">

			<div>
				<ListBox multiple>
					{#each Object.values(CrimeTypes) as CrimeType}
						<ListBoxItem class="variant-outline" bind:group={filters} name="filter" value="{CrimeType}">{CrimeType}</ListBoxItem>
					{/each}
				</ListBox>
			</div>


			<div class="flex justify-end">
				<button class="btn variant-filled w-24" type="submit">Save</button>
			</div>
		</form>
	</div>
{/if}