<script>
  import { Pattern } from './Pattern.svelte';
  import ControlPanel from './ControlPanel.svelte';

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
  <div style="position: absolute; left: 0; top: 0; height: 100%; z-index: 100;">
    <ControlPanel
      bind:rows
      bind:cols
      bind:segmentWidth
      bind:segmentHeight
      bind:segmentOffsetX
      bind:segmentOffsetY
      bind:scale
      bind:trapezColor
      bind:dreieckColor
      bind:parallelogrammColor
      bind:rowOffsetX
      bind:rowSpacing
      bind:baseStartX
      {DEFAULTS}
    />
  </div>

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