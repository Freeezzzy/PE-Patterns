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
		this.blockWidth = 450; // Trapeze von Pos 0 bis 400: von -50 bis +450 = 450px
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
				// Innerhalb Paar: Abstand 25px für Überlappung, zwischen Paaren: 50px
				
				// Trapez-Paar 1 (0°) - Position 0, 25
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? 0 : 0),
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
						blockX + (this.mirror ? -25 : 25),
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

				// Trapez-Paar 2 (180°) - Position 75, 100
				// Bei 180°: Index anpassen damit visuell oberes Trapez dunkel ist
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -75 : 75),
						this.yTop,
						180,
						getColor(i * 12 + 3),
						null,
						null,
						null,
						i * 12 + 3,
						this.useModulo
					)
				);
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -100 : 100),
						this.yTop - this.h,
						180,
						getColor(i * 12 + 2),
						null,
						null,
						null,
						i * 12 + 2,
						this.useModulo
					)
				);

				// Trapez-Paar 3 (0°) - Position 150, 175
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -150 : 150),
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
						blockX + (this.mirror ? -175 : 175),
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

				// Trapez-Paar 4 (180°) - Position 225, 250
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -225 : 225),
						this.yTop,
						180,
						getColor(i * 12 + 7),
						null,
						null,
						null,
						i * 12 + 7,
						this.useModulo
					)
				);
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -250 : 250),
						this.yTop - this.h,
						180,
						getColor(i * 12 + 6),
						null,
						null,
						null,
						i * 12 + 6,
						this.useModulo
					)
				);

				// Trapez-Paar 5 (0°) - Position 300, 325
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -300 : 300),
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
						blockX + (this.mirror ? -325 : 325),
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

				// Trapez-Paar 6 (180°) - Position 375, 400
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -375 : 375),
						this.yTop,
						180,
						getColor(i * 12 + 11),
						null,
						null,
						null,
						i * 12 + 11,
						this.useModulo
					)
				);
				this.elements.push(
					new Trapez(
						blockX + (this.mirror ? -400 : 400),
						this.yTop - this.h,
						180,
						getColor(i * 12 + 10),
						null,
						null,
						null,
						i * 12 + 10,
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
