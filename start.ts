import { promises as fs } from "fs";
import path from "path";
import puppeteer, { Browser, Page } from "puppeteer";

interface Quote {
  author: string;
  text: string;
  year: number;
}

const quotes: Array<Quote> = [
  {
    author: "Sandi Metz",
    text: "Duplication is far cheaper than the wrong abstraction.",
    year: 2014,
  },
  {
    author: "Linus Torvalds",
    text: "Given enough eyeballs, all bugs are shallow.",
    year: 1999,
  },
  {
    author: "?",
    text:
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    year: 1000,
  },
  {
    author: "Josh Bloch",
    text: "APIs should be easy to use and hard to misuse.",
    year: 1000,
  },
];

const getBrowserPage = async (browser: Browser): Promise<Page> => {
  const page = await browser.newPage();
  await page.setViewport({
    deviceScaleFactor: 1,
    height: 1440,
    width: 2560,
  });
  return page;
};

const getHtml = async (quote: Quote): Promise<string> => {
  const template = await fs.readFile("template.html", { encoding: "utf-8" });
  const html = template
    .replace("{{author}}", quote.author)
    .replace("{{text}}", quote.text)
    .replace("{{year}}", quote.year.toString());
  return html;
};

const main = async () => {
  const wallpapersFolderName = "wallpapers";
  await fs.rmdir(wallpapersFolderName, { recursive: true });
  await fs.mkdir(wallpapersFolderName);

  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await getBrowserPage(browser);

    for (let i = 0; i < quotes.length; i++) {
      const html = await getHtml(quotes[i]);
      await page.setContent(html);

      const screenshotFilePath = path.join(
        __dirname,
        wallpapersFolderName,
        `quote${i}.png`
      );
      await page.screenshot({ path: screenshotFilePath });
    }
  } finally {
    await browser.close();
  }
};

main();
