const {test, expect}=require('@playwright/test');

test('Browsercontext test', async({browser})=>
{
const username=page.locator('#username');
const password=page.locator('#password');
const loginclick=page.locator('#signInBtn');
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
username.fill("rahulshettyacademy");
password.fill("Password");
loginclick.click();
});