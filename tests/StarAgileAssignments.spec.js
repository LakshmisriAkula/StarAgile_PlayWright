import { test, expect } from '@playwright/test';

/*
Assignment : Playwright
Assignment 1: Launch a Browser and Open a Website

Task: Write a Playwright script to launch a browser, open a website, and take a screenshot.
*/
test('Launch a Browser and Open a Website', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html');

    const title = await page.title();

    console.log("Page Title: ", title);

    expect(title).toBe("STORE");

    await page.screenshot({ path: 'LaunchBrowser.png' })

    await page.close();


})

/*

Assignment 2: Automate Login and Verify Dashboard

Task: Write a Playwright script to automate the login process and verify that a specific element is

present on the dashboard after login.
*/

test('Automate Login and Verify Dashboard', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');

    await page.locator('id=login2').click();

    await expect(page.locator('#loginusername')).toBeVisible();

    await page.locator('#loginusername').fill('Lakshmisri');

    await page.fill('#loginpassword', 'Demo@123');

    await page.locator('//button[@onclick="logIn()"]').click();

    await expect(page.locator('#nameofuser')).toHaveText('Welcome Lakshmisri');

    await page.screenshot({ path: 'LoginVerification.png' });

    await page.close();


})


/*

Assignment 4 : Upload a File

Task: Write a Playwright script to upload a file using a file input element on a webpage.

*/

test('Upload a File', async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/upload");

    const file = 'C:/Users/Lakshmi Sri Akula/Downloads/Tax_Invoice-Jul-01-2025.pdf';

    await page.setInputFiles('#file-upload', file);

    await page.click('#file-submit');

    await expect(page.getByText('File Uploaded!')).toBeVisible();

    const uploadedFileText  = await page.locator('#uploaded-files').textContent();

    await expect(uploadedFileText).toContain('Tax_Invoice-Jul-01-2025.pdf');

    await page.close();



})


/*

Assignment 5 : Check for hyperlink Count on a Page

Task: Write a Playwright script to count the number of hyperlinks on a page.

*/

test('Count Hyperlinks on a Page', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/");

    const links = await page.locator("#content a");

    const linksCount = await links.count();

    console.log(`Total number of links: ${linksCount}`);

    await expect(await page.locator("#content a")).toHaveCount(linksCount);

    page.close();

})