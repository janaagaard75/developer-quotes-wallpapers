import { promises as fs } from "fs";
import path from "path";
import { Browser, Page } from "puppeteer";
import { Quote } from "./Quote";
import { QuoteData } from "./QuoteData";
import { ScreenResolution } from "./ScreenResolution";

interface WallpaperGeneratorSettings {
  browser: Browser;
  template: string;
  screenResolution: ScreenResolution;
  wallpapersRootFolderName: string;
}

export class WallpaperGenerator {
  private constructor(
    private template: string,
    private screenResolution: ScreenResolution,
    private wallpapersRootFolderName: string,
  ) {}

  public static async createInstance(
    settings: WallpaperGeneratorSettings,
  ): Promise<WallpaperGenerator> {
    const instance = new WallpaperGenerator(
      settings.template,
      settings.screenResolution,
      settings.wallpapersRootFolderName,
    );
    instance.page = await instance.getBrowserPage(settings.browser);
    return instance;
  }

  private page!: Page;

  public async generate(fileName: string, quoteData: QuoteData) {
    console.log(
      `Generating ${this.screenResolution.width}x${this.screenResolution.height}/${fileName}.png...`,
    );

    const quote = new Quote(quoteData);
    const html = await this.getHtml(quote);
    await this.page.setContent(html, { waitUntil: "networkidle0" });
    const wallpaperFolderName = this.getWallpaperFolderName();
    await fs.mkdir(wallpaperFolderName, { recursive: true });
    const screenshotFilePath = this.getScreenshotFilePath(
      wallpaperFolderName,
      fileName,
    );
    await this.page.screenshot({ path: screenshotFilePath });
  }

  private async getBrowserPage(browser: Browser): Promise<Page> {
    const page = await browser.newPage();
    await page.setViewport({
      deviceScaleFactor: 1,
      height: this.screenResolution.height,
      width: this.screenResolution.width,
    });
    return page;
  }

  private async getHtml(quote: Quote): Promise<string> {
    let html = this.template
      .replace("{{title}}", quote.title ?? "")
      .replace("{{text}}", quote.text)
      .replace("{{author}}", quote.author);
    return html;
  }

  private getWallpaperFolderName(): string {
    const wallpaperFolderName = path.join(
      __dirname,
      "..",
      this.wallpapersRootFolderName,
      `${this.screenResolution.width}x${this.screenResolution.height}`,
    );
    return wallpaperFolderName;
  }

  private getScreenshotFilePath(
    wallpaperFolderName: string,
    fileName: string,
  ): string {
    const screenshotFilePath = path.join(
      wallpaperFolderName,
      `${fileName}.png`,
    );
    return screenshotFilePath;
  }
}
