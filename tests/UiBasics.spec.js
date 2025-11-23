const {test, expect}=require('@playwright/test');

test('Browsercontext test', async({browser})=>
{

const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
const username=page.locator('#username');
const password=page.locator('#password');
const loginclick=page.locator('#signInBtn');
await username.fill("rahulshettyacademy");
await password.fill("Password");
await loginclick.click();
});