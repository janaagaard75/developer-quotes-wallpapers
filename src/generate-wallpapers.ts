import { promises as fs } from "fs";
import puppeteer from "puppeteer";
import { quotes } from "./quotes";
import { WallpaperGenerator } from "./WallpaperGenerator";
import { WallpaperZipper } from "./WallpaperZipper";

const wallpapersRootFolderName = "wallpapers";

const main = async () => {
  await fs.rmdir(wallpapersRootFolderName, { recursive: true });

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
      wallpapersRootFolderName: wallpapersRootFolderName,
    });
    for (const fileName in quotes) {
      await wallpaperGenerator.generate(fileName, quotes[fileName]);
    }
  } finally {
    await browser.close();
  }

  const wallpaperZipper = new WallpaperZipper({
    screenHeight: 1440,
    screenWidth: 2560,
    wallpapersRootFolderName: wallpapersRootFolderName,
  });
  wallpaperZipper.compress();
};

main();
