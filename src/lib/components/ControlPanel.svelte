<script>
  // Props für bidirektionale Bindung
  export let rows;
  export let cols;
  export let segmentWidth;
  export let segmentHeight;
  export let segmentOffsetX;
  export let segmentOffsetY;
  export let scale;
  export let trapezColor;
  export let dreieckColor;
  export let parallelogrammColor;
  export let rowOffsetX;
  export let rowSpacing;
  export let baseStartX;
  export let DEFAULTS;

  // Panel collapsed state
  let panelCollapsed = true;
  
  // Section collapsed states
  let gridCollapsed = false;
  let spacingCollapsed = false;
  let rowCollapsed = false;
  let colorCollapsed = false;
  
  // Reset-Funktionen
  function resetGrid() {
    rows = DEFAULTS.rows;
    cols = DEFAULTS.cols;
  }
  
  function resetSpacing() {
    segmentWidth = DEFAULTS.segmentWidth;
    segmentHeight = DEFAULTS.segmentHeight;
    segmentOffsetX = DEFAULTS.segmentOffsetX;
    segmentOffsetY = DEFAULTS.segmentOffsetY;
    scale = DEFAULTS.scale;
  }
  
  function resetRows() {
    baseStartX = DEFAULTS.baseStartX;
    rowOffsetX = DEFAULTS.rowOffsetX;
    rowSpacing = DEFAULTS.rowSpacing;
  }
  
  function resetColors() {
    trapezColor = DEFAULTS.trapezColor;
    dreieckColor = DEFAULTS.dreieckColor;
    parallelogrammColor = DEFAULTS.parallelogrammColor;
  }
  
  function resetAll() {
    resetGrid();
    resetSpacing();
    resetRows();
    resetColors();
  }

  // Plus/Minus Funktionen für Grid
  function incrementRows() {
    if (rows < 10) rows++;
  }
  
  function decrementRows() {
    if (rows > 1) rows--;
  }
  
  function incrementCols() {
    if (cols < 10) cols++;
  }
  
  function decrementCols() {
    if (cols > 1) cols--;
  }
  
  function togglePanel() {
    panelCollapsed = !panelCollapsed;
  }
</script>

