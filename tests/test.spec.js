const{test ,expect}=require('@playwright/test');

test('letshop shopperstack' , async({page})=>
{
    const productname="ZARA COAT 3";
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("anshika@gmail.in");
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
   const Subtotal =await page.locator("//span[@class='value']").nth(0).textContent();
   console.log(Subtotal);
    const total =await page.locator("//span[@class='value']").nth(1).textContent();
    console.log(total)
    await page.locator("//button[text()='Checkout']").click();
});