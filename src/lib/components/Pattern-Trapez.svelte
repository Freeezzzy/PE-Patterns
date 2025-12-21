<script>
  import { Pattern } from './Pattern.svelte';

  // Default-Werte
  const DEFAULTS = {
    rows: 2,
    cols: 2,
    startY: 100,
    segmentWidth: 450,
    segmentHeight: 346,
    segmentOffsetX: 0,
    segmentOffsetY: 0,
    scale: 1,
    trapezColor: '#ffffff',
    dreieckColor: '#ff0000',
    parallelogrammColor: '#0000ff',
    rowOffsetX: 0,
    rowSpacing: 50,
    baseStartX: 100
  };

  // Variabel steuerbare Parameter
  let rows = DEFAULTS.rows;
  let cols = DEFAULTS.cols;
  let startY = DEFAULTS.startY;
  let segmentWidth = DEFAULTS.segmentWidth;
  let segmentHeight = DEFAULTS.segmentHeight;
  let segmentOffsetX = DEFAULTS.segmentOffsetX;
  let segmentOffsetY = DEFAULTS.segmentOffsetY;
  let scale = DEFAULTS.scale;
  let trapezColor = DEFAULTS.trapezColor;
  let dreieckColor = DEFAULTS.dreieckColor;
  let parallelogrammColor = DEFAULTS.parallelogrammColor;
  let rowOffsetX = DEFAULTS.rowOffsetX;
  let rowSpacing = DEFAULTS.rowSpacing;
  let baseStartX = DEFAULTS.baseStartX;
  
  // Reset-Funktionen
  function resetGrid() {
    rows = DEFAULTS.rows;
    cols = DEFAULTS.cols;
  }
  
  function resetSpacing() {
    segmentWidth = DEFAULTS.segmentWidth;
    segmentHeight = DEFAULTS.segmentHeight;
    segmentOffsetX = DEFAULTS.segmentOffsetX;
    segmentOffsetY = DEFAULTS.segmentOffsetY;
    scale = DEFAULTS.scale;
  }
  
  function resetRows() {
    baseStartX = DEFAULTS.baseStartX;
    rowOffsetX = DEFAULTS.rowOffsetX;
    rowSpacing = DEFAULTS.rowSpacing;
  }
  
  function resetColors() {
    trapezColor = DEFAULTS.trapezColor;
    dreieckColor = DEFAULTS.dreieckColor;
    parallelogrammColor = DEFAULTS.parallelogrammColor;
  }
  
  function resetAll() {
    resetGrid();
    resetSpacing();
    resetRows();
    resetColors();
  }
  
  // Collapsed state für Sections
  let gridCollapsed = false;
  let spacingCollapsed = false;
  let colorCollapsed = false;
  let rowCollapsed = false;
  
  // Berechne Pattern basierend auf Parametern
  $: pattern = new Pattern(startY, {
    segmentWidth,
    segmentHeight,
    segmentOffsetX,
    segmentOffsetY,
    trapezColor,
    dreieckColor,
    parallelogrammColor,
    rowOffsetX,
    rowSpacing,
    baseStartX
  });
  
  $: {
    pattern.generateGrid(rows, cols);
  }
  
  $: allElements = pattern.getAllElements();
  
  // Berechne viewBox basierend auf Grid-Größe
  const h = Math.sin(Math.PI / 3) * 50;
  $: viewBoxWidth = 100 + cols * segmentWidth + 100;
  $: viewBoxHeight = startY + rows * segmentHeight + 100;
</script>

