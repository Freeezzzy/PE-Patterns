<script context="module">
	import { Trapez } from './Trapez.svelte';
	import { Parallelogramm } from './Parallelogramm.svelte';

	const l = 50;
	const h = Math.sin(Math.PI / 3) * l;

	export class ZiczacRow {
		/**
		 * Custom Pattern Row - Trapez-Paar → Parallelogramm-Paar → Trapez-Paar (2x wiederholt)
		 */
		constructor(
			offsetX,
			yTop,
			mirror,
			colorIndices,
			segmentWidth,
			count,
			useModulo = false
		) {
			this.offsetX = offsetX;
			this.yTop = yTop;
			this.mirror = mirror;
			this.colorIndices = colorIndices;
			this.segmentWidth = segmentWidth;
			this.count = count;
			this.useModulo = useModulo;
			this.h = h;
	this.blockWidth = 390; // Von 40 bis 390
			this.elements = [];
			this.generateElements();
		}

		generateElements() {
			const mirrorCenter = 500;

			for (let i = 0; i < this.count; i++) {
				let blockX = this.offsetX + i * this.blockWidth;
				
				if (this.mirror) {
					blockX = mirrorCenter - (blockX - mirrorCenter);
				}

				// Farben aus colorIndices Array holen
				const getColor = (index) => {
					return this.colorIndices[index % this.colorIndices.length];
				};

				// === Erste Kombination (40-190) ===
				
				// Trapez-Paar 1 (x: 40, 65) - normales Trapez-Paar (0 Grad)
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -40 : 40),
						this.yTop,
						0,
						getColor(i * 6),
						null,
						null,
						null,
						i * 6,
						this.useModulo
					)
				);

				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -65 : 65),
						this.yTop - this.h,
						0,
						getColor(i * 6 + 1),
						null,
						null,
						null,
						i * 6 + 1,
						this.useModulo
					)
				);

				// Parallelogramm-Paar (x: 115, 90)
				this.elements.push(
					new Parallelogramm(
						blockX + (this.mirror ? -115 : 115),
						this.yTop - this.h,
						0,
						getColor(i * 6 + 2),
						this.mirror,
						null,
						null,
						null,
						i * 6 + 2,
						this.useModulo
					)
				);

				this.elements.push(
					new Parallelogramm(
						blockX + (this.mirror ? -90 : 90),
						this.yTop,
						0,
						getColor(i * 6 + 3),
						this.mirror,
						null,
						null,
						null,
						i * 6 + 3,
						this.useModulo
					)
				);

				// Trapez-Paar 2 (x: 165, 190) - gedrehtes Trapez-Paar (180 Grad)
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -165 : 165),
						this.yTop,
						180,
						getColor(i * 6 + 4),
						null,
						null,
						null,
						i * 6 + 4,
						this.useModulo
					)
				);

				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -190 : 190),
						this.yTop - this.h,
						180,
						getColor(i * 6 + 5),
						null,
						null,
						null,
						i * 6 + 5,
						this.useModulo
					)
				);

				// === Zweite Kombination (290-440) - bündig anschließend ===
				
				// Trapez-Paar 1b (x: 240, 265) - normales Trapez-Paar (0 Grad)
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -240 : 240),
						this.yTop,
						0,
						getColor(i * 6),
						null,
						null,
						null,
						i * 6,
						this.useModulo
					)
				);

				this.elements.push(
					new Trapez(
				blockX + (this.mirror ? -265 : 265),
						this.yTop - this.h,
						0,
						getColor(i * 6 + 1),
						null,
						null,
						null,
						i * 6 + 1,
						this.useModulo
					)
				);

		// Parallelogramm-Paar b (x: 315, 290)
		this.elements.push(
			new Parallelogramm(
				blockX + (this.mirror ? -315 : 315),
						this.yTop - this.h,
						0,
						getColor(i * 6 + 2),
						this.mirror,
						null,
						null,
						null,
						i * 6 + 2,
						this.useModulo
					)
				);

				this.elements.push(
					new Parallelogramm(
				blockX + (this.mirror ? -290 : 290),
						this.yTop,
						0,
						getColor(i * 6 + 3),
						this.mirror,
						null,
						null,
						null,
						i * 6 + 3,
						this.useModulo
					)
				);

		// Trapez-Paar 2b (x: 365, 390) - gedrehtes Trapez-Paar (180 Grad)
		this.elements.push(
			new Trapez(
				blockX + (this.mirror ? -365 : 365),
						this.yTop,
						180,
						getColor(i * 6 + 4),
						null,
						null,
						null,
						i * 6 + 4,
						this.useModulo
					)
				);

				this.elements.push(
					new Trapez(
				blockX + (this.mirror ? -390 : 390),
						this.yTop - this.h,
						180,
						getColor(i * 6 + 5),
						null,
						null,
						null,
						i * 6 + 5,
						this.useModulo
					)
				);
			}
		}

		getAllElements() {
			return this.elements;
		}
	}
</script>
