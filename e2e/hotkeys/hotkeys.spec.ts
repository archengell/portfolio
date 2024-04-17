import { expect, test } from '@playwright/test';

test.describe('test hotkeys', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('using hotkey "Shift+T" switches theme', async ({ page }) => {
    await page.keyboard.press('Shift+T');

    await expect(page.getByTestId('theme-light')).toBeVisible();
  });

  test('using hotkey "Shift+S" opens sidebar', async ({ page }) => {
    await page.keyboard.press('Shift+S');

    await expect(page.getByTestId('sidebar')).toBeVisible();
  });

  test('using hotkey "Shift+K" opens hotkeys dialog', async ({ page }) => {
    await page.keyboard.press('Shift+K');

    await expect(page.getByTestId('hotkeys-dialog')).toBeVisible();
  });
});
