import { test, expect, chromium } from '@playwright/test';

const url = 'https://learn.kaikeba.com/catalog/214010?type=1'

test('basic test', async ({ page }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto(url);

  await page.locator('text=学习中心');
  await expect(page).toHaveURL(url);

  // 保存登录状态文件
  context.storageState({ path: 'login-data.json' })
});