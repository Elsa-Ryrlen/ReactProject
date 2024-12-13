import { test, expect } from '@playwright/test';

test('Verify localhost page title', async ({ page }) => {
  // Navigate to your localhost URL
  await page.goto('http://localhost:3000');

  // Example: Check if the page title is correct
  await expect(page).toHaveTitle('Game Festival');
});
