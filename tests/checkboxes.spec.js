import { test, expect } from '@playwright/test';

test("Checkboxes", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("[value='sunday']").check();   // sunday
    await page.locator("//input[@value='monday' and @type='checkbox']").check();   //Monday

    const checkBoxes = await page.locator('.form-check-inline [type="checkbox"]');

    const checkBoxCount = await checkBoxes.count();

    for (let i = 0; i < checkBoxCount; i++) {

        const checkBox = checkBoxes.nth(i);
        const isChecked = await checkBox.isChecked();

        if (isChecked) {
            await checkBox.uncheck();
        }
        await checkBox.check();

    }


    await page.waitForTimeout(2000); // Wait for 2 seconds to observe the changes
})