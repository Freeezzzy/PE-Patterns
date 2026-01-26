<script>
  import { StripePattern } from './StripePattern.svelte';
  import RangeSlider from '$lib/ui/RangeSlider.svelte';

  // Default-Werte
  const DEFAULTS = {
    rows: 4,
    cols: 4,
    startY: -149,
    segmentWidth: 500,
    segmentHeight: 346,
    segmentOffsetX: 0,
    segmentOffsetY: 0,
    scale: 1,
    rowOffsetX: 0,
    rowSpacing: 0,
    baseStartX: -250,
    countPerRow: 7,
    hueRange: [280, 300],
    saturationRange: [100, 100],
    luminanceRange: [60, 80]
  };

  // Feste Parameter
  const rows = DEFAULTS.rows;
  const cols = DEFAULTS.cols;
  const startY = DEFAULTS.startY;
  const segmentWidth = DEFAULTS.segmentWidth;
  const segmentHeight = DEFAULTS.segmentHeight;
  const segmentOffsetX = DEFAULTS.segmentOffsetX;
  const segmentOffsetY = DEFAULTS.segmentOffsetY;
  const scale = DEFAULTS.scale;
  const rowOffsetX = DEFAULTS.rowOffsetX;
  const rowSpacing = DEFAULTS.rowSpacing;
  const baseStartX = DEFAULTS.baseStartX;
  const countPerRow = DEFAULTS.countPerRow;

  // RangeSlider Parameter
  let hueMin = $state(DEFAULTS.hueRange[0]);
  let hueMax = $state(DEFAULTS.hueRange[1]);
  let satMin = $state(DEFAULTS.saturationRange[0]);
  let satMax = $state(DEFAULTS.saturationRange[1]);
  let lumMin = $state(DEFAULTS.luminanceRange[0]);
  let lumMax = $state(DEFAULTS.luminanceRange[1]);

  function resetAll() {
    hueMin = DEFAULTS.hueRange[0];
    hueMax = DEFAULTS.hueRange[1];
    satMin = DEFAULTS.saturationRange[0];
    satMax = DEFAULTS.saturationRange[1];
    lumMin = DEFAULTS.luminanceRange[0];
    lumMax = DEFAULTS.luminanceRange[1];
  }

  // Hilfsfunktionen für Farbkonvertierung
  function hslToHex(h, s, l) {
    h = h / 360;
    s = s / 100;
    l = l / 100;

    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    const toHex = x => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  // Generiere Farben direkt aus den Range-Werten
  let colorTop = $derived.by(() => {
    return hslToHex(hueMin, satMin, lumMin);
  });

  let colorTri = $derived.by(() => {
    return hslToHex(hueMax, satMax, lumMax);
  });

  let colorBottom = $derived(colorTop);
  
  // Berechne viewBox
  const h = Math.sin(Math.PI / 3) * 50;
  // Berechne Pattern - 4x4 Grid mit 16 Segmenten
  let allElements = $derived.by(() => {
    const newPattern = new StripePattern(startY, {
      segmentWidth,
      segmentHeight,
      segmentOffsetX,
      segmentOffsetY,
      colorTop,
      colorBottom,
      colorTri,
      rowOffsetX,
      rowSpacing,
      baseStartX,
      countPerRow
    });
    newPattern.generateGrid(rows, cols);
    return newPattern.getAllElements();
  });

  // ViewBox
  const viewBoxSize = 1000;

</script>

<div class="svg-container">
  <svg viewBox="0 0 {viewBoxSize} {viewBoxSize}" class="svg-canvas">
    <rect x="0" y="0" width="{viewBoxSize}" height="{viewBoxSize}" fill="#2d2d2dff" stroke="none" />
    
    {#each allElements as element}
      <polygon
        points={element.getPoints()}
        fill={element.fill}
        stroke="black"
        stroke-width="1"
        transform={element.getTransform()}
      />
    {/each}
  </svg>
</div>

<div class="sidebar-right">
  <button onclick={resetAll}>Reset All</button>

  <hr/>

  <p class="description">Stelle die Farben mit den Slidern ein.</p>
  <RangeSlider 
    min={0} 
    max={360} 
    bind:value1={hueMin}
    bind:value2={hueMax}
    label="Hue (Farbe 1 → Farbe 2)" 
  />
  <RangeSlider 
    min={0} 
    max={100} 
    bind:value1={satMin}
    bind:value2={satMax}
    label="Saturation (Farbe 1 → Farbe 2)" 
  />
  <RangeSlider 
    min={0} 
    max={100} 
    bind:value1={lumMin}
    bind:value2={lumMax}
    label="Luminance (Farbe 1 → Farbe 2)" 
  />
</div>

<style>
  .description {
    color: #aaa;
    font-size: 0.85rem;
    line-height: 1.4;
    margin: 0;
    margin-bottom: 1rem;
  }
</style>
