import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

const main = async () => {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({
      deviceScaleFactor: 1,
      height: 1440,
      width: 2560,
    });

    const html = fs.readFileSync("template.html", { encoding: "utf-8" });
    await page.setContent(html);

    const screenshotFilePath = path.join(__dirname, "demo.png");
    await page.screenshot({ path: screenshotFilePath });
  } finally {
    await browser.close();
  }
};

main();
