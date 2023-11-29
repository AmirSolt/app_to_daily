<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { toastError } from '$lib/utils/toastHelper.js';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { removeZoneSchema } from '$lib/utils/schema';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import type { SvelteComponent } from 'svelte';
	import type { Zone } from '@prisma/client';
    export let zone:Zone
	export let parent:SvelteComponent
	let toastStore = getToastStore();

	// Modal
	const { form, enhance } = superForm($page.data.forms.zone.removeForm, {
		validators: removeZoneSchema,
		onError: ({result}) => {
			toastError(result.error.message, toastStore);
		},
		onResult(event) {
			invalidate("data:user")
			parent.onClose()
		},
		taintedMessage: null
	});
	
	// Modal
	const modalStore = getModalStore();

    $form.id = zone.id

</script>


<!-- @component -->
{#if $modalStore[0]}


	<div class="card p-4 w-full shadow-sm flex flex-col gap-4">
		<SuperDebug data={form}/>

		<div>
			<header class="text-2xl font-bold">Title</header>
			<article>Body</article>
		</div>

		<form class="flex flex-col gap-6" method="POST" use:enhance action="/api/forms/zones?/remove">

            <input type="hidden" name="id" bind:value={$form.id}>

			<div class="flex justify-end">
				<button class="btn variant-filled w-24" type="button" on:click={parent.onClose}>No</button>
			</div>

			<div class="flex justify-end">
				<button class="btn variant-filled w-24" type="submit">Yes</button>
			</div>
		</form>


	</div>
{/if}


