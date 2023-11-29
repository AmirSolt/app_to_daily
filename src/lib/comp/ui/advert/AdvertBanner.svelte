<script lang="ts">
	import { goto } from '$app/navigation';
    import { Avatar } from '@skeletonlabs/skeleton';
	import { adCounter } from './advertCounter';
    import { page } from '$app/stores';
    import { AdComponent } from '@prisma/client';
    const advertComponentId = AdComponent.BANNER

    let user = $page.data.user
    let advert = $page.data.adContents[0]

    async function advertClick(){
        console.log("Click Submitted")
        if(advert.url != null){
            await adCounter(user.id, advertComponentId)
            goto(advert.url)
        }
    }

</script>


<div class="card !bg-transparent variant-outline">

	<section>
            <div class="flex p-2 gap-2">

                <div class="flex flex-col justify-between items-start">
                    {#if advert.imgSrc != null}
                        <div class="w-20 h-20">
                            <Avatar src={advert.imgSrc} rounded="rounded-2xl" width="w-20" />
                        </div> 
                    {/if}
                    <p class="text-sm p-2">Sponsored</p>
                </div>
                
                <div class="flex flex-col p-2 gap-2">
                    {#if advert.title != null}
                        <h1>{advert.title}</h1>
                    {/if}
                    {#if advert.body != null}
                        <p>{advert.body}</p>
                    {/if}
                    {#if advert.buttonText != null}
                        <button class="btn variant-filled" type="button" on:click={advertClick}>
                            {advert.buttonText}
                        </button>
                    {/if}
                </div>

            </div>
    </section>
</div>
