<script>
	import Header from '$lib/components/Header.svelte';
	import PatternRect from '$lib/components/1_PatternRect.svelte';	
	import PatternrectStruct from '$lib/components/2_PatternrectStruct.svelte';	
	import PatternPolygon from '$lib/components/4_PatternPolygon.svelte';
	// import MusterEins from '$lib/components/3_MusterEins.svelte';
	// import MusterZwei from '$lib/components/5_ MusterZwei.svelte';
	import PatternCubes from '$lib/components/6_PatternCubes.svelte';
		import TrapezClass from '$lib/components/Trapez.svelte';
	import PatternTrapez from '$lib/components/Pattern-Trapez.svelte';
	// import Row from '$lib/components/Row.svelte';
	// import Segment from '$lib/components/Segment.svelte';

	// Load pattern from localStorage or default to 'MusterEins'
	let selectedPattern = $state(
		typeof window !== 'undefined' 
			? (localStorage.getItem('selectedPattern') || 'MusterEins')
			: 'MusterEins'
	);

	const patterns = [
		{ id: 'PatternRect', name: 'Pattern Rect' },
		{ id: 'PatternrectStruct', name: 'Pattern Rect Struct (Parquet)' },
		// { id: 'MusterEins', name: 'Muster Eins (Rhombus)' },
		{ id: 'PatternPolygon', name: 'Pattern Kacheln' },
		{ id: 'PatternCubes', name: 'Pattern Cubes' },
		// {id: 'MusterZwei', name: 'Muster Zwei'},
		// { id: 'Trapez', name: 'Trapez' },
		{ id: 'PatternTrapez', name: 'Pattern Trapez' },
		// { id: 'Row', name: 'Row' },
		// { id: 'Segment', name: 'Segment' },
	];

	$effect(() => {
		console.log('Selected pattern:', selectedPattern);
		// Save to localStorage whenever it changes
		if (typeof window !== 'undefined') {
			localStorage.setItem('selectedPattern', selectedPattern);
		}
	});
</script>

<div class="app-container">
	<Header />
	
	<div class="pattern-selector">
		<label for="pattern-select">Muster auswählen:</label>
		<select id="pattern-select" bind:value={selectedPattern}>
			{#each patterns as pattern}
				<option value={pattern.id}>{pattern.name}</option>
			{/each}
		</select>
	</div>

	<main class="app-main">
		{#if selectedPattern === 'PatternRect'}
			<PatternRect />
		{:else if selectedPattern === 'PatternrectStruct'}
			<PatternrectStruct />
		<!-- {:else if selectedPattern === 'MusterEins'}
			<MusterEins /> -->
		{:else if selectedPattern === 'PatternPolygon'}
			<PatternPolygon />
		{:else if selectedPattern === 'PatternCubes'}
			<PatternCubes />
		<!-- {:else if selectedPattern === 'MusterZwei'}
			<MusterZwei /> -->
		<!-- {:else if selectedPattern === 'Trapez'}
			<Trapez /> -->
		{:else if selectedPattern === 'PatternTrapez'}
			<PatternTrapez />
		<!-- {:else if selectedPattern === 'Row'}
			<Row />
		{:else if selectedPattern === 'Segment'}
			<Segment /> -->
		{/if}
	</main>
</div>

<style>
	.pattern-selector {
		padding: 20px;
		background: #f0f0f0;
		border-radius: 8px;
		margin: 20px;
		display: flex;
		align-items: center;
		gap: 15px;
		max-width: 800px;
	}

	.pattern-selector label {
		font-size: 16px;
		font-weight: 600;
		color: #333;
	}

	.pattern-selector select {
		padding: 10px 15px;
		font-size: 14px;
		border: 2px solid #ccc;
		border-radius: 4px;
		background: white;
		cursor: pointer;
		min-width: 250px;
		transition: border-color 0.2s;
	}

	.pattern-selector select:hover {
		border-color: #999;
	}

	.pattern-selector select:focus {
		outline: none;
		border-color: #007bff;
	}
</style>
