<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { toastError } from '$lib/utils/toastHelper.js';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { editZoneSchema } from '$lib/utils/schema';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import type { SvelteComponent } from 'svelte';
	import type { Database } from '$lib/utils/database.types';
    export let zone:Database["public"]["Tables"]["zones"]["Row"]
	export let parent:SvelteComponent
	let toastStore = getToastStore();

	// Modal
	const { form, errors, constraints, enhance } = superForm($page.data.forms.zone.editForm, {
		validators: editZoneSchema,
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
    $form.label = zone.label
    $form.address = zone.address
    $form.radius = zone.radius
    $form.long = zone.point.long
    $form.lat = zone.point.lat

</script>


<!-- @component -->
{#if $modalStore[0]}


	<div class="card p-4 w-full shadow-sm flex flex-col gap-4">
		<SuperDebug data={form}/>

		<div>
			<header class="text-2xl font-bold">Title</header>
			<article>Body</article>
		</div>

		<form class="flex flex-col gap-6" method="POST" use:enhance action="/api/forms/zones?/edit">

			<input
				class="input"
				type="text"
				name="label"
				placeholder="Label"
				id="label"
				class:input-error={$errors.label}
				data-invalid={$errors.label}
				bind:value={$form.label}
				{...$constraints.label}
			/>
			<input
				class="input"
				type="text"
				name="address"
				placeholder="Address"
				id="address"
				class:input-error={$errors.address}
				data-invalid={$errors.address}
				bind:value={$form.address}
				{...$constraints.address}
			/>
            <input
                class="input"
                type="range"
                min="1"
                max="10"
                name="radius"
                placeholder="Radius"
                id="radius"
                class:input-error={$errors.radius}
                data-invalid={$errors.radius}
                bind:value={$form.radius}
                {...$constraints.radius}
            />

			<input type="hidden" name="id" bind:value={$form.id}>
			<input type="hidden" name="x" bind:value={$form.long}>
			<input type="hidden" name="y" bind:value={$form.lat}>


			<div class="flex justify-end">
				<button class="btn variant-filled w-24" type="submit">Edit</button>
			</div>
		</form>


	</div>
{/if}


