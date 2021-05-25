import { promises as fs } from "fs";
import puppeteer from "puppeteer";
import { quotes } from "./quotes";
import { ScreenResolution } from "./ScreenResolution";
import { WallpaperGenerator } from "./WallpaperGenerator";
import { WallpaperZipper } from "./WallpaperZipper";

const wallpapersRootFolderName = "wallpapers";

const screenResolutions: Array<ScreenResolution> = [
  {
    height: 1440,
    width: 2560,
  },
  {
    height: 2160,
    width: 3840,
  },
  {
    width: 3440,
    height: 1440,
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
        screenResolution: screenResolution,
        wallpapersRootFolderName: wallpapersRootFolderName,
      });
      for (const fileName in quotes) {
        await wallpaperGenerator.generate(fileName, quotes[fileName]);
      }
    } finally {
      await browser.close();
    }

    const wallpaperZipper = new WallpaperZipper({
      screenHeight: screenResolution.height,
      screenWidth: screenResolution.width,
      wallpapersRootFolderName: wallpapersRootFolderName,
    });
    wallpaperZipper.compress();
  }
};

main();
