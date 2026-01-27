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
  let useModulo = DEFAULTS.useModulo;

  // UI State
  let pattern;

  function resetAll() {
    mirrorRow1 = false;
    mirrorRow2 = true;
    mirrorRow3 = true;
    mirrorRow4 = false;
    useModulo = DEFAULTS.useModulo;
  }
  
  // Berechne Pattern basierend auf Parametern - wird komplett neu generiert wenn Spiegelungen sich ändern
  $: patternKey = `${mirrorRow1}-${mirrorRow2}-${mirrorRow3}-${mirrorRow4}-${useModulo}`;
  
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
      row4Mirror: mirrorRow4,
      useModulo
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

<div class="svg-container">
  <svg viewBox="0 0 {viewBoxWidth} {viewBoxHeight}" class="svg-canvas">
    <rect x="0" y="0" width="{viewBoxWidth}" height="{viewBoxHeight}" fill="#2d2d2dff" stroke="none" />
    
    <g transform="translate({centerX}, {centerY}) scale({scale})">
      {#key patternKey}
        {#each allElements as element, i}
          <polygon
            points={element.getPoints()}
            fill={element.fill}
            stroke="black"
            stroke-width="1"
            transform={element.getTransform()}
        />
      {/each}
      {/key}
    </g>
  </svg>
</div>

<div class="sidebar-right">
  <button onclick={resetAll}>Reset All</button>

  <hr/>
  <p class="description">Wechsle zwischen Original- und Negativfarben bei aufeinanderfolgenden Elementen.</p>
  <Toggle bind:value={useModulo} label="Modulo aktivieren" />

  <hr/>

  <p class="description">Spiegele jede Reihe einzeln. Jedes Segment hat 4 Reihen.</p>
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
  }
</style>
