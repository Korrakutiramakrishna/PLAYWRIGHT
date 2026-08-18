const {test,expect} =require('@playwright/test')

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

test.only('more assertions',async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   console.log( await page.title());
   await expect(page).toHaveTitle(/Practice Page/);
    
    // await page.goto("https://www.google.com/");
    // await page.goBack();
    // await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    page.on('dialog',dialog=>
        {
            console.log(dialog.message());
            dialog.accept()
        });
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();
    const framepage =await page.frameLocator("#courses-iframe");
   await framepage.locator("li a[href*='lifetime-access']:visible").click();
   const textclick =await framepage.locator('.text h2').textContent();
   console.log(textclick.split(" ")[1]);
});