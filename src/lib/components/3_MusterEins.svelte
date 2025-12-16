<script>
	// Steuerungsparameter mit $state für Reaktivität
	let l = $state(50);
	let h = $derived(Math.sin(Math.PI / 3) * l);

	// Segment-Steuerung
	let segmentWidth = $derived(450);
	let segmentHeight = $derived(8 * h);

	// Segment-spezifische Einstellungen
	let segment1XPosition = $state(0);
	let segment1Offset = $state(0);
	let segment1Mirrored = $state(false);

	let segment2XPosition = $state(0);
	let segment2Offset = $state(0);
	let segment2Mirrored = $state(false);

	let segment3XPosition = $state(0);
	let segment3Offset = $state(0);
	let segment3Mirrored = $state(false);

	let segment4XPosition = $state(0);
	let segment4Offset = $state(0);
	let segment4Mirrored = $state(false);

	// Reihen-spezifische Einstellungen
	let row1XPosition = $state(0);
	let row1Offset = $state(0);
	let row1Mirrored = $state(false);

	let row2XPosition = $state(0);
	let row2Offset = $state(0);
	let row2Mirrored = $state(false);

	let row3XPosition = $state(0);
	let row3Offset = $state(0);
	let row3Mirrored = $state(false);

	let row4XPosition = $state(0);
	let row4Offset = $state(0);
	let row4Mirrored = $state(false);

	// Filter Toggle
	let filterVisible = $state(false);

	// Filter für Segmente
	let segment1Visible = $state(true);
	let segment2Visible = $state(true);
	let segment3Visible = $state(true);
	let segment4Visible = $state(true);

	// Filter für Reihen
	let row1Visible = $state(true);
	let row2Visible = $state(true);
	let row3Visible = $state(true);
	let row4Visible = $state(true);

	// Controls Toggle
	let controlsVisible = $state(true);

	// Segment/Reihen Toggle
	let segmentsVisible = $state(false);
	let rowsVisible = $state(false);

	// Reset-Funktionen
	function resetAll() {
		l = 50;
		resetAllSegments();
		resetAllRows();
		segment1Visible = true;
		segment2Visible = true;
		segment3Visible = true;
		segment4Visible = true;
		row1Visible = true;
		row2Visible = true;
		row3Visible = true;
		row4Visible = true;
	}

	function resetAllSegments() {
		resetSegment1();
		resetSegment2();
		resetSegment3();
		resetSegment4();
	}

	function resetAllRows() {
		resetRow1();
		resetRow2();
		resetRow3();
		resetRow4();
	}

	function resetSegment1() {
		segment1XPosition = 0;
		segment1Offset = 0;
		segment1Mirrored = false;
	}

	function resetSegment2() {
		segment2XPosition = 0;
		segment2Offset = 0;
		segment2Mirrored = false;
	}

	function resetSegment3() {
		segment3XPosition = 0;
		segment3Offset = 0;
		segment3Mirrored = false;
	}

	function resetSegment4() {
		segment4XPosition = 0;
		segment4Offset = 0;
		segment4Mirrored = false;
	}

	function resetRow1() {
		row1XPosition = 0;
		row1Offset = 0;
		row1Mirrored = false;
	}

	function resetRow2() {
		row2XPosition = 0;
		row2Offset = 0;
		row2Mirrored = false;
	}

	function resetRow3() {
		row3XPosition = 0;
		row3Offset = 0;
		row3Mirrored = false;
	}

	function resetRow4() {
		row4XPosition = 0;
		row4Offset = 0;
		row4Mirrored = false;
	}

	// Hilfsfunktionen für Position und Offset
	function getXPosition(segmentId, rowId) {
		let segmentPos = 0;
		let rowPos = 0;

		if (segmentId === 'segment1') segmentPos = segment1XPosition;
		if (segmentId === 'segment2') segmentPos = segment2XPosition;
		if (segmentId === 'segment3') segmentPos = segment3XPosition;
		if (segmentId === 'segment4') segmentPos = segment4XPosition;

		if (rowId === 'row1') rowPos = row1XPosition;
		if (rowId === 'row2') rowPos = row2XPosition;
		if (rowId === 'row3') rowPos = row3XPosition;
		if (rowId === 'row4') rowPos = row4XPosition;

		return segmentPos + rowPos;
	}

	function getOffset(segmentId, rowId) {
		let segmentOff = 0;
		let rowOff = 0;

		if (segmentId === 'segment1') segmentOff = segment1Offset;
		if (segmentId === 'segment2') segmentOff = segment2Offset;
		if (segmentId === 'segment3') segmentOff = segment3Offset;
		if (segmentId === 'segment4') segmentOff = segment4Offset;

		if (rowId === 'row1') rowOff = row1Offset;
		if (rowId === 'row2') rowOff = row2Offset;
		if (rowId === 'row3') rowOff = row3Offset;
		if (rowId === 'row4') rowOff = row4Offset;

		return segmentOff + rowOff;
	}

	function isMirrored(segmentId, rowId) {
		let segmentMirror = false;
		let rowMirror = false;

		if (segmentId === 'segment1') segmentMirror = segment1Mirrored;
		if (segmentId === 'segment2') segmentMirror = segment2Mirrored;
		if (segmentId === 'segment3') segmentMirror = segment3Mirrored;
		if (segmentId === 'segment4') segmentMirror = segment4Mirrored;

		if (rowId === 'row1') rowMirror = row1Mirrored;
		if (rowId === 'row2') rowMirror = row2Mirrored;
		if (rowId === 'row3') rowMirror = row3Mirrored;
		if (rowId === 'row4') rowMirror = row4Mirrored;

		return segmentMirror || rowMirror;
	}

	function generateRow1(offsetX = 0, offsetY = 0, additionalRotation = 0) {
  const segmentId =
    offsetY > 0 ? (offsetX > 0 ? 'segment4' : 'segment2') : offsetX > 0 ? 'segment3' : 'segment1';
  const rowId = 'row1';

  // Filter prüfen
  if (!row1Visible) return [];
  if (segmentId === 'segment1' && !segment1Visible) return [];
  if (segmentId === 'segment2' && !segment2Visible) return [];
  if (segmentId === 'segment3' && !segment3Visible) return [];
  if (segmentId === 'segment4' && !segment4Visible) return [];

  const posOffset = getXPosition(segmentId, rowId);
  const offset = getOffset(segmentId, rowId);
  const mirrored = isMirrored(segmentId, rowId);

  // ursprüngliche Reihe 1 als Rauten
  const basePositions = [
    { x: 100, y: 100,       rotation: 0,   shape: 'rhombus' },
    { x: 125, y: 100 - h,   rotation: 0,   shape: 'rhombus' },
    { x: 175, y: 100,       rotation: 180, shape: 'rhombus' },
    { x: 200, y: 100 - h,   rotation: 180, shape: 'rhombus' },
    { x: 250, y: 100,       rotation: 0,   shape: 'rhombus' },
    { x: 275, y: 100 - h,   rotation: 0,   shape: 'rhombus' },
    { x: 350, y: 100,       rotation: 0,   shape: 'rhombus' },
    { x: 375, y: 100 - h,   rotation: 0,   shape: 'rhombus' },
    { x: 475, y: 100,       rotation: 180, shape: 'rhombus' },
    { x: 500, y: 100 - h,   rotation: 180, shape: 'rhombus' }
  ];

  // zwei Dreiecke in dieser Reihe
  const trianglePositions = [
    { x: 250, y: 100 - h, rotation: 0,   shape: 'triangle-top' },
    { x: 225, y: 100,     rotation: 180, shape: 'triangle-bottom' }
  ];

  const allPositions = [...basePositions, ...trianglePositions];

  const centerX = 300; // Spiegelachse für Row1

  return allPositions.map((pos, i) => {
    const xBase = mirrored ? centerX - (pos.x - centerX) : pos.x;
    return {
      x: xBase + offsetX + posOffset,
      y: pos.y + offsetY + offset,
      rotation: pos.rotation + additionalRotation,
      shape: pos.shape,
      id: `r1-${i}`
    };
  });
}





	function generateRow2(offsetX = 0, offsetY = 0, additionalRotation = 0) {
		const segmentId =
			offsetY > 0 ? (offsetX > 0 ? 'segment4' : 'segment2') : offsetX > 0 ? 'segment3' : 'segment1';
		const rowId = 'row2';

		// Filter prüfen
		if (!row2Visible) return [];
		if (segmentId === 'segment1' && !segment1Visible) return [];
		if (segmentId === 'segment2' && !segment2Visible) return [];
		if (segmentId === 'segment3' && !segment3Visible) return [];
		if (segmentId === 'segment4' && !segment4Visible) return [];

		const posOffset = getXPosition(segmentId, rowId);
		const offset = getOffset(segmentId, rowId);
		const mirrored = isMirrored(segmentId, rowId);
		const baseY = 100 + 2 * h;

		const basePositions = [
			{ x: 450, y: baseY, rotation: 0 },
			{ x: 425, y: baseY - h, rotation: 0 },
			{ x: 375, y: baseY, rotation: 180 },
			{ x: 350, y: baseY - h, rotation: 180 },
			{ x: 300, y: baseY, rotation: 0 },
			{ x: 275, y: baseY - h, rotation: 0 },
			{ x: 200, y: baseY, rotation: 0 },
			{ x: 175, y: baseY - h, rotation: 0 },
			{ x: 75, y: baseY, rotation: 180 },
			{ x: 50, y: baseY - h, rotation: 180 }
		];

		if (mirrored) {
			const centerX = 250;
			return basePositions.map((pos, i) => ({
				x: centerX - (pos.x - centerX) + offsetX + posOffset,
				y: pos.y + offsetY + offset,
				rotation: pos.rotation + additionalRotation,
				id: `r2-${i}`
			}));
		}

		return basePositions.map((pos, i) => ({
			x: pos.x + offsetX + posOffset,
			y: pos.y + offsetY + offset,
			rotation: pos.rotation + additionalRotation,
			id: `r2-${i}`
		}));
	}

	function generateRow3(offsetX = 0, offsetY = 0, additionalRotation = 0) {
		const segmentId =
			offsetY > 0 ? (offsetX > 0 ? 'segment4' : 'segment2') : offsetX > 0 ? 'segment3' : 'segment1';
		const rowId = 'row3';

		// Filter prüfen
		if (!row3Visible) return [];
		if (segmentId === 'segment1' && !segment1Visible) return [];
		if (segmentId === 'segment2' && !segment2Visible) return [];
		if (segmentId === 'segment3' && !segment3Visible) return [];
		if (segmentId === 'segment4' && !segment4Visible) return [];

		const posOffset = getXPosition(segmentId, rowId);
		const offset = getOffset(segmentId, rowId);
		const mirrored = isMirrored(segmentId, rowId);
		const baseY = 100 + 4 * h;

		const basePositions = [
			{ x: 500, y: baseY, rotation: 0 },
			{ x: 475, y: baseY - h, rotation: 0 },
			{ x: 425, y: baseY, rotation: 180 },
			{ x: 400, y: baseY - h, rotation: 180 },
			{ x: 350, y: baseY, rotation: 0 },
			{ x: 325, y: baseY - h, rotation: 0 },
			{ x: 250, y: baseY, rotation: 0 },
			{ x: 225, y: baseY - h, rotation: 0 },
			{ x: 125, y: baseY, rotation: 180 },
			{ x: 100, y: baseY - h, rotation: 180 }
		];

		if (mirrored) {
			const centerX = 300;
			return basePositions.map((pos, i) => ({
				x: centerX - (pos.x - centerX) + offsetX + posOffset,
				y: pos.y + offsetY + offset,
				rotation: pos.rotation + additionalRotation,
				id: `r3-${i}`
			}));
		}

		return basePositions.map((pos, i) => ({
			x: pos.x + offsetX + posOffset,
			y: pos.y + offsetY + offset,
			rotation: pos.rotation + additionalRotation,
			id: `r3-${i}`
		}));
	}

	function generateRow4(offsetX = 0, offsetY = 0, additionalRotation = 0) {
		const segmentId =
			offsetY > 0 ? (offsetX > 0 ? 'segment4' : 'segment2') : offsetX > 0 ? 'segment3' : 'segment1';
		const rowId = 'row4';

		// Filter prüfen
		if (!row4Visible) return [];
		if (segmentId === 'segment1' && !segment1Visible) return [];
		if (segmentId === 'segment2' && !segment2Visible) return [];
		if (segmentId === 'segment3' && !segment3Visible) return [];
		if (segmentId === 'segment4' && !segment4Visible) return [];

		const posOffset = getXPosition(segmentId, rowId);
		const offset = getOffset(segmentId, rowId);
		const mirrored = isMirrored(segmentId, rowId);
		const baseY = 100 + 6 * h;

		const basePositions = [
			{ x: 100, y: baseY, rotation: 0 },
			{ x: 125, y: baseY - h, rotation: 0 },
			{ x: 175, y: baseY, rotation: 180 },
			{ x: 200, y: baseY - h, rotation: 180 },
			{ x: 250, y: baseY, rotation: 0 },
			{ x: 275, y: baseY - h, rotation: 0 },
			{ x: 350, y: baseY, rotation: 0 },
			{ x: 375, y: baseY - h, rotation: 0 },
			{ x: 475, y: baseY, rotation: 180 },
			{ x: 500, y: baseY - h, rotation: 180 }
		];

		if (mirrored) {
			const centerX = 300;
			return basePositions.map((pos, i) => ({
				x: centerX - (pos.x - centerX) + offsetX + posOffset,
				y: pos.y + offsetY + offset,
				rotation: pos.rotation + additionalRotation,
				id: `r4-${i}`
			}));
		}

		return basePositions.map((pos, i) => ({
			x: pos.x + offsetX + posOffset,
			y: pos.y + offsetY + offset,
			rotation: pos.rotation + additionalRotation,
			id: `r4-${i}`
		}));
	}

	function generateSegment(offsetX = 0, offsetY = 0) {
		return [
			...generateRow1(offsetX, offsetY, 0),
			...generateRow2(offsetX, offsetY, 0),
			...generateRow3(offsetX, offsetY, 0),
			...generateRow4(offsetX, offsetY, 0)
		];
	}

	// Funktion zum Generieren aller Segmente
	function generateAllSegments() {
		const segments = [];

		segments.push(...generateSegment(0, 0));
		segments.push(...generateSegment(0, segmentHeight));
		segments.push(...generateSegment(segmentWidth, 0));
		segments.push(...generateSegment(segmentWidth, segmentHeight));

		return segments;
	}

	// Reaktive Berechnung aller Segmente
	let allSegments = $derived(generateAllSegments());
