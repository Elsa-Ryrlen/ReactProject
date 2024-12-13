import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

test.beforeEach(async ({ page }) => {
  
  // Navigate to your localhost URL
  await page.goto('http://localhost:3000');

})

test('Verify localhost page title', async ({ page }) => {
  // Example: Check if the page title is correct
  await expect(page).toHaveTitle('Game Festival');
});

test('Add a game', async ({ page }) => {
  await page.getByPlaceholder('Game ID').click();
  await page.getByPlaceholder('Game ID').fill('5');
  await page.getByPlaceholder('Price (€)').click();
  await page.getByPlaceholder('Price (€)').fill('10');
  await page.getByPlaceholder('Game Name').click();
  await page.getByPlaceholder('Game Name').fill('Yatzy');
  await page.getByPlaceholder('Owner ID').click();
  await page.getByPlaceholder('Owner ID').fill('2');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByText('Yatzy - 10€Owned by: JuliaChooseDelete').click();
})

test('Sell a game', async ({ page }) => {
  page.getByRole('button', { name: 'Choose' }).nth(3).click();
  await page.getByPlaceholder('Buyer ID').click();
  await page.getByPlaceholder('Buyer ID').fill('2');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Sell Game' }).click();
  await page.getByText('Plockepin - 3€').click();
  await page.locator('li').filter({ hasText: 'Plockepin - 3€Owned by:' }).locator('i').click();
});
