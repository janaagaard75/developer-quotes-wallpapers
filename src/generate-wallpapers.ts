import { promises as fs } from "fs";
import puppeteer from "puppeteer";
import { quotes } from "./quotes";
import { WallpaperGenerator } from "./WallpaperGenerator";

const wallpapersFolderName = "wallpapers";

const main = async () => {
  await fs.rmdir(wallpapersFolderName, { recursive: true });
  await fs.mkdir(wallpapersFolderName, { recursive: true });

  const browser = await puppeteer.launch({ headless: true });
  try {
    const template = await fs.readFile("src/template.html", {
      encoding: "utf-8",
    });
    const wallpaperGenerator = await WallpaperGenerator.createInstance({
      browser: browser,
      template: template,
      screenHeight: 1440,
      screenWidth: 2560,
      wallpapersFolderName: "wallpapers",
    });
    for (const fileName in quotes) {
      await wallpaperGenerator.generate(fileName, quotes[fileName]);
    }
  } finally {
    await browser.close();
  }
};

main();
