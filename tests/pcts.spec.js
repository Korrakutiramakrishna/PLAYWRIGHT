const {test,expect} =require('@playwright/test')

test('Windows Handling' ,async({browser})=>
{

    const context  =await browser.newContext();
    const page =await context.newPage()
   const brower = await page.goto("https://practicetestautomation.com/");
   const title =await page.title();
   console.log(title)
   await  page.locator("li[id='menu-item-20']").click()
    await  page.waitForLoadState()
    await page.locator("//a[text()='Test Login Page']").click();
    await  page.waitForLoadState()
  
    
});
