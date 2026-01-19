<script>
  import { Pattern } from './Pattern.svelte';
  import Slider from '$lib/ui/Slider.svelte';
  import Toggle from '$lib/ui/Toggle.svelte';

  // Default-Werte (feste Geometrie)
  const DEFAULTS = {
    rows: 2,
    cols: 2,
    startY: 197,
    segmentWidth: 450,
    segmentHeight: 346,
    segmentSpacingX: 0,
    segmentSpacingY: 0,
    scale: 1,
    trapezColor: '#ffd7b5',
    dreieckColor: '#d2691e',
    parallelogrammColor: '#8b4513',
    rowOffsetX: 0,
    rowSpacing: 50,
    useModulo: true
  };

  // Feste Parameter (nicht änderbar)
  const rows = DEFAULTS.rows;
  const cols = DEFAULTS.cols;
  const startY = DEFAULTS.startY;
  const scale = DEFAULTS.scale;
  const trapezColor = DEFAULTS.trapezColor;
  const dreieckColor = DEFAULTS.dreieckColor;
  const parallelogrammColor = DEFAULTS.parallelogrammColor;

  // Nur Positionen und Abstände sind änderbar
  let segmentWidth = DEFAULTS.segmentWidth;
  let segmentHeight = DEFAULTS.segmentHeight;
  let segmentSpacingX = DEFAULTS.segmentSpacingX;
  let segmentSpacingY = DEFAULTS.segmentSpacingY;
  let rowOffsetX = DEFAULTS.rowOffsetX;
  let rowSpacing = DEFAULTS.rowSpacing;
  
  // Individuelle Row-Offsets
  let row1OffsetX = 0;
  let row2OffsetX = 0;
  let row3OffsetX = 0;
  let row4OffsetX = 0;
  
  // Modulo
  let useModulo = DEFAULTS.useModulo;
  
  // baseStartX - fix
  const viewBoxSize = 1000;
  const baseStartX = 10;
  
  let pattern;

  // UI State
  // Panel ist permanent sichtbar

  function resetAll() {
    segmentWidth = DEFAULTS.segmentWidth;
    segmentHeight = DEFAULTS.segmentHeight;
    segmentSpacingX = DEFAULTS.segmentSpacingX;
    segmentSpacingY = DEFAULTS.segmentSpacingY;
    rowOffsetX = DEFAULTS.rowOffsetX;
    rowSpacing = DEFAULTS.rowSpacing;
    row1OffsetX = 0;
    row2OffsetX = 0;
    row3OffsetX = 0;
    row4OffsetX = 0;
    useModulo = DEFAULTS.useModulo;
  }
  
  // Berechne Pattern basierend auf Parametern - komplett neu erstellen bei Änderungen
  $: allElements = (() => {
    const newPattern = new Pattern(startY, {
      segmentWidth,
      segmentHeight,
      segmentSpacingX,
      segmentSpacingY,
      trapezColor,
      dreieckColor,
      parallelogrammColor,
      rowOffsetX,
      rowSpacing,
      baseStartX,
      row1OffsetX,
      row2OffsetX,
      row3OffsetX: row3OffsetX + 50,
      row4OffsetX: row4OffsetX + 50,
      useModulo
    });
    newPattern.generateGrid(rows, cols);
    pattern = newPattern;
    return newPattern.getAllElements();
  })();
  
  // Berechne viewBox - quadratisch
  const h = Math.sin(Math.PI / 3) * 50;
  $: viewBoxWidth = viewBoxSize;
  $: viewBoxHeight = viewBoxSize;
  
  // Berechne die echte Bounding Box des Patterns
  $: patternStartX = baseStartX + rowOffsetX - segmentSpacingX;
  $: patternEndX = patternStartX + (cols * segmentWidth) + (2 * segmentSpacingX);
  $: patternRealWidth = patternEndX - patternStartX;
  
  $: patternStartY = startY - segmentSpacingY;
  $: patternEndY = startY + (rows * segmentHeight) + segmentSpacingY;
  $: patternRealHeight = patternEndY - patternStartY;
  
  // Kein zusätzliches Zentrieren - Pattern wird direkt gezeichnet
  $: centerX = 0;
  $: centerY = 0;
</script>

<div class="svg-container">
  <svg viewBox="0 0 {viewBoxWidth} {viewBoxHeight}" class="svg-canvas">
    <rect x="0" y="0" width="{viewBoxWidth}" height="{viewBoxHeight}" fill="#2d2d2dff" stroke="none" />
    
    <g transform="translate({centerX}, {centerY}) scale({scale})">
      {#each allElements as element}
        <polygon
          points={element.getPoints()}
          fill={element.fill}
          stroke="black"
          stroke-width="1"
          transform={element.getTransform()}
      />
    {/each}
    </g>
  </svg>
</div>

<div class="sidebar-right">
  <div>
    <h4>Pattern B - Positionen & Abstände</h4>
    <button onclick={resetAll}>Reset All</button>
  </div>

  <h4>Modulo-Logik</h4>
  <p class="description">Wechsle zwischen Original- und Negativfarben bei aufeinanderfolgenden Elementen.</p>
  <Toggle bind:value={useModulo} label="Modulo aktivieren" />

  <hr/>

  <h4>Segment-Abstände</h4>
  <p class="description">Bewege Segmente von der Mitte des Canvas weg (oben/unten, links/rechts).</p>
  <Slider min={0} max={100} bind:value={segmentSpacingX} snapValues={[0, 50, 100]} label="Horizontal (px)" />
  <Slider min={0} max={100} bind:value={segmentSpacingY} snapValues={[0, 50, 100]} label="Vertikal (px)" />

  <hr/>

  <h4>Reihen X-Position</h4>
  <p class="description">Stelle die X-Position jeder Reihe individuell ein.</p>
  <Slider min={-100} max={100} bind:value={row1OffsetX} snapValues={[-100, -50, 0, 50, 100]} label="Reihe 1 Offset-X (px)" />
  <Slider min={-100} max={100} bind:value={row2OffsetX} snapValues={[-100, -50, 0, 50, 100]} label="Reihe 2 Offset-X (px)" />
  <Slider min={-100} max={100} bind:value={row3OffsetX} snapValues={[-100, -50, 0, 50, 100]} label="Reihe 3 Offset-X (px)" />
  <Slider min={-100} max={100} bind:value={row4OffsetX} snapValues={[-100, -50, 0, 50, 100]} label="Reihe 4 Offset-X (px)" />
</div>

<style>
  .sidebar-right .description {
    color: #aaa;
    font-size: 0.85rem;
    line-height: 1.4;
    margin: 0;
  }
</style>
