import path from "path";
import puppeteer from "puppeteer";

const main = async () => {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({
      deviceScaleFactor: 1,
      height: 1440,
      width: 2560,
    });

    const html = `
<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&display=swap"
      rel="stylesheet"
    />
    <style>
      html {
        -webkit-font-smoothing: subpixel-antialiased;
        background-color: black;
        font-family: "Playfair Display", serif;
      }

      body {
        align-items: center;
        color: white;
        display: flex;
        justify-content: center;
        min-height: 100vh;
      }

      .centered {
        width: 70%;
      }

      .quote {
        font-size: 5rem;
        text-align: right;
      }

      .author {
        font-size: 2em;
        text-align: right;
      }
    </style>
  </head>
  <body>
    <div class="centered">
      <h1 class="quote">
        &ldquo;Duplication is far cheaper than the wrong abstraction.&rdquo;
      </h1>
      <p class="author">Sandi Metz, 2014</p>
    </div>
  </body>
</html>
    `;
    await page.setContent(html);

    const screenshotFilePath = path.join(__dirname, "demo.png");
    await page.screenshot({ path: screenshotFilePath });
  } finally {
    await browser.close();
  }
};

main();
