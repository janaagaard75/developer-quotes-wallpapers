import { promises as fs } from "fs";
import svgToMiniDataURI from "mini-svg-data-uri";
import path from "path";
import puppeteer, { Browser, Page } from "puppeteer";
import { BackgroundGenerator } from "./BackgroundGenerator";
import { Quote, quotes } from "./quotes";
import { screenHeight, screenWidth, wallpapersFolderName } from "./settings";

const backgroundSvg = new BackgroundGenerator().getSvgString();
const backgroundSrc = svgToMiniDataURI(backgroundSvg);

const getBrowserPage = async (browser: Browser): Promise<Page> => {
  const page = await browser.newPage();
  await page.setViewport({
    deviceScaleFactor: 1,
    height: screenHeight,
    width: screenWidth,
  });
  return page;
};

const getHtml = async (template: string, quote: Quote): Promise<string> => {
  let html = template
    .replace("{{backgroundSrc}}", backgroundSrc)
    .replace("{{title}}", quote.title ?? "")
    .replace("{{text}}", quote.text)
    .replace("{{author}}", quote.author);
  return html;
};

const padNumber = (value: number, size: number): string => {
  const paddedValue = "000000000" + value;
  const paddedAndTrimmedValue = paddedValue.substr(-size);
  return paddedAndTrimmedValue;
};

const getScreenshotFilePath = (
  wallpapersFolderName: string,
  quoteIndex: number
): string => {
  const screenshotFilePath = path.join(
    __dirname,
    "..",
    wallpapersFolderName,
    `quote-${padNumber(quoteIndex + 1, 2)}.png`
  );
  return screenshotFilePath;
};

const asyncForEach = async <T>(
  array: Array<T>,
  callback: (value: T, index: number, array: Array<T>) => Promise<void>
) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

const main = async () => {
  await fs.mkdir(wallpapersFolderName, { recursive: true });

  const browser = await puppeteer.launch({ headless: true });
  const template = await fs.readFile("src/template.html", {
    encoding: "utf-8",
  });
  try {
    const page = await getBrowserPage(browser);
    // Can't use forEach with a async callback. https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
    await asyncForEach(quotes, async (quote, quoteIndex) => {
      const html = await getHtml(template, quote);
      await page.setContent(html);
      const screenshotFilePath = getScreenshotFilePath(
        wallpapersFolderName,
        quoteIndex
      );
      await page.screenshot({ path: screenshotFilePath });
    });
  } finally {
    await browser.close();
  }
};

main();
