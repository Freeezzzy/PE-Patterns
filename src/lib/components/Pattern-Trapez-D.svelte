<script>
  import { Pattern } from './Pattern.svelte';
  import EditableColorPalette from '$lib/ui/EditableColorPalette.svelte';
  import Toggle from '$lib/ui/Toggle.svelte';
  import Slider from '$lib/ui/Slider.svelte';

  // Default-Werte - Pastell Lila Palette
  const DEFAULTS = {
    rows: 4,
    cols: 4,
    startY: -149,
    segmentWidth: 450,
    segmentHeight: 346,
    segmentOffsetX: 0,
    segmentOffsetY: 0,
    segmentSpacingX: 0,
    segmentSpacingY: 0,
    scale: 1,
    trapezColor: '#e6d5f0',
    dreieckColor: '#c8a8e0',
    parallelogrammColor: '#a87dbd',
    rowOffsetX: 0,
    rowSpacing: 50,
    baseStartX: -440,
    useModulo: false
  };

  // Feste Parameter
  const rows = DEFAULTS.rows;
  const cols = DEFAULTS.cols;
  const startY = DEFAULTS.startY;
  const segmentWidth = DEFAULTS.segmentWidth;
  const segmentHeight = DEFAULTS.segmentHeight;
  const segmentOffsetX = DEFAULTS.segmentOffsetX;
  const segmentOffsetY = DEFAULTS.segmentOffsetY;
  const scale = DEFAULTS.scale;
  const rowOffsetX = DEFAULTS.rowOffsetX;
  const rowSpacing = DEFAULTS.rowSpacing;
  const baseStartX = DEFAULTS.baseStartX;

  // Änderbare Parameter - Farben
  let trapezColor = DEFAULTS.trapezColor;
  let dreieckColor = DEFAULTS.dreieckColor;
  let parallelogrammColor = DEFAULTS.parallelogrammColor;
  
  // Änderbare Parameter - Modulo
  let useModulo = DEFAULTS.useModulo;

  // Änderbare Parameter - Segment-Abstände
  let segmentSpacingX = DEFAULTS.segmentSpacingX;
  let segmentSpacingY = DEFAULTS.segmentSpacingY;

  // Änderbare Parameter - Row-Offsets
  let row1OffsetX = 0;
  let row2OffsetX = 0;
  let row3OffsetX = 0;
  let row4OffsetX = 0;

  // Änderbare Parameter - Row-Spiegelung
  let mirrorRow1 = false;
  let mirrorRow2 = true;
  let mirrorRow3 = true;
  let mirrorRow4 = false;

  let pattern;

  // UI State
  let selectedColorIndex = 0;
  let colors = [trapezColor, dreieckColor, parallelogrammColor];

  function resetAll() {
    trapezColor = DEFAULTS.trapezColor;
    dreieckColor = DEFAULTS.dreieckColor;
    parallelogrammColor = DEFAULTS.parallelogrammColor;
    useModulo = DEFAULTS.useModulo;
    segmentSpacingX = DEFAULTS.segmentSpacingX;
    segmentSpacingY = DEFAULTS.segmentSpacingY;
    row1OffsetX = 0;
    row2OffsetX = 0;
    row3OffsetX = 0;
    row4OffsetX = 0;
    mirrorRow1 = false;
    mirrorRow2 = true;
    mirrorRow3 = true;
    mirrorRow4 = false;
    colors = [trapezColor, dreieckColor, parallelogrammColor];
  }

  // Synchronisiere Farben zwischen Palette und Pattern
  $: {
    trapezColor = colors[0];
    dreieckColor = colors[1];
    parallelogrammColor = colors[2];
  }

  // Pattern-Key für vollständige Re-Rendering
  $: patternKey = `${useModulo}-${colors.join('-')}-${mirrorRow1}-${mirrorRow2}-${mirrorRow3}-${mirrorRow4}-${segmentSpacingX}-${segmentSpacingY}-${row1OffsetX}-${row2OffsetX}-${row3OffsetX}-${row4OffsetX}`;

  // Berechne Pattern
  $: allElements = (() => {
    const newPattern = new Pattern(startY, {
      segmentWidth,
      segmentHeight,
      segmentOffsetX,
      segmentOffsetY,
      segmentSpacingX,
      segmentSpacingY,
      trapezColor,
      dreieckColor,
      parallelogrammColor,
      rowOffsetX,
      rowSpacing,
      baseStartX,
      row1OffsetX: row1OffsetX + 50,
      row2OffsetX: row2OffsetX + 50,
      row3OffsetX: row3OffsetX + 50,
      row4OffsetX: row4OffsetX + 50,
      row1Mirror: mirrorRow1,
      row2Mirror: mirrorRow2,
      row3Mirror: mirrorRow3,
      row4Mirror: mirrorRow4,
      useModulo
    });
    newPattern.generateGrid(rows, cols);
    pattern = newPattern;
    return newPattern.getAllElements();
  })();
  
  // Berechne viewBox
  const h = Math.sin(Math.PI / 3) * 50;
  $: viewBoxSize = 1000;
  $: viewBoxWidth = viewBoxSize;
  $: viewBoxHeight = viewBoxSize;
  
  // Kein zusätzliches Zentrieren
  $: centerX = 0;
  $: centerY = 0;
