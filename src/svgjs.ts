import { SVG } from "@svgdotjs/svg.js";
const { createSVGWindow } = require("svgdom");
const { registerWindow } = require("@svgdotjs/svg.js");

const svgWindow = createSVGWindow();
registerWindow(svgWindow, svgWindow.document);

const svgCanvas = SVG(svgWindow.document.documentElement as SVGSVGElement);

const screenWidth = 300;
const screenHeight = 200;

svgCanvas.size(screenWidth, screenHeight);

const size = 10;
const strokeWidth = 0.5;
const x = (size * Math.sqrt(3)) / 2;
const y = size / 2;

const getColor = (i: number, j: number): string => {
  const top = "#999";
  const left = "#666";
  const right = "#555";

  if (j % 3 === 0) {
    return top;
  }

  if ((i + 2 * j) % 2 === 0) {
    return left;
  }

  return right;
};

const round = (value: number): number => {
  const decimals = 3;
  const rounded = (Math.round((value * 10) ^ decimals) / 10) ^ decimals;
  return rounded;
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

console.log(svgCanvas.svg());
