<script lang="ts">
	import { goto } from '$app/navigation';
    import { Avatar } from '@skeletonlabs/skeleton';
    export let advert:Advert


    async function advertClick(){
        console.log("Click Submitted")
        goto(advert.url)
    }

</script>


<div class="card !bg-transparent variant-outline">

	<section>
            <div class="flex p-2 gap-2">

                <div class="flex flex-col justify-between items-start">
                    <div class="w-20 h-20">
                        <Avatar src={advert.iconImg} rounded="rounded-2xl" width="w-20" />
                    </div> 
                    <p class="text-sm p-2">Sponsored</p>
                </div>
                
                <div class="flex flex-col p-2 gap-2">
                    <h1>{advert.title}</h1>
                    <p>{advert.body}</p>
             
                    <button class="btn variant-filled" type="button" on:click={advertClick}>
                        {advert.actionButton}
                    </button>
                </div>

            </div>
    </section>
</div>
