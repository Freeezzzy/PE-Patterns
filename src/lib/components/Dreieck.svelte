<script context="module">
  export class Dreieck {
    constructor(x, y, rotation = 0, fill = 'teal') {
      this.x = x;
      this.y = y;
      this.rotation = rotation;
      this.fill = fill;
      this.type = 'dreieck';
      this.h = Math.sin(Math.PI / 3) * 50;
    }

    // Punkte für das Dreieck-Polygon
    getPoints() {
      return `0 ${this.h/2} 25 ${-this.h/2} -25 ${-this.h/2}`;
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

  // Dreiecke wie in MusterZwei
  const dreiecke = [
    new Dreieck(325, 56.69872981077807, 0),
    new Dreieck(300, 100, 0)
  ];
</script>

<svg viewBox="0 0 1000 1000" style="border: 1px solid black; width: 100%; height: 100vh;">
  {#each dreiecke as dreieck}
    <polygon
      points={dreieck.getPoints()}
      fill={dreieck.fill}
      stroke="black"
      stroke-width="1"
      transform={dreieck.getTransform()}
    />
  {/each}
</svg>
