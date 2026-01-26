<script>
  import { Pattern } from './Pattern.svelte';
  import Toggle from '$lib/ui/Toggle.svelte';
  import EditableColorPalette from '$lib/ui/EditableColorPalette.svelte';

  // Feste Parameter - 4x4 Grid
  const rows = 4;
  const cols = 4;
  const startY = -149;
  const segmentWidth = 450;
  const segmentHeight = 346;
  const segmentOffsetX = 0;
  const segmentOffsetY = 0;
  const scale = 1;
  const rowOffsetX = 0;
  const rowSpacing = 50;
  const baseStartX = -440;

  // Modulo-Option
  let useModulo = $state(true);

  // Farben (nur Trapez und Dreieck, keine Parallelogramme)
  let trapezColor = $state('#f5f5dc');
  let dreieckColor = $state('#008080');

  // Berechne alle Elemente basierend auf den aktuellen Werten
  let allElements = $derived.by(() => {
    const pattern = new Pattern(startY, {
      segmentWidth,
      segmentHeight,
      segmentOffsetX,
      segmentOffsetY,
      trapezColor,
      dreieckColor,
      rowOffsetX,
      rowSpacing,
      baseStartX,
      useModulo
    });
    pattern.generateGrid(rows, cols);
    return pattern.getAllElements();
  });

  function handleColorChange(event) {
    const { index, color } = event.detail;
    if (index === 0) trapezColor = color;
    if (index === 1) dreieckColor = color;
  }
</script>

<div class="container">
  <div class="controls">
    <h2>VV1 Pattern Grid (4x4)</h2>
    
    <div class="control-group">
      <h3>Farbpalette</h3>
      <EditableColorPalette 
        colors={[trapezColor, dreieckColor]} 
        on:colorChange={handleColorChange}
      />
    </div>
    
    <div class="control-group">
      <h3>Optionen</h3>
      <Toggle label="Modulo verwenden" bind:checked={useModulo} />
    </div>
  </div>

  <div class="canvas">
    <svg viewBox="0 0 2000 2000" style="width: 100%; height: 100%;">
      {#each allElements as element}
        <polygon
          points={element.getPoints()}
          fill={element.fill}
          stroke="black"
          stroke-width="1"
          transform={element.getTransform()}
        />
      {/each}
    </svg>
  </div>
</div>

<style>
  .container {
    display: flex;
    height: 100vh;
    gap: 20px;
    padding: 20px;
  }

  .controls {
    width: 300px;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 8px;
    overflow-y: auto;
  }

  .control-group {
    margin-bottom: 30px;
  }

  h2 {
    margin-top: 0;
    font-size: 1.5rem;
  }

  h3 {
    margin-bottom: 10px;
    font-size: 1rem;
    color: #333;
  }

  .canvas {
    flex: 1;
    border: 1px solid #ccc;
    background: white;
  }
</style>
