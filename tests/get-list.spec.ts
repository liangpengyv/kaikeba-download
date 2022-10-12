import { test, expect, chromium } from '@playwright/test';

const url = 'https://learn.kaikeba.com/catalog/214010?type=1'

test('basic test', async ({ page }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ storageState: 'login-data.json' });
  page = await context.newPage();
  await page.goto(url);

  await page.locator('text=学习中心');
  await expect(page).toHaveURL(url);

  await page.locator('div:nth-child(14) > .ivu-collapse-header').click();
  page.locator('div:nth-child(2) > .ivu-timeline > .section-row > .ivu-timeline-item-content').click()

  await page.pause()
});