import AdmZip from "adm-zip";
import { ScreenResolution } from "./ScreenResolution";

interface WallpaperZipperSettings {
  screenResolution: ScreenResolution;
  wallpapersRootFolderName: string;
}

export class WallpaperZipper {
  public constructor(private settings: WallpaperZipperSettings) {}

  public compress() {
    const wallpapersFolderName = `${this.settings.wallpapersRootFolderName}/${this.settings.screenResolution.width}x${this.settings.screenResolution.height}`;
    const filePathAndName = `${wallpapersFolderName}/all-wallpapers.zip`;
    console.log(`Compressing into ${filePathAndName}...`);
    const zip = new AdmZip();
    zip.addLocalFolder(wallpapersFolderName);
    zip.writeZip(filePathAndName);
  }
}
