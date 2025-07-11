import { test, expect } from '@playwright/test';

// what is page. -- is window, tab
// page as object 

test('Launch URL', async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");

    const title = await page.title();

    console.log("Page Title: ", title);

    expect(title).toBe("STORE");

    const url = await page.url();

    console.log("Page URL: ", url);

    await expect(page).toHaveTitle("STORE");

    await expect(page).toHaveURL("https://demoblaze.com/index.html")

    await page.close();

})