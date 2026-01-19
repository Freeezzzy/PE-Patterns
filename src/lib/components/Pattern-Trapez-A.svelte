<script>
  import { Pattern } from './Pattern.svelte';
  import EditableColorPalette from '$lib/ui/EditableColorPalette.svelte';
  import Toggle from '$lib/ui/Toggle.svelte';

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
    useModulo: false
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

  // Nur Farben sind änderbar
  let trapezColor = DEFAULTS.trapezColor;
  let dreieckColor = DEFAULTS.dreieckColor;
  let parallelogrammColor = DEFAULTS.parallelogrammColor;
  
  // Modulo-Option
  let useModulo = DEFAULTS.useModulo;

  // UI State
  let selectedColorIndex = 0;
  let colors = [trapezColor, dreieckColor, parallelogrammColor];

  // Update colors when palette changes
  $: trapezColor = colors[0] || DEFAULTS.trapezColor;
  $: dreieckColor = colors[1] || DEFAULTS.dreieckColor;
  $: parallelogrammColor = colors[2] || DEFAULTS.parallelogrammColor;

  function resetAll() {
    colors = [DEFAULTS.trapezColor, DEFAULTS.dreieckColor, DEFAULTS.parallelogrammColor];
    useModulo = DEFAULTS.useModulo;
  }
  
  // PatternKey für Re-Rendering bei Änderungen
  $: patternKey = `${useModulo}-${colors.join('-')}`;
  
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
      useModulo
    });
    newPattern.generateGrid(rows, cols);
    return newPattern.getAllElements();
  })();
  
  // Berechne viewBox - quadratisch
  const h = Math.sin(Math.PI / 3) * 50;
  $: viewBoxSize = 1000; // Feste quadratische Größe
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
  
  // Kein zusätzliches Zentrieren - Pattern wird direkt gezeichnet
  $: centerX = 0;
  $: centerY = 0;
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
  <div>
    <h4>Pattern A - Farbänderungen</h4>
    <button onclick={resetAll}>Reset All</button>
  </div>

  <p class="description">In diesem Pattern können nur die Farben geändert werden. Die Geometrie ist fest.</p>
  
  <EditableColorPalette
    bind:colors
    bind:selectedColorIndex
    width={310}
    height={310}
    swatchSize={30}
  />
  
  <hr/>
  
  <h4>Modulo-Logik</h4>
  <p class="description">Wechsle zwischen Original- und Negativfarben bei aufeinanderfolgenden Elementen.</p>
  <Toggle bind:value={useModulo} label="Modulo aktivieren" />
</div>