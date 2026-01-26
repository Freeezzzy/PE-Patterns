<script context="module">
  import { Trapez } from './Trapez.svelte';
  import { Dreieck } from './Dreieck.svelte';

  // l = 50 ist in Trapez/Dreieck fest einkodiert, also hier ebenfalls:
  const l = 50;
  const h = Math.sin(Math.PI / 3) * l;

  export class StripeRow {
    /**
     * yTop  … y‑Koordinate der oberen Trapezreihe (Mittellinie der Trapeze)
     * count … wie viele „Zähne" (rote Dreiecke) / Trapez‑Paare pro Reihe
     * options:
     *   - colorTop    Farbe der oberen Trapeze
     *   - colorBottom Farbe der unteren Trapeze
     *   - colorTri    Farbe der roten Dreiecke
     *   - offsetX     globaler X‑Offset für die komplette Reihe
     *   - mirror      Spiegelt die Reihe horizontal
     */
    constructor(
      yTop,
      count = 6,
      options = {}
    ) {
      this.yTop = yTop;
      this.count = count;
      this.options = options;
      this.h = h;
      this.elements = [];

      const offsetX   = options.offsetX   ?? 0;
      const colorTop  = options.colorTop  ?? '#ffffff';
      const colorBot  = options.colorBottom ?? '#ffffff';
      const colorTri  = options.colorTri  ?? '#c52b1e';
      const mirror    = options.mirror    ?? false;

      // Saubere Ausrichtung ohne Lücken:
      // - Trapez bei x: reicht von x-50 bis x+50 (unten)
      // - Dreieck bei x+75: reicht von x+50 bis x+100
      // - Nächstes Trapez bei x+100: reicht von x+50 bis x+150
      // - Pro Einheit: 100 (ein Trapez-Paar + Dreieck = 100 breit)
      
      const blockWidth = 100; // Abstand zwischen Trapez-Paaren
      const startX = 0 + offsetX;
      
      // Für Spiegelung: Zentrum der Reihe bei ca. 500
      const mirrorCenter = 500;

      for (let i = 0; i < count; i++) {
        let trapezX = startX + i * blockWidth;
        
        // Bei mirror: spiegle X-Positionen um das Zentrum
        if (mirror) {
          trapezX = mirrorCenter - (trapezX - mirrorCenter);
        }

        // Alle Trapez-Paare haben die gleiche Rotation
        const rotation = mirror ? 180 : 0;

        // Oberes Trapez (bei trapezX + 25) - versetzt nach rechts
        this.elements.push(
          new Trapez(
            trapezX + (mirror ? -25 : 25),
            this.yTop,
            rotation,
            colorTop,
            null,
            null,
            null,
            i * 4 + 2,
            false
          )
        );

        // Unteres Trapez (bei trapezX) - Basis-Position
        this.elements.push(
          new Trapez(
            trapezX,
            this.yTop + this.h,
            rotation,
            colorBot,
            null,
            null,
            null,
            i * 4 + 3,
            false
          )
        );

        // Oberes Dreieck: linke obere Ecke trifft rechte obere Ecke des oberen Trapez
        // Oberes Trapez rechte obere Ecke bei: (trapezX + 50, yTop - h/2)
        // Dreieck linke obere Ecke bei: (dreieckX - 25, dreieckY - h/2)
        // → dreieckX = trapezX + 75, dreieckY = yTop
        this.elements.push(
          new Dreieck(
            trapezX + (mirror ? -75 : 75),
            this.yTop,
            mirror ? 180 : 0,
            colorTri,
            null,
            null,
            null,
            i * 4,
            false
          )
        );

        // Unteres Dreieck: linke obere Ecke trifft rechte obere Ecke des unteren Trapez
        // Unteres Trapez rechte obere Ecke bei: (trapezX + 25, yTop + h - h/2 = yTop + h/2)
        // Dreieck linke obere Ecke bei: (dreieckX - 25, dreieckY - h/2)
        // → dreieckX = trapezX + 50, dreieckY = yTop + h
        this.elements.push(
          new Dreieck(
            trapezX + (mirror ? -50 : 50),
            this.yTop + this.h,
            mirror ? 180 : 0,
            colorTri,
            null,
            null,
            null,
            i * 4 + 1,
            false
          )
        );
      }
    }

    getAllElements() {
      return this.elements;
    }
  }
</script>

<script>
  // Beispiel: zwei Reihen wie im Screenshot
  const rowTop    = new StripeRow(100, 7, { colorTop: '#ffffff', colorBottom: '#ffffff', colorTri: '#c52b1e', offsetX: 0 });
  const rowBottom = new StripeRow(100 + Math.sin(Math.PI / 3) * 50, 7, { colorTop: '#ffffff', colorBottom: '#ffffff', colorTri: '#c52b1e', offsetX: 0 });

  let elements = [
    ...rowTop.getAllElements(),
    ...rowBottom.getAllElements()
  ];
</script>

<svg viewBox="0 0 800 250" style="border: 1px solid black; width: 100%; height: 300px;">
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