<div style="display: flex; gap: 20px; height: 100vh;">
  <!-- Controls Panel -->
  <div style="width: 320px; padding: 20px; background: #f5f5f5; overflow-y: auto;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
      <h3 style="margin: 0;">Pattern Controls</h3>
      <button on:click={resetAll} style="padding: 5px 10px; cursor: pointer; background: #ff6b6b; color: white; border: none; border-radius: 4px; font-weight: bold;">
        Reset All
      </button>
    </div>
    
    <!-- Grid Settings -->
    <details open={!gridCollapsed} on:toggle={(e) => gridCollapsed = !e.target.open}>
      <summary style="cursor: pointer; font-weight: bold; padding: 10px; background: #e0e0e0; margin: -10px -10px 10px -10px; user-select: none;">
        Grid Einstellungen
        <button on:click|stopPropagation={resetGrid} style="float: right; padding: 2px 8px; font-size: 11px; background: #ff9999; border: none; border-radius: 3px; cursor: pointer;">
          Reset
        </button>
      </summary>
      <div style="padding: 10px 0;">
        <div style="margin-bottom: 15px;">
          <label>
            <strong>Reihen:</strong> {rows}
            <input type="range" bind:value={rows} min="1" max="10" style="width: 100%;" />
          </label>
        </div>
        
        <div style="margin-bottom: 15px;">
          <label>
            <strong>Spalten:</strong> {cols}
            <input type="range" bind:value={cols} min="1" max="10" style="width: 100%;" />
          </label>
        </div>
      </div>
    </details>
    
    <!-- Spacing Settings -->
    <details open={!spacingCollapsed} on:toggle={(e) => spacingCollapsed = !e.target.open} style="margin-top: 15px;">
      <summary style="cursor: pointer; font-weight: bold; padding: 10px; background: #e0e0e0; margin: -10px -10px 10px -10px; user-select: none;">
        Abstände
        <button on:click|stopPropagation={resetSpacing} style="float: right; padding: 2px 8px; font-size: 11px; background: #ff9999; border: none; border-radius: 3px; cursor: pointer;">
          Reset
        </button>
      </summary>
      <div style="padding: 10px 0;">
        <div style="margin-bottom: 15px;">
          <label>
            <strong>Horizontal:</strong> {segmentWidth}px
            <input type="range" bind:value={segmentWidth} min="300" max="600" style="width: 100%;" />
          </label>
        </div>
        
        <div style="margin-bottom: 15px;">
          <label>
            <strong>Vertikal:</strong> {segmentHeight}px
            <input type="range" bind:value={segmentHeight} min="200" max="500" style="width: 100%;" />
          </label>
        </div>
        
        <div style="margin-bottom: 15px;">
          <label>
            <strong>Segment Offset-X:</strong> {segmentOffsetX}px
            <input type="range" bind:value={segmentOffsetX} min="-200" max="200" style="width: 100%;" />
          </label>
        </div>
        
        <div style="margin-bottom: 15px;">
          <label>
            <strong>Segment Offset-Y:</strong> {segmentOffsetY}px
            <input type="range" bind:value={segmentOffsetY} min="-200" max="200" style="width: 100%;" />
          </label>
        </div>
        
        <div style="margin-bottom: 15px;">
          <label>
            <strong>Skalierung:</strong> {scale.toFixed(2)}x
            <input type="range" bind:value={scale} min="0.1" max="3" step="0.1" style="width: 100%;" />
          </label>
        </div>
      </div>
    </details>
    
    <!-- Row Settings -->
    <details open={!rowCollapsed} on:toggle={(e) => rowCollapsed = !e.target.open} style="margin-top: 15px;">
      <summary style="cursor: pointer; font-weight: bold; padding: 10px; background: #e0e0e0; margin: -10px -10px 10px -10px; user-select: none;">
        Reihen-Konfiguration
        <button on:click|stopPropagation={resetRows} style="float: right; padding: 2px 8px; font-size: 11px; background: #ff9999; border: none; border-radius: 3px; cursor: pointer;">
          Reset
        </button>
      </summary>
      <div style="padding: 10px 0;">
        <div style="margin-bottom: 15px;">
          <label>
            <strong>Basis Start-X:</strong> {baseStartX}px
            <input type="range" bind:value={baseStartX} min="50" max="200" style="width: 100%;" />
          </label>
        </div>
        
        <div style="margin-bottom: 15px;">
          <label>
            <strong>Row Offset-X:</strong> {rowOffsetX}px
            <input type="range" bind:value={rowOffsetX} min="-100" max="100" style="width: 100%;" />
          </label>
        </div>
        
        <div style="margin-bottom: 15px;">
          <label>
            <strong>Row 3/4 Spacing:</strong> {rowSpacing}px
            <input type="range" bind:value={rowSpacing} min="0" max="100" style="width: 100%;" />
          </label>
        </div>
      </div>
    </details>
    
    <!-- Color Settings -->
    <details open={!colorCollapsed} on:toggle={(e) => colorCollapsed = !e.target.open} style="margin-top: 15px;">
      <summary style="cursor: pointer; font-weight: bold; padding: 10px; background: #e0e0e0; margin: -10px -10px 10px -10px; user-select: none;">
        Farben
        <button on:click|stopPropagation={resetColors} style="float: right; padding: 2px 8px; font-size: 11px; background: #ff9999; border: none; border-radius: 3px; cursor: pointer;">
          Reset
        </button>
      </summary>
      <div style="padding: 10px 0;">
        <div style="margin-bottom: 15px;">
          <label>
            <strong>Trapez:</strong>
            <input type="color" bind:value={trapezColor} style="width: 100%; height: 40px;" />
          </label>
        </div>
        
        <div style="margin-bottom: 15px;">
          <label>
            <strong>Dreieck:</strong>
            <input type="color" bind:value={dreieckColor} style="width: 100%; height: 40px;" />
          </label>
        </div>
        
        <div style="margin-bottom: 15px;">
          <label>
            <strong>Parallelogramm:</strong>
            <input type="color" bind:value={parallelogrammColor} style="width: 100%; height: 40px;" />
          </label>
        </div>
      </div>
    </details>
  </div>

  <!-- SVG Canvas -->
  <div style="flex: 1; overflow: auto;">
    <svg viewBox="0 0 {viewBoxWidth} {viewBoxHeight}" style="border: 1px solid black; width: 100%; min-height: 100%;">
      <rect x="0" y="0" width="{viewBoxWidth}" height="{viewBoxHeight}" fill="#ffffff" stroke="none" />
      
      <g transform="scale({scale})">
        {#each allElements as element}
          <polygon
            points={element.getPoints()}
            fill={element.type === 'trapez' ? trapezColor : element.type === 'dreieck' ? dreieckColor : parallelogrammColor}
            stroke="black"
            stroke-width="1"
            transform={element.getTransform()}
        />
      {/each}
      </g>
    </svg>
  </div>
</div>

<style>
  details {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 4px;
    background: white;
  }
  
  details[open] {
    border-color: #999;
  }
  
  summary {
    border-radius: 4px;
  }
  
  summary:hover {
    background: #d0d0d0 !important;
  }
</style>