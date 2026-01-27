<script>
  import { Pattern } from './Pattern.svelte';
  import Toggle from '$lib/ui/Toggle.svelte';
  import RangeSlider from '$lib/ui/RangeSlider.svelte';

  // Farbpaletten-Galerie
  const colorPalettes = [
    { name: 'Autumn', colors: ['#ffd7b5', '#d2691e', '#8b4513'] },
    { name: 'Earth Tones', colors: ['#d4c5b9', '#8b7355', '#5c4a3a'] },
  ];

  // Default-Werte
  const DEFAULTS = {
    rows: 4,
    cols: 4,
    startY: -149,
    segmentWidth: 450,
    segmentHeight: 346,
    segmentOffsetX: 0,
    segmentOffsetY: 0,
    scale: 1,
    trapezColor: '#f5f5dc',
    dreieckColor: '#008080',
    parallelogrammColor: '#191970',
    rowOffsetX: 0,
    rowSpacing: 50,
    baseStartX: -440,
    useModulo: true
  };

  // Feste Parameter (nicht änderbar)
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

  let selectedPaletteIndex = $state(0); // Default: Autumn

  // RangeSlider Parameter für HSL-Farben
  let hueMin = $state(30);
  let hueMax = $state(15);
  let satMin = $state(70);
  let satMax = $state(60);
  let lumMin = $state(70);
  let lumMax = $state(40);

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

  function resetAll() {
    selectedPaletteIndex = 0; // Autumn
    useModulo = DEFAULTS.useModulo;
    colorMode = 'palette';
    hueMin = 30;
    hueMax = 15;
    satMin = 70;
    satMax = 60;
    lumMin = 70;
    lumMax = 40;
  }
  
  // PatternKey für Re-Rendering bei Änderungen
  let patternKey = $derived(`${useModulo}-${selectedPaletteIndex}-${colorMode}-${hueMin}-${hueMax}`);
  
  function selectPalette(index) {
    selectedPaletteIndex = index;
    colorMode = 'palette';
  }
  
  function activateSliders() {
    colorMode = 'slider';
  }
  
  // Berechne Pattern basierend auf Parametern - komplett neu erstellen bei Änderungen
  let allElements = $derived.by(() => {
    const newPattern = new Pattern(startY, {
      segmentWidth,
      segmentHeight,
      segmentOffsetX,
      segmentOffsetY,
      trapezColor,
      dreieckColor,
      parallelogrammColor,
      rowOffsetX,
      rowSpacing,
      baseStartX,
      useModulo
    });
    newPattern.generateGrid(rows, cols);
    return newPattern.getAllElements();
  });
  
  // Berechne viewBox - quadratisch
  const h = Math.sin(Math.PI / 3) * 50;
  const viewBoxSize = 1000; // Feste quadratische Größe
  let viewBoxWidth = $derived(viewBoxSize);
  let viewBoxHeight = $derived(viewBoxSize);
  
  // Berechne die echte Bounding Box des Patterns
  // Pattern startet bei baseStartX (default 100) und hat cols * segmentWidth Breite
  let patternStartX = $derived(baseStartX + rowOffsetX + segmentOffsetX);
  let patternEndX = $derived(patternStartX + (cols * segmentWidth));
  let patternRealWidth = $derived(patternEndX - patternStartX);
  
  let patternStartY = $derived(startY);
  let patternEndY = $derived(startY + (rows * segmentHeight) + segmentOffsetY);
  let patternRealHeight = $derived(patternEndY - patternStartY);
  
  // Kein zusätzliches Zentrieren - Pattern wird direkt gezeichnet
  const centerX = 0;
  const centerY = 0;
</script>

<div class="svg-container">
  <svg viewBox="0 0 {viewBoxWidth} {viewBoxHeight}" class="svg-canvas">
    <rect x="0" y="0" width="{viewBoxWidth}" height="{viewBoxHeight}" fill="#2d2d2dff" stroke="none" />
    
    {#key patternKey}
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
    {/key}
  </svg>
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
  
  <p class="description">Wechsle zwischen Original- und Negativfarben bei aufeinanderfolgenden Elementen.</p>
  <Toggle bind:value={useModulo} label="Modulo aktivieren" />
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