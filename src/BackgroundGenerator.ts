import { Svg, SVG } from "@svgdotjs/svg.js";
import fs from "fs";
import {
  screenHeight,
  screenWidth,
  strokeWidth,
  wallpapersFolderName,
  x,
  y,
} from "./settings";
const { createSVGWindow } = require("svgdom");
const { registerWindow } = require("@svgdotjs/svg.js");

fs.mkdirSync(wallpapersFolderName, { recursive: true });

class BackgroundGenerator {
  constructor() {
    const svgWindow = createSVGWindow();
    registerWindow(svgWindow, svgWindow.document);
    this.svgCanvas = SVG(svgWindow.document.documentElement as SVGSVGElement);
    this.svgCanvas.size(screenWidth, screenHeight);
  }

  private svgCanvas: Svg;

  public getSvgString(): string {
    for (let i = 0; i < screenWidth / x; i++) {
      for (let j = -1; j < screenHeight / y; j++) {
        if ((i + j) % 2 === 0) {
          this.svgCanvas
            .polygon(
              `0,0 ${BackgroundGenerator.round(x)},${BackgroundGenerator.round(
                y
              )} 0,${BackgroundGenerator.round(2 * y)}`
            )
            .move(
              BackgroundGenerator.round(i * x),
              BackgroundGenerator.round(j * y)
            )
            .fill(BackgroundGenerator.getColor(i, j))
            .stroke({
              color: BackgroundGenerator.getColor(i, j),
              width: strokeWidth,
            });
        } else {
          this.svgCanvas
            .polygon(
              `0,${BackgroundGenerator.round(y)} ${BackgroundGenerator.round(
                x
              )},0 ${BackgroundGenerator.round(x)},${BackgroundGenerator.round(
                2 * y
              )}`
            )
            .move(
              BackgroundGenerator.round(i * x),
              BackgroundGenerator.round(j * y)
            )
            .fill(BackgroundGenerator.getColor(i, j))
            .stroke({
              color: BackgroundGenerator.getColor(i, j),
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

const svgString = new BackgroundGenerator().getSvgString();
fs.writeFileSync("wallpapers/background.svg", svgString);
