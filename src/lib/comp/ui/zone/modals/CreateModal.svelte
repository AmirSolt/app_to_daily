<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { toastError } from '$lib/utils/toastHelper.js';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { createZoneSchema } from '$lib/utils/schema';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import type { SvelteComponent } from 'svelte';
	import { Region } from '@prisma/client';
	export let parent:SvelteComponent
	let toastStore = getToastStore();

	// Modal
	const { form, errors, constraints, enhance } = superForm($page.data.forms.zone.createForm, {
		validators: createZoneSchema,
		onError: ({result}) => {
			console.log(">>> Error, Zone create:", result.error.message)
			toastError(result.error.message, toastStore);
		},
		onResult(event) {
			console.log(">>> $errors",$errors.message)
			invalidate("data:profile")
			parent.onClose()
		},
		taintedMessage: null
	});
	
	// Modal
	const modalStore = getModalStore();

	function onGetAddress(){
		$form.address="adasd"
		$form.region=Region.TORONTO
		$form.long = 0
		$form.lat = 0
	}
	$form.radius = 5
	onGetAddress()


	
</script>


<!-- @component -->
{#if $modalStore[0]}


	<div class="card p-4 w-full shadow-sm flex flex-col gap-4">
		<SuperDebug data={form}/>

		<div>
			<header class="text-2xl font-bold">Title</header>
			<article>Body</article>
		</div>

		<form class="flex flex-col gap-6" method="POST" use:enhance action="/api/forms/zones?/create" >

			
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

			<input type="hidden" name="long" bind:value={$form.long}>
			<input type="hidden" name="lat" bind:value={$form.lat}>


			<div class="flex justify-end">
				<button class="btn variant-filled w-24" type="submit">Create</button>
			</div>
		</form>


	</div>
{/if}


