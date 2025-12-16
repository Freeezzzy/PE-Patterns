<script>
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

<div id="controls">
	<div id="size">
		<label for="length-input">Größe: {length}</label>
		<div class="slider-container">
			<input id="length-input" type="range" min="0" max="100" bind:value={length} />
			<button onclick={resetLength}>Reset</button>
		</div>
	</div>

	<div id="control">
		<label for="offset-input">Offset: {offset}</label>
		<div class="slider-container">
			<input id="offset-input" type="range" min="0" max="100" bind:value={offset} />
			<button onclick={resetOffset}>Reset</button>
		</div>
	</div>
</div>


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

<style>
	#controls {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		margin-bottom: 20px;
	}

	#control, #size {
		display: flex;
		flex-direction: column;
		width: 200px;
		align-items: center;
		justify-content: center;
	}

	.slider-container {
		display: flex;
		gap: 10px;
		width: 100%;
		align-items: center;
	}

	label {
		text-align: center;
	}

	input {
		flex: 1;
	}

	button {
		padding: 4px 8px;
		cursor: pointer;
	}
</style>
