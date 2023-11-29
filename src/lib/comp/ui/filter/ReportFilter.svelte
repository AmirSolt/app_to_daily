<script lang="ts">
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import FilterModal from './FilterModal.svelte';

    const modalComponent: ModalComponent = { ref: FilterModal};

    const modal: ModalSettings = {
        type: 'component',
        component: modalComponent,
    };
    const modalStore = getModalStore();
    function openModal(){
        modalStore.trigger(modal);
    }


</script>

<div>
    <h1>
        Filter
    </h1>

    <button type="button" class="btn variant-filled" on:click={openModal}>
        Filter
    </button>

</div>
