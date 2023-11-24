<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';    
	import { initializeStores } from '@skeletonlabs/skeleton';
	import {Modal} from '@skeletonlabs/skeleton';
	import ShareButton from '$lib/comp/ui/share/ShareButton.svelte';



	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });


    initializeStores();

</script>


<Modal />

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/"
				>
					Home
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/notifs"
				>
					Notifs
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/zones"
				>
					Zones
				</a>
				<ShareButton />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	
	<slot />
</AppShell>
