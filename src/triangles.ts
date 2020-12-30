import * as d3 from "d3";
import fs from "fs";
import jsdom from "jsdom";

const screenWidth = 300;
const screenHeight = 200;

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

const dom = new jsdom.JSDOM(`<!DOCTYPE html><body></body>`);

const body = d3.select(dom.window.document.querySelector("body"));
const svg = body
  .append("svg")
  .attr("width", screenWidth)
  .attr("height", screenHeight)
  .attr("xmlns", "http://www.w3.org/2000/svg");
svg
  .append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 80)
  .attr("height", 80)
  .style("fill", "orange");

fs.writeFileSync("wallpapers/out.svg", body.html());

/*
const size = 10;
const strokeWidth = 0.5;
const x = (size * Math.sqrt(3)) / 2;
const y = size / 2;


for (let i = 0; i < screenWidth / x; i++) {
  for (let j = -1; j < screenHeight / y; j++) {
    if ((i + j) % 2 === 0) {
      draw
        .polygon(`0,0 ${x},${y} 0,${2 * y}`)
        .move(i * x, j * y)
        .fill(getColor(i, j))
        .stroke({
          color: getColor(i, j),
          width: strokeWidth,
        });
    } else {
      draw
        .polygon(`0,${y} ${x},0 ${x},${2 * y}`)
        .move(i * x, j * y)
        .fill(getColor(i, j))
        .stroke({
          color: getColor(i, j),
          width: strokeWidth,
        });
    }
  }
}
*/
