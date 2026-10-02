const {test,expect} =require('@playwright/test');



test('Login page',async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    const title = await page.title();
    console.log(title);
})