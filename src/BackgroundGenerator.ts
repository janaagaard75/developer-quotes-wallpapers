import { Svg, SVG } from "@svgdotjs/svg.js";
import { screenHeight, screenWidth, strokeWidth, x, y } from "./settings";
const { createSVGWindow } = require("svgdom");
const { registerWindow } = require("@svgdotjs/svg.js");

export class BackgroundGenerator {
  constructor() {
    const svgWindow = createSVGWindow();
    registerWindow(svgWindow, svgWindow.document);
    this.svgCanvas = SVG(svgWindow.document.documentElement as SVGSVGElement);
    this.svgCanvas.size(screenWidth, screenHeight);
  }

  private svgCanvas: Svg;

  public getSvgString(): string {
    const rnd = BackgroundGenerator.round;
    const color = BackgroundGenerator.getColor;
    for (let i = 0; i < screenWidth / x; i++) {
      for (let j = -1; j < screenHeight / y; j++) {
        if ((i + j) % 2 === 0) {
          this.svgCanvas
            .polygon(`0,0 ${rnd(x)},${rnd(y)} 0,${rnd(2 * y)}`)
            .move(rnd(i * x), rnd(j * y))
            .fill(color(i, j))
            .stroke({
              color: color(i, j),
              width: strokeWidth,
            });
        } else {
          this.svgCanvas
            .polygon(`0,${rnd(y)} ${rnd(x)},0 ${rnd(x)},${rnd(2 * y)}`)
            .move(rnd(i * x), rnd(j * y))
            .fill(color(i, j))
            .stroke({
              color: color(i, j),
              width: strokeWidth,
            });
        }
      }
    }

    const svgString = this.svgCanvas.svg();
    return svgString;
  }

  private static getColor(i: number, j: number): string {
    const top = "#333";
    const left = "#222";
    const right = "#111";

    if (j % 3 === 0) {
      return top;
    }

    if ((i + 2 * j) % 2 === 0) {
      return left;
    }

    return right;
  }

  private static round(value: number): number {
    return Number.parseFloat(value.toFixed(2));
  }
}
