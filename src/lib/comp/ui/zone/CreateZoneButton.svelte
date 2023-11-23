<script lang="ts">

    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import CreateModal from './modals/CreateModal.svelte';


    const modalComponent: ModalComponent = { ref: CreateModal };

    const modal: ModalSettings = {
        type: 'component',
        component: modalComponent,
    };
    const modalStore = getModalStore();
    function openModal(){
        modalStore.trigger(modal);
    }


</script>



<button type="button" class="btn variant-filled" on:click={openModal}>
	Create Zone
</button>
