import { test, expect } from '@playwright/test';

test('File Upload', async ({ page }) => {

    page.goto("https://the-internet.herokuapp.com/upload");

    const file = 'C:/Users/Lakshmi Sri Akula/Downloads/Tax_Invoice-Jul-01-2025.pdf';

    await  page.setInputFiles('#file-upload', file);

    await page.click('#file-submit');

    await expect(page.getByText('File Uploaded!')).toBeVisible();

    const textOfElement = await page.locator('.example div').textContent()

    console.log(`Text of the element: ${textOfElement}`);

})