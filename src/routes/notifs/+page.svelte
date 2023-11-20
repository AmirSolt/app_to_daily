<script lang="ts">

	export let data;
	const {
		userData,
		ads,
	} = data;

</script>
<div>
	<h1>
		Notifications
	</h1>
	<p>
		Number of notifications in past week: {userData.zoneReports.length}
	</p>
</div>


<br>
<hr>
<br>

<div>
	<p>
		for zone reports + dropdown + map
	</p>
</div>