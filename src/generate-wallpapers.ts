import { promises as fs } from "fs";
import puppeteer from "puppeteer";
import { quotes } from "./quotes";
import { WallpaperGenerator } from "./WallpaperGenerator";
import { WallpaperZipper } from "./WallpaperZipper";

const wallpapersRootFolderName = "wallpapers";

const screenResolutions: Array<{ screenHeight: number; screenWidth: number }> =
  [
    {
      screenHeight: 1440,
      screenWidth: 2560,
    },
    {
      screenHeight: 2160,
      screenWidth: 3840,
    },
    {
      screenWidth: 3440,
      screenHeight: 1440,
    },
  ];

const main = async () => {
  await fs.rmdir(wallpapersRootFolderName, { recursive: true });

  for (let screenResolution of screenResolutions) {
    const browser = await puppeteer.launch({ headless: true });
    try {
      const template = await fs.readFile("src/template.html", {
        encoding: "utf-8",
      });
      const wallpaperGenerator = await WallpaperGenerator.createInstance({
        browser: browser,
        template: template,
        screenHeight: screenResolution.screenHeight,
        screenWidth: screenResolution.screenWidth,
        wallpapersRootFolderName: wallpapersRootFolderName,
      });
      for (const fileName in quotes) {
        await wallpaperGenerator.generate(fileName, quotes[fileName]);
      }
    } finally {
      await browser.close();
    }

    const wallpaperZipper = new WallpaperZipper({
      screenHeight: screenResolution.screenHeight,
      screenWidth: screenResolution.screenWidth,
      wallpapersRootFolderName: wallpapersRootFolderName,
    });
    wallpaperZipper.compress();
  }
};

main();
