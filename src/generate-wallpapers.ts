import { promises as fs } from "fs";
import puppeteer from "puppeteer";
import { ScreenResolution } from "./ScreenResolution";
import { WallpaperGenerator } from "./WallpaperGenerator";
import { WallpaperZipper } from "./WallpaperZipper";
import { quotes } from "./quotes";

const wallpapersRootFolderName = "wallpapers";

const screenResolutions: Array<ScreenResolution> = [
  { height: 1440, width: 2560 },
  { height: 2160, width: 3840 },
  { width: 3440, height: 1440 },
];

const main = async () => {
  await fs.rm(wallpapersRootFolderName, { recursive: true });

  for (let screenResolution of screenResolutions) {
    await generateWallpaper(screenResolution);
    compressWallpapers(screenResolution);
  }
};

const generateWallpaper = async (screenResolution: ScreenResolution) => {
  const browser = await puppeteer.launch({ headless: "shell" });
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
};

const compressWallpapers = (screenResolution: ScreenResolution) => {
  const wallpaperZipper = new WallpaperZipper({
    screenResolution: screenResolution,
    wallpapersRootFolderName: wallpapersRootFolderName,
  });
  wallpaperZipper.compress();
};

main();
