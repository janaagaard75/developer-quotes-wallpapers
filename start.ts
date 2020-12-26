import { promises as fs } from "fs";
import path from "path";
import puppeteer, { Browser, Page } from "puppeteer";

interface Quote {
  author: string;
  text: string;
  year?: number;
}

const getQuotes = (): Array<Quote> => {
  return [
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
      author: "Brian W. Kernighan",
      text:
        "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
    },
    {
      author: "Josh Bloch",
      text: "APIs should be easy to use and hard to misuse.",
    },
    {
      author: "Tony Hoare",
      text:
        "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",
    },
    {
      author: "Linus Torvalds",
      text:
        "The difference between a bad programmer and a good one is whether he considers his code or his data structures more important. Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
    },
    {
      author: "Brian W. Kernighan",
      text: "Don’t comment bad code—rewrite it.",
    },
  ];
};

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
  const commaYear = quote.year === undefined ? "" : `, ${quote.year}`;
  let html = template
    .replace("{{author}}", quote.author)
    .replace("{{text}}", quote.text)
    .replace("{{commaYear}}", commaYear);
  return html;
};

const getScreenshotFilePath = (
  wallpapersFolderName: string,
  quoteIndex: number
): string => {
  const screenshotFilePath = path.join(
    __dirname,
    wallpapersFolderName,
    `quote${quoteIndex}.png`
  );
  return screenshotFilePath;
};

const main = async () => {
  const wallpapersFolderName = "wallpapers";
  await fs.rmdir(wallpapersFolderName, { recursive: true });
  await fs.mkdir(wallpapersFolderName);

  const browser = await puppeteer.launch({ headless: true });
  const template = await fs.readFile("template.html", { encoding: "utf-8" });
  try {
    const page = await getBrowserPage(browser);
    const quotes = getQuotes();
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
