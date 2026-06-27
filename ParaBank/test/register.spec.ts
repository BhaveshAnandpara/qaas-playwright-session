import { test, expect } from '@playwright/test'

test.describe("Register User", () => {

    test.beforeEach(async ({ page }) => {

        await page.goto("https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC")

    })

    test.only("validate if user can create new account", async ({page}) => {

        const registerLink = await page.getByRole('link', { name: 'Register' })
        const firstName = await page.locator('[id="customer.firstName"]')
        const lastName = await page.locator('[id="customer.lastName"]')
        const addressStreet = await page.locator('[id="customer.address.street"]')
        const addressCity = await page.locator('[id="customer.address.city"]')
        const addressState = await page.locator('[id="customer.address.state"]')
        const addressZip = await page.locator('[id="customer.address.zipCode"]')
        const phone = await page.locator('[id="customer.phoneNumber"]')
        const ssn = await page.locator('[id="customer.ssn"]')
        const username = await page.locator('[id="customer.username"]')
        const password = await page.locator('[id="customer.password"]')
        const confirmPassword = await page.locator('[id="repeatedPassword"]')
        const registerBtn =  await page.getByRole('button', { name: 'Register' })

        page.on('response', async (data) => {
            console.log(await data.url())
            console.log(await data.json())
        });

        await registerLink.click();

        await expect(firstName).toBeVisible();

        await firstName.fill("Bhavesh")
        await lastName.fill("Patel");
        await addressStreet.fill("123 Main Street");
        await addressCity.fill("Pune");
        await addressState.fill("Maharashtra");
        await addressZip.fill("411001");
        await phone.fill("1267890");
        await ssn.fill("123456789");
        await username.fill(`bhavesh`);
        await password.fill("12345");
        await confirmPassword.fill("12345");

        //This is how you read APIs that are called within the appliaction
        const requestPromise = page.waitForRequest('https://parabank.parasoft.com/parabank/register.htm');
        // const responsePromise = page.waitForResponse('https://parabank.parasoft.com/parabank/register.htm');
        await registerBtn.click();
        const request = await requestPromise
        // const response = await responsePromise

        const payloadData = await request.postDataJSON()
        console.log(payloadData)
        await expect(payloadData["customer.firstName"]).toBe("Bhavesh")
        await expect(payloadData.repeatedPassword).toBe("12345")

        await page.waitForTimeout(2000)

    })


})