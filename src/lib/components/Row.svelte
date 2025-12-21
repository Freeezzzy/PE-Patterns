<script context="module">
  import { Trapez } from './Trapez.svelte';
  import { Dreieck } from './Dreieck.svelte';
  import { Parallelogramm } from './Parallelogramm.svelte';

  export class Row {
    constructor(y, offsetX = 0, reverse = false, options = {}) {
      this.y = y;
      this.offsetX = offsetX;
      this.reverse = reverse;
      this.options = options;
      this.h = Math.sin(Math.PI / 3) * 50;
      this.elements = [];
      this.generateElements();
    }

    generateElements() {
      // Standard-Reihe (wie Row 1 aus 5_MusterZwei)
      let trapezPositions = [
        { x: 100, y: this.y, rotation: 0 },
        { x: 125, y: this.y - this.h, rotation: 0 },
        { x: 175, y: this.y, rotation: 180 },
        { x: 200, y: this.y - this.h, rotation: 180 },
        { x: 250, y: this.y, rotation: 0 },
        { x: 275, y: this.y - this.h, rotation: 0 },
        { x: 350, y: this.y, rotation: 0 },
        { x: 375, y: this.y - this.h, rotation: 0 },
        { x: 475, y: this.y, rotation: 180 },
        { x: 500, y: this.y - this.h, rotation: 180 }
      ];

      // Wenn reverse = true, spiegle die x-Positionen
      if (this.reverse) {
        const maxX = 600;
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

      // Füge Trapeze hinzu
      const trapezColor = this.options.trapezColor || 'beige';
      trapezPositions.forEach(pos => {
        this.elements.push(new Trapez(pos.x, pos.y, pos.rotation, trapezColor));
      });

      // Dreiecke und Parallelogramme (mit Offset)
      let dreieckX1 = 325;
      let dreieckX2 = 300;
      let paraX1 = 425;
      let paraX2 = 400;

      // Bei reverse: spiegle die X-Positionen
      if (this.reverse) {
        const maxX = 600;
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
      
      this.elements.push(new Dreieck(dreieckX1, this.y - 43.301, 0, dreieckColor));
      this.elements.push(new Dreieck(dreieckX2, this.y, 0, dreieckColor));
      this.elements.push(new Parallelogramm(paraX1, this.y - 43.301, 0, parallelogrammColor, this.reverse));
      this.elements.push(new Parallelogramm(paraX2, this.y, 0, parallelogrammColor, this.reverse));
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
