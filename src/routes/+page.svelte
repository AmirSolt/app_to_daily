<script lang="ts">

	export let data;
	const {
		userData,
		ads,
	} = data;

</script>

<div>
	<h1>
		Ads recieved {ads.length}
	</h1>
</div>

<br>
<hr>
<br>

<div>
	<h1>
		Map
	</h1>

	<p>
		Zone Reports {userData.zoneReports.length}
	</p>

	<p>
		Scanned Reports {0}, No scans done: 1.Ask GPS 2.First Zone 3.Default Some Point (No Scan)
	</p>

	<p>
		Total Reports {userData.zoneReports.length + 0}
	</p>
</div>

<br>
<hr>
<br>

<div>
	<h1>
		Add Zone Link
	</h1>
	<p>
		Number of zones {userData.zones.length}
	</p>
</div>


