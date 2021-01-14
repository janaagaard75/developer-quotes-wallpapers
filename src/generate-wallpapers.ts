import AdmZip from "adm-zip";
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
      wallpapersFolderName: wallpapersFolderName,
    });
    for (const fileName in quotes) {
      console.log(`Generating ${fileName}.png...`);
      await wallpaperGenerator.generate(fileName, quotes[fileName]);
    }
  } finally {
    await browser.close();
  }

  console.log("Compressing into all-wallpapers.zip...");
  const zip = new AdmZip();
  zip.addLocalFolder(wallpapersFolderName);
  zip.writeZip(`${wallpapersFolderName}/all-wallpapers.zip`);
};

main();
