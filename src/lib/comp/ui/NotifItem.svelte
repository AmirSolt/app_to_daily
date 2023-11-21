<script lang="ts">
    import { AccordionItem } from '@skeletonlabs/skeleton';

    export let report:Report
    let isNew:boolean=true

</script>


<AccordionItem class="card {isNew? "variant-outline" : ""}">
    <svelte:fragment slot="lead">(icon)</svelte:fragment>
    <svelte:fragment slot="summary">
        <p>
            Report {report.crimeType} 
            {#if isNew}
                <span class="badge variant-filled-primary">New</span>
            {/if}
        </p>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <div>
            <p>
                map + info
            </p>
        </div>
    </svelte:fragment>
</AccordionItem>