const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 2000 } });
  await page.goto('http://localhost:5174', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const info = await page.evaluate(() => {
    const track = document.querySelector('.marquee-track');
    const track2 = document.querySelector('.marquee-track-reverse');
    const styles = track ? getComputedStyle(track) : null;
    const styles2 = track2 ? getComputedStyle(track2) : null;

    return {
      hasTrack: !!track,
      hasTrack2: !!track2,
      animationName: styles ? styles.animationName : null,
      animationDuration: styles ? styles.animationDuration : null,
      transform: styles ? styles.transform : null,
      animationName2: styles2 ? styles2.animationName : null,
      animationDuration2: styles2 ? styles2.animationDuration : null,
      trackRect: track ? JSON.stringify(track.getBoundingClientRect()) : null,
      track2Rect: track2 ? JSON.stringify(track2.getBoundingClientRect()) : null,
      bodyText: document.body.innerText.slice(0, 500),
    };
  });

  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
