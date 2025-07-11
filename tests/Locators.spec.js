import { test, expect } from '@playwright/test';

test('Locators', async ({page}) => {

    await page.goto("https://demoblaze.com/index.html");

    await expect(page).toHaveTitle("STORE");

// click on login element using property locator.
    await page.locator('id=login2').click();

    await expect(page.locator('#loginusername')).toBeVisible();

    await page.locator('#loginusername').fill('Lakshmisri');

    await page.fill('#loginpassword', 'Demo@123');

    await page.locator('//button[@onclick="logIn()"]').click();

    await expect(page.locator('#logout2')).toBeVisible();

    await page.click("//a[normalize-space()='Log out']")
 
    await expect(page.locator('#login2')).toBeVisible();

    await page.close();




})