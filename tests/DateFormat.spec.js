import { test, expect } from '@playwright/test';


test('Date Format Test', async ({ page }) => {
const date = new Date();

const dd = date.getDate();
const mm = date.getMonth() + 1; 
const yyyy = date.getFullYear();
let fileName = `filename_${dd}-${mm}-${yyyy}`;

        console.log("FileName "+fileName);


})
