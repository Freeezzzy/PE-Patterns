<script context="module">
  import { Segment } from './Segment.svelte';

  export class Pattern {
    constructor(startY = 100) {
      this.startY = startY;
      this.h = Math.sin(Math.PI / 3) * 50;
      this.segmentWidth = 450;    // Horizontaler Offset zwischen Segmenten
      this.segmentHeight = 8 * this.h;  // Vertikaler Offset zwischen Segmenten
      this.segments = [];
    }

    // Füge Segment an Grid-Position (row, col) hinzu
    addSegment(row, col) {
      const offsetX = col * this.segmentWidth;
      const offsetY = row * this.segmentHeight;
      const segment = new Segment(this.startY + offsetY, offsetX);
      this.segments.push({ segment, row, col });
      return segment;
    }

    // Generiere Grid automatisch (rows x cols)
    generateGrid(rows, cols) {
      this.segments = []; // Clear existing segments
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          this.addSegment(row, col);
        }
      }
    }

    // Hole alle Elemente von allen Segmenten
    getAllElements() {
      let allElements = [];
      this.segments.forEach(({ segment }) => {
        allElements = [...allElements, ...segment.getAllElements()];
      });
      return allElements;
    }
  }
</script>

<script>
  // Demo: Zeigt ein Pattern mit 2x2 Segmenten
  let pattern = new Pattern(100);
  pattern.generateGrid(2, 2);
  let elements = pattern.getAllElements();
</script>

<svg viewBox="0 0 1200 800" style="border: 1px solid black; width: 100%; height: 100vh;">
  {#each elements as element}
    <polygon
      points={element.getPoints()}
      fill={element.fill}
      stroke="black"
      stroke-width="1"
      transform={element.getTransform()}
    />
  {/each}
</svg>
