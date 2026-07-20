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


test.only('windows handling ' ,async({browser})=>
{   
    const context =await browser.newContext()
    const page =await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const doucemntlink =page.locator("//a[contains(text(),'Free Access to InterviewQues/ResumeAssistance/Material')]")
    const [newpage] =await Promise.all([
        context.waitForEvent('page'),
         doucemntlink.click()
    ])  
    await newpage.waitForLoadState();
   const text =await newpage.locator(".red").textContent();
    console.log(text);
    const arrayText =text.split("@");
    const domainname =arrayText[1].split(" ")[0]
     console.log(domainname)


     await page.bringToFront();

    await page.locator("#username").fill(domainname)
    console.log(await page.locator("#username").inputValue())
});
