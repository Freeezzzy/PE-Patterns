<script context="module">
  import { Row } from './Row.svelte';

  export class Segment {
    constructor(startY = 100, offsetX = 0, options = {}) {
      this.h = Math.sin(Math.PI / 3) * 50;
      this.offsetX = offsetX;
      this.options = options;
      this.rows = [];
      this.generateRows(startY);
    }

    generateRows(startY) {
      const baseOffsetX = this.options.rowOffsetX || 0;
      const rowSpacing = this.options.rowSpacing !== undefined ? this.options.rowSpacing : 50;
      
      // 4 Reihen mit unterschiedlichen Transformationen wie in 5_MusterZwei
      // Row 1: Standard (100-500)
      this.rows.push(new Row(startY, this.offsetX + baseOffsetX, false, this.options));
      
      // Row 2: Gespiegelt (500-100)
      this.rows.push(new Row(startY + 2 * this.h, this.offsetX + baseOffsetX, true, this.options));
      
      // Row 3: Offset +rowSpacing, gespiegelt (550-150)
      this.rows.push(new Row(startY + 4 * this.h, this.offsetX + baseOffsetX + rowSpacing, true, this.options));
      
      // Row 4: Offset +rowSpacing (150-550)
      this.rows.push(new Row(startY + 6 * this.h, this.offsetX + baseOffsetX + rowSpacing, false, this.options));
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
