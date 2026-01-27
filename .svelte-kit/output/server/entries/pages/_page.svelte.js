import { w as attr, x as attr_style, y as bind_props, z as stringify, F as attr_class, G as ensure_array_like } from "../../chunks/index.js";
import "clsx";
import { e as escape_html } from "../../chunks/context.js";
import { converter, formatHex } from "culori";
import { ColorManagement, Scene, PerspectiveCamera, BufferGeometry } from "three";
import "chroma-js";
function Header($$renderer) {
  $$renderer.push(`<header class="app-header"><div>Yannik Stegmaier<span style="color: #999;"> – Progammiertes Entwerfen 2</span></div></header>`);
}
function Slider($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      min = 0,
      max = 100,
      step = 1,
      value = 50,
      label = "Slider",
      snapValues = [],
      snapWidth = 16
    } = $$props;
    let trackWidth = 0;
    let thumbWidth = 0;
    let position = (value - min) / (max - min) * (trackWidth - thumbWidth);
    snapValues.sort((a, b) => a - b);
    function prettifyValue(val) {
      let stepDecimalPlaces = (step.toString().split(".")[1] || "").length;
      return val.toFixed(stepDecimalPlaces);
    }
    $$renderer2.push(`<div class="slider svelte-pc7g35"><div class="label svelte-pc7g35">${escape_html(label)}</div> <div class="track svelte-pc7g35" role="presentation"><div class="thumb svelte-pc7g35" role="slider" tabindex="0"${attr("aria-valuemin", min)}${attr("aria-valuemax", max)}${attr("aria-valuenow", value)}${attr("aria-label", label + " slider thumb")}${attr_style(`left: ${stringify(position)}px;`)}>${escape_html(prettifyValue(value))}</div></div></div>`);
    bind_props($$props, { min, max, step, value, label });
  });
}
function invertColor$2(hex) {
  if (!hex || hex[0] !== "#") return hex;
  const hexValue = hex.slice(1);
  const r = parseInt(hexValue.substr(0, 2), 16);
  const g = parseInt(hexValue.substr(2, 2), 16);
  const b = parseInt(hexValue.substr(4, 2), 16);
  const invR = (255 - r).toString(16).padStart(2, "0");
  const invG = (255 - g).toString(16).padStart(2, "0");
  const invB = (255 - b).toString(16).padStart(2, "0");
  return `#${invR}${invG}${invB}`;
}
class Trapez {
  constructor(x, y, rotation = 0, fill = "beige", wrapWidth = null, wrapHeight = null, colorVariants = null, elementIndex = null, useModulo = true) {
    if (wrapWidth !== null) {
      this.x = (x % wrapWidth + wrapWidth) % wrapWidth;
    } else {
      this.x = x;
    }
    if (wrapHeight !== null) {
      this.y = (y % wrapHeight + wrapHeight) % wrapHeight;
    } else {
      this.y = y;
    }
    this.rotation = rotation;
    this.type = "trapez";
    this.h = Math.sin(Math.PI / 3) * 50;
    if (elementIndex !== null && elementIndex !== void 0 && useModulo) {
      const shouldInvert = rotation === 180 ? elementIndex % 2 === 1 : (
        // Ungerade = Original für untere Trapeze
        elementIndex % 2 === 0
      );
      this.fill = shouldInvert ? fill : invertColor$2(fill);
    } else if (elementIndex !== null && elementIndex !== void 0 && !useModulo) {
      this.fill = fill;
    } else if (colorVariants && colorVariants.length > 0) {
      const gridSize = 50;
      const xi = Math.floor(this.x / gridSize);
      const yi = Math.floor(this.y / gridSize);
      const colorIndex = (xi + yi) % colorVariants.length;
      const baseColor = colorVariants[colorIndex];
      this.fill = (xi + yi) % 2 === 0 ? baseColor : invertColor$2(baseColor);
    } else {
      this.fill = fill;
    }
  }
  // Punkte für das Trapez-Polygon
  getPoints() {
    return `-25 ${-this.h / 2}, 25 ${-this.h / 2}, 50 ${this.h / 2} -50 ${this.h / 2}`;
  }
  // Transform-String für SVG
  getTransform() {
    if (this.rotation !== 0) {
      return `translate(${this.x} ${this.y}) rotate(${this.rotation})`;
    }
    return `translate(${this.x} ${this.y})`;
  }
}
function invertColor$1(hex) {
  if (!hex || hex[0] !== "#") return hex;
  const hexValue = hex.slice(1);
  const r = parseInt(hexValue.substr(0, 2), 16);
  const g = parseInt(hexValue.substr(2, 2), 16);
  const b = parseInt(hexValue.substr(4, 2), 16);
  const invR = (255 - r).toString(16).padStart(2, "0");
  const invG = (255 - g).toString(16).padStart(2, "0");
  const invB = (255 - b).toString(16).padStart(2, "0");
  return `#${invR}${invG}${invB}`;
}
class Dreieck {
  constructor(x, y, rotation = 0, fill = "teal", wrapWidth = null, wrapHeight = null, colorVariants = null, elementIndex = null, useModulo = true) {
    if (wrapWidth !== null) {
      this.x = (x % wrapWidth + wrapWidth) % wrapWidth;
    } else {
      this.x = x;
    }
    if (wrapHeight !== null) {
      this.y = (y % wrapHeight + wrapHeight) % wrapHeight;
    } else {
      this.y = y;
    }
    this.rotation = rotation;
    this.type = "dreieck";
    this.h = Math.sin(Math.PI / 3) * 50;
    if (elementIndex !== null && elementIndex !== void 0 && useModulo) {
      this.fill = elementIndex % 2 === 0 ? fill : invertColor$1(fill);
    } else if (elementIndex !== null && elementIndex !== void 0 && !useModulo) {
      this.fill = fill;
    } else if (colorVariants && colorVariants.length > 0) {
      const gridSize = 50;
      const xi = Math.floor(this.x / gridSize);
      const yi = Math.floor(this.y / gridSize);
      const colorIndex = (xi + yi) % colorVariants.length;
      const baseColor = colorVariants[colorIndex];
      this.fill = (xi + yi) % 2 === 0 ? baseColor : invertColor$1(baseColor);
    } else {
      this.fill = fill;
    }
  }
  // Punkte für das Dreieck-Polygon
  getPoints() {
    return `0 ${this.h / 2} 25 ${-this.h / 2} -25 ${-this.h / 2}`;
  }
  // Transform-String für SVG
  getTransform() {
    if (this.rotation !== 0) {
      return `translate(${this.x} ${this.y}) rotate(${this.rotation})`;
    }
    return `translate(${this.x} ${this.y})`;
  }
}
function invertColor(hex) {
  if (!hex || hex[0] !== "#") return hex;
  const hexValue = hex.slice(1);
  const r = parseInt(hexValue.substr(0, 2), 16);
  const g = parseInt(hexValue.substr(2, 2), 16);
  const b = parseInt(hexValue.substr(4, 2), 16);
  const invR = (255 - r).toString(16).padStart(2, "0");
  const invG = (255 - g).toString(16).padStart(2, "0");
  const invB = (255 - b).toString(16).padStart(2, "0");
  return `#${invR}${invG}${invB}`;
}
class Parallelogramm {
  constructor(x, y, rotation = 0, fill = "blue", mirrored = false, wrapWidth = null, wrapHeight = null, colorVariants = null, elementIndex = null, useModulo = true) {
    if (wrapWidth !== null) {
      this.x = (x % wrapWidth + wrapWidth) % wrapWidth;
    } else {
      this.x = x;
    }
    if (wrapHeight !== null) {
      this.y = (y % wrapHeight + wrapHeight) % wrapHeight;
    } else {
      this.y = y;
    }
    this.rotation = rotation;
    this.mirrored = mirrored;
    this.type = "parallelogramm";
    this.h = Math.sin(Math.PI / 3) * 50;
    if (elementIndex !== null && elementIndex !== void 0 && useModulo) {
      this.fill = elementIndex % 2 === 0 ? fill : invertColor(fill);
    } else if (elementIndex !== null && elementIndex !== void 0 && !useModulo) {
      this.fill = fill;
    } else if (colorVariants && colorVariants.length > 0) {
      const gridSize = 50;
      const xi = Math.floor(this.x / gridSize);
      const yi = Math.floor(this.y / gridSize);
      const colorIndex = (xi + yi) % colorVariants.length;
      const baseColor = colorVariants[colorIndex];
      this.fill = (xi + yi) % 2 === 0 ? baseColor : invertColor(baseColor);
    } else {
      this.fill = fill;
    }
  }
  // Punkte für das Parallelogramm-Polygon
  getPoints() {
    if (this.mirrored) {
      return `25 ${-this.h / 2}, -25 ${-this.h / 2}, -50 ${this.h / 2}, 0 ${this.h / 2}`;
    }
    return `-25 ${-this.h / 2}, 25 ${-this.h / 2}, 50 ${this.h / 2}, 0 ${this.h / 2}`;
  }
  // Transform-String für SVG
  getTransform() {
    if (this.rotation !== 0) {
      return `translate(${this.x} ${this.y}) rotate(${this.rotation})`;
    }
    return `translate(${this.x} ${this.y})`;
  }
}
class Row {
  constructor(y, offsetX = 0, reverse = false, options = {}, rowIndex = 0) {
    this.y = y;
    this.offsetX = offsetX;
    this.reverse = reverse;
    this.options = options;
    this.rowIndex = rowIndex;
    this.h = Math.sin(Math.PI / 3) * 50;
    this.elements = [];
    this.wrapWidth = options.wrapWidth || null;
    this.wrapHeight = options.wrapHeight || null;
    this.useModulo = options.useModulo !== void 0 ? options.useModulo : true;
    this.generateElements();
  }
  generateElements() {
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
    if (this.reverse) {
      const maxX = 480;
      trapezPositions = trapezPositions.map((pos) => ({ ...pos, x: maxX - pos.x }));
    }
    trapezPositions = trapezPositions.map((pos) => ({ ...pos, x: pos.x + this.offsetX }));
    const trapezColor = this.options.trapezColor || "beige";
    trapezPositions.forEach((pos, index) => {
      this.elements.push(new Trapez(pos.x, pos.y, pos.rotation, trapezColor, this.wrapWidth, this.wrapHeight, null, index, this.useModulo));
    });
    let dreieckX1 = 265;
    let dreieckX2 = 240;
    let paraX1 = 365;
    let paraX2 = 340;
    if (this.reverse) {
      const maxX = 480;
      dreieckX1 = maxX - dreieckX1;
      dreieckX2 = maxX - dreieckX2;
      paraX1 = maxX - paraX1;
      paraX2 = maxX - paraX2;
    }
    dreieckX1 += this.offsetX;
    dreieckX2 += this.offsetX;
    paraX1 += this.offsetX;
    paraX2 += this.offsetX;
    const dreieckColor = this.options.dreieckColor || "teal";
    const parallelogrammColor = this.options.parallelogrammColor || "blue";
    this.elements.push(new Dreieck(dreieckX1, this.y - 43.301, 0, dreieckColor, this.wrapWidth, this.wrapHeight, null, 0, this.useModulo));
    this.elements.push(new Dreieck(dreieckX2, this.y, 0, dreieckColor, this.wrapWidth, this.wrapHeight, null, 1, this.useModulo));
    this.elements.push(new Parallelogramm(paraX1, this.y - 43.301, 0, parallelogrammColor, this.reverse, this.wrapWidth, this.wrapHeight, null, 0, this.useModulo));
    this.elements.push(new Parallelogramm(paraX2, this.y, 0, parallelogrammColor, this.reverse, this.wrapWidth, this.wrapHeight, null, 1, this.useModulo));
  }
  getAllElements() {
    return this.elements;
  }
}
class Segment {
  constructor(startY = 100, offsetX = 0, options = {}) {
    this.h = Math.sin(Math.PI / 3) * 50;
    this.offsetX = offsetX;
    this.options = options;
    this.rows = [];
    this.useModulo = options.useModulo !== void 0 ? options.useModulo : true;
    this.generateRows(startY);
  }
  generateRows(startY) {
    const baseOffsetX = this.options.rowOffsetX || 0;
    const baseStartX = this.options.baseStartX || 0;
    const rowSpacing = this.options.rowSpacing !== void 0 ? this.options.rowSpacing : 50;
    const row1OffsetX = this.options.row1OffsetX !== void 0 ? this.options.row1OffsetX : 0;
    const row2OffsetX = this.options.row2OffsetX !== void 0 ? this.options.row2OffsetX : 0;
    const row3OffsetX = this.options.row3OffsetX !== void 0 ? this.options.row3OffsetX : rowSpacing;
    const row4OffsetX = this.options.row4OffsetX !== void 0 ? this.options.row4OffsetX : rowSpacing;
    const row1Mirror = this.options.row1Mirror !== void 0 ? this.options.row1Mirror : false;
    const row2Mirror = this.options.row2Mirror !== void 0 ? this.options.row2Mirror : true;
    const row3Mirror = this.options.row3Mirror !== void 0 ? this.options.row3Mirror : true;
    const row4Mirror = this.options.row4Mirror !== void 0 ? this.options.row4Mirror : false;
    const rowOptions = { ...this.options, useModulo: this.useModulo };
    this.rows.push(new Row(startY, this.offsetX + baseStartX + baseOffsetX + row1OffsetX, row1Mirror, rowOptions, 0));
    this.rows.push(new Row(startY + 2 * this.h, this.offsetX + baseStartX + baseOffsetX + row2OffsetX, row2Mirror, rowOptions, 1));
    this.rows.push(new Row(startY + 4 * this.h, this.offsetX + baseStartX + baseOffsetX + row3OffsetX, row3Mirror, rowOptions, 2));
    this.rows.push(new Row(startY + 6 * this.h, this.offsetX + baseStartX + baseOffsetX + row4OffsetX, row4Mirror, rowOptions, 3));
  }
  getAllElements() {
    let allElements = [];
    this.rows.forEach((row) => {
      allElements = [...allElements, ...row.getAllElements()];
    });
    return allElements;
  }
  // Regeneriere alle Rows mit neuen Optionen
  regenerateRows(startY, newOptions) {
    this.options = { ...this.options, ...newOptions };
    this.rows = [];
    this.generateRows(startY);
  }
}
class Pattern {
  constructor(startY = 100, options = {}) {
    this.startY = startY;
    this.h = Math.sin(Math.PI / 3) * 50;
    this.segmentWidth = options.segmentWidth || 450;
    this.segmentHeight = options.segmentHeight || 8 * this.h;
    this.segmentOffsetX = options.segmentOffsetX || 0;
    this.segmentOffsetY = options.segmentOffsetY || 0;
    this.segmentSpacingX = options.segmentSpacingX !== void 0 ? options.segmentSpacingX : 0;
    this.segmentSpacingY = options.segmentSpacingY !== void 0 ? options.segmentSpacingY : 0;
    this.trapezColor = options.trapezColor || "beige";
    this.dreieckColor = options.dreieckColor || "teal";
    this.parallelogrammColor = options.parallelogrammColor || "midnightblue";
    this.rowOffsetX = options.rowOffsetX || 0;
    this.rowSpacing = options.rowSpacing !== void 0 ? options.rowSpacing : 50;
    this.baseStartX = options.baseStartX || 100;
    this.row1OffsetX = options.row1OffsetX;
    this.row2OffsetX = options.row2OffsetX;
    this.row3OffsetX = options.row3OffsetX;
    this.row4OffsetX = options.row4OffsetX;
    this.row1Mirror = options.row1Mirror;
    this.row2Mirror = options.row2Mirror;
    this.row3Mirror = options.row3Mirror;
    this.row4Mirror = options.row4Mirror;
    this.useModulo = options.useModulo !== void 0 ? options.useModulo : true;
    this.segments = [];
  }
  // Füge Segment an Grid-Position (row, col) hinzu
  addSegment(row, col) {
    const centerCol = (this.cols - 1) / 2;
    const centerRow = (this.rows - 1) / 2;
    const distX = col - centerCol;
    const distY = row - centerRow;
    const spacingOffsetX = distX * this.segmentSpacingX;
    const spacingOffsetY = distY * this.segmentSpacingY;
    const offsetX = col * this.segmentWidth + this.segmentOffsetX + spacingOffsetX;
    const offsetY = row * this.segmentHeight + this.segmentOffsetY + spacingOffsetY;
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
    this.segments = [];
    this.rows = rows;
    this.cols = cols;
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
      segment.generateRows(this.startY + segment.offsetX / this.segmentWidth * this.segmentHeight);
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
function Toggle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value = false, label = "Slider" } = $$props;
    let trackWidth = 0;
    let thumbWidth = 0;
    let position = value ? trackWidth - thumbWidth - 4 : 0;
    let mounted = false;
    $$renderer2.push(`<div class="slider svelte-14iab8y"><div class="label svelte-14iab8y">${escape_html(label)}</div> <div class="track svelte-14iab8y" role="switch"${attr("aria-checked", !!value)}${attr("aria-label", label + " toggle")} tabindex="0"><div${attr_class("thumb svelte-14iab8y", void 0, { "mounted": mounted })} aria-hidden="true"${attr_style(`left: ${stringify(Math.min(Math.max(position, 0), Math.max(trackWidth - thumbWidth - 2, 0)))}px;`)}></div></div></div>`);
    bind_props($$props, { value, label });
  });
}
function RangeSlider($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      min = 0,
      max = 100,
      step = 1,
      value1 = 0,
      value2 = 100,
      label = "Slider",
      pushThreshold = 15
    } = $$props;
    let trackWidth = 0;
    let thumbWidth = 0;
    let position1 = (value1 - min) / (max - min) * (trackWidth - 2 * thumbWidth);
    let position2 = (value2 - min) / (max - min) * (trackWidth - 2 * thumbWidth) + thumbWidth;
    function prettifyValue(val) {
      let stepDecimalPlaces = (step.toString().split(".")[1] || "").length;
      return val.toFixed(stepDecimalPlaces);
    }
    $$renderer2.push(`<div class="slider svelte-nry0le"><div class="label svelte-nry0le">${escape_html(label)}</div> <div class="track svelte-nry0le" role="presentation"><div class="range-highlight svelte-nry0le"${attr_style(`left:${stringify(position1 + thumbWidth - 1)}px; width:${stringify(position2 - position1 - thumbWidth + 2)}px;`)} aria-hidden="true" tabindex="-1"></div> <div class="thumb low svelte-nry0le" role="slider" tabindex="0"${attr("aria-valuemin", min)}${attr("aria-valuemax", max)}${attr("aria-valuenow", value1)}${attr("aria-label", label + " slider thumb low")}${attr_style(`left: ${stringify(position1)}px;`)}>${escape_html(prettifyValue(value1))}</div> <div class="thumb high svelte-nry0le" role="slider" tabindex="0"${attr("aria-valuemin", min)}${attr("aria-valuemax", max)}${attr("aria-valuenow", value2)}${attr("aria-label", label + " slider thumb high")}${attr_style(`left: ${stringify(position2)}px;`)}>${escape_html(prettifyValue(value2))}</div></div></div>`);
    bind_props($$props, { min, max, step, value1, value2, label, pushThreshold });
  });
}
function Pattern_Trapez_A($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const colorPalettes = [
      { name: "Autumn", colors: ["#ffd7b5", "#d2691e", "#8b4513"] },
      {
        name: "Earth Tones",
        colors: ["#d4c5b9", "#8b7355", "#5c4a3a"]
      }
    ];
    const DEFAULTS = {
      rows: 4,
      cols: 4,
      startY: -149,
      segmentWidth: 450,
      segmentHeight: 346,
      segmentOffsetX: 0,
      segmentOffsetY: 0,
      scale: 1,
      rowOffsetX: 0,
      rowSpacing: 50,
      baseStartX: -440,
      useModulo: true
    };
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
    let useModulo = DEFAULTS.useModulo;
    let colorMode = "palette";
    let selectedPaletteIndex = 0;
    let trapezColor = (() => {
      return colorPalettes[selectedPaletteIndex].colors[0];
    })();
    let dreieckColor = (() => {
      return colorPalettes[selectedPaletteIndex].colors[1];
    })();
    let parallelogrammColor = (() => {
      return colorPalettes[selectedPaletteIndex].colors[2];
    })();
    let allElements = (() => {
      const newPattern = new Pattern(startY, {
        segmentWidth,
        segmentHeight,
        segmentOffsetX,
        segmentOffsetY,
        trapezColor,
        dreieckColor,
        parallelogrammColor,
        rowOffsetX,
        rowSpacing,
        baseStartX,
        useModulo
      });
      newPattern.generateGrid(rows, cols);
      return newPattern.getAllElements();
    })();
    const viewBoxSize = 1e3;
    let viewBoxWidth = viewBoxSize;
    let viewBoxHeight = viewBoxSize;
    const centerX = 0;
    const centerY = 0;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="svg-container"><svg${attr("viewBox", `0 0 ${stringify(viewBoxWidth)} ${stringify(viewBoxHeight)}`)} class="svg-canvas"><rect x="0" y="0"${attr("width", viewBoxWidth)}${attr("height", viewBoxHeight)} fill="#2d2d2dff" stroke="none"></rect><!---->`);
      {
        $$renderer3.push(`<g${attr("transform", `translate(${stringify(centerX)}, ${stringify(centerY)}) scale(${stringify(scale)})`)}><!--[-->`);
        const each_array = ensure_array_like(allElements);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let element = each_array[$$index];
          $$renderer3.push(`<polygon${attr("points", element.getPoints())}${attr("fill", element.fill)} stroke="black" stroke-width="1"${attr("transform", element.getTransform())}></polygon>`);
        }
        $$renderer3.push(`<!--]--></g>`);
      }
      $$renderer3.push(`<!----></svg></div> <div class="sidebar-right svelte-fignol"><button>Reset All</button> <hr/> <p class="description svelte-fignol">Wähle einen Farbmodus:</p> <div class="mode-selector svelte-fignol"><button${attr_class("svelte-fignol", void 0, { "active": colorMode === "palette" })}>Paletten</button> <button${attr_class("svelte-fignol", void 0, { "active": colorMode === "slider" })}>Slider</button></div> <hr/> `);
      {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<p class="description svelte-fignol">Wähle eine Farbpalette aus der Galerie.</p> <div class="palette-gallery svelte-fignol"><!--[-->`);
        const each_array_1 = ensure_array_like(colorPalettes);
        for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
          let palette = each_array_1[index];
          $$renderer3.push(`<label${attr_class("palette-item svelte-fignol", void 0, { "selected": selectedPaletteIndex === index })}><input type="radio" name="palette"${attr("value", index)}${attr("checked", selectedPaletteIndex === index, true)} class="palette-radio svelte-fignol"/> <svg viewBox="0 0 300 100" class="palette-preview svelte-fignol"><rect x="0" y="0" width="100" height="100"${attr("fill", palette.colors[0])}></rect><rect x="100" y="0" width="100" height="100"${attr("fill", palette.colors[1])}></rect><rect x="200" y="0" width="100" height="100"${attr("fill", palette.colors[2])}></rect></svg> <span class="palette-name svelte-fignol">${escape_html(palette.name)}</span></label>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      }
      $$renderer3.push(`<!--]--> `);
      {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <hr/> <p class="description svelte-fignol">Wechsle zwischen Original- und Negativfarben bei aufeinanderfolgenden Elementen.</p> `);
      Toggle($$renderer3, {
        label: "Modulo aktivieren",
        get value() {
          return useModulo;
        },
        set value($$value) {
          useModulo = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function Pattern_Trapez_B($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let allElements, viewBoxWidth, viewBoxHeight, centerX, centerY;
    const DEFAULTS = {
      rows: 2,
      cols: 2,
      startY: 197,
      segmentWidth: 450,
      segmentHeight: 346,
      segmentSpacingX: 0,
      segmentSpacingY: 0,
      scale: 1,
      trapezColor: "#ffd7b5",
      dreieckColor: "#d2691e",
      parallelogrammColor: "#8b4513",
      rowOffsetX: 0,
      rowSpacing: 50,
      useModulo: true
    };
    const rows = DEFAULTS.rows;
    const cols = DEFAULTS.cols;
    const startY = DEFAULTS.startY;
    const scale = DEFAULTS.scale;
    const trapezColor = DEFAULTS.trapezColor;
    const dreieckColor = DEFAULTS.dreieckColor;
    const parallelogrammColor = DEFAULTS.parallelogrammColor;
    let segmentWidth = DEFAULTS.segmentWidth;
    let segmentHeight = DEFAULTS.segmentHeight;
    let segmentSpacingX = DEFAULTS.segmentSpacingX;
    let segmentSpacingY = DEFAULTS.segmentSpacingY;
    let rowOffsetX = DEFAULTS.rowOffsetX;
    let rowSpacing = DEFAULTS.rowSpacing;
    let row1OffsetX = 0;
    let row2OffsetX = 0;
    let row3OffsetX = 0;
    let row4OffsetX = 0;
    let useModulo = DEFAULTS.useModulo;
    const viewBoxSize = 1e3;
    const baseStartX = 10;
    allElements = (() => {
      const newPattern = new Pattern(startY, {
        segmentWidth,
        segmentHeight,
        segmentSpacingX,
        segmentSpacingY,
        trapezColor,
        dreieckColor,
        parallelogrammColor,
        rowOffsetX,
        rowSpacing,
        baseStartX,
        row1OffsetX,
        row2OffsetX,
        row3OffsetX: row3OffsetX + 50,
        row4OffsetX: row4OffsetX + 50,
        useModulo
      });
      newPattern.generateGrid(rows, cols);
      return newPattern.getAllElements();
    })();
    viewBoxWidth = viewBoxSize;
    viewBoxHeight = viewBoxSize;
    centerX = 0;
    centerY = 0;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="svg-container"><svg${attr("viewBox", `0 0 ${stringify(viewBoxWidth)} ${stringify(viewBoxHeight)}`)} class="svg-canvas"><rect x="0" y="0"${attr("width", viewBoxWidth)}${attr("height", viewBoxHeight)} fill="#2d2d2dff" stroke="none"></rect><g${attr("transform", `translate(${stringify(centerX)}, ${stringify(centerY)}) scale(${stringify(scale)})`)}><!--[-->`);
      const each_array = ensure_array_like(allElements);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let element = each_array[$$index];
        $$renderer3.push(`<polygon${attr("points", element.getPoints())}${attr("fill", element.fill)} stroke="black" stroke-width="1"${attr("transform", element.getTransform())}></polygon>`);
      }
      $$renderer3.push(`<!--]--></g></svg></div> <div class="sidebar-right svelte-y0owfy"><button>Reset All</button> <hr/> <p class="description svelte-y0owfy">Wechsle zwischen Original- und Negativfarben bei aufeinanderfolgenden Elementen.</p> `);
      Toggle($$renderer3, {
        label: "Modulo aktivieren",
        get value() {
          return useModulo;
        },
        set value($$value) {
          useModulo = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <hr/> <p class="description svelte-y0owfy">Bewege Segmente von der Mitte des Canvas weg (oben/unten, links/rechts).</p> `);
      Slider($$renderer3, {
        min: 0,
        max: 100,
        snapValues: [0, 50, 100],
        label: "Horizontal (px)",
        get value() {
          return segmentSpacingX;
        },
        set value($$value) {
          segmentSpacingX = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Slider($$renderer3, {
        min: 0,
        max: 100,
        snapValues: [0, 50, 100],
        label: "Vertikal (px)",
        get value() {
          return segmentSpacingY;
        },
        set value($$value) {
          segmentSpacingY = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <hr/> <p class="description svelte-y0owfy">Stelle die X-Position jeder Reihe individuell ein.</p> `);
      Slider($$renderer3, {
        min: -100,
        max: 100,
        snapValues: [-100, -50, 0, 50, 100],
        label: "Reihe 1 Offset-X (px)",
        get value() {
          return row1OffsetX;
        },
        set value($$value) {
          row1OffsetX = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Slider($$renderer3, {
        min: -100,
        max: 100,
        snapValues: [-100, -50, 0, 50, 100],
        label: "Reihe 2 Offset-X (px)",
        get value() {
          return row2OffsetX;
        },
        set value($$value) {
          row2OffsetX = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Slider($$renderer3, {
        min: -100,
        max: 100,
        snapValues: [-100, -50, 0, 50, 100],
        label: "Reihe 3 Offset-X (px)",
        get value() {
          return row3OffsetX;
        },
        set value($$value) {
          row3OffsetX = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Slider($$renderer3, {
        min: -100,
        max: 100,
        snapValues: [-100, -50, 0, 50, 100],
        label: "Reihe 4 Offset-X (px)",
        get value() {
          return row4OffsetX;
        },
        set value($$value) {
          row4OffsetX = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function Pattern_Trapez_C($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let allElements, viewBoxSize, viewBoxWidth, viewBoxHeight, centerX, centerY;
    const DEFAULTS = {
      rows: 4,
      cols: 4,
      startY: -149,
      segmentWidth: 450,
      segmentHeight: 346,
      segmentOffsetX: 0,
      segmentOffsetY: 0,
      scale: 1,
      trapezColor: "#ffd7b5",
      dreieckColor: "#d2691e",
      parallelogrammColor: "#8b4513",
      rowOffsetX: 0,
      rowSpacing: 50,
      baseStartX: -440,
      useModulo: true
    };
    const rows = DEFAULTS.rows;
    const cols = DEFAULTS.cols;
    const startY = DEFAULTS.startY;
    const segmentWidth = DEFAULTS.segmentWidth;
    const segmentHeight = DEFAULTS.segmentHeight;
    const segmentOffsetX = DEFAULTS.segmentOffsetX;
    const segmentOffsetY = DEFAULTS.segmentOffsetY;
    const scale = DEFAULTS.scale;
    const trapezColor = DEFAULTS.trapezColor;
    const dreieckColor = DEFAULTS.dreieckColor;
    const parallelogrammColor = DEFAULTS.parallelogrammColor;
    const rowOffsetX = DEFAULTS.rowOffsetX;
    const rowSpacing = DEFAULTS.rowSpacing;
    const baseStartX = DEFAULTS.baseStartX;
    let mirrorRow1 = false;
    let mirrorRow2 = true;
    let mirrorRow3 = true;
    let mirrorRow4 = false;
    let useModulo = DEFAULTS.useModulo;
    allElements = (() => {
      const newPattern = new Pattern(startY, {
        segmentWidth,
        segmentHeight,
        segmentOffsetX,
        segmentOffsetY,
        trapezColor,
        dreieckColor,
        parallelogrammColor,
        rowOffsetX,
        rowSpacing,
        baseStartX,
        row1Mirror: mirrorRow1,
        row2Mirror: mirrorRow2,
        row3Mirror: mirrorRow3,
        row4Mirror: mirrorRow4,
        useModulo
      });
      newPattern.generateGrid(rows, cols);
      return newPattern.getAllElements();
    })();
    viewBoxSize = 1e3;
    viewBoxWidth = viewBoxSize;
    viewBoxHeight = viewBoxSize;
    centerX = 0;
    centerY = 0;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="svg-container"><svg${attr("viewBox", `0 0 ${stringify(viewBoxWidth)} ${stringify(viewBoxHeight)}`)} class="svg-canvas"><rect x="0" y="0"${attr("width", viewBoxWidth)}${attr("height", viewBoxHeight)} fill="#2d2d2dff" stroke="none"></rect><g${attr("transform", `translate(${stringify(centerX)}, ${stringify(centerY)}) scale(${stringify(scale)})`)}><!---->`);
      {
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(allElements);
        for (let i = 0, $$length = each_array.length; i < $$length; i++) {
          let element = each_array[i];
          $$renderer3.push(`<polygon${attr("points", element.getPoints())}${attr("fill", element.fill)} stroke="black" stroke-width="1"${attr("transform", element.getTransform())}></polygon>`);
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!----></g></svg></div> <div class="sidebar-right svelte-79b917"><button>Reset All</button> <hr/> <p class="description svelte-79b917">Wechsle zwischen Original- und Negativfarben bei aufeinanderfolgenden Elementen.</p> `);
      Toggle($$renderer3, {
        label: "Modulo aktivieren",
        get value() {
          return useModulo;
        },
        set value($$value) {
          useModulo = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <hr/> <p class="description svelte-79b917">Spiegele jede Reihe einzeln. Jedes Segment hat 4 Reihen.</p> `);
      Toggle($$renderer3, {
        label: "Reihe 1 spiegeln",
        get value() {
          return mirrorRow1;
        },
        set value($$value) {
          mirrorRow1 = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Toggle($$renderer3, {
        label: "Reihe 2 spiegeln",
        get value() {
          return mirrorRow2;
        },
        set value($$value) {
          mirrorRow2 = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Toggle($$renderer3, {
        label: "Reihe 3 spiegeln",
        get value() {
          return mirrorRow3;
        },
        set value($$value) {
          mirrorRow3 = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Toggle($$renderer3, {
        label: "Reihe 4 spiegeln",
        get value() {
          return mirrorRow4;
        },
        set value($$value) {
          mirrorRow4 = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function SliderSV_HSV_Gradient($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      hsvValues = void 0,
      width = 180,
      height = 180,
      scale = 1,
      min,
      max
    } = $$props;
    ColorManagement.enabled = false;
    new Scene();
    const camera = new PerspectiveCamera(90, 1, 0.1, 1e3);
    camera.position.z = (max - min) / 2;
    new BufferGeometry();
    const segments = 4;
    const toRGB = converter("rgb");
    (() => {
      const cols = [];
      for (let i = 0; i <= segments; i++) {
        for (let j = 0; j <= segments; j++) {
          let h2 = hsvValues[0];
          let s = (max - min) / segments * j + min;
          let v = (max - min) / segments * i + min;
          let rgb = toRGB({ mode: "okhsv", h: h2, s, v: 1 - v });
          cols.push(rgb.r, rgb.g, rgb.b);
        }
      }
      return cols;
    })();
    $$renderer2.push(`<div id="color-gradient"${attr_style(`width:${stringify(width - 2)}px; height:${stringify(height - 2)}px;`)} class="svelte-p2smfz"></div>`);
    bind_props($$props, { hsvValues });
  });
}
function DraggableSvgNode($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      dragAreaElement,
      color,
      x = void 0,
      y = void 0,
      minX = 0,
      maxX = 1,
      minY = 0,
      maxY = 1,
      onchange
    } = $$props;
    $$renderer2.push(`<g${attr("transform", `translate(${stringify(
      // make possible to click on the drag area element to start dragging
      // console.log("setting up drag area pointerdown", dragAreaElement);
      // ensure the drag area doesn't allow native touch gestures to interfere
      // move the node to the mouse position
      // clickMX = e.clientX;
      // clickMY = e.clientY;
      // ensure the drag start also uses pointer flow
      // try to set pointer capture; if not available, add window-level listeners as a fallback
      // pointerCaptureElement = el;
      // fallback: listen on window so we don't lose events
      x
    )} ${stringify(y)})`)} style="touch-action: none; -webkit-user-drag: none;"><filter id="shadow"><feDropShadow dx="1" dy="1" stdDeviation="1" flood-opacity="0.5"></feDropShadow></filter><g filter="url(#shadow)"><circle cx="0" cy="0" r="8" fill="#f000" stroke="none"></circle><circle cx="0" cy="0" r="5"${attr("fill", color)} stroke="#fff" stroke-width="2"></circle></g></g>`);
    bind_props($$props, { x, y });
  });
}
function SliderSV_HSV($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { hsvValues = void 0, width = 200, height = 180, scale = 1 } = $$props;
    let min = 0;
    let max = 1;
    let dragAreaElement = null;
    let thumbX = hsvValues[1] * (width - 2) / max + 1;
    let thumbY = (1 - hsvValues[2]) * (height - 2) / max + 1;
    let overhang = 10;
    function updateValues() {
      hsvValues[1] = (thumbX - 1) * max / (width - 2);
      hsvValues[2] = max - (thumbY - 1) * max / (height - 2);
    }
    let color = formatHex({
      mode: "okhsv",
      h: hsvValues[0],
      s: hsvValues[1],
      v: hsvValues[2]
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="container svelte-1jn74ui"${attr_style(`width: ${stringify(width)}px; height: ${stringify(height)}px`)}>`);
      SliderSV_HSV_Gradient($$renderer3, { width, height, hsvValues, scale, min, max });
      $$renderer3.push(`<!----> <svg${attr("viewBox", `${stringify(-overhang)} ${stringify(-overhang)} ${stringify(width + 2 * overhang)} ${stringify(height + 2 * overhang)}`)}${attr("width", width + 2 * overhang)}${attr("height", height + 2 * overhang)}${attr_style(`left:${stringify(-overhang)}px; top:${stringify(-overhang)}px`)} class="svelte-1jn74ui"><rect${attr("x", 0)}${attr("y", 0)}${attr("width", width)}${attr("height", height)} fill="#f000" stroke-width="2"></rect>`);
      DraggableSvgNode($$renderer3, {
        minX: 1,
        maxX: width - 1,
        minY: 1,
        maxY: height - 1,
        color,
        onchange: updateValues,
        get dragAreaElement() {
          return dragAreaElement;
        },
        set dragAreaElement($$value) {
          dragAreaElement = $$value;
          $$settled = false;
        },
        get x() {
          return thumbX;
        },
        set x($$value) {
          thumbX = $$value;
          $$settled = false;
        },
        get y() {
          return thumbY;
        },
        set y($$value) {
          thumbY = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></svg></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { hsvValues });
  });
}
function SliderH_HSV($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { hsvValues = void 0, width = 200, height = 14, margin = 6 } = $$props;
    let maxH = 360;
    let dragAreaElement = null;
    let thumbX = hsvValues[0] / maxH * (width - 2) + 1;
    function updateValues() {
      hsvValues[0] = (thumbX - 1) * maxH / (width - 2);
    }
    let color = formatHex({
      mode: "okhsv",
      h: hsvValues[0],
      s: hsvValues[1],
      v: hsvValues[2]
    });
    let overhang = 10;
    let step = 10;
    let gradientStops = (() => {
      let res = [];
      for (let x = 0; x <= 1; x += 1 / step) {
        let col = formatHex({ mode: "okhsv", h: x * 360, s: hsvValues[1], v: hsvValues[2] });
        res.push({ color: col, offset: x });
      }
      return res;
    })();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="container svelte-1s1qea5"${attr_style(`width: ${stringify(width)}px; height: ${stringify(height)}px`)}><svg id="gradient"${attr("viewBox", `${stringify(0)} ${stringify(0)} ${stringify(width)} ${stringify(height)}`)}${attr("width", width)}${attr("height", height)}><rect${attr("x", 0)}${attr("y", 0)}${attr("width", width)}${attr("height", height)} rx="4" ry="4" fill="#444"></rect><g><linearGradient id="luminanceGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0"${attr("x2", width)} y2="0"><!--[-->`);
      const each_array = ensure_array_like(gradientStops);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let stop = each_array[$$index];
        $$renderer3.push(`<stop${attr("offset", stop.offset)}${attr_style("stop-color:" + stop.color)}></stop>`);
      }
      $$renderer3.push(`<!--]--></linearGradient><rect fill="url(#luminanceGradient)"${attr("x", 1)}${attr("y", 1)}${attr("width", width - 2)}${attr("height", height - 2)} rx="3" ry="3"></rect></g></svg> <svg id="slider"${attr("viewBox", `${stringify(-overhang)} 0 ${stringify(width + 2 * overhang)} ${stringify(height)}`)}${attr("width", width + 2 * overhang)}${attr("height", height)}${attr_style(`left: ${stringify(-overhang)}px; top: 0px;`)} class="svelte-1s1qea5"><rect fill="#f000"${attr("x", 0)}${attr("y", 0)}${attr("width", width)}${attr("height", height)}></rect>`);
      DraggableSvgNode($$renderer3, {
        dragAreaElement,
        y: 7,
        minX: 1,
        maxX: width - 1,
        minY: 7,
        maxY: 7,
        color,
        onchange: updateValues,
        get x() {
          return thumbX;
        },
        set x($$value) {
          thumbX = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></svg></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { hsvValues });
  });
}
function ColorPickerHSV($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      color = void 0,
      onColorChange = void 0,
      width = 200,
      height
    } = $$props;
    height = height || width;
    converter("okhsv");
    converter("rgb");
    let hsvValues = [0, 1, 1];
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="container svelte-x1xg4e"${attr_style(`width: ${stringify(width)}px; height: ${stringify(height + 20)}px;`)}>`);
      SliderSV_HSV($$renderer3, {
        width,
        height,
        get hsvValues() {
          return hsvValues;
        },
        set hsvValues($$value) {
          hsvValues = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      SliderH_HSV($$renderer3, {
        width,
        get hsvValues() {
          return hsvValues;
        },
        set hsvValues($$value) {
          hsvValues = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { color });
  });
}
function EditableColorPalette($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      colors = ["#ff0000", "#00ff00", "#0000ff"],
      selectedColorIndex = 0,
      width,
      height,
      swatchSize = 40
    } = $$props;
    height = height || width;
    let selectedColor = colors[selectedColorIndex] || "#ff0000";
    function updateColor(newColor) {
      colors[selectedColorIndex] = newColor;
      colors = [...colors];
    }
    $$renderer2.push(`<div class="editable-color-palette svelte-115gi70"${attr_style(`width: ${stringify(width)}px;`)}><div class="color-palette svelte-115gi70"><!--[-->`);
    const each_array = ensure_array_like(colors);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let color = each_array[index];
      $$renderer2.push(`<button aria-label="Color Swatch"${attr_class(`color-swatch ${stringify(index === selectedColorIndex ? "selected" : "")}`, "svelte-115gi70")}${attr_style(`background-color: ${stringify(color)}; width: ${stringify(swatchSize)}px; height: ${stringify(swatchSize)}px;`)}></button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="color-picker-container svelte-115gi70">`);
    ColorPickerHSV($$renderer2, {
      color: selectedColor,
      onColorChange: updateColor,
      width,
      height
    });
    $$renderer2.push(`<!----></div></div>`);
    bind_props($$props, { colors, selectedColorIndex });
  });
}
function Pattern_Trapez_D($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let allElements, viewBoxSize, viewBoxWidth, viewBoxHeight, centerX, centerY;
    const colorPalettes = [
      { name: "Autumn", colors: ["#ffd7b5", "#d2691e", "#8b4513"] }
    ];
    const DEFAULTS = {
      rows: 4,
      cols: 4,
      startY: -149,
      segmentWidth: 450,
      segmentHeight: 346,
      segmentOffsetX: 0,
      segmentOffsetY: 0,
      segmentSpacingX: 0,
      segmentSpacingY: 0,
      scale: 1,
      trapezColor: "#ffd7b5",
      dreieckColor: "#d2691e",
      parallelogrammColor: "#8b4513",
      rowOffsetX: 0,
      rowSpacing: 50,
      baseStartX: -440,
      useModulo: true
    };
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
    let trapezColor = DEFAULTS.trapezColor;
    let dreieckColor = DEFAULTS.dreieckColor;
    let parallelogrammColor = DEFAULTS.parallelogrammColor;
    let useModulo = DEFAULTS.useModulo;
    let segmentSpacingX = DEFAULTS.segmentSpacingX;
    let segmentSpacingY = DEFAULTS.segmentSpacingY;
    let row1OffsetX = 0;
    let row2OffsetX = 0;
    let row3OffsetX = 0;
    let row4OffsetX = 0;
    let mirrorRow1 = false;
    let mirrorRow2 = true;
    let mirrorRow3 = true;
    let mirrorRow4 = false;
    let selectedColorIndex = 0;
    let colors = [trapezColor, dreieckColor, parallelogrammColor];
    let selectedPaletteIndex = 0;
    {
      colors = [...colorPalettes[selectedPaletteIndex].colors];
    }
    {
      trapezColor = colors[0];
      dreieckColor = colors[1];
      parallelogrammColor = colors[2];
    }
    `${useModulo}-${colors.join("-")}-${mirrorRow1}-${mirrorRow2}-${mirrorRow3}-${mirrorRow4}-${segmentSpacingX}-${segmentSpacingY}-${row1OffsetX}-${row2OffsetX}-${row3OffsetX}-${row4OffsetX}`;
    allElements = (() => {
      const newPattern = new Pattern(startY, {
        segmentWidth,
        segmentHeight,
        segmentOffsetX,
        segmentOffsetY,
        segmentSpacingX,
        segmentSpacingY,
        trapezColor,
        dreieckColor,
        parallelogrammColor,
        rowOffsetX,
        rowSpacing,
        baseStartX,
        row1OffsetX: row1OffsetX + 50,
        row2OffsetX: row2OffsetX + 50,
        row3OffsetX: row3OffsetX + 50,
        row4OffsetX: row4OffsetX + 50,
        row1Mirror: mirrorRow1,
        row2Mirror: mirrorRow2,
        row3Mirror: mirrorRow3,
        row4Mirror: mirrorRow4,
        useModulo
      });
      newPattern.generateGrid(rows, cols);
      return newPattern.getAllElements();
    })();
    viewBoxSize = 1e3;
    viewBoxWidth = viewBoxSize;
    viewBoxHeight = viewBoxSize;
    centerX = 0;
    centerY = 0;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="svg-container"><!---->`);
      {
        $$renderer3.push(`<svg${attr("viewBox", `0 0 ${stringify(viewBoxWidth)} ${stringify(viewBoxHeight)}`)} class="svg-canvas"><rect x="0" y="0"${attr("width", viewBoxWidth)}${attr("height", viewBoxHeight)} fill="#2d2d2dff" stroke="none"></rect><g${attr("transform", `translate(${stringify(centerX)}, ${stringify(centerY)}) scale(${stringify(scale)})`)}><!--[-->`);
        const each_array = ensure_array_like(allElements);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let element = each_array[$$index];
          $$renderer3.push(`<polygon${attr("points", element.getPoints())}${attr("fill", element.fill)} stroke="black" stroke-width="1"${attr("transform", element.getTransform())}></polygon>`);
        }
        $$renderer3.push(`<!--]--></g></svg>`);
      }
      $$renderer3.push(`<!----></div> <div class="sidebar-right svelte-yv94u4"><button>Reset All</button> <hr/> <p class="description svelte-yv94u4">Wähle die Farben für Trapez, Dreieck und Parallelogramm.</p> <button class="toggle-gallery-btn svelte-yv94u4">${escape_html("▶")} Farbauswahl</button> `);
      {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      EditableColorPalette($$renderer3, {
        get colors() {
          return colors;
        },
        set colors($$value) {
          colors = $$value;
          $$settled = false;
        },
        get selectedColorIndex() {
          return selectedColorIndex;
        },
        set selectedColorIndex($$value) {
          selectedColorIndex = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <hr/> <p class="description svelte-yv94u4">Aktiviere/Deaktiviere die Farb-Invertierung.</p> `);
      Toggle($$renderer3, {
        label: "Modulo aktiv",
        get value() {
          return useModulo;
        },
        set value($$value) {
          useModulo = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <hr/> <p class="description svelte-yv94u4">Bewege Segmente von der Mitte des Canvas weg.</p> `);
      Slider($$renderer3, {
        min: 0,
        max: 100,
        snapValues: [0, 50, 100],
        label: "Horizontal (px)",
        get value() {
          return segmentSpacingX;
        },
        set value($$value) {
          segmentSpacingX = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Slider($$renderer3, {
        min: 0,
        max: 100,
        snapValues: [0, 50, 100],
        label: "Vertikal (px)",
        get value() {
          return segmentSpacingY;
        },
        set value($$value) {
          segmentSpacingY = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <hr/> <p class="description svelte-yv94u4">Stelle die X-Position jeder Reihe individuell ein.</p> `);
      Slider($$renderer3, {
        min: -100,
        max: 100,
        snapValues: [-100, -50, 0, 50, 100],
        label: "Reihe 1 Offset-X (px)",
        get value() {
          return row1OffsetX;
        },
        set value($$value) {
          row1OffsetX = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Slider($$renderer3, {
        min: -100,
        max: 100,
        snapValues: [-100, -50, 0, 50, 100],
        label: "Reihe 2 Offset-X (px)",
        get value() {
          return row2OffsetX;
        },
        set value($$value) {
          row2OffsetX = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Slider($$renderer3, {
        min: -100,
        max: 100,
        snapValues: [-100, -50, 0, 50, 100],
        label: "Reihe 3 Offset-X (px)",
        get value() {
          return row3OffsetX;
        },
        set value($$value) {
          row3OffsetX = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Slider($$renderer3, {
        min: -100,
        max: 100,
        snapValues: [-100, -50, 0, 50, 100],
        label: "Reihe 4 Offset-X (px)",
        get value() {
          return row4OffsetX;
        },
        set value($$value) {
          row4OffsetX = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <hr/> <p class="description svelte-yv94u4">Spiegle einzelne Reihen horizontal.</p> `);
      Toggle($$renderer3, {
        label: "Reihe 1 spiegeln",
        get value() {
          return mirrorRow1;
        },
        set value($$value) {
          mirrorRow1 = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Toggle($$renderer3, {
        label: "Reihe 2 spiegeln",
        get value() {
          return mirrorRow2;
        },
        set value($$value) {
          mirrorRow2 = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Toggle($$renderer3, {
        label: "Reihe 3 spiegeln",
        get value() {
          return mirrorRow3;
        },
        set value($$value) {
          mirrorRow3 = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Toggle($$renderer3, {
        label: "Reihe 4 spiegeln",
        get value() {
          return mirrorRow4;
        },
        set value($$value) {
          mirrorRow4 = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
const l = 50;
const h = Math.sin(Math.PI / 3) * l;
class StripeRow {
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
  constructor(yTop, count = 6, options = {}) {
    this.yTop = yTop;
    this.count = count;
    this.options = options;
    this.h = h;
    this.elements = [];
    const offsetX = options.offsetX ?? 0;
    const colorTop = options.colorTop ?? "#ffffff";
    const colorBot = options.colorBottom ?? "#ffffff";
    const colorTri = options.colorTri ?? "#c52b1e";
    const mirror = options.mirror ?? false;
    const blockWidth = 100;
    const startX = 0 + offsetX;
    const mirrorCenter = 500;
    for (let i = 0; i < count; i++) {
      let trapezX = startX + i * blockWidth;
      if (mirror) {
        trapezX = mirrorCenter - (trapezX - mirrorCenter);
      }
      const rotation = mirror ? 180 : 0;
      this.elements.push(new Trapez(trapezX + (mirror ? -25 : 25), this.yTop, rotation, colorTop, null, null, null, i * 4 + 2, false));
      this.elements.push(new Trapez(trapezX, this.yTop + this.h, rotation, colorBot, null, null, null, i * 4 + 3, false));
      this.elements.push(new Dreieck(trapezX + (mirror ? -75 : 75), this.yTop, mirror ? 180 : 0, colorTri, null, null, null, i * 4, false));
      this.elements.push(new Dreieck(trapezX + (mirror ? -50 : 50), this.yTop + this.h, mirror ? 180 : 0, colorTri, null, null, null, i * 4 + 1, false));
    }
  }
  getAllElements() {
    return this.elements;
  }
}
class StripeSegment {
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
    this.options.rowSpacing !== void 0 ? this.options.rowSpacing : 0;
    const row1OffsetX = this.options.row1OffsetX !== void 0 ? this.options.row1OffsetX : 0;
    const row2OffsetX = this.options.row2OffsetX !== void 0 ? this.options.row2OffsetX : 0;
    const row3OffsetX = this.options.row3OffsetX !== void 0 ? this.options.row3OffsetX : 0;
    const row4OffsetX = this.options.row4OffsetX !== void 0 ? this.options.row4OffsetX : 0;
    const row1Mirror = this.options.row1Mirror !== void 0 ? this.options.row1Mirror : false;
    const row2Mirror = this.options.row2Mirror !== void 0 ? this.options.row2Mirror : false;
    const row3Mirror = this.options.row3Mirror !== void 0 ? this.options.row3Mirror : false;
    const row4Mirror = this.options.row4Mirror !== void 0 ? this.options.row4Mirror : false;
    const colorTop = this.options.colorTop || "#ffffff";
    const colorBottom = this.options.colorBottom || "#ffffff";
    const colorTri = this.options.colorTri || "#c52b1e";
    const countPerRow = this.options.countPerRow || 7;
    this.rows.push(new StripeRow(startY, countPerRow, {
      colorTop,
      colorBottom,
      colorTri,
      offsetX: this.offsetX + baseStartX + baseOffsetX + row1OffsetX,
      mirror: row1Mirror
    }));
    this.rows.push(new StripeRow(startY + 2 * this.h, countPerRow, {
      colorTop,
      colorBottom,
      colorTri,
      offsetX: this.offsetX + baseStartX + baseOffsetX + row2OffsetX - 50,
      mirror: row2Mirror
    }));
    this.rows.push(new StripeRow(startY + 4 * this.h, countPerRow, {
      colorTop,
      colorBottom,
      colorTri,
      offsetX: this.offsetX + baseStartX + baseOffsetX + row3OffsetX - 100,
      mirror: row3Mirror
    }));
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
    this.rows.forEach((row) => {
      allElements = [...allElements, ...row.getAllElements()];
    });
    return allElements;
  }
}
class StripePattern {
  constructor(startY = 100, options = {}) {
    this.startY = startY;
    this.h = Math.sin(Math.PI / 3) * 50;
    this.segmentWidth = options.segmentWidth || 450;
    this.segmentHeight = options.segmentHeight || 8 * this.h;
    this.segmentOffsetX = options.segmentOffsetX || 0;
    this.segmentOffsetY = options.segmentOffsetY || 0;
    this.segmentSpacingX = options.segmentSpacingX !== void 0 ? options.segmentSpacingX : 0;
    this.segmentSpacingY = options.segmentSpacingY !== void 0 ? options.segmentSpacingY : 0;
    this.colorTop = options.colorTop || "#ffffff";
    this.colorBottom = options.colorBottom || "#ffffff";
    this.colorTri = options.colorTri || "#c52b1e";
    this.rowOffsetX = options.rowOffsetX || 0;
    this.rowSpacing = options.rowSpacing !== void 0 ? options.rowSpacing : 0;
    this.baseStartX = options.baseStartX || 100;
    this.countPerRow = options.countPerRow || 7;
    this.row1OffsetX = options.row1OffsetX;
    this.row2OffsetX = options.row2OffsetX;
    this.row3OffsetX = options.row3OffsetX;
    this.row4OffsetX = options.row4OffsetX;
    this.row1Mirror = options.row1Mirror;
    this.row2Mirror = options.row2Mirror;
    this.row3Mirror = options.row3Mirror;
    this.row4Mirror = options.row4Mirror;
    this.segments = [];
  }
  // Füge Segment an Grid-Position (row, col) hinzu
  addSegment(row, col) {
    const centerCol = (this.cols - 1) / 2;
    const centerRow = (this.rows - 1) / 2;
    const distX = col - centerCol;
    const distY = row - centerRow;
    const spacingOffsetX = distX * this.segmentSpacingX;
    const spacingOffsetY = distY * this.segmentSpacingY;
    const offsetX = col * this.segmentWidth + this.segmentOffsetX + spacingOffsetX;
    const offsetY = row * this.segmentHeight + this.segmentOffsetY + spacingOffsetY;
    const segment = new StripeSegment(this.startY + offsetY, offsetX, {
      rowOffsetX: this.rowOffsetX,
      rowSpacing: this.rowSpacing,
      baseStartX: this.baseStartX,
      colorTop: this.colorTop,
      colorBottom: this.colorBottom,
      colorTri: this.colorTri,
      countPerRow: this.countPerRow,
      row1OffsetX: this.row1OffsetX,
      row2OffsetX: this.row2OffsetX,
      row3OffsetX: this.row3OffsetX,
      row4OffsetX: this.row4OffsetX,
      row1Mirror: this.row1Mirror,
      row2Mirror: this.row2Mirror,
      row3Mirror: this.row3Mirror,
      row4Mirror: this.row4Mirror
    });
    this.segments.push({ segment, row, col });
    return segment;
  }
  // Generiere Grid automatisch (rows x cols)
  generateGrid(rows, cols) {
    this.segments = [];
    this.rows = rows;
    this.cols = cols;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        this.addSegment(row, col);
      }
    }
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
function Pattern_StripeRow($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const DEFAULTS = {
      rows: 4,
      cols: 4,
      startY: -149,
      segmentWidth: 500,
      segmentHeight: 346,
      segmentOffsetX: 0,
      segmentOffsetY: 0,
      rowOffsetX: 0,
      rowSpacing: 0,
      baseStartX: -250,
      countPerRow: 7,
      hueRange: [30, 25],
      saturationRange: [100, 76],
      luminanceRange: [85, 31]
    };
    const rows = DEFAULTS.rows;
    const cols = DEFAULTS.cols;
    const startY = DEFAULTS.startY;
    const segmentWidth = DEFAULTS.segmentWidth;
    const segmentHeight = DEFAULTS.segmentHeight;
    const segmentOffsetX = DEFAULTS.segmentOffsetX;
    const segmentOffsetY = DEFAULTS.segmentOffsetY;
    const rowOffsetX = DEFAULTS.rowOffsetX;
    const rowSpacing = DEFAULTS.rowSpacing;
    const baseStartX = DEFAULTS.baseStartX;
    const countPerRow = DEFAULTS.countPerRow;
    let hueMin = DEFAULTS.hueRange[0];
    let hueMax = DEFAULTS.hueRange[1];
    let satMin = DEFAULTS.saturationRange[0];
    let satMax = DEFAULTS.saturationRange[1];
    let lumMin = DEFAULTS.luminanceRange[0];
    let lumMax = DEFAULTS.luminanceRange[1];
    function hslToHex(h2, s, l2) {
      h2 = h2 / 360;
      s = s / 100;
      l2 = l2 / 100;
      let r, g, b;
      if (s === 0) {
        r = g = b = l2;
      } else {
        const hue2rgb = (p2, q2, t) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p2 + (q2 - p2) * 6 * t;
          if (t < 1 / 2) return q2;
          if (t < 2 / 3) return p2 + (q2 - p2) * (2 / 3 - t) * 6;
          return p2;
        };
        const q = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
        const p = 2 * l2 - q;
        r = hue2rgb(p, q, h2 + 1 / 3);
        g = hue2rgb(p, q, h2);
        b = hue2rgb(p, q, h2 - 1 / 3);
      }
      const toHex = (x) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      };
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }
    let colorTop = (() => {
      return hslToHex(hueMin, satMin, lumMin);
    })();
    let colorTri = (() => {
      return hslToHex(hueMax, satMax, lumMax);
    })();
    let colorBottom = colorTop;
    let allElements = (() => {
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
    })();
    const viewBoxSize = 1e3;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="svg-container"><svg${attr("viewBox", `0 0 ${stringify(viewBoxSize)} ${stringify(viewBoxSize)}`)} class="svg-canvas"><rect x="0" y="0"${attr("width", viewBoxSize)}${attr("height", viewBoxSize)} fill="#2d2d2dff" stroke="none"></rect><!--[-->`);
      const each_array = ensure_array_like(allElements);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let element = each_array[$$index];
        $$renderer3.push(`<polygon${attr("points", element.getPoints())}${attr("fill", element.fill)} stroke="black" stroke-width="1"${attr("transform", element.getTransform())}></polygon>`);
      }
      $$renderer3.push(`<!--]--></svg></div> <div class="sidebar-right"><button>Reset All</button> <hr/> <p class="description svelte-dc12cc">Stelle die Farben mit den Slidern ein.</p> `);
      RangeSlider($$renderer3, {
        min: 0,
        max: 360,
        label: "Hue (Farbe 1 → Farbe 2)",
        get value1() {
          return hueMin;
        },
        set value1($$value) {
          hueMin = $$value;
          $$settled = false;
        },
        get value2() {
          return hueMax;
        },
        set value2($$value) {
          hueMax = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      RangeSlider($$renderer3, {
        min: 0,
        max: 100,
        label: "Saturation (Farbe 1 → Farbe 2)",
        get value1() {
          return satMin;
        },
        set value1($$value) {
          satMin = $$value;
          $$settled = false;
        },
        get value2() {
          return satMax;
        },
        set value2($$value) {
          satMax = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      RangeSlider($$renderer3, {
        min: 0,
        max: 100,
        label: "Luminance (Farbe 1 → Farbe 2)",
        get value1() {
          return lumMin;
        },
        set value1($$value) {
          lumMin = $$value;
          $$settled = false;
        },
        get value2() {
          return lumMax;
        },
        set value2($$value) {
          lumMax = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
class ZiczacPattern {
  colorIndices;
  startY;
  segmentWidth;
  segmentHeight;
  baseStartX;
  countPerRow;
  mirrorRow1;
  mirrorRow2;
  mirrorRow3;
  mirrorRow4;
  offsetRow1;
  offsetRow2;
  offsetRow3;
  offsetRow4;
  rows;
  cols;
  useModulo;
  constructor(colorIndices, startY = -149, segmentWidth = 500, segmentHeight = 346, baseStartX = -250, countPerRow = 3, mirrorRow1 = false, mirrorRow2 = false, mirrorRow3 = false, mirrorRow4 = false, offsetRow1 = 0, offsetRow2 = -150, offsetRow3 = -300, offsetRow4 = -450, rows = 4, cols = 4, useModulo = false) {
    this.colorIndices = colorIndices;
    this.startY = startY;
    this.segmentWidth = segmentWidth;
    this.segmentHeight = segmentHeight;
    this.baseStartX = baseStartX;
    this.countPerRow = countPerRow;
    this.mirrorRow1 = mirrorRow1;
    this.mirrorRow2 = mirrorRow2;
    this.mirrorRow3 = mirrorRow3;
    this.mirrorRow4 = mirrorRow4;
    this.offsetRow1 = offsetRow1;
    this.offsetRow2 = offsetRow2;
    this.offsetRow3 = offsetRow3;
    this.offsetRow4 = offsetRow4;
    this.rows = rows;
    this.cols = cols;
    this.useModulo = useModulo;
    this.segments = [];
    this.generateGrid();
  }
  generateGrid() {
    this.segments = [];
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const startX = this.baseStartX + col * this.segmentWidth;
        const startY = this.startY + row * this.segmentHeight;
        const segment = new CustomSegment(startX, this.colorIndices, this.mirrorRow1, this.mirrorRow2, this.mirrorRow3, this.mirrorRow4, this.offsetRow1, this.offsetRow2, this.offsetRow3, this.offsetRow4, this.segmentWidth, this.countPerRow, this.useModulo);
        this.segments.push({ segment, row, col, startY });
      }
    }
  }
  getAllElements() {
    let allElements = [];
    this.segments.forEach(({ segment, startY }) => {
      const segmentElements = segment.getAllElements();
      segmentElements.forEach((element) => {
        element.y += startY;
      });
      allElements = [...allElements, ...segmentElements];
    });
    return allElements;
  }
}
function Pattern_ZiczacRow($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const DEFAULTS = {
      rows: 4,
      cols: 4,
      startY: -149,
      segmentWidth: 400,
      segmentHeight: 346,
      baseStartX: -440,
      countPerRow: 1,
      offsetRow1: 0,
      offsetRow2: -50,
      offsetRow3: -100,
      offsetRow4: -150,
      mirrorRow1: false,
      mirrorRow2: false,
      mirrorRow3: false,
      mirrorRow4: false,
      hueRange: [30, 25],
      opacityRange: [100, 76],
      luminanceRange: [85, 31]
    };
    const rows = DEFAULTS.rows;
    const cols = DEFAULTS.cols;
    const startY = DEFAULTS.startY;
    const segmentWidth = DEFAULTS.segmentWidth;
    const segmentHeight = DEFAULTS.segmentHeight;
    const baseStartX = DEFAULTS.baseStartX;
    const countPerRow = DEFAULTS.countPerRow;
    const offsetRow1 = DEFAULTS.offsetRow1;
    const offsetRow2 = DEFAULTS.offsetRow2;
    const offsetRow3 = DEFAULTS.offsetRow3;
    const offsetRow4 = DEFAULTS.offsetRow4;
    const mirrorRow1 = DEFAULTS.mirrorRow1;
    const mirrorRow2 = DEFAULTS.mirrorRow2;
    const mirrorRow3 = DEFAULTS.mirrorRow3;
    const mirrorRow4 = DEFAULTS.mirrorRow4;
    let hueMin = DEFAULTS.hueRange[0];
    let hueMax = DEFAULTS.hueRange[1];
    let satMin = DEFAULTS.opacityRange[0];
    let satMax = DEFAULTS.opacityRange[1];
    let lumMin = DEFAULTS.luminanceRange[0];
    let lumMax = DEFAULTS.luminanceRange[1];
    function hslToHex(h2, s, l2) {
      h2 = h2 / 360;
      s = s / 100;
      l2 = l2 / 100;
      let r, g, b;
      if (s === 0) {
        r = g = b = l2;
      } else {
        const hue2rgb = (p2, q2, t) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p2 + (q2 - p2) * 6 * t;
          if (t < 1 / 2) return q2;
          if (t < 2 / 3) return p2 + (q2 - p2) * (2 / 3 - t) * 6;
          return p2;
        };
        const q = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
        const p = 2 * l2 - q;
        r = hue2rgb(p, q, h2 + 1 / 3);
        g = hue2rgb(p, q, h2);
        b = hue2rgb(p, q, h2 - 1 / 3);
      }
      const toHex = (x) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      };
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }
    let adjustedColors = (() => {
      const color1 = hslToHex(hueMin, satMin, lumMin);
      const color2 = hslToHex(hueMax, satMax, lumMax);
      console.log("adjustedColors updated:", {
        color1,
        color2,
        hueMin,
        hueMax,
        satMin,
        satMax,
        lumMin,
        lumMax
      });
      return [color1, color2, color1, color2, color1, color2];
    })();
    let expandedColors = adjustedColors;
    let pattern = new ZiczacPattern(
      expandedColors,
      startY,
      segmentWidth,
      segmentHeight,
      baseStartX,
      countPerRow,
      mirrorRow1,
      mirrorRow2,
      mirrorRow3,
      mirrorRow4,
      offsetRow1,
      offsetRow2,
      offsetRow3,
      offsetRow4,
      rows,
      cols,
      false
      // useModulo immer false
    );
    let allElements = pattern.getAllElements();
    const viewBoxSize = 1e3;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="svg-container"><svg${attr("viewBox", `0 0 ${stringify(viewBoxSize)} ${stringify(viewBoxSize)}`)} class="svg-canvas"><rect x="0" y="0"${attr("width", viewBoxSize)}${attr("height", viewBoxSize)} fill="#2d2d2dff" stroke="none"></rect><!--[-->`);
      const each_array = ensure_array_like(allElements);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let element = each_array[$$index];
        $$renderer3.push(`<polygon${attr("points", element.getPoints())}${attr("fill", element.fill)} stroke="black" stroke-width="1"${attr("transform", element.getTransform())}></polygon>`);
      }
      $$renderer3.push(`<!--]--></svg></div> <div class="sidebar-right"><button>Reset All</button> <hr/> <p class="description svelte-dl7c1v">Stelle die Farben mit den Slidern ein.</p> `);
      RangeSlider($$renderer3, {
        min: 0,
        max: 360,
        label: "Hue (Farbe 1 → Farbe 2)",
        get value1() {
          return hueMin;
        },
        set value1($$value) {
          hueMin = $$value;
          $$settled = false;
        },
        get value2() {
          return hueMax;
        },
        set value2($$value) {
          hueMax = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      RangeSlider($$renderer3, {
        min: 0,
        max: 100,
        label: "Saturation (Farbe 1 → Farbe 2)",
        get value1() {
          return satMin;
        },
        set value1($$value) {
          satMin = $$value;
          $$settled = false;
        },
        get value2() {
          return satMax;
        },
        set value2($$value) {
          satMax = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      RangeSlider($$renderer3, {
        min: 0,
        max: 100,
        label: "Luminance (Farbe 1 → Farbe 2)",
        get value1() {
          return lumMin;
        },
        set value1($$value) {
          lumMin = $$value;
          $$settled = false;
        },
        get value2() {
          return lumMax;
        },
        set value2($$value) {
          lumMax = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function _page($$renderer) {
  let patterns = [
    {
      name: "Stripe-Row Pattern",
      component: Pattern_StripeRow,
      description: "StripeRow-Muster: 16 Segmente (4x4) mit je 4 Reihen, alle Features."
    },
    {
      name: "Ziczac-Row Pattern",
      component: Pattern_ZiczacRow,
      description: "Trapez-Parallelogramm-Trapez Muster mit 4 Reihen."
    },
    {
      name: "Pattern Trapez A - Nur Farben",
      component: Pattern_Trapez_A,
      description: "Trapez-Muster mit Farbsteuerung."
    },
    {
      name: "Pattern Trapez B - Positionen & Abstände",
      component: Pattern_Trapez_B,
      description: "Trapez-Muster mit Position und Abstand-Steuerung."
    },
    {
      name: "Pattern Trapez C - Reihen-Spiegelung",
      component: Pattern_Trapez_C,
      description: "Trapez-Muster mit Reihen-Spiegelung."
    },
    {
      name: "Pattern Trapez D - Master Pattern",
      component: Pattern_Trapez_D,
      description: "Vollständiges Trapez-Muster mit allen Funktionen."
    }
  ];
  let selectedPattern = 0;
  let SelectedPattern = patterns[selectedPattern].component;
  $$renderer.push(`<div class="app-container">`);
  Header($$renderer);
  $$renderer.push(`<!----> <main class="app-main"><div class="sidebar-left"><!--[-->`);
  const each_array = ensure_array_like(patterns);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let pattern = each_array[index];
    $$renderer.push(`<button${attr_class("sidebar-left-item", void 0, { "selected": selectedPattern === index })}>${escape_html(pattern.name)} `);
    if (selectedPattern === index) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<div class="sidebar-left-description">${escape_html(pattern.description)}</div>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--></button>`);
  }
  $$renderer.push(`<!--]--></div> <!---->`);
  SelectedPattern($$renderer, {});
  $$renderer.push(`<!----></main></div>`);
}
export {
  _page as default
};
