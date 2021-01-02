import fs from "fs";
import { BackgroundGenerator } from "./BackgroundGenerator";
import { wallpapersFolderName } from "./settings";

fs.mkdirSync(wallpapersFolderName, { recursive: true });
const svgString = new BackgroundGenerator().getSvgString();
fs.writeFileSync("wallpapers/background.svg", svgString);
