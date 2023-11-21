<script lang="ts">
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import FilterModal from './modals/FilterModal.svelte';
    import type { CrimeTypes } from "$lib/utils/globals";
    export let filters:CrimeTypes[]

    const modalComponent: ModalComponent = { ref: FilterModal };

    const modal: ModalSettings = {
        type: 'component',
        component: modalComponent,
        meta: {filters:filters}
    };
    const modalStore = getModalStore();
    function openFilterModal(){
        modalStore.trigger(modal);
    }


</script>

<div>
    <h1>
        Filter
    </h1>

    <button type="button" class="btn variant-filled" on:click={openFilterModal}>
        Filter
    </button>

</div>
