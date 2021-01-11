import path from "path";
import { Browser, Page } from "puppeteer";
import { Quote } from "./Quote";
import { screenHeight, screenWidth, wallpapersFolderName } from "./settings";

export class WallpaperGenerator {
  private constructor(private template: string) {}

  public static async createInstance(
    browser: Browser,
    template: string
  ): Promise<WallpaperGenerator> {
    const instance = new WallpaperGenerator(template);
    instance.page = await instance.getBrowserPage(browser);
    return instance;
  }

  private page!: Page;

  public async generate(quote: Quote, quoteIndex: number) {
    const html = await this.getHtml(quote);
    await this.page.setContent(html);
    const screenshotFilePath = this.getScreenshotFilePath(
      wallpapersFolderName,
      quoteIndex
    );
    await this.page.screenshot({ path: screenshotFilePath });
  }

  private async getBrowserPage(browser: Browser): Promise<Page> {
    const page = await browser.newPage();
    await page.setViewport({
      deviceScaleFactor: 1,
      height: screenHeight,
      width: screenWidth,
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

  private getScreenshotFilePath(
    wallpapersFolderName: string,
    quoteIndex: number
  ): string {
    const screenshotFilePath = path.join(
      __dirname,
      "..",
      wallpapersFolderName,
      `quote-${WallpaperGenerator.padNumber(quoteIndex + 1, 2)}.png`
    );
    return screenshotFilePath;
  }

  private static padNumber(value: number, size: number): string {
    const paddedValue = "000000000" + value;
    const paddedAndTrimmedValue = paddedValue.substr(-size);
    return paddedAndTrimmedValue;
  }
}
