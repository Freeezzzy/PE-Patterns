<script context="module">
  export class Parallelogramm {
    constructor(x, y, rotation = 0, fill = 'blue', mirrored = false) {
      this.x = x;
      this.y = y;
      this.rotation = rotation;
      this.fill = fill;
      this.mirrored = mirrored;
      this.type = 'parallelogramm';
      this.h = Math.sin(Math.PI / 3) * 50;
    }

    // Punkte für das Parallelogramm-Polygon
    getPoints() {
      if (this.mirrored) {
        // Gespiegelte Version: X-Werte negiert und Reihenfolge angepasst
        return `25 ${-this.h/2}, -25 ${-this.h/2}, -50 ${this.h/2}, 0 ${this.h/2}`;
      }
      return `-25 ${-this.h/2}, 25 ${-this.h/2}, 50 ${this.h/2}, 0 ${this.h/2}`;
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

  // Parallelogramme wie in MusterZwei
  const parallelogramme = [
    new Parallelogramm((375 + 500) / 2, 56.69872981077807, 0),  // 437.5
    new Parallelogramm((350 + 475) / 2, 100, 0)                 // 412.5
  ];
</script>

<svg viewBox="0 0 1000 1000" style="border: 1px solid black; width: 100%; height: 100vh;">
  {#each parallelogramme as para}
    <polygon
      points={para.getPoints()}
      fill={para.fill}
      stroke="black"
      stroke-width="1"
      transform={para.getTransform()}
    />
  {/each}
</svg>
