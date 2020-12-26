import fileUrl from "file-url";
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
    const demoFileName = "demo.html";
    const demoFileUrl = fileUrl(demoFileName);
    await page.goto(demoFileUrl);

    const demoFilePath = path.join(__dirname, `/${demoFileName}`);
    const screenshotFilePath = `${path.basename(demoFilePath, ".html")}.png`;
    await page.screenshot({ path: screenshotFilePath });
  } finally {
    await browser.close();
  }
};

main();
