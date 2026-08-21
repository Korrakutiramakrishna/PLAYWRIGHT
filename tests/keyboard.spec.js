const {test,except}=require('@playwright/test')

test('mouseoveractions',async({page})=>
{

    await page.goto("https://demowebshop.tricentis.com/");
    const title = await page.title()
    console.log(title)
    await page.locator(".ico-login").click();
    await page.keyboard.type('user@example.com');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V')

});
