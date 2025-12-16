<script>
  let l = 50;
  let h = Math.sin(Math.PI / 3) * l;

  function generateRow1() {
    return [
      { x: 100, y: 100, rotation: 0 },
      { x: 125, y: 100 - h, rotation: 0 },
      { x: 175, y: 100, rotation: 180 },
      { x: 200, y: 100 - h, rotation: 180 },
      { x: 250, y: 100, rotation: 0 },
      { x: 275, y: 100 - h, rotation: 0 },
      { x: 350, y: 100, rotation: 0 },
      { x: 375, y: 100 - h, rotation: 0 },
      { x: 475, y: 100, rotation: 180 },
      { x: 500, y: 100 - h, rotation: 180 }
    ].map(p => ({ ...p, type: 'rhombus' }));
  }

  function generateRow2() {
    const baseY = 100 + 2 * h;
    return [
      { x: 500, y: baseY, rotation: 0 },
      { x: 475, y: baseY - h, rotation: 0 },
      { x: 425, y: baseY, rotation: 180 },
      { x: 400, y: baseY - h, rotation: 180 },
      { x: 350, y: baseY, rotation: 0 },
      { x: 325, y: baseY - h, rotation: 0 },
      { x: 250, y: baseY, rotation: 0 },
      { x: 225, y: baseY - h, rotation: 0 },
      { x: 125, y: baseY, rotation: 180 },
      { x: 100, y: baseY - h, rotation: 180 }
    ].map(p => ({ ...p, type: 'rhombus' }));
  }

  function generateRow3() {
    const baseY = 100 + 4 * h;
    return [
      { x: 550, y: baseY, rotation: 0 },
      { x: 525, y: baseY - h, rotation: 0 },
      { x: 475, y: baseY, rotation: 180 },
      { x: 450, y: baseY - h, rotation: 180 },
      { x: 400, y: baseY, rotation: 0 },
      { x: 375, y: baseY - h, rotation: 0 },
      { x: 300, y: baseY, rotation: 0 },
      { x: 275, y: baseY - h, rotation: 0 },
      { x: 175, y: baseY, rotation: 180 },
      { x: 150, y: baseY - h, rotation: 180 }
    ].map(p => ({ ...p, type: 'rhombus' }));
  }

  function generateRow4() {
    const baseY = 100 + 6 * h;
    return [
      { x: 150, y: baseY, rotation: 0 },
      { x: 175, y: baseY - h, rotation: 0 },
      { x: 225, y: baseY, rotation: 180 },
      { x: 250, y: baseY - h, rotation: 180 },
      { x: 300, y: baseY, rotation: 0 },
      { x: 325, y: baseY - h, rotation: 0 },
      { x: 400, y: baseY, rotation: 0 },
      { x: 425, y: baseY - h, rotation: 0 },
      { x: 525, y: baseY, rotation: 180 },
      { x: 550, y: baseY - h, rotation: 180 }
    ].map(p => ({ ...p, type: 'rhombus' }));
  }

  // Dreiecke
  function generateTriangles() {
    return [
      {
        x: 325,
        y: 56.69872981077807,
        rotation: 0,
        type: 'triangle'
      },
      {
        x: 300,
        y: 100,
        rotation: 0,
        type: 'triangle'
      }
    ];
  }

  // Echte blaue Parallelogramme (oben/unten gleiche Länge, nur geschert)
  function generateParallelograms() {
    return [
      {
        // oberes: Mitte zwischen translate(375, 56.6987…) und translate(500, 56.6987…)
        x: (375 + 500) / 2,          // 437.5
        y: 56.69872981077807,
        rotation: 0,
        type: 'para'
      },
      {
        // unteres: Mitte zwischen translate(350, 100) und translate(475, 100)
        x: (350 + 475) / 2,          // 412.5
        y: 100,
        rotation: 0,
        type: 'para'
      }
    ];
  }

  const row1 = generateRow1();
  const row2 = generateRow2();
  const row3 = generateRow3();
  const row4 = generateRow4();
  const triangles = generateTriangles();
  const parallelograms = generateParallelograms();

  const allPolys = [
    ...row1,
    ...row2,
    ...row3,
    ...row4,
    ...triangles,
    ...parallelograms
  ];
</script>

<svg
  viewBox="0 0 1000 1000"
  xmlns="http://www.w3.org/2000/svg"
  stroke-linejoin="round"
  stroke-linecap="round"
  stroke-width="1"
  fill="none"
  stroke="#000000"
>
  <rect x="0" y="0" width="1000" height="1000" fill="#ffffff" stroke="none" />

  {#each allPolys as poly}
    {#if poly.type === 'triangle'}
      <polygon
        transform="translate({poly.x} {poly.y})"
        points="0 {h/2} 25 {-h/2} -25 {-h/2}"
        fill="red"
        stroke="none"
      />
    {:else if poly.type === 'para'}
      <!-- echtes Parallelogramm: oben und unten 50 breit, um 20 nach rechts geschert -->
      <polygon
        transform="translate({poly.x} {poly.y})"
        points="-25 {-h/2}, 25 {-h/2}, 45 {h/2}, -5 {h/2}"
        fill="blue"
        stroke="none"
      />
    {:else}
      <!-- unveränderte Rauten -->
      <polygon
        transform="translate({poly.x} {poly.y}){poly.rotation ? ` rotate(${poly.rotation})` : ''}"
        points="-25 {-h/2}, 25 {-h/2}, 50 {h/2} -50 {h/2}"
      />
    {/if}
  {/each}
</svg>

<style>
  svg {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: 0;
  }
</style>
