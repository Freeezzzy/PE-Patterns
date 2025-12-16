<script>
	const squareCount = 20;
	const squareSize = 1000 / squareCount;
	console.log(squareSize);

	function calculatePosHorizontal(xi, yi) {
		const x = xi * squareSize * 2 + (yi % 2) * squareSize - ((yi % 2) * squareSize) / 2;
		const y = yi * squareSize;

		return { x: x, y: y };
	}

	function calculatePosVertikal(xi, yi) {
		const x = xi * squareSize;
		const y = yi * squareSize;
		return { x: x, y: y };
	}
</script>

<div class="svg-container">
	<svg viewbox="0 0 1000 1000" class="svg-canvas">
		{#each Array(squareCount) as _, yi}
			{#each Array(squareCount) as _, xi}
				{#if (xi + yi) % 2 === 0}
					<!-- Horizontale Rechtecke (teal oben, beige unten) -->
					<rect
						transform="translate({xi * squareSize}, {yi * squareSize})"
						width={squareSize}
						height={squareSize / 2}
						fill="teal"
					/>
					<rect
						transform="translate({xi * squareSize}, {yi * squareSize + squareSize / 2})"
						width={squareSize}
						height={squareSize / 2}
						fill="beige"
					/>
				{:else}
					<!-- Vertikale Rechtecke (teal links, beige rechts) -->
					<rect
						transform="translate({xi * squareSize}, {yi * squareSize})"
						width={squareSize / 2}
						height={squareSize}
						fill="teal"
					/>
					<rect
						transform="translate({xi * squareSize + squareSize / 2}, {yi * squareSize})"
						width={squareSize / 2}
						height={squareSize}
						fill="beige"
					/>
				{/if}
			{/each}
		{/each}
	</svg>
</div>



<!-- Logik-Erklärung des Parkett-Musters:
Variablen:
squareCount = 20: Anzahl der Kacheln pro Reihe und Spalte (20×20 = 400 Kacheln insgesamt)
squareSize = 1000 / 20 = 50: Größe jeder Kachel in Pixeln (Canvas ist 1000×1000px groß)
xi: Index der Spalte (x-Position, läuft von 0 bis 19)
yi: Index der Reihe (y-Position, läuft von 0 bis 19)
Die Schachbrett-Logik:
Diese Bedingung entscheidet, ob an dieser Position horizontale oder vertikale Rechtecke gezeichnet werden:

(xi + yi): Addiert Spalten- und Reihenindex
% 2: Modulo 2 - gibt den Rest bei Division durch 2 (entweder 0 oder 1)
=== 0: Prüft ob der Rest 0 ist (gerade Summe)
Beispiele:

Position (0,0): 0+0=0 → 0%2=0 → horizontal
Position (1,0): 1+0=1 → 1%2=1 → vertikal
Position (0,1): 0+1=1 → 1%2=1 → vertikal
Position (1,1): 1+1=2 → 2%2=0 → horizontal
Dies erzeugt ein Schachbrettmuster!

Die Rechtecke:
Horizontale Rechtecke (wenn (xi + yi) % 2 === 0):

Teal-Rechteck oben: width={squareSize}, height={squareSize / 2} → 50×25px
Beige-Rechteck unten: Gleiche Größe, aber y-Position um squareSize / 2 verschoben
Vertikale Rechtecke (sonst):

Teal-Rechteck links: width={squareSize / 2}, height={squareSize} → 25×50px
Beige-Rechteck rechts: Gleiche Größe, aber x-Position um squareSize / 2 verschoben -->