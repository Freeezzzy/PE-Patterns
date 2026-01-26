<script>
  import { Pattern } from './Pattern.svelte';
  import EditableColorPalette from '$lib/ui/EditableColorPalette.svelte';
  import Toggle from '$lib/ui/Toggle.svelte';
  import Slider from '$lib/ui/Slider.svelte';

  // Farbpaletten-Galerie
  const colorPalettes = [
    // Monochromes
    { name: 'Beige Mono', colors: ['#f5f5dc', '#d2b48c', '#daa520'] },
    { name: 'Teal Mono', colors: ['#008080', '#20b2aa', '#00ced1'] },
    { name: 'Navy Mono', colors: ['#191970', '#000080', '#4169e1'] },
    { name: 'Grey Mono', colors: ['#808080', '#a9a9a9', '#696969'] },
    { name: 'Green Mono', colors: ['#2e8b57', '#3cb371', '#2f4f4f'] },
    { name: 'Rose Mono', colors: ['#d8a7b1', '#b76e79', '#9a5a68'] },
    
    // Harmonische Kombinationen
    { name: 'Classic', colors: ['#f5f5dc', '#008080', '#191970'] },
    { name: 'Ocean Sunset', colors: ['#ff6b6b', '#4ecdc4', '#1a535c'] },
    { name: 'Forest', colors: ['#e0f2e9', '#3cb371', '#2f4f2f'] },
    { name: 'Autumn', colors: ['#ffd7b5', '#d2691e', '#8b4513'] },
    { name: 'Lavender', colors: ['#e6d5f0', '#c8a8e0', '#a87dbd'] },
    { name: 'Mint', colors: ['#e0f8f7', '#80deea', '#4dd0e1'] },
    { name: 'Coral', colors: ['#ffe5d9', '#ff7e67', '#bc5a45'] },
    { name: 'Peacock', colors: ['#005f73', '#0a9396', '#94d2bd'] },
    { name: 'Desert', colors: ['#f4e8c1', '#ca955c', '#a16e47'] },
    { name: 'Berry', colors: ['#ffd6e8', '#ff85c0', '#c44569'] },
  ];

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
  let selectedPaletteIndex = 10; // Default: Lavender
  let showPaletteGallery = false; // Toggle für Farbauswahl

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
    selectedPaletteIndex = 10; // Lavender
    colors = [trapezColor, dreieckColor, parallelogrammColor];
  }

  function togglePaletteGallery() {
    showPaletteGallery = !showPaletteGallery;
  }

  // Synchronisiere Farben bei Paletten-Auswahl
  $: if (selectedPaletteIndex !== -1) {
    colors = [...colorPalettes[selectedPaletteIndex].colors];
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
  <button onclick={resetAll}>Reset All</button>

  <hr/>
  <p class="description">Wähle die Farben für Trapez, Dreieck und Parallelogramm.</p>
  
  <button onclick={togglePaletteGallery} class="toggle-gallery-btn">
    {showPaletteGallery ? '▼' : '▶'} Farbauswahl
  </button>
  
  {#if showPaletteGallery}
    <div class="palette-gallery">
      {#each colorPalettes as palette, index}
        <label class="palette-item" class:selected={selectedPaletteIndex === index}>
          <input 
            type="radio" 
            name="palette" 
            value={index} 
            bind:group={selectedPaletteIndex}
            class="palette-radio"
          />
          <svg viewBox="0 0 300 100" class="palette-preview">
            <rect x="0" y="0" width="100" height="100" fill={palette.colors[0]} />
            <rect x="100" y="0" width="100" height="100" fill={palette.colors[1]} />
            <rect x="200" y="0" width="100" height="100" fill={palette.colors[2]} />
          </svg>
          <span class="palette-name">{palette.name}</span>
        </label>
      {/each}
    </div>
  {/if}
  
  <EditableColorPalette bind:colors={colors} bind:selectedColorIndex={selectedColorIndex} />

  <hr/>

  <p class="description">Aktiviere/Deaktiviere die Farb-Invertierung.</p>
  <Toggle bind:value={useModulo} label="Modulo aktiv" />

  <hr/>

  <p class="description">Bewege Segmente von der Mitte des Canvas weg.</p>
  <Slider min={0} max={100} bind:value={segmentSpacingX} snapValues={[0, 50, 100]} label="Horizontal (px)" />
  <Slider min={0} max={100} bind:value={segmentSpacingY} snapValues={[0, 50, 100]} label="Vertikal (px)" />

  <hr/>

  <p class="description">Stelle die X-Position jeder Reihe individuell ein.</p>
  <Slider min={-100} max={100} bind:value={row1OffsetX} snapValues={[-100, -50, 0, 50, 100]} label="Reihe 1 Offset-X (px)" />
  <Slider min={-100} max={100} bind:value={row2OffsetX} snapValues={[-100, -50, 0, 50, 100]} label="Reihe 2 Offset-X (px)" />
  <Slider min={-100} max={100} bind:value={row3OffsetX} snapValues={[-100, -50, 0, 50, 100]} label="Reihe 3 Offset-X (px)" />
  <Slider min={-100} max={100} bind:value={row4OffsetX} snapValues={[-100, -50, 0, 50, 100]} label="Reihe 4 Offset-X (px)" />

  <hr/>

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
    margin-bottom: 1rem;
  }

  .toggle-gallery-btn {
    margin-bottom: 1rem;
    padding: 8px 12px;
    background: #3a3a3a;
    border: 1px solid #555;
    color: #ccc;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
    width: 100%;
    text-align: left;
    font-weight: 500;
  }

  .toggle-gallery-btn:hover {
    background: #444;
    border-color: #666;
  }

  .palette-gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 1rem;
  }

  .palette-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 8px;
    background: #2d2d2d;
    border: 2px solid #444;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
  }

  .palette-radio {
    position: absolute;
    top: 8px;
    left: 8px;
    cursor: pointer;
    width: 16px;
    height: 16px;
    accent-color: #4ecdc4;
  }

  .palette-item:hover {
    border-color: #666;
    background: #333;
  }

  .palette-item.selected {
    border-color: #4ecdc4;
    background: #3a3a3a;
  }

  .palette-preview {
    width: 100%;
    height: 80px;
    border-radius: 4px;
    background: #2d2d2d;
  }

  .palette-name {
    font-size: 0.7rem;
    color: #ccc;
    text-align: center;
  }

  .palette-item.selected .palette-name {
    color: #4ecdc4;
    font-weight: 500;
  }
</style>
