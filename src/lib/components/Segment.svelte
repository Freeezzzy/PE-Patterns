<script context="module">
  import { Row } from './Row.svelte';

  export class Segment {
    constructor(startY = 100, offsetX = 0, options = {}) {
      this.h = Math.sin(Math.PI / 3) * 50;
      this.offsetX = offsetX;
      this.options = options;
      this.rows = [];
      
      // Speichere useModulo als eigene Property (wie bei Mirror-Flags)
      this.useModulo = options.useModulo !== undefined ? options.useModulo : true;
      
      this.generateRows(startY);
    }

    generateRows(startY) {
      const baseOffsetX = this.options.rowOffsetX || 0;
      const rowSpacing = this.options.rowSpacing !== undefined ? this.options.rowSpacing : 50;
      
      // Individuelle Row-Offsets (falls vorhanden)
      const row1OffsetX = this.options.row1OffsetX !== undefined ? this.options.row1OffsetX : 0;
      const row2OffsetX = this.options.row2OffsetX !== undefined ? this.options.row2OffsetX : 0;
      const row3OffsetX = this.options.row3OffsetX !== undefined ? this.options.row3OffsetX : rowSpacing;
      const row4OffsetX = this.options.row4OffsetX !== undefined ? this.options.row4OffsetX : rowSpacing;
      
      // Spiegelungs-Flags (falls vorhanden)
      const row1Mirror = this.options.row1Mirror !== undefined ? this.options.row1Mirror : false;
      const row2Mirror = this.options.row2Mirror !== undefined ? this.options.row2Mirror : true;
      const row3Mirror = this.options.row3Mirror !== undefined ? this.options.row3Mirror : true;
      const row4Mirror = this.options.row4Mirror !== undefined ? this.options.row4Mirror : false;
      
      // Erstelle options-Objekt mit useModulo für Rows
      const rowOptions = {
        ...this.options,
        useModulo: this.useModulo
      };
      
      // 4 Reihen mit unterschiedlichen Transformationen
      // Row 1: Standard (100-500)
      this.rows.push(new Row(startY, this.offsetX + baseOffsetX + row1OffsetX, row1Mirror, rowOptions, 0));
      
      // Row 2: Gespiegelt (500-100)
      this.rows.push(new Row(startY + 2 * this.h, this.offsetX + baseOffsetX + row2OffsetX, row2Mirror, rowOptions, 1));
      
      // Row 3: Offset +rowSpacing, gespiegelt (550-150)
      this.rows.push(new Row(startY + 4 * this.h, this.offsetX + baseOffsetX + row3OffsetX, row3Mirror, rowOptions, 2));
      
      // Row 4: Offset +rowSpacing (150-550)
      this.rows.push(new Row(startY + 6 * this.h, this.offsetX + baseOffsetX + row4OffsetX, row4Mirror, rowOptions, 3));
    }

    getAllElements() {
      let allElements = [];
      this.rows.forEach(row => {
        allElements = [...allElements, ...row.getAllElements()];
      });
      return allElements;
    }
    
    // Regeneriere alle Rows mit neuen Optionen
    regenerateRows(startY, newOptions) {
      this.options = { ...this.options, ...newOptions };
      this.rows = [];
      this.generateRows(startY);
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
