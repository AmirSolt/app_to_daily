<script lang="ts">
    export let data;
	const {
		userData,
        zoneId
	} = data;

    let zone = userData.zones.find(z=>z.id===zoneId)

</script>


<div class="card">
    <form action="">

        <p>Edit this zone?</p>

        <button type="submit" name="confirm" value="No">
            No
        </button>

        <button type="submit" name="confirm" value="Yes">
            Yes
        </button>
    </form>
</div>