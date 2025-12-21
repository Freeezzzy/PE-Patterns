<script context="module">
  import { Row } from './Row.svelte';

  export class Segment {
    constructor(startY = 100, offsetX = 0) {
      this.h = Math.sin(Math.PI / 3) * 50;
      this.offsetX = offsetX;
      this.rows = [];
      this.generateRows(startY);
    }

    generateRows(startY) {
      // 4 Reihen mit unterschiedlichen Transformationen wie in 5_MusterZwei
      // Row 1: Standard (100-500)
      this.rows.push(new Row(startY, this.offsetX, false));
      
      // Row 2: Gespiegelt (500-100)
      this.rows.push(new Row(startY + 2 * this.h, this.offsetX, true));
      
      // Row 3: Offset +50, gespiegelt (550-150)
      this.rows.push(new Row(startY + 4 * this.h, this.offsetX + 50, true));
      
      // Row 4: Offset +50 (150-550)
      this.rows.push(new Row(startY + 6 * this.h, this.offsetX + 50, false));
    }

    getAllElements() {
      let allElements = [];
      this.rows.forEach(row => {
        allElements = [...allElements, ...row.getAllElements()];
      });
      return allElements;
    }
  }
</script>

<script>
  // Demo: Zeigt ein komplettes Segment (4 Reihen)
  let segment = new Segment(100, 0);
  let elements = segment.getAllElements();
</script>

<svg viewBox="0 0 1000 1000" style="border: 1px solid black; width: 100%; height: 100vh;">
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
