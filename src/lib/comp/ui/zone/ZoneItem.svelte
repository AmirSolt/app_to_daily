<script lang="ts">

    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import EditModal from './modals/EditModal.svelte';
    import RemoveZoneButton from './RemoveZoneButton.svelte';

    export let zone:Zone

    const modalComponent: ModalComponent = { ref: EditModal, props:{zone} };

    const modal: ModalSettings = {
        type: 'component',
        component: modalComponent,
    };
    const modalStore = getModalStore();
    function openModal(){
        modalStore.trigger(modal);
    }


</script>



<button type="button" class="card" on:click={openModal}>
	<header class="card-header flex justify-between">
        <div>
            <h1>{zone.label}</h1>
        </div>
        <RemoveZoneButton {zone} />
    </header>
	<section >
        <div class="p-4">
            <div>
                id: {zone.id}
            </div>
            <div>
                point: {zone.point.x}, {zone.point.y}
            </div>
            <div>
                radius: {zone.radius}
            </div>
            <div>
                address: {zone.address}
            </div>
        </div>
    </section>
</button>
