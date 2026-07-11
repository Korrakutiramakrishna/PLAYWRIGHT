const { test, expect } = require('@playwright/test');
  


  test.only('frsit testcasename',async ({browser})=>
{
    //chrome browser /plugins/cookiews
    const context =await browser.newContext();
   const page =  await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());
   await page.locator("//input[@id='username']").fill("rahulshettyacademy")
   await page.locator("//input[@id='password']").fill("Learning@830$3mK2")
   await page.locator("//input[@name='signin']").click();
   
//    console.log(await page.locator(".card-body").first().textContent());
//   console.log( await page.locator(".card-body").nth(0).textContent());
    await page.waitForLoadState('networkidle');
    const alltitle =await page.locator(".card-title a").allTextContents();
  console.log(alltitle)
//    const errorMessage = page.locator("[style*='block']");
//    await expect(errorMessage).toContainText("Incorrect");
//    console.log(await errorMessage.textContent());
    // await page.locator("//input[@id='username']").fill("rahulshettyacademy")
    // await page.locator("//input[@id='password']").fill("Learning@830$3mK2")
    //  await page.locator("//input[@name='signin']").click();

});

