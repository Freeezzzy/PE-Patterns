<script>
  import { Pattern } from './Pattern.svelte';
  import Slider from '$lib/ui/Slider.svelte';

  // Default-Werte (feste Geometrie)
  const DEFAULTS = {
    rows: 2,
    cols: 2,
    startY: 197,
    segmentWidth: 450,
    segmentHeight: 346,
    segmentSpacingX: 0,
    segmentSpacingY: 0,
    scale: 1,
    trapezColor: '#ffd7b5',
    dreieckColor: '#d2691e',
    parallelogrammColor: '#8b4513',
    rowOffsetX: 0,
    rowSpacing: 50
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
  let segmentSpacingX = DEFAULTS.segmentSpacingX;
  let segmentSpacingY = DEFAULTS.segmentSpacingY;
  let rowOffsetX = DEFAULTS.rowOffsetX;
  let rowSpacing = DEFAULTS.rowSpacing;
  
  // Individuelle Row-Offsets
  let row1OffsetX = 0;
  let row2OffsetX = 0;
  let row3OffsetX = 50;
  let row4OffsetX = 50;
  
  // baseStartX am linken Rand
  const viewBoxSize = 1000;
  const baseStartX = 10;
  
  let pattern;

  // UI State
  let panelCollapsed = false;

  function resetAll() {
    segmentWidth = DEFAULTS.segmentWidth;
    segmentHeight = DEFAULTS.segmentHeight;
    segmentSpacingX = DEFAULTS.segmentSpacingX;
    segmentSpacingY = DEFAULTS.segmentSpacingY;
    rowOffsetX = DEFAULTS.rowOffsetX;
    rowSpacing = DEFAULTS.rowSpacing;
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
      segmentSpacingX,
      segmentSpacingY,
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
  $: viewBoxWidth = viewBoxSize;
  $: viewBoxHeight = viewBoxSize;
  
  // Berechne die echte Bounding Box des Patterns
  $: patternStartX = baseStartX + rowOffsetX - segmentSpacingX;
  $: patternEndX = patternStartX + (cols * segmentWidth) + (2 * segmentSpacingX);
  $: patternRealWidth = patternEndX - patternStartX;
  
  $: patternStartY = startY - segmentSpacingY;
  $: patternEndY = startY + (rows * segmentHeight) + segmentSpacingY;
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
        <h3>Pattern B - Positionen & Abstände</h3>
        <button class="reset-all-btn" on:click={resetAll}>Reset</button>
      </div>

      <div class="sidebar-content">
        <section>
          <h4>Segment-Abstände</h4>
          <p class="description">Bewege Segmente von der Mitte des Canvas weg (oben/unten, links/rechts).</p>
          <Slider min={0} max={100} bind:value={segmentSpacingX} label="Horizontal (px)" />
          <Slider min={0} max={100} bind:value={segmentSpacingY} label="Vertikal (px)" />
        </section>

        <section>
          <h4>Reihen X-Position</h4>
          <p class="description">Stelle die X-Position jeder Reihe individuell ein.</p>
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
    <svg viewBox="0 0 {viewBoxWidth} {viewBoxHeight}" style="border: 1px solid black; width: 1000px; height: 1000px;">
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
