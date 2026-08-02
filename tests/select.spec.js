const {test,except, chromium} =require('@playwright/test')

test('select options' ,async({page})=>
{

    // const browser =await chromium.launch()
    // const context =await browser.newContext();
    // const Page =await context.newPage();
    await page.goto("https://practice.expandtesting.com/dropdown");
    await page.waitForLoadState("networkidle")
   const countries = await page.locator("#country option").allTextContents();

for(let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}
});