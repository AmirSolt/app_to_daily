<script lang="ts">

    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import RemoveModal from './modals/RemoveModal.svelte';
	import type { Zone } from '@prisma/client';

    export let zone:Zone

    const modalComponent: ModalComponent = { ref: RemoveModal, props:{zone} };

    const modal: ModalSettings = {
        type: 'component',
        component: modalComponent,
    };
    const modalStore = getModalStore();
    function openModal(event:any){
        event.stopPropagation();
        modalStore.trigger(modal);
    }


</script>



<button type="button" class="btn btn-icon variant-filled-error" on:click={openModal}>
	X
</button>
