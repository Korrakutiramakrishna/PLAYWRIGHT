const {test,page,except, expect} =require('@playwright/test')

test('radiobtn',async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username =page.locator('#username');
    const signbtn=page.locator("input[name='signin']");
    const doucemntlink=page.locator("//a[contains(@href, 'documents-request')]");
    await username.fill("rahulshettyacademy")
   await page.locator("//input[@id='password']").fill("Learning@830$3mK2")
   const dropdown =page.locator("//select[@class='form-control']");
   await dropdown.selectOption("teach")

   await page.locator("//input[@id='usertype']").last().click();
  await  expect(page.locator("//input[@id='usertype']").last()).toBeChecked();   
  console.log(await page.locator("//input[@id='usertype']").last().isChecked());
  try {
      await page.locator("#okayBtn").click()
      console.log("alert is  present ")
  } catch (error) {
   console.log("no alert is not present ")
  }
  await page.locator("#terms").click();
  expect( await page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  expect( await page.locator("#terms").isChecked()).toBeFalsy();

  await expect(doucemntlink).toHaveAttribute("class","blinkingText");
  await signbtn.click();

});


// test.only('windows handling ' ,async({page})=>
// {   
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

// });