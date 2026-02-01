<script context="module">
	import { Trapez } from './Trapez.svelte';

	const l = 50;
	const h = Math.sin(Math.PI / 3) * l;

	export class BraidRow {
		/**
		 * Braid Pattern Row - 6 Trapez-Paare (abwechselnd 0° und 180°)
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
			this.blockWidth = 600; // 6 Trapez-Paare à 50px = 300px, mit Abständen
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

				const getColor = (index) => {
					return this.colorIndices[index % this.colorIndices.length];
				};

				// 6 Trapez-Paare: abwechselnd normal (0°) und gedreht (180°)
				
				// Trapez-Paar 1 (0°) - Position 40, 65
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -40 : 40),
						this.yTop,
						0,
						getColor(i * 12),
						null,
						null,
						null,
						i * 12,
						this.useModulo
					)
				);
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -65 : 65),
						this.yTop - this.h,
						0,
						getColor(i * 12 + 1),
						null,
						null,
						null,
						i * 12 + 1,
						this.useModulo
					)
				);

				// Trapez-Paar 2 (180°) - Position 115, 140
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -115 : 115),
						this.yTop,
						180,
						getColor(i * 12 + 2),
						null,
						null,
						null,
						i * 12 + 2,
						this.useModulo
					)
				);
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -140 : 140),
						this.yTop - this.h,
						180,
						getColor(i * 12 + 3),
						null,
						null,
						null,
						i * 12 + 3,
						this.useModulo
					)
				);

				// Trapez-Paar 3 (0°) - Position 190, 215
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -190 : 190),
						this.yTop,
						0,
						getColor(i * 12 + 4),
						null,
						null,
						null,
						i * 12 + 4,
						this.useModulo
					)
				);
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -215 : 215),
						this.yTop - this.h,
						0,
						getColor(i * 12 + 5),
						null,
						null,
						null,
						i * 12 + 5,
						this.useModulo
					)
				);

				// Trapez-Paar 4 (180°) - Position 265, 290
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -265 : 265),
						this.yTop,
						180,
						getColor(i * 12 + 6),
						null,
						null,
						null,
						i * 12 + 6,
						this.useModulo
					)
				);
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -290 : 290),
						this.yTop - this.h,
						180,
						getColor(i * 12 + 7),
						null,
						null,
						null,
						i * 12 + 7,
						this.useModulo
					)
				);

				// Trapez-Paar 5 (0°) - Position 340, 365
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -340 : 340),
						this.yTop,
						0,
						getColor(i * 12 + 8),
						null,
						null,
						null,
						i * 12 + 8,
						this.useModulo
					)
				);
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -365 : 365),
						this.yTop - this.h,
						0,
						getColor(i * 12 + 9),
						null,
						null,
						null,
						i * 12 + 9,
						this.useModulo
					)
				);

				// Trapez-Paar 6 (180°) - Position 415, 440
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -415 : 415),
						this.yTop,
						180,
						getColor(i * 12 + 10),
						null,
						null,
						null,
						i * 12 + 10,
						this.useModulo
					)
				);
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -440 : 440),
						this.yTop - this.h,
						180,
						getColor(i * 12 + 11),
						null,
						null,
						null,
						i * 12 + 11,
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
