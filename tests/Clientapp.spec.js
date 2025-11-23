const {test, expect}=require('@playwright/test');

test('Browsercontext test', async({browser})=>
{

const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://rahulshettyacademy.com/client/");
console.log(await page.title());
//await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
//creating Variables for locators
const username=page.locator('#userEmail');
const password=page.locator('#userPassword');
const loginclick=page.locator('#login');
const productnames=page.locator(".card-body b");
//code actions
await username.fill("sudharsan.pro36@gmail.com");
await password.fill("Autumn2025");
await loginclick.click();

//wait for the page to load and then print all
const firstproduct = productnames.first();
await firstproduct.waitFor();
console.log(await productnames.allTextContents());
await expect(firstproduct).toContainText('ZARA COAT 3');
});