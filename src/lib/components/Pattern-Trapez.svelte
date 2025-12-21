<script>
  import { Pattern } from './Pattern.svelte';

  // Variabel steuerbare Parameter
  let rows = 2;      // Anzahl Reihen (vertikal)
  let cols = 2;      // Anzahl Spalten (horizontal)
  let startY = 100;  // Start Y-Position
  
  // Erstelle Pattern mit Grid
  let pattern = new Pattern(startY);
  pattern.generateGrid(rows, cols);
  
  let allElements = pattern.getAllElements();
  
  // Berechne viewBox basierend auf Grid-Größe
  const h = Math.sin(Math.PI / 3) * 50;
  const viewBoxWidth = 100 + cols * 450 + 100;
  const viewBoxHeight = startY + rows * 8 * h + 100;
</script>

<svg viewBox="0 0 {viewBoxWidth} {viewBoxHeight}" style="border: 1px solid black; width: 100%; height: 100vh;">
  <rect x="0" y="0" width="{viewBoxWidth}" height="{viewBoxHeight}" fill="#ffffff" stroke="none" />
  
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