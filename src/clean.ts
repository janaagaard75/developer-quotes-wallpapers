import { promises as fs } from "fs";
import { wallpapersFolderName } from "./settings";

const main = async () => {
  await fs.rmdir(wallpapersFolderName, { recursive: true });
  await fs.mkdir(wallpapersFolderName);
};

main();
