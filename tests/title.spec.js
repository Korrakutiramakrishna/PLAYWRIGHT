import{test,except, expect} from '@playwright/test';

test('fetch title', async({page})=>
{
    // await page.goto("https://demowebshop.tricentis.com/");
    // const logo =await page.locator("//img[contains(@alt,'Demo Web Shop')]");
    // console.log(logo.getByText)
    // await expect(logo).toBeVisible();
    await page.goto("https://practice.expandtesting.com/dropdown");
    const states =await page.locator("#country option").allInnerTexts();
    console.log(states)
    if(states.concat("Ind"))
    {
        console.log("india")
        await page.locator("#country").selectOption({label:"Australia"});
    }

});