<div class="panel-wrapper">
  {#if panelCollapsed}
    <!-- Collapsed State: nur Toggle-Button -->
    <button class="toggle-button collapsed" on:click={togglePanel}>
      <span class="arrow">›</span>
    </button>
  {:else}
    <!-- Expanded State: voller Panel mit Inhalt -->
    <button class="toggle-button collapsed" on:click={togglePanel}>
      <span class="arrow">‹</span>
    </button>
    
    <div class="panel-container">
      <div class="panel-header">
        <h3>Pattern Controls</h3>
        <button class="reset-all-btn" on:click={resetAll}>Reset All</button>
      </div>

      <div class="panel-content">
        <!-- Grid Settings -->
        <details open={!gridCollapsed} on:toggle={(e) => gridCollapsed = !e.target.open}>
          <summary>
            Grid Einstellungen
            <button on:click|stopPropagation={resetGrid} class="section-reset">Reset</button>
          </summary>
          <div class="section-content">
            <div class="control-item">
              <label>
                <strong>Reihen:</strong> {rows}
                <div class="plus-minus-control">
                  <button on:click={decrementRows} class="pm-btn">−</button>
                  <input type="range" bind:value={rows} min="1" max="10" />
                  <button on:click={incrementRows} class="pm-btn">+</button>
                </div>
              </label>
            </div>
            
            <div class="control-item">
              <label>
                <strong>Spalten:</strong> {cols}
                <div class="plus-minus-control">
                  <button on:click={decrementCols} class="pm-btn">−</button>
                  <input type="range" bind:value={cols} min="1" max="10" />
                  <button on:click={incrementCols} class="pm-btn">+</button>
                </div>
              </label>
            </div>
          </div>
        </details>
        
        <!-- Spacing Settings -->
        <details open={!spacingCollapsed} on:toggle={(e) => spacingCollapsed = !e.target.open}>
          <summary>
            Abstände
            <button on:click|stopPropagation={resetSpacing} class="section-reset">Reset</button>
          </summary>
          <div class="section-content">
            <div class="control-item">
              <label>
                <strong>Horizontal:</strong> {segmentWidth}px
                <input type="range" bind:value={segmentWidth} min="300" max="600" />
              </label>
            </div>
            
            <div class="control-item">
              <label>
                <strong>Vertikal:</strong> {segmentHeight}px
                <input type="range" bind:value={segmentHeight} min="200" max="500" />
              </label>
            </div>
            
            <div class="control-item">
              <label>
                <strong>Segment Offset-X:</strong> {segmentOffsetX}px
                <input type="range" bind:value={segmentOffsetX} min="-200" max="200" />
              </label>
            </div>
            
            <div class="control-item">
              <label>
                <strong>Segment Offset-Y:</strong> {segmentOffsetY}px
                <input type="range" bind:value={segmentOffsetY} min="-200" max="200" />
              </label>
            </div>
            
            <div class="control-item">
              <label>
                <strong>Skalierung:</strong> {scale.toFixed(2)}x
                <input type="range" bind:value={scale} min="0.1" max="3" step="0.1" />
              </label>
            </div>
          </div>
        </details>
        
        <!-- Row Settings -->
        <details open={!rowCollapsed} on:toggle={(e) => rowCollapsed = !e.target.open}>
          <summary>
            Reihen-Konfiguration
            <button on:click|stopPropagation={resetRows} class="section-reset">Reset</button>
          </summary>
          <div class="section-content">
            <div class="control-item">
              <label>
                <strong>Basis Start-X:</strong> {baseStartX}px
                <input type="range" bind:value={baseStartX} min="50" max="200" />
              </label>
            </div>
            
            <div class="control-item">
              <label>
                <strong>Row Offset-X:</strong> {rowOffsetX}px
                <input type="range" bind:value={rowOffsetX} min="-100" max="100" />
              </label>
            </div>
            
            <div class="control-item">
              <label>
                <strong>Row 3/4 Spacing:</strong> {rowSpacing}px
                <input type="range" bind:value={rowSpacing} min="0" max="100" />
              </label>
            </div>
          </div>
        </details>
        
        <!-- Color Settings -->
        <details open={!colorCollapsed} on:toggle={(e) => colorCollapsed = !e.target.open}>
          <summary>
            Farben
            <button on:click|stopPropagation={resetColors} class="section-reset">Reset</button>
          </summary>
          <div class="section-content">
            <div class="control-item">
              <label>
                <strong>Trapez:</strong>
                <input type="color" bind:value={trapezColor} />
              </label>
            </div>
            
            <div class="control-item">
              <label>
                <strong>Dreieck:</strong>
                <input type="color" bind:value={dreieckColor} />
              </label>
            </div>
            
            <div class="control-item">
              <label>
                <strong>Parallelogramm:</strong>
                <input type="color" bind:value={parallelogrammColor} />
              </label>
            </div>
          </div>
        </details>
      </div>
    </div>
  {/if}
</div>

<style>
  .panel-wrapper {
    position: relative;
    height: 100%;
  }

  .panel-container {
    width: 320px;
    height: 100%;
    background: #1a1a1a;
    border-right: 2px solid #000;
    display: flex;
    flex-direction: column;
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .toggle-button {
    cursor: pointer;
    border: none;
    background: #666;
    color: white;
    font-size: 20px;
    font-weight: bold;
    transition: all 0.2s;
  }

  .toggle-button:hover {
    background: #555;
  }

  .toggle-button.collapsed {
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 80px;
    border-radius: 0 8px 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .toggle-button.collapsed .arrow {
    font-size: 28px;
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #2d2d2d;
    border-bottom: 2px solid #000;
  }

  .panel-header h3 {
    margin: 0;
    font-size: 16px;
    color: #fff;
  }

  .reset-all-btn {
    padding: 5px 10px;
    cursor: pointer;
    background: #ff6b6b;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: bold;
  }

  .reset-all-btn:hover {
    background: #ff5252;
  }

  .panel-content {
    flex: 1;
    overflow-y: auto;
    padding: 15px;
    background: #1a1a1a;
  }

  details {
    border: 1px solid #444;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
    background: #2d2d2d;
  }

  summary {
    cursor: pointer;
    font-weight: bold;
    padding: 10px;
    background: #3d3d3d;
    color: #fff;
    margin: -10px;
    margin-bottom: 10px;
    user-select: none;
    border-radius: 4px 4px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  summary:hover {
    background: #4d4d4d;
  }

  .section-reset {
    padding: 2px 8px;
    font-size: 11px;
    background: #ff9999;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  .section-reset:hover {
    background: #ff7777;
  }

  .section-content {
    padding: 10px 0;
  }

  .control-item {
    margin-bottom: 15px;
  }

  .control-item label {
    display: block;
    color: #fff;
  }

  .control-item input[type="range"] {
    width: 100%;
    margin-top: 5px;
  }

  .control-item input[type="color"] {
    width: 100%;
    height: 40px;
    margin-top: 5px;
  }

  .plus-minus-control {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 5px;
  }

  .plus-minus-control input[type="range"] {
    flex: 1;
  }

  .pm-btn {
    padding: 5px 12px;
    cursor: pointer;
    background: #3d3d3d;
    color: #fff;
    border: 1px solid #555;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
  }

  .pm-btn:hover {
    background: #4d4d4d;
  }

  .pm-btn:active {
    transform: scale(0.95);
  }

  button:active {
    transform: scale(0.95);
  }
</style>

