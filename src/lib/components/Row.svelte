<script context="module">
  import { Trapez } from './Trapez.svelte';
  import { Dreieck } from './Dreieck.svelte';
  import { Parallelogramm } from './Parallelogramm.svelte';

  export class Row {
    constructor(y, offsetX = 0, reverse = false, options = {}, rowIndex = 0) {
      this.y = y;
      this.offsetX = offsetX;
      this.reverse = reverse;
      this.options = options;
      this.rowIndex = rowIndex;
      this.h = Math.sin(Math.PI / 3) * 50;
      this.elements = [];
      // Wrap-Grenzen aus options (optional)
      this.wrapWidth = options.wrapWidth || null;
      this.wrapHeight = options.wrapHeight || null;
      // Modulo-Option
      this.useModulo = options.useModulo !== undefined ? options.useModulo : true;
      this.generateElements();
    }

    generateElements() {
      // Standard-Reihe (wie Row 1 aus 5_MusterZwei)
      let trapezPositions = [
        { x: 40, y: this.y, rotation: 0 },
        { x: 65, y: this.y - this.h, rotation: 0 },
        { x: 115, y: this.y, rotation: 180 },
        { x: 140, y: this.y - this.h, rotation: 180 },
        { x: 190, y: this.y, rotation: 0 },
        { x: 215, y: this.y - this.h, rotation: 0 },
        { x: 290, y: this.y, rotation: 0 },
        { x: 315, y: this.y - this.h, rotation: 0 },
        { x: 415, y: this.y, rotation: 180 },
        { x: 440, y: this.y - this.h, rotation: 180 }
      ];

      // Wenn reverse = true, spiegle die x-Positionen
      if (this.reverse) {
        const maxX = 480;
        trapezPositions = trapezPositions.map(pos => ({
          ...pos,
          x: maxX - pos.x
        }));
      }

      // Wende offsetX an
      trapezPositions = trapezPositions.map(pos => ({
        ...pos,
        x: pos.x + this.offsetX
      }));

      // Füge Trapeze hinzu mit Modulo-Logik: Gerade = Original, Ungerade = Invertiert
      const trapezColor = this.options.trapezColor || 'beige';
      trapezPositions.forEach((pos, index) => {
        // Index innerhalb der Trapeze (0-9)
        this.elements.push(new Trapez(pos.x, pos.y, pos.rotation, trapezColor, this.wrapWidth, this.wrapHeight, null, index, this.useModulo));
      });

      // Dreiecke und Parallelogramme (mit Offset)
      let dreieckX1 = 265;
      let dreieckX2 = 240;
      let paraX1 = 365;
      let paraX2 = 340;

      // Bei reverse: spiegle die X-Positionen
      if (this.reverse) {
        const maxX = 480;
        dreieckX1 = maxX - dreieckX1;
        dreieckX2 = maxX - dreieckX2;
        paraX1 = maxX - paraX1;
        paraX2 = maxX - paraX2;
      }

      // Wende Offset an
      dreieckX1 += this.offsetX;
      dreieckX2 += this.offsetX;
      paraX1 += this.offsetX;
      paraX2 += this.offsetX;

      const dreieckColor = this.options.dreieckColor || 'teal';
      const parallelogrammColor = this.options.parallelogrammColor || 'blue';
      
      // Index innerhalb der Dreiecke/Parallelogramme (0, 1)
      this.elements.push(new Dreieck(dreieckX1, this.y - 43.301, 0, dreieckColor, this.wrapWidth, this.wrapHeight, null, 0, this.useModulo));
      this.elements.push(new Dreieck(dreieckX2, this.y, 0, dreieckColor, this.wrapWidth, this.wrapHeight, null, 1, this.useModulo));
      this.elements.push(new Parallelogramm(paraX1, this.y - 43.301, 0, parallelogrammColor, this.reverse, this.wrapWidth, this.wrapHeight, null, 0, this.useModulo));
      this.elements.push(new Parallelogramm(paraX2, this.y, 0, parallelogrammColor, this.reverse, this.wrapWidth, this.wrapHeight, null, 1, this.useModulo));
    }

    getAllElements() {
      return this.elements;
    }
  }
</script>

<script>
  // Demo: Zeigt Reihe 1
  let row = new Row(100, 0, false);
  let elements = row.getAllElements();
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
