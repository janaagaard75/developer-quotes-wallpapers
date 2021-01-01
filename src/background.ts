import { SVG } from "@svgdotjs/svg.js";
import fs from "fs";
import { screenHeight, screenWidth, strokeWidth, x, y } from "./settings";
const { createSVGWindow } = require("svgdom");
const { registerWindow } = require("@svgdotjs/svg.js");

const svgWindow = createSVGWindow();
registerWindow(svgWindow, svgWindow.document);
const svgCanvas = SVG(svgWindow.document.documentElement as SVGSVGElement);
svgCanvas.size(screenWidth, screenHeight);

const getColor = (i: number, j: number): string => {
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
};

const round = (value: number): number => {
  return Number.parseFloat(value.toFixed(2));
};

for (let i = 0; i < screenWidth / x; i++) {
  for (let j = -1; j < screenHeight / y; j++) {
    if ((i + j) % 2 === 0) {
      svgCanvas
        .polygon(`0,0 ${round(x)},${round(y)} 0,${round(2 * y)}`)
        .move(round(i * x), round(j * y))
        .fill(getColor(i, j))
        .stroke({
          color: getColor(i, j),
          width: strokeWidth,
        });
    } else {
      svgCanvas
        .polygon(`0,${round(y)} ${round(x)},0 ${round(x)},${round(2 * y)}`)
        .move(round(i * x), round(j * y))
        .fill(getColor(i, j))
        .stroke({
          color: getColor(i, j),
          width: strokeWidth,
        });
    }
  }
}

fs.writeFileSync("wallpapers/background.svg", svgCanvas.svg());
