const {expect,test} =require('@playwright/test')

test('demo Shop ',async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("//input[@id='Email']").fill("rama33@gmail.com");
    await page.locator("//input[@id='Password']").fill("rama@1234");
    await page.locator("//input[@name='RememberMe']").nth(0).click();
    await page.locator("//input[@class='button-1 login-button']").click()

    await page.locator("//a[contains(text(),'Electronics')]").nth(2).click();
    await page.locator("//a[contains(text(),'Cell phones')]").nth(3).click();

});