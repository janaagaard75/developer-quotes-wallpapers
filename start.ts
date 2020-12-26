import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

interface Quote {
  author: string;
  text: string;
  year: number;
}

const getHtml = (quote: Quote): string => {
  const template = fs.readFileSync("template.html", { encoding: "utf-8" });
  const html = template
    .replace("{{author}}", quote.author)
    .replace("{{text}}", quote.text)
    .replace("{{year}}", quote.year.toString());
  return html;
};

const main = async () => {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({
      deviceScaleFactor: 1,
      height: 1440,
      width: 2560,
    });

    const html = getHtml({
      author: "Sandi Metz",
      text: "Duplication is far cheaper than the wrong abstraction.",
      year: 2014,
    });
    await page.setContent(html);

    const screenshotFilePath = path.join(__dirname, "demo.png");
    await page.screenshot({ path: screenshotFilePath });
  } finally {
    await browser.close();
  }
};

main();
