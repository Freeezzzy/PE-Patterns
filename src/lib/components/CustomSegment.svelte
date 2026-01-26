<script context="module">
	import { CustomRow } from './CustomRow.svelte';

	export class CustomSegment {
		offsetX;
		colorIndices;
		mirrorRow1;
		mirrorRow2;
		mirrorRow3;
		mirrorRow4;
		offsetRow1;
		offsetRow2;
		offsetRow3;
		offsetRow4;
		segmentWidth;
		countPerRow;
		useModulo;

		constructor(
			offsetX,
			colorIndices,
			mirrorRow1 = false,
			mirrorRow2 = false,
			mirrorRow3 = false,
			mirrorRow4 = false,
			offsetRow1 = 0,
			offsetRow2 = -150,
			offsetRow3 = -300,
			offsetRow4 = -450,
			segmentWidth = 500,
			countPerRow = 3,
			useModulo = false
		) {
			this.offsetX = offsetX;
			this.colorIndices = colorIndices;
			this.mirrorRow1 = mirrorRow1;
			this.mirrorRow2 = mirrorRow2;
			this.mirrorRow3 = mirrorRow3;
			this.mirrorRow4 = mirrorRow4;
			this.offsetRow1 = offsetRow1;
			this.offsetRow2 = offsetRow2;
			this.offsetRow3 = offsetRow3;
			this.offsetRow4 = offsetRow4;
			this.segmentWidth = segmentWidth;
			this.countPerRow = countPerRow;
			this.useModulo = useModulo;
			this.rows = [];
			this.generateRows();
		}

		generateRows() {
			const l = 50;
			const h = Math.sin(Math.PI / 3) * l;

			const rows = [
				{ mirror: this.mirrorRow1, offset: this.offsetRow1, index: 0 },
				{ mirror: this.mirrorRow2, offset: this.offsetRow2, index: 1 },
				{ mirror: this.mirrorRow3, offset: this.offsetRow3, index: 2 },
				{ mirror: this.mirrorRow4, offset: this.offsetRow4, index: 3 }
			];

			this.rows = rows.map(({ mirror, offset, index }) => {
				return new CustomRow(
					this.offsetX + offset,
					h * 2 * index,
					mirror,
					this.colorIndices,
					this.segmentWidth,
					this.countPerRow,
					this.useModulo
				);
			});
		}

		getAllElements() {
			let allElements = [];
			this.rows.forEach(row => {
				allElements = [...allElements, ...row.getAllElements()];
			});
			return allElements;
		}
	}
</script>
