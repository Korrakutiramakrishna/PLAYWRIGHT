// const { expect,test } = require("@playwright/test")


// test('login information', async({page})=>
// {
//     const productname="ZARA COAT 3";
//     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
//     await page.locator("#userEmail").fill("anshika@gmail.in") 
//     await page.locator("#userPassword").fill("P@ssw0rd@0439");
//     await page.locator("#login").click();
//     await page.waitForLoadState('networkidle')
//     const products =await page.locator(".card-body b");
//     const counts = await products.count();
//     const title =await page.locator(".card-body b").allTextContents();
//     console.log(title)
//     console.log(counts);
//     for(let i=0;i<counts;i++)
//     {
//         const titles =await products.nth(i).locator("b").textContent();
//         console.log(titles)

//     }


// });
const { test, expect } = require("@playwright/test");

test("login information", async ({ page }) => {
    const productname = "ZARA COAT 3";

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await page.locator("#userEmail").fill("anshika@gmail.in");
    await page.locator("#userPassword").fill("P@ssw0rd@0439");
    await page.locator("#login").click();

    await page.waitForLoadState("networkidle");
    const products = page.locator(".card-body b");
    const count = await products.count();
    console.log(await products.allTextContents());
    for (let i = 0; i < count; i++) {
        const title = await products.nth(i).textContent();
        console.log(title);
        if(title.trim()===productname)
        {
             await products.nth(i).locator("//button[text()=' Add To Cart']").nth(1).click();
        }
    }
});
