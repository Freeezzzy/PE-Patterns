<script>
  import { StripePattern } from './StripePattern.svelte';

  // Farbpaletten-Galerie
  const colorPalettes = [
    { name: 'Classic White-Red', colors: ['#ffffff', '#c52b1e'] },
    { name: 'Beige-Brown', colors: ['#f5f5dc', '#8b4513'] },
    { name: 'Grey-Black', colors: ['#d3d3d3', '#1a1a1a'] },
    { name: 'Cream-Orange', colors: ['#fffdd0', '#ff6b35'] },
    { name: 'Ocean Blue', colors: ['#e0f7fa', '#c62828'] },
    { name: 'Forest Green', colors: ['#e8f5e9', '#d32f2f'] },
    { name: 'Sunset', colors: ['#fff3e0', '#e64a19'] },
    { name: 'Lavender', colors: ['#f3e5f5', '#c2185b'] },
    { name: 'Mint', colors: ['#e0f2f1', '#d84315'] },
    { name: 'Peacock', colors: ['#e0f7fa', '#b71c1c'] },
    { name: 'Desert', colors: ['#fbe9e7', '#bf360c'] },
    { name: 'Rose', colors: ['#fce4ec', '#880e4f'] },
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
    colorTop: '#ffffff',
    colorBottom: '#ffffff',
    colorTri: '#c52b1e',
    rowOffsetX: 0,
    rowSpacing: 0,
    baseStartX: -440,
    countPerRow: 7
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
  const countPerRow = DEFAULTS.countPerRow;

  let selectedPaletteIndex = $state(0);

  // Derive colors from selected palette
  let colorTop = $derived(colorPalettes[selectedPaletteIndex].colors[0]);
  let colorBottom = $derived(colorTop);
  let colorTri = $derived(colorPalettes[selectedPaletteIndex].colors[1]);

  function resetAll() {
    selectedPaletteIndex = 0;
  }

  function selectPalette(index) {
    selectedPaletteIndex = index;
  }

  // PatternKey für Re-Rendering bei Änderungen
  let patternKey = $derived(`${selectedPaletteIndex}`);

  // Berechne Pattern
  let allElements = $derived.by(() => {
    const newPattern = new StripePattern(startY, {
      segmentWidth,
      segmentHeight,
      segmentOffsetX,
      segmentOffsetY,
      colorTop,
      colorBottom,
      colorTri,
      rowOffsetX,
      rowSpacing,
      baseStartX,
      countPerRow
    });
    newPattern.generateGrid(rows, cols);
    return newPattern.getAllElements();
  });

  // ViewBox
  const viewBoxSize = 1000;
  let viewBoxWidth = $derived(viewBoxSize);
  let viewBoxHeight = $derived(viewBoxSize);
</script>

<div class="svg-container">
  <svg viewBox="0 0 {viewBoxWidth} {viewBoxHeight}" class="svg-canvas">
    <rect x="0" y="0" width="{viewBoxWidth}" height="{viewBoxHeight}" fill="#2d2d2dff" stroke="none" />
    
    {#key patternKey}
    <g>
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
          checked={selectedPaletteIndex === index}
          onchange={() => selectPalette(index)}
        />
        <span class="palette-name">{palette.name}</span>
        <div class="palette-colors">
          {#each palette.colors as color}
            <div class="color-box" style="background-color: {color};"></div>
          {/each}
        </div>
      </label>
    {/each}
  </div>
</div>

<style>
  .svg-container {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100vw - 300px);
    height: 100vh;
    overflow: hidden;
  }

  .svg-canvas {
    width: 100%;
    height: 100%;
    display: block;
  }

  .sidebar-right {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    background-color: #1e1e1e;
    color: #fff;
    padding: 20px;
    overflow-y: auto;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
  }

  .sidebar-right button {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #007acc;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }

  .sidebar-right button:hover {
    background-color: #005a9e;
  }

  .description {
    color: #aaa;
    font-size: 0.85rem;
    line-height: 1.4;
    margin: 0 0 15px 0;
  }

  .palette-gallery {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .palette-item {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #2a2a2a;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .palette-item:hover {
    background-color: #333;
  }

  .palette-item.selected {
    background-color: #007acc;
  }

  .palette-item input[type="radio"] {
    display: none;
  }

  .palette-name {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .palette-colors {
    display: flex;
    gap: 5px;
  }

  .color-box {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    border: 1px solid #444;
  }
</style>
