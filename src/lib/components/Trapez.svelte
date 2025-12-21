<script context="module">
  export class Trapez {
    constructor(x, y, rotation = 0, fill = 'beige') {
      this.x = x;
      this.y = y;
      this.rotation = rotation;
      this.fill = fill;
      this.type = 'trapez';
      this.h = Math.sin(Math.PI / 3) * 50;
    }

    // Punkte für das Trapez-Polygon
    getPoints() {
      return `-25 ${-this.h/2}, 25 ${-this.h/2}, 50 ${this.h/2} -50 ${this.h/2}`;
    }

    // Transform-String für SVG
    getTransform() {
      if (this.rotation !== 0) {
        return `translate(${this.x} ${this.y}) rotate(${this.rotation})`;
      }
      return `translate(${this.x} ${this.y})`;
    }
  }
</script>

<script>
  let l = 50;
  let h = Math.sin(Math.PI / 3) * l;

  // Beispiel-Instanzen basierend auf Row1 aus MusterZwei
  const trapeze = [
    new Trapez(100, 100, 0),
    new Trapez(125, 100 - h, 0)
  ];
</script>

<svg viewBox="0 0 1000 1000" style="border: 1px solid black; width: 100%; height: 100vh;">
  {#each trapeze as trapez}
    <polygon
      points={trapez.getPoints()}
      fill={trapez.fill}
      stroke="black"
      stroke-width="1"
      transform={trapez.getTransform()}
    />
  {/each}
</svg>
