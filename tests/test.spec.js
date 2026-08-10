const{test ,expect}=require('@playwright/test');
const { exec } = require('node:child_process');
const { dir } = require('node:console');

test('letshop shopperstack' , async({page})=>
{
    const productname="ZARA COAT 3";
    const email ="anshika@gmail.in";
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("P@ssw0rd@0439")
    await page.locator("#login").click();
   const title =await page.title();
   console.log(title)
    await expect(page).toHaveTitle("Let's Shop");
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body").first().waitFor();
   const count =await page.locator(".card-body b").count();
   console.log(count);
   const productnames=await page.locator(".card-body b").allTextContents();
   console.log(productnames)
   for(let i=0;i<productnames.length;i++)
   {
    console.log(productnames[i])
    if(productnames[i]===productname)
    {
      await page.locator("//button[@class='btn w-10 rounded']").nth(1).click();
      break;
    }
   }
   await page.locator("[routerlink*=cart]").click();
   await page.waitForLoadState('networkidle')
   await expect(page.locator("//h3[text()='ZARA COAT 3']")).toBeVisible();
   console.log("Product is visible");
   const Subtotal =await page.locator("//span[@class='value']").nth(0).textContent();
   console.log(Subtotal);
    const total =await page.locator("//span[@class='value']").nth(1).textContent();
    console.log(total)
    await page.locator("//button[text()='Checkout']").click();
    await page.locator("//input[@placeholder='Select Country']").pressSequentially("Ind")
    //  await page.locator("//input[@placeholder='Select Country']").type("ind",{delay:100});
   const dropdowns = await page.locator(".ta-results ");
   await dropdowns.waitFor();
   const OptionCount =await dropdowns.locator("button").count();
   console.log(OptionCount)
   for(let i=0;i<OptionCount;i++)
   {
    const text =await dropdowns.locator("button").nth(i).textContent()
    console.log(text)
    if(text.trim() ==="India")
    {
     await dropdowns.locator("button").nth(i).click() ;
     break;
    }
   }
   await page.locator("//input[@class='input txt' and @type='text']").nth(0).fill("123");
   await page.locator("//input[@class='input txt' and @type='text']").nth(1).fill("Lucky");
  console.log(expect(page.locator(".user__name [type=text]").first()).toHaveText(email));

   await page.locator(".action__submit ").click();
   expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const ordererid = await  page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(ordererid);
   await page.locator(".btn-custom .fa-handshake-o").click();
   const rows= await page.locator("tbody tr");
   for(let i=0;i<await rows.count;i++)
   {
    const ordid =await rows.nth(i).locator("th").textContent();
    if(ordid.includes(ordererid))
    {
      await rows.nth(i).locator("button").first.click()
      break ;
    }

   }
   

});

 
 
 
 
test.only('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
 
   await page.locator("[routerlink*='cart']").click();
   //await page.pause();
 
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();
 
   await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
 
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});
 
 
 
 