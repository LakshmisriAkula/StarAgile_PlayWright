import { test, expect } from '@playwright/test';

test('Handling Dropdown', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#country").selectOption("India");

    await page.locator("#country").selectOption({ label: "China" });

    await page.locator("#country").selectOption({ index: 3 });

    await page.locator("#country").selectOption({ value: "brazil" });

    const options = await page.locator("#country option");
    const optionsCount = await options.count();
    console.log("Total options in dropdown: " + optionsCount);

    for (let i = 0; i < optionsCount; i++) {
        const text = await options.nth(i).textContent();
        console.log("Option: " +text);
        if (text === "India") {

            await opt.click();

            break;

        }

    }

})