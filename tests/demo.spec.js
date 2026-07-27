const {expect,test} =require('@playwright/test');

test('demo Shop ',async({page})=>
{
    const productname="Build your own cheap computer"
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("//input[@id='Email']").fill("rama33@gmail.com");
    await page.locator("//input[@id='Password']").fill("rama@1234");
    await page.locator("//input[@name='RememberMe']").nth(0).click();
    await page.locator("//input[@class='button-1 login-button']").click()

    await page.locator("//a[contains(text(),'Computers')]").nth(2).click();
    await page.locator("//a[contains(text(),'Desktops')]").nth(3).click();
    const textdata=await page.locator("h2.product-title").allTextContents();
    const cleanedData = textdata.map(text => text.trim());
    console.log(cleanedData);
   console.log(await page.locator("h2.product-title").count())
        await page.locator("//div[@class='product-item']").nth(1).click();
        await page.waitForLoadState('networkidle');
        await page.locator("//select[@name='product_attribute_16_5_4']").selectOption({label:'2.2 GHz Intel Pentium Dual-Core E2200'});
        await page.locator("//select[@name='product_attribute_16_6_5']").selectOption({value:'17'});
        await page.locator("//input[@name='product_attribute_16_3_6']").nth(1).click();
        await page.locator("//input[@name='product_attribute_16_4_7']").nth(2).click();
        await page.locator("//input[@name='product_attribute_16_8_8']").nth(1).click();
        await page.locator("//input[@id='add-to-cart-button-16']").click();
        await page.locator("//span[text()='Shopping cart']").click();
        // await expect(page.locator(`//a[contains(text(),'${productname}')]`)).toBeVisible();
        await page.locator(".country-input valid").selectOption({label:"India"})
        await page.locator("//input[@id='ZipPostalCode']").fill("500085");
        await page.locator("//input[@name='estimateshipping']").click();
        await page.locator("//input[@name='termsofservice']").click();
        await page.locator("//button[@name='checkout']").click()
}); 