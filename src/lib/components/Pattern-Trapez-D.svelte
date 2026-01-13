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
    useModulo: true
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

<div style="position: relative; width: 100vw; height: 100vh;">
  <!-- Controls Panel (permanent sichtbar) -->
  <div class="sidebar">
    <div class="sidebar-header">
      <h3>Pattern D - Master Pattern</h3>
      <button class="reset-all-btn" on:click={resetAll}>Reset All</button>
    </div>

    <div class="sidebar-content">
      <section>
        <h4>Farben</h4>
        <p class="description">Wähle die Farben für Trapez, Dreieck und Parallelogramm.</p>
        <EditableColorPalette bind:colors={colors} bind:selectedColorIndex={selectedColorIndex} />
      </section>

      <section>
        <h4>Modulo-Effekt</h4>
        <p class="description">Aktiviere/Deaktiviere die Farb-Invertierung.</p>
        <Toggle bind:value={useModulo} label="Modulo aktiv" />
      </section>

      <section>
        <h4>Segment-Abstände</h4>
        <p class="description">Bewege Segmente von der Mitte des Canvas weg.</p>
        <div class="slider-with-reset">
          <Slider min={0} max={100} bind:value={segmentSpacingX} label="Horizontal (px)" />
          <button class="reset-btn" on:click={() => segmentSpacingX = DEFAULTS.segmentSpacingX}>↻</button>
        </div>
        <div class="slider-with-reset">
          <Slider min={0} max={100} bind:value={segmentSpacingY} label="Vertikal (px)" />
          <button class="reset-btn" on:click={() => segmentSpacingY = DEFAULTS.segmentSpacingY}>↻</button>
        </div>
      </section>

      <section>
        <h4>Reihen X-Position</h4>
        <p class="description">Stelle die X-Position jeder Reihe individuell ein.</p>
        <div class="slider-with-reset">
          <Slider min={-100} max={100} bind:value={row1OffsetX} label="Reihe 1 Offset-X (px)" />
          <button class="reset-btn" on:click={() => row1OffsetX = 0}>↻</button>
        </div>
        <div class="slider-with-reset">
          <Slider min={-100} max={100} bind:value={row2OffsetX} label="Reihe 2 Offset-X (px)" />
          <button class="reset-btn" on:click={() => row2OffsetX = 0}>↻</button>
        </div>
        <div class="slider-with-reset">
          <Slider min={-100} max={100} bind:value={row3OffsetX} label="Reihe 3 Offset-X (px)" />
          <button class="reset-btn" on:click={() => row3OffsetX = 0}>↻</button>
        </div>
        <div class="slider-with-reset">
          <Slider min={-100} max={100} bind:value={row4OffsetX} label="Reihe 4 Offset-X (px)" />
          <button class="reset-btn" on:click={() => row4OffsetX = 0}>↻</button>
        </div>
      </section>

      <section>
        <h4>Reihen-Spiegelung</h4>
        <p class="description">Spiegle einzelne Reihen horizontal.</p>
        <Toggle bind:value={mirrorRow1} label="Reihe 1 spiegeln" />
        <Toggle bind:value={mirrorRow2} label="Reihe 2 spiegeln" />
        <Toggle bind:value={mirrorRow3} label="Reihe 3 spiegeln" />
        <Toggle bind:value={mirrorRow4} label="Reihe 4 spiegeln" />
      </section>
    </div>
  </div>

  <!-- SVG Canvas -->
  <div style="width: 100%; height: 100%; display: flex; align-items: flex-start; justify-content: center; overflow: auto; padding-top: 20px;">
    {#key patternKey}
    <svg viewBox="0 0 {viewBoxWidth} {viewBoxHeight}" style="border: 1px solid black; width: 1000px; height: 1000px;">
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
</div>

<style>
  .sidebar {
    position: absolute;
    left: 0;
    top: 0;
    width: 350px;
    height: 100%;
    background: #1a1a1a;
    border-right: 2px solid #000;
    display: flex;
    flex-direction: column;
    z-index: 100;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: #2d2d2d;
    border-bottom: 2px solid #000;
  }

  .sidebar-header h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
    color: #fff;
  }

  .reset-all-btn {
    padding: 6px 12px;
    cursor: pointer;
    background: #ff6b6b;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.9rem;
  }

  .reset-all-btn:hover {
    background: #ff5252;
  }

  .sidebar-content {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  section h4 {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 500;
    color: #fff;
    border-bottom: 1px solid #444;
    padding-bottom: 8px;
  }

  .description {
    color: #aaa;
    font-size: 0.85rem;
    line-height: 1.4;
    margin: 0;
  }

  .slider-with-reset {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
  }

  .slider-with-reset :global(.slider-container) {
    flex: 1;
    min-width: 0;
    max-width: calc(100% - 40px);
  }

  .reset-btn {
    padding: 6px 10px;
    cursor: pointer;
    background: #444;
    color: white;
    border: 1px solid #666;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    min-width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .reset-btn:hover {
    background: #555;
    border-color: #777;
  }

  .reset-btn:active {
    transform: scale(0.95);
  }
</style>
