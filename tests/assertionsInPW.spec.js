import { test, expect } from '@playwright/test';

test('assertionsInPW', async ({ page }) => {

    //1. await expect(locator).toBeEnabled() | all type elements.
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2");

    const searchFiled = await page.locator("#small-searchterms");

    await expect(searchFiled).toBeVisible();

    await expect(searchFiled).toBeEditable();

    await expect(searchFiled).toHaveAttribute('aria-label', 'Search store');

    //2 await expect(locator).toBeChecked() | radio || checkbox

    const gender = await page.locator("#gender-male");

    await gender.click();

    await expect(gender).toBeChecked();


    //3   checkbox await expect(locator).toBeChecked()

    const newsLetterChecokBox = await page.locator("#Newsletter");

    await expect(newsLetterChecokBox).toBeChecked();


    // hard checked and partial checked. | toHaveText('text') | toContainText('text);

    const registerButton = await page.locator("#register-button");

    await expect(registerButton).toHaveText('Register');

    await expect(registerButton).toContainText('Regis');

    //toHaveValue

    const firstUserName = page.locator('#FirstName');
    await firstUserName.fill('Lakshmi');
    await expect(firstUserName).toHaveValue('Lakshmi');





})