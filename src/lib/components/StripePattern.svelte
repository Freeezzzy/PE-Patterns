<script context="module">
  import { StripeSegment } from './StripeSegment.svelte';

  export class StripePattern {
    constructor(startY = 100, options = {}) {
      this.startY = startY;
      this.h = Math.sin(Math.PI / 3) * 50;
      
      // Konfigurierbare Parameter mit Defaults
      this.segmentWidth = options.segmentWidth || 450;
      this.segmentHeight = options.segmentHeight || (8 * this.h);
      this.segmentOffsetX = options.segmentOffsetX || 0;
      this.segmentOffsetY = options.segmentOffsetY || 0;
      this.segmentSpacingX = options.segmentSpacingX !== undefined ? options.segmentSpacingX : 0;
      this.segmentSpacingY = options.segmentSpacingY !== undefined ? options.segmentSpacingY : 0;
      this.colorTop = options.colorTop || '#ffffff';
      this.colorBottom = options.colorBottom || '#ffffff';
      this.colorTri = options.colorTri || '#c52b1e';
      
      // Row-Konfiguration
      this.rowOffsetX = options.rowOffsetX || 0;
      this.rowSpacing = options.rowSpacing !== undefined ? options.rowSpacing : 0;
      this.baseStartX = options.baseStartX || 100;
      this.countPerRow = options.countPerRow || 7;
      
      // Individuelle Row-Offsets
      this.row1OffsetX = options.row1OffsetX;
      this.row2OffsetX = options.row2OffsetX;
      this.row3OffsetX = options.row3OffsetX;
      this.row4OffsetX = options.row4OffsetX;
      
      // Row-Spiegelungen
      this.row1Mirror = options.row1Mirror;
      this.row2Mirror = options.row2Mirror;
      this.row3Mirror = options.row3Mirror;
      this.row4Mirror = options.row4Mirror;
      
      this.segments = [];
    }

    // Füge Segment an Grid-Position (row, col) hinzu
    addSegment(row, col) {
      // Spacing: Segmente bewegen sich proportional zur Distanz vom Zentrum
      const centerCol = (this.cols - 1) / 2;
      const centerRow = (this.rows - 1) / 2;
      
      const distX = col - centerCol;
      const distY = row - centerRow;
      
      const spacingOffsetX = distX * this.segmentSpacingX;
      const spacingOffsetY = distY * this.segmentSpacingY;
      
      const offsetX = col * this.segmentWidth + this.segmentOffsetX + spacingOffsetX;
      const offsetY = row * this.segmentHeight + this.segmentOffsetY + spacingOffsetY;
      const segment = new StripeSegment(this.startY + offsetY, offsetX, {
        rowOffsetX: this.rowOffsetX,
        rowSpacing: this.rowSpacing,
        baseStartX: this.baseStartX,
        colorTop: this.colorTop,
        colorBottom: this.colorBottom,
        colorTri: this.colorTri,
        countPerRow: this.countPerRow,
        row1OffsetX: this.row1OffsetX,
        row2OffsetX: this.row2OffsetX,
        row3OffsetX: this.row3OffsetX,
        row4OffsetX: this.row4OffsetX,
        row1Mirror: this.row1Mirror,
        row2Mirror: this.row2Mirror,
        row3Mirror: this.row3Mirror,
        row4Mirror: this.row4Mirror
      });
      this.segments.push({ segment, row, col });
      return segment;
    }

    // Generiere Grid automatisch (rows x cols)
    generateGrid(rows, cols) {
      this.segments = [];
      this.rows = rows;
      this.cols = cols;
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
  // Demo: Zeigt ein StripePattern mit 2x2 Segmenten
  let pattern = new StripePattern(100);
  pattern.generateGrid(2, 2);
  let elements = pattern.getAllElements();
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