</script>

<div class="svg-container">
  {#key patternKey}
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
  {/key}
</div>

<div class="sidebar-right">
  <div>
    <h4>Pattern D - Master Pattern</h4>
    <button onclick={resetAll}>Reset All</button>
  </div>

  <h4>Farben</h4>
  <p class="description">Wähle die Farben für Trapez, Dreieck und Parallelogramm.</p>
  <EditableColorPalette bind:colors={colors} bind:selectedColorIndex={selectedColorIndex} />

  <hr/>

  <h4>Modulo-Effekt</h4>
  <p class="description">Aktiviere/Deaktiviere die Farb-Invertierung.</p>
  <Toggle bind:value={useModulo} label="Modulo aktiv" />

  <hr/>

  <h4>Segment-Abstände</h4>
  <p class="description">Bewege Segmente von der Mitte des Canvas weg.</p>
  <Slider min={0} max={100} bind:value={segmentSpacingX} label="Horizontal (px)" />
  <button onclick={() => segmentSpacingX = DEFAULTS.segmentSpacingX}>Reset</button>
  <Slider min={0} max={100} bind:value={segmentSpacingY} label="Vertikal (px)" />
  <button onclick={() => segmentSpacingY = DEFAULTS.segmentSpacingY}>Reset</button>

  <hr/>

  <h4>Reihen X-Position</h4>
  <p class="description">Stelle die X-Position jeder Reihe individuell ein.</p>
  <Slider min={-100} max={100} bind:value={row1OffsetX} label="Reihe 1 Offset-X (px)" />
  <button onclick={() => row1OffsetX = 0}>Reset</button>
  <Slider min={-100} max={100} bind:value={row2OffsetX} label="Reihe 2 Offset-X (px)" />
  <button onclick={() => row2OffsetX = 0}>Reset</button>
  <Slider min={-100} max={100} bind:value={row3OffsetX} label="Reihe 3 Offset-X (px)" />
  <button onclick={() => row3OffsetX = 0}>Reset</button>
  <Slider min={-100} max={100} bind:value={row4OffsetX} label="Reihe 4 Offset-X (px)" />
  <button onclick={() => row4OffsetX = 0}>Reset</button>

  <hr/>

  <h4>Reihen-Spiegelung</h4>
  <p class="description">Spiegle einzelne Reihen horizontal.</p>
  <Toggle bind:value={mirrorRow1} label="Reihe 1 spiegeln" />
  <Toggle bind:value={mirrorRow2} label="Reihe 2 spiegeln" />
  <Toggle bind:value={mirrorRow3} label="Reihe 3 spiegeln" />
  <Toggle bind:value={mirrorRow4} label="Reihe 4 spiegeln" />
</div>

<style>
  .sidebar-right .description {
    color: #aaa;
    font-size: 0.85rem;
    line-height: 1.4;
    margin: 0;
  }
</style>
