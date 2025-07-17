import { test, expect } from '@playwright/test';

const date = new Date();

const dd = date.getDate();
const mm = date.getMonth() + 1; 
const yyyy = date.getFullYear();
let formattedDate = `${dd}-${mm}-${yyyy}`;

test('Page View Screenshot', async ({ page }) => {

    await page.goto("https://demoblaze.com/");

    await page.screenshot({ path: `tests/screenshots/${Date.now()}_${formattedDate}_pageview.png`});

})


test('Full Page View Screenshot', async ({ page }) => {

    await page.goto("https://demoblaze.com/");

    await page.waitForTimeout(2000);

    await page.screenshot({path: `tests/screenshots/${Date.now()}_${formattedDate}_fullpageview.png`, fullPage: true});

})

test('Locator Screenshot', async ({ page }) => {


        await page.goto("https://demoblaze.com/");

        await page.locator('.d-block.img-fluid').nth(2).screenshot({ path: `tests/screenshots/${Date.now()}_${formattedDate}_Locator.png`});
})