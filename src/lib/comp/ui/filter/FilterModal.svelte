<script lang="ts">
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { toastError } from '$lib/utils/toastHelper.js';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { filterSchema } from '$lib/utils/schema';
	import type { SvelteComponent } from 'svelte';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import { CrimeType } from '@prisma/client';
	
    let filters:CrimeType[] = $page.data.profile.crimeTypeFilters
	export let parent:SvelteComponent
	let toastStore = getToastStore();

	// Modal
	const { form, enhance } = superForm($page.data.forms.filter.form, {
		validators: filterSchema,
		onError: ({result}) => {
			toastError(result.error.message, toastStore);
		},
		onResult(event) {
			invalidate('data:profile')
			parent.onClose()
		},
		taintedMessage: null
	});
	
	// Modal
	const modalStore = getModalStore();


	$form.filters = filters


</script>


<!-- @component -->
{#if $modalStore[0]}


	<div class="card p-4 w-full shadow-sm flex flex-col gap-4">
		<SuperDebug data={form}/>

		<div>
			<header class="text-2xl font-bold">Title</header>
			<article>Body</article>
		</div>

		<form class="flex flex-col gap-6" method="POST" use:enhance action="/api/forms/filters">

			<div>
				<ListBox multiple>
					{#each Object.values(CrimeType) as crimeType}
						<ListBoxItem class="variant-outline" bind:group={$form.filters} name="filters" value="{crimeType}">{crimeType}</ListBoxItem>
					{/each}
				</ListBox>
			</div>


			<div class="flex justify-end">
				<button class="btn variant-filled w-24" type="submit">Save</button>
			</div>
		</form>
	</div>
{/if}



<!-- 		
<input
	class="input"
	type="email"
	name={formAttrName}
	{placeholder}
	id={formAttrName}
	class:input-error={$errors[formAttrName]}
	data-invalid={$errors[formAttrName]}
	bind:value={$form[formAttrName]}
	{...$constraints[formAttrName]}
	{autocomplete}
	on:focus={() => toastError('Please Sign in', toastStore)}
/>
-->