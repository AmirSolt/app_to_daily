<script lang="ts">
    import ShareModal from './ShareModal.svelte';
    import { getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';

    const modalComponent: ModalComponent = { ref: ShareModal };

    const modal: ModalSettings = {
        type: 'component',
        component: modalComponent,
    };
    const modalStore = getModalStore();
    function openModal(){
        modalStore.trigger(modal);
    }
</script>


<button type="button" class="btn variant-filled-primary" on:click={openModal}>
    Share
</button>