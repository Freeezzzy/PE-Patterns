<script>
  import { Pattern } from './Pattern.svelte';
  import Toggle from '$lib/ui/Toggle.svelte';

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

  let selectedPaletteIndex = $state(6); // Default: Classic

  // Derive colors from selected palette
  let trapezColor = $derived(colorPalettes[selectedPaletteIndex].colors[0]);
  let dreieckColor = $derived(colorPalettes[selectedPaletteIndex].colors[1]);
  let parallelogrammColor = $derived(colorPalettes[selectedPaletteIndex].colors[2]);

  function resetAll() {
    selectedPaletteIndex = 6; // Classic
    useModulo = DEFAULTS.useModulo;
  }
  
  function selectPalette(index) {
    selectedPaletteIndex = index;
  }
  
  // PatternKey für Re-Rendering bei Änderungen
  let patternKey = $derived(`${useModulo}-${selectedPaletteIndex}`);
  
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
</style>