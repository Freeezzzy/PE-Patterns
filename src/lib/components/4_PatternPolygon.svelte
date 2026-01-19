<script>
	import Slider from '$lib/ui/Slider.svelte';
	
	const squareCount = 20;
	const squareSize = 1000 / squareCount;

	let offset = $state(0);
	let length = $state(50);

	function resetLength() {
		length = 50;
	}

	function resetOffset() {
		offset = 0;
	}
</script>

<div class="svg-container">
	<svg viewBox="0 0 1000 1000" class="svg-canvas" shape-rendering="crispEdges">
		{#each Array(squareCount) as _, yi}
			{#each Array(squareCount) as _, xi}
				<polygon
					transform="translate({xi * (length + offset)}, {yi * (length + offset)})"
					points="0 0 0 {length} {length} 0"
					fill="teal"
				/>

				<polygon
					transform="translate({xi * (length + offset)}, {yi * (length + offset)})"
					points="0 {length} {length} 0 {length} {length}"
					fill="beige"
				/>
			{/each}
		{/each}

		<!-- <polygon points=" 0 100, 100, 0, 100 100" fill="blue" /> -->
	</svg>
</div>

<div class="sidebar-right">
	<Slider min={0} max={100} bind:value={length} label="Größe" />
	<button onclick={resetLength}>Reset Größe</button>
	
	<hr/>
	
	<Slider min={0} max={100} bind:value={offset} label="Offset" />
	<button onclick={resetOffset}>Reset Offset</button>
</div>
