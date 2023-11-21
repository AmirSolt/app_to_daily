<script lang="ts">
    import { Avatar } from '@skeletonlabs/skeleton';
    export let advert:Advert
</script>


<div class="card !bg-transparent variant-outline">

	<section>
        <div class="flex justify-between items-end">
            <!--  -->
            <a href="{advert.link}" target="_blank" rel="noopener" >
                <div class="flex p-2 gap-2">
    
                    <Avatar src={advert.iconImg} rounded="rounded-2xl" width="w-20" />
                    <div class="flex flex-col p-2 gap-2">
                        <h1>{advert.title}</h1>
                        <p>{advert.body}</p>
                    </div>
                </div>
            </a>
            <!--  -->
            <p class="text-sm p-2">Sponsored</p>
        </div>
    </section>
</div>