</script>

<!-- Steuerungspanel -->
<div class="controls-wrapper">
	<div class="controls-header">
		<h2>Steuerung</h2>
		<button class="toggle-btn" onclick={() => (controlsVisible = !controlsVisible)}>
			{controlsVisible ? '▼ Einklappen' : '▶ Ausklappen'}
		</button>
	</div>

	{#if controlsVisible}
		<div class="controls">
			<div class="header">
				<h3>Globale Steuerung</h3>
				<button class="reset-btn" onclick={resetAll}>Alles Zurücksetzen</button>
			</div>

			<div class="control-group">
				<label>Größe (l): {l}</label>
				<input type="range" min="20" max="80" bind:value={l} />
			</div>

			<div class="section-toggle">
				<h3>Segmente</h3>
				<button class="toggle-btn-small" onclick={() => (segmentsVisible = !segmentsVisible)}>
					{segmentsVisible ? '▼' : '▶'}
				</button>
			</div>

			{#if segmentsVisible}
				<!-- Segment 1 -->
				<div class="segment-control">
					<div class="segment-header">
						<h4>Segment 1</h4>
						<button class="reset-btn-small" onclick={resetSegment1}>Reset</button>
					</div>
					<div class="control-group">
						<label>X-Position: {segment1XPosition}</label>
						<input type="range" min="-200" max="200" bind:value={segment1XPosition} />
					</div>
					<div class="control-group">
						<label>Offset: {segment1Offset}</label>
						<input type="range" min="-200" max="200" bind:value={segment1Offset} />
					</div>
					<div class="control-group">
						<label><input type="checkbox" bind:checked={segment1Mirrored} /> Spiegeln</label>
					</div>
				</div>

				<!-- Segment 2 -->
				<div class="segment-control">
					<div class="segment-header">
						<h4>Segment 2</h4>
						<button class="reset-btn-small" onclick={resetSegment2}>Reset</button>
					</div>
					<div class="control-group">
						<label>X-Position: {segment2XPosition}</label>
						<input type="range" min="-200" max="200" bind:value={segment2XPosition} />
					</div>
					<div class="control-group">
						<label>Offset: {segment2Offset}</label>
						<input type="range" min="-200" max="200" bind:value={segment2Offset} />
					</div>
					<div class="control-group">
						<label><input type="checkbox" bind:checked={segment2Mirrored} /> Spiegeln</label>
					</div>
				</div>

				<!-- Segment 3 -->
				<div class="segment-control">
					<div class="segment-header">
						<h4>Segment 3</h4>
						<button class="reset-btn-small" onclick={resetSegment3}>Reset</button>
					</div>
					<div class="control-group">
						<label>X-Position: {segment3XPosition}</label>
						<input type="range" min="-200" max="200" bind:value={segment3XPosition} />
					</div>
					<div class="control-group">
						<label>Offset: {segment3Offset}</label>
						<input type="range" min="-200" max="200" bind:value={segment3Offset} />
					</div>
					<div class="control-group">
						<label><input type="checkbox" bind:checked={segment3Mirrored} /> Spiegeln</label>
					</div>
				</div>

				<!-- Segment 4 -->
				<div class="segment-control">
					<div class="segment-header">
						<h4>Segment 4</h4>
						<button class="reset-btn-small" onclick={resetSegment4}>Reset</button>
					</div>
					<div class="control-group">
						<label>X-Position: {segment4XPosition}</label>
						<input type="range" min="-200" max="200" bind:value={segment4XPosition} />
					</div>
					<div class="control-group">
						<label>Offset: {segment4Offset}</label>
						<input type="range" min="-200" max="200" bind:value={segment4Offset} />
					</div>
					<div class="control-group">
						<label><input type="checkbox" bind:checked={segment4Mirrored} /> Spiegeln</label>
					</div>
				</div>
			{/if}

			<div class="section-toggle">
				<h3>Reihen</h3>
				<button class="toggle-btn-small" onclick={() => (rowsVisible = !rowsVisible)}>
					{rowsVisible ? '▼' : '▶'}
				</button>
			</div>

			{#if rowsVisible}
				<!-- Reihe 1 -->
				<div class="segment-control">
					<div class="segment-header">
						<h4>Reihe 1</h4>
						<button class="reset-btn-small" onclick={resetRow1}>Reset</button>
					</div>
					<div class="control-group">
						<label>X-Position: {row1XPosition}</label>
						<input type="range" min="-200" max="200" bind:value={row1XPosition} />
					</div>
					<div class="control-group">
						<label>Offset: {row1Offset}</label>
						<input type="range" min="-200" max="200" bind:value={row1Offset} />
					</div>
					<div class="control-group">
						<label><input type="checkbox" bind:checked={row1Mirrored} /> Spiegeln</label>
					</div>
				</div>

				<!-- Reihe 2 -->
				<div class="segment-control">
					<div class="segment-header">
						<h4>Reihe 2</h4>
						<button class="reset-btn-small" onclick={resetRow2}>Reset</button>
					</div>
					<div class="control-group">
						<label>X-Position: {row2XPosition}</label>
						<input type="range" min="-200" max="200" bind:value={row2XPosition} />
					</div>
					<div class="control-group">
						<label>Offset: {row2Offset}</label>
						<input type="range" min="-200" max="200" bind:value={row2Offset} />
					</div>
					<div class="control-group">
						<label><input type="checkbox" bind:checked={row2Mirrored} /> Spiegeln</label>
					</div>
				</div>

				<!-- Reihe 3 -->
				<div class="segment-control">
					<div class="segment-header">
						<h4>Reihe 3</h4>
						<button class="reset-btn-small" onclick={resetRow3}>Reset</button>
					</div>
					<div class="control-group">
						<label>X-Position: {row3XPosition}</label>
						<input type="range" min="-200" max="200" bind:value={row3XPosition} />
					</div>
					<div class="control-group">
						<label>Offset: {row3Offset}</label>
						<input type="range" min="-200" max="200" bind:value={row3Offset} />
					</div>
					<div class="control-group">
						<label><input type="checkbox" bind:checked={row3Mirrored} /> Spiegeln</label>
					</div>
				</div>

				<!-- Reihe 4 -->
				<div class="segment-control">
					<div class="segment-header">
						<h4>Reihe 4</h4>
						<button class="reset-btn-small" onclick={resetRow4}>Reset</button>
					</div>
					<div class="control-group">
						<label>X-Position: {row4XPosition}</label>
						<input type="range" min="-200" max="200" bind:value={row4XPosition} />
					</div>
					<div class="control-group">
						<label>Offset: {row4Offset}</label>
						<input type="range" min="-200" max="200" bind:value={row4Offset} />
					</div>
					<div class="control-group">
						<label><input type="checkbox" bind:checked={row4Mirrored} /> Spiegeln</label>
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>

<!-- Filter Panel -->
<div class="filter-wrapper">
	<div class="filter-header">
		<h2>Filter</h2>
		<button class="toggle-btn" onclick={() => (filterVisible = !filterVisible)}>
			{filterVisible ? '▼ Einklappen' : '▶ Ausklappen'}
		</button>
	</div>

	{#if filterVisible}
		<div class="filter-content">
			<h3>Segmente ausblenden</h3>
			<div class="control-group checkboxes">
				<label><input type="checkbox" bind:checked={segment1Visible} /> Segment 1</label>
				<label><input type="checkbox" bind:checked={segment2Visible} /> Segment 2</label>
				<label><input type="checkbox" bind:checked={segment3Visible} /> Segment 3</label>
				<label><input type="checkbox" bind:checked={segment4Visible} /> Segment 4</label>
			</div>

			<h3>Reihen ausblenden</h3>
			<div class="control-group checkboxes">
				<label><input type="checkbox" bind:checked={row1Visible} /> Reihe 1</label>
				<label><input type="checkbox" bind:checked={row2Visible} /> Reihe 2</label>
				<label><input type="checkbox" bind:checked={row3Visible} /> Reihe 3</label>
				<label><input type="checkbox" bind:checked={row4Visible} /> Reihe 4</label>
			</div>
		</div>
	{/if}
</div>

<svg
	viewbox="0 0 1000 1000"
	xmlns="http://www.w3.org/2000/svg"
	stroke-linejoin="round"
	stroke-linecap="round"
	stroke-width="1"
	fill="none"
	stroke="#000000"
>
	<rect x="0" y="0" width="1000" height="1000" fill="#ffffff" stroke="none" />

	<!-- Alle 4 Segmente nahtlos gekachelt -->
	{#each allSegments as poly}
  {#if poly.shape === 'triangle-top'}
    <polygon
      transform="translate({poly.x} {poly.y}){poly.rotation !== 0
        ? ` rotate({poly.rotation})`
        : ''}"
      points="0 {h / 2} 25 {-h / 2} -25 {-h / 2}"
      fill="red"
      stroke="none"
    />
  {:else if poly.shape === 'triangle-bottom'}
    <polygon
      transform="translate({poly.x} {poly.y}){poly.rotation !== 0
        ? ` rotate({poly.rotation})`
        : ''}"
      points="0 {-h / 2} 25 {h / 2} -25 {h / 2}"
      fill="red"
      stroke="none"
    />
  {:else}
    <polygon
      transform="translate({poly.x} {poly.y}){poly.rotation !== 0
        ? ` rotate({poly.rotation})`
        : ''}"
      points="-25 {-h / 2}, 25 {-h / 2}, 50 {h / 2} -50 {h / 2}"
    />
  {/if}
{/each}


</svg>

<style>
	/* make sure the SVG does not make the container larger than intended */
	svg {
		max-width: 100%;
		max-height: 100%;
		display: block;
		padding: 20px;
		margin: 0;
		box-sizing: border-box;
	}

	.controls-wrapper {
		margin-bottom: 20px;
		max-width: 800px;
	}

	.filter-wrapper {
		margin-bottom: 20px;
		max-width: 800px;
	}

	.controls-header,
	.filter-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 20px;
		background: #e0e0e0;
		border-radius: 8px;
		cursor: pointer;
	}

	.controls-header h2,
	.filter-header h2 {
		margin: 0;
		font-size: 18px;
		font-weight: 600;
	}

	.toggle-btn {
		padding: 8px 16px;
		background: #555;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 14px;
		transition: background 0.2s;
	}

	.toggle-btn:hover {
		background: #333;
	}

	.toggle-btn:active {
		background: #222;
	}

	.controls,
	.filter-content {
		padding: 20px;
		background: #f5f5f5;
		border-radius: 0 0 8px 8px;
		margin-top: 2px;
	}

	.controls h3,
	.filter-content h3 {
		margin-top: 20px;
		margin-bottom: 10px;
		font-size: 16px;
		font-weight: 600;
	}

	.controls h3:first-child,
	.filter-content h3:first-child {
		margin-top: 0;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}

	.header h3 {
		margin: 0;
	}

	.reset-btn {
		padding: 8px 16px;
		background: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 14px;
		transition: background 0.2s;
	}

	.reset-btn:hover {
		background: #0056b3;
	}

	.reset-btn:active {
		background: #004085;
	}

	.control-group {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin-bottom: 15px;
	}

	.control-group label {
		font-size: 14px;
		color: #333;
	}

	.control-group input[type='range'] {
		width: 100%;
	}

	.segment-control {
		background: #e8e8e8;
		padding: 15px;
		border-radius: 6px;
		margin-bottom: 15px;
	}

	.segment-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}

	.segment-header h4 {
		margin: 0;
		font-size: 14px;
		font-weight: 600;
	}

	.reset-btn-small {
		padding: 5px 12px;
		background: #6c757d;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 12px;
		transition: background 0.2s;
	}

	.reset-btn-small:hover {
		background: #5a6268;
	}

	.reset-btn-small:active {
		background: #494f54;
	}

	.section-toggle {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
		margin-bottom: 10px;
	}

	.section-toggle h3 {
		margin: 0;
	}

	.toggle-btn-small {
		padding: 4px 10px;
		background: #555;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 14px;
		transition: background 0.2s;
	}

	.toggle-btn-small:hover {
		background: #333;
	}

	.toggle-btn-small:active {
		background: #222;
	}

	.checkboxes {
		flex-direction: row;
		flex-wrap: wrap;
		gap: 15px;
	}

	.checkboxes label {
		display: flex;
		align-items: center;
		gap: 5px;
		cursor: pointer;
	}

	.checkboxes input[type='checkbox'] {
		cursor: pointer;
	}
</style>
