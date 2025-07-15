import { test, expect } from '@playwright/test';

test('getByAltText', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(page).toHaveTitle("OrangeHRM");

    const logo = await page.getByAltText('company-branding');

    await expect(logo).toBeVisible();
})

test('getByPlaceholder | getByText', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Admin')).toBeVisible();
})

test('getByLabel', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.locator("[type='submit']").click();
    await expect(page.getByText('Logout').nth(1)).toBeVisible();
})

test('getByRole', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Admin')).toBeVisible();

})

test.only('getByTitle', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByTitle('Assign Leave').nth(1)).toBeVisible();
})