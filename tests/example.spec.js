// @ts-check
const { test, expect, chromium } = require('@playwright/test');
const { describe } = require('node:test');



describe('User Sign-Up', function(){
  let browser 
  test('Create User', async ({ page }) => {



    browser = await chromium.launch()
    const context=await browser.newContext()
    const page1 = await page.context().newPage();

    
    

    await page1.goto('https://tempail.com/'); // Replace with your sign-up URL


    const firstNameInput = await page1.locator('//html/body/section[1]/div[2]/div/div[2]/div/div/div[1]/input');
    
    // Get the value of the input
    const firstNameValue = await firstNameInput.inputValue();
    console.log('First Name:', firstNameValue);

    const atIndex = firstNameValue.indexOf('@');
    function extractUsername(firstNameValue) {
        const atIndex = firstNameValue.indexOf('@');
        if (atIndex === -1) {
          return null; // Email is invalid or doesn't contain "@"
        }
        return firstNameValue.slice(0, atIndex);
      }
    const trialusername = extractUsername(firstNameValue);
    console.log(trialusername); // Output: befyerimla
    const page2 = await page.context().newPage();

    await page2.goto('https://sp1.spacejat.com/auth/createAccount'); // Replace with your sign-up URL
  
    // Fill in the sign-up form using XPath
    const firstName= await page2.locator('[id="firstName"]')
    await firstName.type(trialusername)
    const lastName= await page2.locator('[id="lastName"]')
    await lastName.type(trialusername)
    const username= await page2.locator('[id="username"]')
    await username.type(trialusername)
    const email= await page2.locator('[id="email"]')
    await email.type(firstNameValue)
    const password= await page2.locator('[id="password"]')
    await password.type("Try@1234567890")
    const sign_up = await page2.locator("//html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/form/div/button")
    await sign_up.click();
    
    const page4 = await page.context().newPage();

    await page4.goto('https://tempail.com/');
    const openmail = await page4.locator("//html/body/section[2]/div[2]/div/div/ul/li[2]/a")
    await openmail.click();
    // await page4.waitForTimeout(10000);
    // const page1Promise = page4.waitForEvent('popup');
    // await page.frameLocator('#iframe').getByRole('link', { name: 'Link to account update' });
    // const page5 = await page1Promise;
    // Wait for the iframe to be visible
    // await page.waitForSelector('#iframe', { timeout: 10000 }); // Adjust the selector as needed
    
    // // Locate the iframe
    // const iframe = await page.frame({ id : 'iframe' }); // Use the id or other attribute to locate the iframe

    // if (iframe) {
    //     // Wait for the button inside the iframe to be visible
    //     // Replace 'button-selector' with the actual selector for the button inside the iframe
    //     await iframe.waitForSelector('a[href*="action-token"]', { timeout: 10000 }).catch(() => console.log('Button not found'));

    //     try {
    //         // Click the button inside the iframe
    //         await iframe.click('a[href*="action-token"]'); // Adjust the selector to match the button
    //         console.log('Clicked on the button inside iframe');
    //     } catch (e) {
    //         console.log('Failed to click the button inside iframe:', e.message);
    //     }
    // } else {
    //     console.log('Could not locate the iframe with ID iframe');
    // }
    // Locate the iframe
    // const iframeLocator = page.frameLocator('#iframe');

    // // Wait for the link inside the iframe to be visible and then click it
    // await iframeLocator.getByRole('link', { name: 'Link to account update' }).click();

    // console.log('Clicked on the link inside iframe');
        // Locate the first iframe
    await page4.waitForTimeout(12000);
      
    const iframe1 = page.frameLocator('//html/body/div[2]/div/div/div[3]/div/iframe');

    // Locate the second iframe within the first iframe
    // const iframe2 = iframe1.frameLocator('//html/body/div[2]/div/div/div[3]/div/iframe');

    // Click the button inside the second iframe
    await iframe1.getByRole('link', { name: 'Link to account update' }).click();
    console.log('Clicked the button inside the nested iframe');
    const page3 = await page.context().newPage();

    await page3.goto('https://sp1.spacejat.com/auth/login'); 
    const loginUserName= await page3.locator('//html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/form/div/div[1]/div/div/div/div/input')
    await loginUserName.click();
    await loginUserName.type(trialusername)
    const loginpassword= await page3.locator('//html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/form/div/div[2]/div/div/div')
    await loginpassword.click();
    ///html/body/p[2]/a
    // /html/body/div[2]/div/div/div[3]/div/iframe
    await loginpassword.type("Try@1234567890")
    //html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/form/div/div[2]/div/div/div/div/button/svg
    const Login = await page.locator("//html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/form/div/button")
    await Login.click();
    
  

    await page3.waitForTimeout(7000);
    const OpenChannel = await page3.locator("//html/body/div[2]/main/div/div[2]/div[1]/div[2]/div/div[2]");
    await OpenChannel.click();
    const InputNameOfChannel = await page3.locator("//html/body/div[3]/div[2]/section/form/div[1]/div[1]/div[1]/div/div/div/div/input");
    await InputNameOfChannel.click();
    await InputNameOfChannel.type("Try1001");
    const Next = await page3.locator("//html/body/div[3]/div[2]/section/form/div[2]/div[2]/button[2]");
    await Next.click();
    const ChatWithTrue = await page3.locator("//html/body/div[3]/div[2]/section/form/div[1]/div[3]/div[1]/div/label/span[2]/span");
    await ChatWithTrue.click();
    const Create = await page3.locator("//html/body/div[3]/div[2]/section/form/div[2]/div[2]/button[2]");
    await Create.click();
    await page3.waitForTimeout(12000);


    await page3.waitForTimeout(7000);
    const generalChannel = await page3.locator("//html/body/div[2]/main/div/div[1]/div/div[2]/div/div[4]/div/section/div/div/div[1]/div/h5")
    await generalChannel.click();
    const TextInput = await page3.locator("//html/body/div[2]/main/div/div[2]/div[2]/div[1]/div[3]/div/div/div/div/div/textarea");
    await TextInput.click();
    await TextInput.type("Hello everyone");
    const sendMessage = await page3.locator("//html/body/div[2]/main/div/div[2]/div[2]/div[1]/div[3]/div/div/button");
    await sendMessage.click();
    const OpenCamera = page3.locator("//html/body/div[2]/main/div/div[1]/div/div[2]/div[2]/div/div[3]/div/div[1]");
    await OpenCamera.dblclick();
    await page3.waitForTimeout(22000);

    await browser.close(); 
    });

  
})
