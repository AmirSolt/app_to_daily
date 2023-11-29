<script lang="ts">

    import NotifModal from "./NotifModal.svelte";
    import { getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
    import type { Report } from "@prisma/client";

    export let report:Report
    let isNew:boolean=true

    const modalComponent: ModalComponent = { ref: NotifModal, props:{report} };

    const modal: ModalSettings = {
        type: 'component',
        component: modalComponent,
    };
    const modalStore = getModalStore();
    function openModal(){
        modalStore.trigger(modal);
    }
</script>


<button type="button" class="card p-4 text-start {isNew? "variant-outline" : ""}" on:click={openModal}>
    <h1>{report.crimeType}</h1>
    <p>{report.occur_at}</p>
</button>