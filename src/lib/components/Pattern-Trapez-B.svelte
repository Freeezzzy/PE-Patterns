<script>
  import { Pattern } from './Pattern.svelte';
  import Slider from '$lib/ui/Slider.svelte';

  // Default-Werte (feste Geometrie)
  const DEFAULTS = {
    rows: 2,
    cols: 2,
    startY: 100,
    segmentWidth: 450,
    segmentHeight: 346,
    segmentOffsetX: 0,
    segmentOffsetY: 0,
    scale: 1,
    trapezColor: '#FFD700',
    dreieckColor: '#FF6347',
    parallelogrammColor: '#4169E1',
    rowOffsetX: 0,
    rowSpacing: 50,
    baseStartX: 100
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
  let segmentOffsetX = DEFAULTS.segmentOffsetX;
  let segmentOffsetY = DEFAULTS.segmentOffsetY;
  let rowOffsetX = DEFAULTS.rowOffsetX;
  let rowSpacing = DEFAULTS.rowSpacing;
  let baseStartX = DEFAULTS.baseStartX;
  
  // Individuelle Row-Offsets
  let row1OffsetX = 0;
  let row2OffsetX = 0;
  let row3OffsetX = 50;
  let row4OffsetX = 50;
  
  let pattern;

  // UI State
  let panelCollapsed = false;

  function resetAll() {
    segmentWidth = DEFAULTS.segmentWidth;
    segmentHeight = DEFAULTS.segmentHeight;
    segmentOffsetX = DEFAULTS.segmentOffsetX;
    segmentOffsetY = DEFAULTS.segmentOffsetY;
    rowOffsetX = DEFAULTS.rowOffsetX;
    rowSpacing = DEFAULTS.rowSpacing;
    baseStartX = DEFAULTS.baseStartX;
    row1OffsetX = 0;
    row2OffsetX = 0;
    row3OffsetX = 50;
    row4OffsetX = 50;
  }
  
  // Berechne Pattern basierend auf Parametern - komplett neu erstellen bei Änderungen
  $: allElements = (() => {
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
      row1OffsetX,
      row2OffsetX,
      row3OffsetX,
      row4OffsetX
    });
    newPattern.generateGrid(rows, cols);
    pattern = newPattern;
    return newPattern.getAllElements();
  })();
  
  // Berechne viewBox - quadratisch
  const h = Math.sin(Math.PI / 3) * 50;
  $: viewBoxSize = 1200;
  $: viewBoxWidth = viewBoxSize;
  $: viewBoxHeight = viewBoxSize;
  
  // Berechne die echte Bounding Box des Patterns
  $: patternStartX = baseStartX + rowOffsetX + segmentOffsetX;
  $: patternEndX = patternStartX + (cols * segmentWidth);
  $: patternRealWidth = patternEndX - patternStartX;
  
  $: patternStartY = startY;
  $: patternEndY = startY + (rows * segmentHeight) + segmentOffsetY;
  $: patternRealHeight = patternEndY - patternStartY;
  
  // Zentriere Pattern in der viewBox
  $: centerX = (viewBoxWidth - (patternRealWidth * scale + patternStartX * scale)) / 2;
  $: centerY = (viewBoxHeight - (patternRealHeight * scale + patternStartY * scale)) / 2;
</script>

<div style="position: relative; width: 100vw; height: 100vh;">
  <!-- Controls Panel (absolut positioniert) -->
  {#if !panelCollapsed}
    <div class="sidebar">
      <div class="sidebar-header">
        <h3>Pattern B - Positionen & Abstände</h3>
        <button class="reset-all-btn" on:click={resetAll}>Reset</button>
      </div>

      <div class="sidebar-content">
        <section>
          <h4>Segment-Offset</h4>
          <p class="description">Verschiebe alle Segmente gemeinsam.</p>
          <Slider min={-50} max={50} bind:value={segmentOffsetX} label="Offset X (px)" />
          <Slider min={-50} max={50} bind:value={segmentOffsetY} label="Offset Y (px)" />
        </section>

        <section>
          <h4>Segment-Abstände</h4>
          <p class="description">Ändere die Abstände zwischen den Segmenten.</p>
          <Slider min={450} max={550} bind:value={segmentWidth} label="Horizontal (px)" />
          <Slider min={346} max={450} bind:value={segmentHeight} label="Vertikal (px)" />
        </section>

        <section>
          <h4>Reihen X-Position</h4>
          <p class="description">Stelle die X-Position jeder Reihe individuell ein.</p>
          <Slider min={100} max={150} bind:value={baseStartX} label="Basis Start-X (px)" />
          <Slider min={-20} max={20} bind:value={row1OffsetX} label="Reihe 1 Offset-X (px)" />
          <Slider min={-20} max={20} bind:value={row2OffsetX} label="Reihe 2 Offset-X (px)" />
          <Slider min={30} max={70} bind:value={row3OffsetX} label="Reihe 3 Offset-X (px)" />
          <Slider min={30} max={70} bind:value={row4OffsetX} label="Reihe 4 Offset-X (px)" />
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
