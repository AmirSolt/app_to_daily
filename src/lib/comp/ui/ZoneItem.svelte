<script lang="ts">
    export let zone:Zone
</script>


<div>

    

    
</div>

<div class="card">
	<header class="card-header flex justify-between">
        <a href="/zones/{zone.id}/edit">
            <h1>{zone.label}</h1>
        </a>
        <a href="/zones/{zone.id}/remove" class="btn-icon variant-filled-error w-8">
            x
        </a>
    </header>
	<section >
        <a href="/zones/{zone.id}/edit" >
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
        </a>
    </section>
</div>
