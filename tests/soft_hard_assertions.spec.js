import { test, expect } from '@playwright/test';

test('Hard Assertion', async ({ page }) => {

    await page.goto('https://demoblaze.com/');

    console.log("A");

    await expect(page).toHaveTitle('STORE1234');

    console.log("B");

    console.log("C");

})

test('Soft Assertion', async ({ page }) => {

    await page.goto('https://demoblaze.com/');

    console.log("A");

    await expect.soft(page).toHaveTitle('STORE123');

    console.log("B");

    console.log("C");

})