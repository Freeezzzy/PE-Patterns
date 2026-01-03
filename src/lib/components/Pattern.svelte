<script context="module">
  import { Segment } from './Segment.svelte';

  export class Pattern {
    constructor(startY = 100, options = {}) {
      this.startY = startY;
      this.h = Math.sin(Math.PI / 3) * 50;
      
      // Konfigurierbare Parameter mit Defaults
      this.segmentWidth = options.segmentWidth || 450;
      this.segmentHeight = options.segmentHeight || (8 * this.h);
      this.segmentOffsetX = options.segmentOffsetX || 0;
      this.segmentOffsetY = options.segmentOffsetY || 0;
      this.trapezColor = options.trapezColor || 'beige';
      this.dreieckColor = options.dreieckColor || 'teal';
      this.parallelogrammColor = options.parallelogrammColor || 'midnightblue';
      
      // Row-Konfiguration
      this.rowOffsetX = options.rowOffsetX || 0;
      this.rowSpacing = options.rowSpacing !== undefined ? options.rowSpacing : 50;
      this.baseStartX = options.baseStartX || 100;
      
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
      
      // Modulo-Option
      this.useModulo = options.useModulo !== undefined ? options.useModulo : true;
      
      this.segments = [];
    }

    // Füge Segment an Grid-Position (row, col) hinzu
    addSegment(row, col) {
      const offsetX = col * this.segmentWidth + this.segmentOffsetX;
      const offsetY = row * this.segmentHeight + this.segmentOffsetY;
      const segment = new Segment(this.startY + offsetY, offsetX, {
        rowOffsetX: this.rowOffsetX,
        rowSpacing: this.rowSpacing,
        baseStartX: this.baseStartX,
        trapezColor: this.trapezColor,
        dreieckColor: this.dreieckColor,
        parallelogrammColor: this.parallelogrammColor,
        row1OffsetX: this.row1OffsetX,
        row2OffsetX: this.row2OffsetX,
        row3OffsetX: this.row3OffsetX,
        row4OffsetX: this.row4OffsetX,
        row1Mirror: this.row1Mirror,
        row2Mirror: this.row2Mirror,
        row3Mirror: this.row3Mirror,
        row4Mirror: this.row4Mirror,
        useModulo: this.useModulo
      });
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
    
    // Aktualisiere Options und regeneriere alle Segments
    updateOptions(newOptions) {
      Object.assign(this, newOptions);
      this.segments.forEach(({ segment }) => {
        segment.options = { ...segment.options, ...newOptions };
        segment.rows = [];
        segment.generateRows(this.startY + (segment.offsetX / this.segmentWidth) * this.segmentHeight);
      });
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
