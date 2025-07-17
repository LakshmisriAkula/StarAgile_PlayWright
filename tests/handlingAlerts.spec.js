import { test, expect } from '@playwright/test';

test('Handling Simple Alerts', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe("I am an alert box!");
        await dialog.accept();
    })

    await page.locator("#alertBtn").click();


})

test('Handling Confirmation Alerts', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe("Press a button!");
        // await dialog.accept();
        await dialog.dismiss();
    })
    await page.locator("#confirmBtn").click();

    const textValidation = await page.locator('#demo');

    // await expect(textValidation).toHaveText("You pressed OK!");

    await expect(textValidation).toHaveText("You pressed Cancel!");


})



test('Handling Prompt Alerts', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe("Please enter your name:");
        expect(dialog.defaultValue()).toBe("Harry Potter");
        // await dialog.accept('John Doe');
        await dialog.dismiss();
    })

    await page.locator("#promptBtn").click();

    const textValidation = await page.locator('#demo');

    // await expect(textValidation).toHaveText("Hello John Doe! How are you today?");

    await expect(textValidation).toHaveText("User cancelled the prompt.");


})