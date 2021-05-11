import AdmZip from "adm-zip";

interface WallpaperZipperSettings {
  screenHeight: number;
  screenWidth: number;
  wallpapersRootFolderName: string;
}

export class WallpaperZipper {
  public constructor(private settings: WallpaperZipperSettings) {}

  public compress() {
    const wallpapersFolderName = `${this.settings.wallpapersRootFolderName}/${this.settings.screenWidth}x${this.settings.screenHeight}`;
    const filePathAndName = `${wallpapersFolderName}/all-wallpapers.zip`;
    console.log(`Compressing into ${filePathAndName}...`);
    const zip = new AdmZip();
    zip.addLocalFolder(wallpapersFolderName);
    zip.writeZip(filePathAndName);
  }
}
