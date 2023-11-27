<script lang="ts">

    import NotifModal from "./NotifModal.svelte";
    import { getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import type { Database } from "$lib/utils/database.types";
    
    export let report:Database["public"]["Tables"]["reports"]["Row"]
    let isNew:boolean=true

    console.log(report)

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
    <h1>{report.crime_type}</h1>
    <p>{report.occur_at}</p>
</button>