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
  for(let i=0;i<=productnames.length;i++)
  {
    if(productnames===productname)
    {
        console.log("Product Found");
        await page.locator("//button[text()=' Add To Cart']").nth(1).click();
        break;
    }
    await page.locator("//button[@class='btn btn-custom']").nth(2).click()
    const value = await page.locator("//span[@class='value']").first().textContent();
    await page.locator("//button[text()='Checkout']").click()
  
  }
});