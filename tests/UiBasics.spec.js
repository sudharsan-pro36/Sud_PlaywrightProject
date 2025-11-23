const {test, expect}=require('@playwright/test');

test('Browsercontext test', async({browser})=>
{

const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
});

test('LandtoShoppage test', async({browser})=>
{
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//creating Variables for locators
const username=page.locator('#username');
const password=page.locator('#password');
const loginclick=page.locator('#signInBtn');
const loginerror=page.locator("[style*='block']");
const productnames=page.locator(".card-body a");
//code actions
await username.fill("rahulshetty");
await password.fill("learning");
await loginclick.click();
console.log(await loginerror.textContent());
await username.fill("");
await username.fill("rahulshettyacademy");
await password.fill("learning");
await loginclick.click();
//wait for the page to load and then print all
const firstproduct = productnames.first();
await firstproduct.waitFor();
console.log(await productnames.allTextContents());
await expect(firstproduct).toContainText('iphone X');
});