import { promises as fs } from "fs";

const wallpapersFolderName = "wallpapers";

const main = async () => {
  await fs.rmdir(wallpapersFolderName, { recursive: true });
  await fs.mkdir(wallpapersFolderName);
};

main();
