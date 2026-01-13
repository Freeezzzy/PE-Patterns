<script>
  import { Pattern } from './Pattern.svelte';
  import Toggle from '$lib/ui/Toggle.svelte';

  // Default-Werte (feste Farben und Grid)
  const DEFAULTS = {
    rows: 4,
    cols: 4,
    startY: -149,
    segmentWidth: 450,
    segmentHeight: 346,
    segmentOffsetX: 0,
    segmentOffsetY: 0,
    scale: 1,
    trapezColor: '#e0f2e9',
    dreieckColor: '#3cb371',
    parallelogrammColor: '#2f4f2f',
    rowOffsetX: 0,
    rowSpacing: 50,
    baseStartX: -440
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
  const trapezColor = DEFAULTS.trapezColor;
  const dreieckColor = DEFAULTS.dreieckColor;
  const parallelogrammColor = DEFAULTS.parallelogrammColor;

  // Nur Spiegelung ist änderbar
  const rowOffsetX = DEFAULTS.rowOffsetX;
  const rowSpacing = DEFAULTS.rowSpacing;
  const baseStartX = DEFAULTS.baseStartX;
  let mirrorRow1 = false;
  let mirrorRow2 = true;  // Default: Row 2 ist gespiegelt
  let mirrorRow3 = true;  // Default: Row 3 ist gespiegelt
  let mirrorRow4 = false;

  // UI State
  let panelCollapsed = false;
  
  let pattern;

  function resetAll() {
    mirrorRow1 = false;
    mirrorRow2 = true;
    mirrorRow3 = true;
    mirrorRow4 = false;
  }
  
  // Berechne Pattern basierend auf Parametern - wird komplett neu generiert wenn Spiegelungen sich ändern
  $: patternKey = `${mirrorRow1}-${mirrorRow2}-${mirrorRow3}-${mirrorRow4}`;
  
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
      row1Mirror: mirrorRow1,
      row2Mirror: mirrorRow2,
      row3Mirror: mirrorRow3,
      row4Mirror: mirrorRow4
    });
    newPattern.generateGrid(rows, cols);
    return newPattern.getAllElements();
  })();
  
  // Berechne viewBox - quadratisch
  const h = Math.sin(Math.PI / 3) * 50;
  $: viewBoxSize = 1000;
  $: viewBoxWidth = viewBoxSize;
  $: viewBoxHeight = viewBoxSize;
  
  // Berechne die echte Bounding Box des Patterns
  $: patternStartX = baseStartX + rowOffsetX + segmentOffsetX;
  $: patternEndX = patternStartX + (cols * segmentWidth);
  $: patternRealWidth = patternEndX - patternStartX;
  
  $: patternStartY = startY;
  $: patternEndY = startY + (rows * segmentHeight) + segmentOffsetY;
  $: patternRealHeight = patternEndY - patternStartY;
  
  // Kein zusätzliches Zentrieren - Pattern wird direkt gezeichnet
  $: centerX = 0;
  $: centerY = 0;
</script>

<div style="position: relative; width: 100vw; height: 100vh;">
  <!-- Controls Panel (absolut positioniert) -->
  {#if !panelCollapsed}
    <div class="sidebar">
      <div class="sidebar-header">
        <h3>Pattern C - Reihen-Spiegelung</h3>
        <button class="reset-all-btn" on:click={resetAll}>Reset</button>
      </div>

      <div class="sidebar-content">
        <section>
          <h4>Reihen-Spiegelung</h4>
          <p class="description">Spiegele jede Reihe einzeln. Jedes Segment hat 4 Reihen.</p>
          <Toggle bind:value={mirrorRow1} label="Reihe 1 spiegeln" />
          <Toggle bind:value={mirrorRow2} label="Reihe 2 spiegeln" />
          <Toggle bind:value={mirrorRow3} label="Reihe 3 spiegeln" />
          <Toggle bind:value={mirrorRow4} label="Reihe 4 spiegeln" />
        </section>
      </div>
    </div>
  {/if}

  <button class="toggle-button" class:collapsed={panelCollapsed} on:click={() => panelCollapsed = !panelCollapsed}>
    <span class="arrow">{panelCollapsed ? '›' : '‹'}</span>
  </button>

  <!-- SVG Canvas (immer zentriert) -->
  <div style="width: 100%; height: 100%; display: flex; align-items: flex-start; justify-content: center; overflow: auto; padding-top: 20px;">
    <svg viewBox="0 0 {viewBoxWidth} {viewBoxHeight}" style="border: 1px solid black; width: 1000px; height: 1000px;">
      <rect x="0" y="0" width="{viewBoxWidth}" height="{viewBoxHeight}" fill="#2d2d2dff" stroke="none" />
      
      <g transform="translate({centerX}, {centerY}) scale({scale})">
        {#key patternKey}
          {#each allElements as element, i}
            <polygon
              points={element.getPoints()}
              fill={element.type === 'trapez' ? trapezColor : element.type === 'dreieck' ? dreieckColor : parallelogrammColor}
              stroke="black"
              stroke-width="1"
              transform={element.getTransform()}
          />
        {/each}
        {/key}
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
