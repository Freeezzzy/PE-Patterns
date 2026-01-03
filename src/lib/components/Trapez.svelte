<script context="module">
  // Funktion zum Invertieren einer Hex-Farbe
  function invertColor(hex) {
    if (!hex || hex[0] !== '#') return hex;
    
    // Entferne # und parse RGB
    const hexValue = hex.slice(1);
    const r = parseInt(hexValue.substr(0, 2), 16);
    const g = parseInt(hexValue.substr(2, 2), 16);
    const b = parseInt(hexValue.substr(4, 2), 16);
    
    // Invertiere jeden Kanal
    const invR = (255 - r).toString(16).padStart(2, '0');
    const invG = (255 - g).toString(16).padStart(2, '0');
    const invB = (255 - b).toString(16).padStart(2, '0');
    
    return `#${invR}${invG}${invB}`;
  }

  export class Trapez {
    constructor(x, y, rotation = 0, fill = 'beige', wrapWidth = null, wrapHeight = null, colorVariants = null, elementIndex = null, useModulo = true) {
      // Modulo-Logik: Wickle Positionen innerhalb der Grenzen
      if (wrapWidth !== null) {
        this.x = ((x % wrapWidth) + wrapWidth) % wrapWidth;
      } else {
        this.x = x;
      }
      
      if (wrapHeight !== null) {
        this.y = ((y % wrapHeight) + wrapHeight) % wrapHeight;
      } else {
        this.y = y;
      }
      
      this.rotation = rotation;
      this.type = 'trapez';
      this.h = Math.sin(Math.PI / 3) * 50;
      
      // Einfache Negativ/Positiv-Logik basierend auf elementIndex
      if (elementIndex !== null && elementIndex !== undefined && useModulo) {
        // Gerade Indizes: Original-Farbe, Ungerade: Invertierte Farbe (nur wenn useModulo aktiv)
        this.fill = (elementIndex % 2 === 0) ? fill : invertColor(fill);
      } else if (elementIndex !== null && elementIndex !== undefined && !useModulo) {
        // Modulo deaktiviert: Alle nutzen die Original-Farbe
        this.fill = fill;
      } else if (colorVariants && colorVariants.length > 0) {
        // Fallback mit colorVariants (falls noch verwendet)
        const gridSize = 50;
        const xi = Math.floor(this.x / gridSize);
        const yi = Math.floor(this.y / gridSize);
        const colorIndex = (xi + yi) % colorVariants.length;
        const baseColor = colorVariants[colorIndex];
        this.fill = ((xi + yi) % 2 === 0) ? baseColor : invertColor(baseColor);
      } else {
        this.fill = fill;
      }
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
