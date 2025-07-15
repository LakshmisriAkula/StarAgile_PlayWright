import { test, expect } from '@playwright/test';

test('Get no. of links', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    const links = await page.locator("#content a");

    const linksCount = await links.count();

    console.log(`Total number of links: ${linksCount}`);

    for (let i = 0; i < linksCount; i++) {

        const link = await links.nth(i);

        const linkText = (await link.textContent()).trim();


        console.log(`Link ${i} : ${linkText}`);

        await link.click();

        await page.goBack();

    }

})