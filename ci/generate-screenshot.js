const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 1,
  });

  await page.goto('https://resume.nathanfriend.io/', {
    waitUntil: 'networkidle0',
  });

  const screenshotPath = path.resolve(__dirname, '../screenshot.png');
  await page.screenshot({ path: screenshotPath });

  browser.close();
})();
