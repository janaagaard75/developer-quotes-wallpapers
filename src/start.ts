import { promises as fs } from "fs";
import path from "path";
import puppeteer, { Browser, Page } from "puppeteer";
import { Quote, quotes } from "./quotes";

const getBrowserPage = async (browser: Browser): Promise<Page> => {
  const page = await browser.newPage();
  await page.setViewport({
    deviceScaleFactor: 1,
    height: 1440,
    width: 2560,
  });
  return page;
};

const getHtml = async (template: string, quote: Quote): Promise<string> => {
  let html = template
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

const main = async () => {
  const wallpapersFolderName = "wallpapers";
  await fs.rmdir(wallpapersFolderName, { recursive: true });
  await fs.mkdir(wallpapersFolderName);

  const browser = await puppeteer.launch({ headless: true });
  const template = await fs.readFile("src/template.html", {
    encoding: "utf-8",
  });
  try {
    const page = await getBrowserPage(browser);
    for (let i = 0; i < quotes.length; i++) {
      const html = await getHtml(template, quotes[i]);
      await page.setContent(html);
      await page.screenshot({
        path: getScreenshotFilePath(wallpapersFolderName, i),
      });
    }
  } finally {
    await browser.close();
  }
};

main();
