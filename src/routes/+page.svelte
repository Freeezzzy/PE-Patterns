<script>
	import Header from '$lib/components/Header.svelte';
	import { slide } from 'svelte/transition';
	import PatternRect from '$lib/components/1_PatternRect.svelte';	
	import PatternrectStruct from '$lib/components/2_PatternrectStruct.svelte';	
	import PatternPolygon from '$lib/components/4_PatternPolygon.svelte';
	import PatternCubes from '$lib/components/6_PatternCubes.svelte';
	import PatternTrapezA from '$lib/components/Pattern-Trapez-A.svelte';
	import PatternTrapezB from '$lib/components/Pattern-Trapez-B.svelte';
	import PatternTrapezC from '$lib/components/Pattern-Trapez-C.svelte';
	import PatternTrapezD from '$lib/components/Pattern-Trapez-D.svelte';
	import PatternTrapezGrid from '$lib/components/Pattern-Trapez-Grid.svelte';
	import PatternStripeRow from '$lib/components/Pattern-StripeRow.svelte';
	import PatternZiczacRow from '$lib/components/Pattern-ZiczacRow.svelte';
	import PatternBraid from '$lib/components/Pattern-Braid.svelte';

	let patterns = [
		{
			name: 'Stripe-Row Pattern',
			component: PatternStripeRow,
			description: 'StripeRow-Muster: 16 Segmente (4x4) mit je 4 Reihen, alle Features.'
		},
		{
			name: 'Ziczac-Row Pattern',
			component: PatternZiczacRow,
			description: 'Trapez-Parallelogramm-Trapez Muster mit 4 Reihen.'
		},
		{
			name: 'Braid Pattern',
			component: PatternBraid,
			description: 'Geflochtenes Muster mit wechselnder Spiegelung.'
		},
		{
			name: 'Pattern Trapez A - Nur Farben',
			component: PatternTrapezA,
			description: 'Trapez-Muster mit Farbsteuerung.'
		},
		{
			name: 'Pattern Trapez B - Positionen & Abstände',
			component: PatternTrapezB,
			description: 'Trapez-Muster mit Position und Abstand-Steuerung.'
		},
		{
			name: 'Pattern Trapez C - Reihen-Spiegelung',
			component: PatternTrapezC,
			description: 'Trapez-Muster mit Reihen-Spiegelung.'
		},
		{
			name: 'Pattern Trapez D - Master Pattern',
			component: PatternTrapezD,
			description: 'Vollständiges Trapez-Muster mit allen Funktionen.'
		}
		

	];

	let selectedPattern = $state(0);
	let SelectedPattern = $derived(patterns[selectedPattern].component);
</script>

<div class="app-container">
	<Header />
	<main class="app-main">
		<div class="sidebar-left">
			{#each patterns as pattern, index}
				<button
					class="sidebar-left-item"
					class:selected={selectedPattern === index}
					onclick={() => (selectedPattern = index)}
					>{pattern.name}
					{#if selectedPattern === index}
						<div transition:slide class="sidebar-left-description">{pattern.description}</div>
					{/if}
				</button>
			{/each}
		</div>

		<SelectedPattern />
	</main>
</div>
