import { promises as fs } from "fs";
import puppeteer from "puppeteer";
import { quotes } from "./quotes";
import { screenHeight, screenWidth, wallpapersFolderName } from "./settings";
import { WallpaperGenerator } from "./WallpaperGenerator";

// Can't use forEach with a async callback. This is the workaround. https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
const asyncForEach = async <T>(
  array: Array<T>,
  callback: (value: T, index: number, array: Array<T>) => Promise<void>
) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

const main = async () => {
  await fs.rmdir(wallpapersFolderName, { recursive: true });
  await fs.mkdir(wallpapersFolderName, { recursive: true });

  const browser = await puppeteer.launch({ headless: true });
  try {
    const template = await fs.readFile("src/template.html", {
      encoding: "utf-8",
    });
    const wallpaperGenerator = await WallpaperGenerator.createInstance(
      browser,
      template,
      screenHeight,
      screenWidth,
      wallpapersFolderName
    );
    await asyncForEach(quotes, async (quote, quoteIndex) => {
      await wallpaperGenerator.generate(quote, quoteIndex);
    });
  } finally {
    await browser.close();
  }
};

main();
