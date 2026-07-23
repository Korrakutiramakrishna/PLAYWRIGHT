const {test,expect} =require('@playwright/test')

test('Windows Handling' ,async({browser})=>
{

    const context  =await browser.newContext();
    const page =await context.newPage()
   const brower = await page.goto("https://practicetestautomation.com/");
   const title =await page.title();
   console.log(title)
   await  page.locator("li[id='menu-item-20']").click()
    await  page.waitForLoadState()
    await page.locator("//a[text()='Test Login Page']").click();
    
  console.log(await expect(page.locator("#username")).toBeVisible)
  await page.locator("#username").fill("student")
  await page.locator("#password").fill("Password123")
  await page.locator("//button[text()='Submit']").click();

  await expect(page.locator("//h1[text()='Logged In Successfully']")).toBeVisible();

const message = await page.locator("//h1[text()='Logged In Successfully']").textContent();

console.log(message);
await expect(page.locator("//strong[contains(text(),'Congratulations student. You successfully logged i')]")).toBeVisible();

  const msge = await page.locator("//strong[contains(text(),'Congratulations student. You successfully logged i')]").textContent();
  
  console.log(msge);
    

});
