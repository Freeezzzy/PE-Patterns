<script>
	import { BraidPattern } from './BraidPattern.svelte';
	import RangeSlider from '$lib/ui/RangeSlider.svelte';

	// Default-Werte
	const DEFAULTS = {
		rows: 4,
		cols: 4,
		startY: -149,
		segmentWidth: 400,
		segmentHeight: 346,
		baseStartX: -440,
		countPerRow: 3,
		offsetRow1: 0,
		offsetRow2: -50,
		offsetRow3: -100,
		offsetRow4: -150,
		mirrorRow1: false,
		mirrorRow2: false,
		mirrorRow3: false,
		mirrorRow4: false,
		hueRange: [30, 25],
		opacityRange: [100, 76],
		luminanceRange: [85, 31],
		useModulo: false
	};

	// Feste Parameter
	const rows = DEFAULTS.rows;
	const cols = DEFAULTS.cols;
	const startY = DEFAULTS.startY;
	const segmentWidth = DEFAULTS.segmentWidth;
	const segmentHeight = DEFAULTS.segmentHeight;
	const baseStartX = DEFAULTS.baseStartX;
	const countPerRow = DEFAULTS.countPerRow;

	// Änderbare Parameter - Row-Offsets
	const offsetRow1 = DEFAULTS.offsetRow1;
	const offsetRow2 = DEFAULTS.offsetRow2;
	const offsetRow3 = DEFAULTS.offsetRow3;
	const offsetRow4 = DEFAULTS.offsetRow4;

	// Änderbare Parameter - Row-Spiegelung
	const mirrorRow1 = DEFAULTS.mirrorRow1;
	const mirrorRow2 = DEFAULTS.mirrorRow2;
	const mirrorRow3 = DEFAULTS.mirrorRow3;
	const mirrorRow4 = DEFAULTS.mirrorRow4;

	// RangeSlider Parameter
	let hueMin = $state(DEFAULTS.hueRange[0]);
	let hueMax = $state(DEFAULTS.hueRange[1]);
	let satMin = $state(DEFAULTS.opacityRange[0]);
	let satMax = $state(DEFAULTS.opacityRange[1]);
	let lumMin = $state(DEFAULTS.luminanceRange[0]);
	let lumMax = $state(DEFAULTS.luminanceRange[1]);

	// Modulo Toggle
	let useModulo = $state(DEFAULTS.useModulo);

	function resetAll() {
		hueMin = DEFAULTS.hueRange[0];
		hueMax = DEFAULTS.hueRange[1];
		satMin = DEFAULTS.opacityRange[0];
		satMax = DEFAULTS.opacityRange[1];
		lumMin = DEFAULTS.luminanceRange[0];
		lumMax = DEFAULTS.luminanceRange[1];
	}

	// Hilfsfunktionen für Farbkonvertierung
	function hslToHex(h, s, l) {
		h = h / 360;
		s = s / 100;
		l = l / 100;

		let r, g, b;

		if (s === 0) {
			r = g = b = l;
		} else {
			const hue2rgb = (p, q, t) => {
				if (t < 0) t += 1;
				if (t > 1) t -= 1;
				if (t < 1/6) return p + (q - p) * 6 * t;
				if (t < 1/2) return q;
				if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
				return p;
			};

			const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			const p = 2 * l - q;
			r = hue2rgb(p, q, h + 1/3);
			g = hue2rgb(p, q, h);
			b = hue2rgb(p, q, h - 1/3);
		}

		const toHex = x => {
			const hex = Math.round(x * 255).toString(16);
			return hex.length === 1 ? '0' + hex : hex;
		};

		return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
	}

	// Generiere Farben direkt aus den Range-Werten
	let adjustedColors = $derived.by(() => {
		// Farbe 1: Erster Wert von jedem Slider
		const color1 = hslToHex(hueMin, satMin, lumMin);
		// Farbe 2: Zweiter Wert von jedem Slider
		const color2 = hslToHex(hueMax, satMax, lumMax);
		
		// 12 Farben: abwechselnd color1 und color2 (für 6 Trapez-Paare à 2 Trapeze)
		return [color1, color2, color1, color2, color1, color2, color1, color2, color1, color2, color1, color2];
	});

	// colorIndices für Pattern erweitern
	let expandedColors = $derived(adjustedColors);

	let pattern = $derived(
		new BraidPattern(
			expandedColors,
			startY,
			segmentWidth,
			segmentHeight,
			baseStartX,
			countPerRow,
			mirrorRow1,
			mirrorRow2,
			mirrorRow3,
			mirrorRow4,
			offsetRow1,
			offsetRow2,
			offsetRow3,
			offsetRow4,
			rows,
			cols,
			false
		)
	);

	let allElements = $derived(pattern.getAllElements());

	let totalWidth = $derived(segmentWidth * cols);
	let totalHeight = $derived(segmentHeight * rows);

	const viewBoxSize = 1000;
</script>

<div class="svg-container">
	<svg viewBox="0 0 {viewBoxSize} {viewBoxSize}" class="svg-canvas">
		<rect x="0" y="0" width="{viewBoxSize}" height="{viewBoxSize}" fill="#2d2d2dff" stroke="none" />
		{#each allElements as element}
			<polygon
				points={element.getPoints()}
				fill={element.fill}
				stroke="black"
				stroke-width="1"
				transform={element.getTransform()}
			/>
		{/each}
	</svg>
</div>

<div class="sidebar-right">
	<button onclick={resetAll}>Reset All</button>

	<hr/>

	<p class="description">Stelle die Farben mit den Slidern ein.</p>
	<RangeSlider 
		min={0} 
		max={360} 
		bind:value1={hueMin}
		bind:value2={hueMax}
		label="Hue (Farbe 1 → Farbe 2)" 
	/>
	<RangeSlider 
		min={0} 
		max={100} 
		bind:value1={satMin}
		bind:value2={satMax}
		label="Saturation (Farbe 1 → Farbe 2)" 
	/>
	<RangeSlider 
		min={0} 
		max={100} 
		bind:value1={lumMin}
		bind:value2={lumMax}
		label="Luminance (Farbe 1 → Farbe 2)" 
	/>
</div>

<style>
	.description {
		color: #aaa;
		font-size: 0.85rem;
		line-height: 1.4;
		margin: 0;
		margin-bottom: 1rem;
	}
</style>
