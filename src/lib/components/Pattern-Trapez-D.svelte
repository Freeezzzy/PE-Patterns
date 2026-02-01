<script>
  import { Pattern } from './Pattern.svelte';
  import Toggle from '$lib/ui/Toggle.svelte';
  import Slider from '$lib/ui/Slider.svelte';
  import RangeSlider from '$lib/ui/RangeSlider.svelte';

  // Farbpaletten-Galerie
  const colorPalettes = [
    { name: 'Light', colors: ['#ffd7b5', '#d2691e', '#8b4513'] },
    { name: 'Dark', colors: ['#8b4513', '#d2691e', '#ffd7b5'] },
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
    trapezColor: '#ffd7b5',
    dreieckColor: '#d2691e',
    parallelogrammColor: '#8b4513',
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

  // Modulo-Option
  let useModulo = $state(DEFAULTS.useModulo);

  // Farbmodus: 'palette' oder 'slider'
  let colorMode = $state('palette');

  let selectedPaletteIndex = $state(0); // Default: Light

  // RangeSlider Parameter für HSL-Farben
  let hueMin = $state(25);
  let hueMax = $state(25);
  let satMin = $state(100);
  let satMax = $state(75);
  let lumMin = $state(85);
  let lumMax = $state(47);

  // Hilfsfunktion für HSL zu Hex Konvertierung
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

  // Derive colors based on colorMode
  let trapezColor = $derived.by(() => {
    if (colorMode === 'slider') {
      return hslToHex(hueMin, satMin, lumMin);
    }
    return colorPalettes[selectedPaletteIndex].colors[0];
  });
  
  let dreieckColor = $derived.by(() => {
    if (colorMode === 'slider') {
      return hslToHex(hueMax, satMax, lumMax);
    }
    return colorPalettes[selectedPaletteIndex].colors[1];
  });
  
  let parallelogrammColor = $derived.by(() => {
    if (colorMode === 'slider') {
      return hslToHex((hueMin + hueMax) / 2, (satMin + satMax) / 2, (lumMin + lumMax) / 2);
    }
    return colorPalettes[selectedPaletteIndex].colors[2];
  });

  // Änderbare Parameter - Segment-Abstände
  let segmentSpacingX = $state(DEFAULTS.segmentSpacingX);
  let segmentSpacingY = $state(DEFAULTS.segmentSpacingY);

  // Änderbare Parameter - Row-Offsets
  let row1OffsetX = $state(0);
  let row2OffsetX = $state(0);
  let row3OffsetX = $state(0);
  let row4OffsetX = $state(0);

  // Änderbare Parameter - Row-Spiegelung
  let mirrorRow1 = $state(false);
  let mirrorRow2 = $state(true);
  let mirrorRow3 = $state(true);
  let mirrorRow4 = $state(false);

  let pattern;

  function resetAll() {
    selectedPaletteIndex = 0;
    useModulo = DEFAULTS.useModulo;
    colorMode = 'palette';
    hueMin = 25;
    hueMax = 25;
    satMin = 100;
    satMax = 75;
    lumMin = 85;
    lumMax = 47;
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
  }

  function activateSliders() {
    colorMode = 'slider';
  }

  // Pattern-Key für vollständige Re-Rendering
  let patternKey = $derived(`${useModulo}-${colorMode}-${selectedPaletteIndex}-${hueMin}-${hueMax}-${satMin}-${satMax}-${lumMin}-${lumMax}-${mirrorRow1}-${mirrorRow2}-${mirrorRow3}-${mirrorRow4}-${segmentSpacingX}-${segmentSpacingY}-${row1OffsetX}-${row2OffsetX}-${row3OffsetX}-${row4OffsetX}`);

  // Berechne Pattern
  let allElements = $derived.by(() => {
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
  });
  
  // Berechne viewBox
  const h = Math.sin(Math.PI / 3) * 50;
  let viewBoxSize = $derived(1000);
  let viewBoxWidth = $derived(viewBoxSize);
  let viewBoxHeight = $derived(viewBoxSize);
  
  // Kein zusätzliches Zentrieren
  let centerX = $derived(0);
  let centerY = $derived(0);
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

  <p class="description">Wähle einen Farbmodus:</p>
  <div class="mode-selector">
    <button 
      class:active={colorMode === 'palette'} 
      onclick={() => colorMode = 'palette'}
    >
      Paletten
    </button>
    <button 
      class:active={colorMode === 'slider'} 
      onclick={activateSliders}
    >
      Slider
    </button>
  </div>

  <hr/>

  {#if colorMode === 'palette'}
  <p class="description">Wähle eine Farbpalette aus der Galerie.</p>
  
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

  {#if colorMode === 'slider'}
  <p class="description">Stelle die Farben mit den Slidern ein.</p>
  <RangeSlider 
    min={0} 
    max={360} 
    bind:value1={hueMin}
    bind:value2={hueMax}
    label="Hue (Trapez → Dreieck)" 
  />
  <RangeSlider 
    min={0} 
    max={100} 
    bind:value1={satMin}
    bind:value2={satMax}
    label="Saturation (Trapez → Dreieck)" 
  />
  <RangeSlider 
    min={0} 
    max={100} 
    bind:value1={lumMin}
    bind:value2={lumMax}
    label="Luminance (Trapez → Dreieck)" 
  />
  {/if}

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

  .mode-selector {
    display: flex;
    gap: 8px;
    margin-bottom: 1rem;
  }

  .mode-selector button {
    flex: 1;
    padding: 8px 16px;
    background: #2d2d2d;
    border: 2px solid #444;
    border-radius: 6px;
    color: #ccc;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.9rem;
  }

  .mode-selector button:hover {
    border-color: #666;
    background: #333;
  }

  .mode-selector button.active {
    border-color: #4ecdc4;
    background: #3a3a3a;
    color: #4ecdc4;
    font-weight: 500;
  }
</style>
