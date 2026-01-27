<script context="module">
	import { ZiczacSegment } from './ZiczacSegment.svelte';

	export class ZiczacPattern {
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

		constructor(
			colorIndices,
			startY = -149,
			segmentWidth = 500,
			segmentHeight = 346,
			baseStartX = -250,
			countPerRow = 3,
			mirrorRow1 = false,
			mirrorRow2 = false,
			mirrorRow3 = false,
			mirrorRow4 = false,
			offsetRow1 = 0,
			offsetRow2 = -150,
			offsetRow3 = -300,
			offsetRow4 = -450,
			rows = 4,
			cols = 4,
			useModulo = false
		) {
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

				const segment = new ZiczacSegment(
						startX,
						this.colorIndices,
						this.mirrorRow1,
						this.mirrorRow2,
						this.mirrorRow3,
						this.mirrorRow4,
						this.offsetRow1,
						this.offsetRow2,
						this.offsetRow3,
						this.offsetRow4,
						this.segmentWidth,
						this.countPerRow,
						this.useModulo
					);

					this.segments.push({ segment, row, col, startY });
				}
			}
		}

		getAllElements() {
			let allElements = [];
			this.segments.forEach(({ segment, startY }) => {
				const segmentElements = segment.getAllElements();
				// Füge Y-Offset für jedes Element hinzu
				segmentElements.forEach(element => {
					element.y += startY;
				});
				allElements = [...allElements, ...segmentElements];
			});
			return allElements;
		}
	}
</script>
