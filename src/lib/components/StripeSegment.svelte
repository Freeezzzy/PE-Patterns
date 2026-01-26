<script context="module">
  import { StripeRow } from './StripeRow.svelte';

  export class StripeSegment {
    constructor(startY = 100, offsetX = 0, options = {}) {
      this.h = Math.sin(Math.PI / 3) * 50;
      this.offsetX = offsetX;
      this.options = options;
      this.rows = [];
      
      this.generateRows(startY);
    }

    generateRows(startY) {
      const baseOffsetX = this.options.rowOffsetX || 0;
      const baseStartX = this.options.baseStartX || 0;
      const rowSpacing = this.options.rowSpacing !== undefined ? this.options.rowSpacing : 0;
      
      // Individuelle Row-Offsets (falls vorhanden)
      const row1OffsetX = this.options.row1OffsetX !== undefined ? this.options.row1OffsetX : 0;
      const row2OffsetX = this.options.row2OffsetX !== undefined ? this.options.row2OffsetX : 0;
      const row3OffsetX = this.options.row3OffsetX !== undefined ? this.options.row3OffsetX : 0;
      const row4OffsetX = this.options.row4OffsetX !== undefined ? this.options.row4OffsetX : 0;
      
      // Spiegelungs-Flags (falls vorhanden)
      const row1Mirror = this.options.row1Mirror !== undefined ? this.options.row1Mirror : false;
      const row2Mirror = this.options.row2Mirror !== undefined ? this.options.row2Mirror : false;
      const row3Mirror = this.options.row3Mirror !== undefined ? this.options.row3Mirror : false;
      const row4Mirror = this.options.row4Mirror !== undefined ? this.options.row4Mirror : false;
      
      const colorTop = this.options.colorTop || '#ffffff';
      const colorBottom = this.options.colorBottom || '#ffffff';
      const colorTri = this.options.colorTri || '#c52b1e';
      const countPerRow = this.options.countPerRow || 7;
      
      // 4 Reihen wie bei Segment
      // Row 1: Standard bei x=0
      this.rows.push(new StripeRow(startY, countPerRow, {
        colorTop,
        colorBottom,
        colorTri,
        offsetX: this.offsetX + baseStartX + baseOffsetX + row1OffsetX,
        mirror: row1Mirror
      }));
      
      // Row 2: Verschoben um -50 (verzahnt mit Row 1)
      this.rows.push(new StripeRow(startY + 2 * this.h, countPerRow, {
        colorTop,
        colorBottom,
        colorTri,
        offsetX: this.offsetX + baseStartX + baseOffsetX + row2OffsetX - 50,
        mirror: row2Mirror
      }));
      
      // Row 3: Verschoben um -100
      this.rows.push(new StripeRow(startY + 4 * this.h, countPerRow, {
        colorTop,
        colorBottom,
        colorTri,
        offsetX: this.offsetX + baseStartX + baseOffsetX + row3OffsetX - 100,
        mirror: row3Mirror
      }));
      
      // Row 4: Verschoben um -150 (verzahnt mit Row 3)
      this.rows.push(new StripeRow(startY + 6 * this.h, countPerRow, {
        colorTop,
        colorBottom,
        colorTri,
        offsetX: this.offsetX + baseStartX + baseOffsetX + row4OffsetX - 150,
        mirror: row4Mirror
      }));
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
  // Demo: Zeigt ein komplettes StripeSegment (4 Reihen)
  let segment = new StripeSegment(100, 0, {
    colorTop: '#f3e5f5',
    colorBottom: '#f3e5f5',
    colorTri: '#c2185b',
    baseStartX: 0,
    countPerRow: 5,
    row1OffsetX: 0,
    row2OffsetX: 0,
    row3OffsetX: 0,
    row4OffsetX: 0,
    row1Mirror: false,
    row2Mirror: true,
    row3Mirror: true,
    row4Mirror: false
  });
  let elements = segment.getAllElements();
</script>

<svg viewBox="0 0 1000 500" style="border: 1px solid black; width: 100%; height: 500px;">
  <rect x="0" y="0" width="1000" height="500" fill="#2d2d2d" />
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
