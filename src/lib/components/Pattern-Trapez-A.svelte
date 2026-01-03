<script>
  import { Pattern } from './Pattern.svelte';
  import Slider from '$lib/ui/Slider.svelte';
  import RangeSlider from '$lib/ui/RangeSlider.svelte';
  import Toggle from '$lib/ui/Toggle.svelte';
  import ColorPickerHSV from '$lib/ui/ColorPicker/ColorPickerHSV.svelte';
  import EditableColorPalette from '$lib/ui/EditableColorPalette.svelte';

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
    trapezColor: '#f5f5dc',
    dreieckColor: '#008080',
    parallelogrammColor: '#191970',
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

  // UI State
  let panelCollapsed = false;
  let selectedColorIndex = 0;
  let colors = [trapezColor, dreieckColor, parallelogrammColor];

  // Update colors when palette changes
  $: trapezColor = colors[0] || DEFAULTS.trapezColor;
  $: dreieckColor = colors[1] || DEFAULTS.dreieckColor;
  $: parallelogrammColor = colors[2] || DEFAULTS.parallelogrammColor;

  function resetAll() {
    rows = DEFAULTS.rows;
    cols = DEFAULTS.cols;
    segmentWidth = DEFAULTS.segmentWidth;
    segmentHeight = DEFAULTS.segmentHeight;
    segmentOffsetX = DEFAULTS.segmentOffsetX;
    segmentOffsetY = DEFAULTS.segmentOffsetY;
    scale = DEFAULTS.scale;
    colors = [DEFAULTS.trapezColor, DEFAULTS.dreieckColor, DEFAULTS.parallelogrammColor];
    rowOffsetX = DEFAULTS.rowOffsetX;
    rowSpacing = DEFAULTS.rowSpacing;
    baseStartX = DEFAULTS.baseStartX;
  }
  
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
  
  // Berechne viewBox - quadratisch
  const h = Math.sin(Math.PI / 3) * 50;
  $: viewBoxSize = 1200; // Feste quadratische Größe
  $: viewBoxWidth = viewBoxSize;
  $: viewBoxHeight = viewBoxSize;
  
  // Berechne die echte Bounding Box des Patterns
  // Pattern startet bei baseStartX (default 100) und hat cols * segmentWidth Breite
  $: patternStartX = baseStartX + rowOffsetX + segmentOffsetX;
  $: patternEndX = patternStartX + (cols * segmentWidth);
  $: patternRealWidth = patternEndX - patternStartX;
  
  $: patternStartY = startY;
  $: patternEndY = startY + (rows * segmentHeight) + segmentOffsetY;
  $: patternRealHeight = patternEndY - patternStartY;
  
  // Zentriere Pattern in der viewBox - berücksichtige dass Pattern bei patternStartX beginnt
  $: centerX = (viewBoxWidth - (patternRealWidth * scale + patternStartX * scale)) / 2;
  $: centerY = (viewBoxHeight - (patternRealHeight * scale + patternStartY * scale)) / 2;
</script>

<div style="position: relative; width: 100vw; height: 100vh;">
  <!-- Controls Panel (absolut positioniert) -->
  {#if !panelCollapsed}
    <div class="sidebar">
      <div class="sidebar-header">
        <h3>Pattern A - Vollständige Kontrolle</h3>
        <button class="reset-all-btn" on:click={resetAll}>Reset All</button>
      </div>

      <div class="sidebar-content">
        <section>
          <h4>Grid Einstellungen</h4>
          <p class="description">Ändere alle Parameter des Patterns - Grid, Abstände, Farben und Positionen.</p>
          <Slider min={1} max={10} bind:value={rows} label="Reihen" />
          <Slider min={1} max={10} bind:value={cols} label="Spalten" />
        </section>

        <section>
          <h4>Abstände</h4>
          <Slider min={300} max={600} bind:value={segmentWidth} label="Horizontal (px)" />
          <Slider min={200} max={500} bind:value={segmentHeight} label="Vertikal (px)" />
          <Slider min={-200} max={200} bind:value={segmentOffsetX} label="Segment Offset-X (px)" />
          <Slider min={-200} max={200} bind:value={segmentOffsetY} label="Segment Offset-Y (px)" />
          <Slider min={0.1} max={3} step={0.1} bind:value={scale} label="Skalierung" />
        </section>

        <section>
          <h4>Reihen-Konfiguration</h4>
          <Slider min={50} max={200} bind:value={baseStartX} label="Basis Start-X (px)" />
          <Slider min={-100} max={100} bind:value={rowOffsetX} label="Row Offset-X (px)" />
          <Slider min={0} max={100} bind:value={rowSpacing} label="Row 3/4 Spacing (px)" />
        </section>

        <section>
          <h4>Farben</h4>
          <EditableColorPalette
            bind:colors
            bind:selectedColorIndex
            width={310}
            height={310}
            swatchSize={30}
          />
        </section>
      </div>
    </div>
  {/if}

  <button class="toggle-button" class:collapsed={panelCollapsed} on:click={() => panelCollapsed = !panelCollapsed}>
    <span class="arrow">{panelCollapsed ? '›' : '‹'}</span>
  </button>

  <!-- SVG Canvas (immer zentriert) -->
  <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; overflow: auto;">
    <svg viewBox="0 0 {viewBoxWidth} {viewBoxHeight}" style="border: 1px solid black; width: min(90vw, 90vh); height: min(90vw, 90vh);">
      <rect x="0" y="0" width="{viewBoxWidth}" height="{viewBoxHeight}" fill="#2d2d2dff" stroke="none" />
      
      <g transform="translate({centerX}, {centerY}) scale({scale})">
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
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
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

  .toggle-button {
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 80px;
    cursor: pointer;
    border: none;
    background: #666;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 0 8px 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    transition: all 0.2s;
  }

  .toggle-button:hover {
    background: #555;
  }

  .toggle-button.collapsed {
    left: 0;
  }

  .toggle-button:not(.collapsed) {
    left: 350px;
  }

  .toggle-button .arrow {
    font-size: 28px;
  }

  .toggle-button:active {
    transform: translateY(-50%) scale(0.95);
  }
</style>