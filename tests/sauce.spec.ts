import { test, expect } from "@playwright/test";


test.describe.serial("login test", async () => {

    // test.beforeAll(() => { }) // runs once before all tests in the block
    // test.afterAll(() => { }) // runs once after all tests in the block
    // test.beforeEach(() => { }) // runs before each test in the block
    // test.afterEach(() => { }) // runs after each test in the block

    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.saucedemo.com/");
    })


    test("should display an error message when logging in with empty credentials", async ({
        page,
    }) => {

        const username = page.locator('[data-test="username"]');
        const password = page.locator('[data-test="password"]');
        const loginbutton = page.locator('[data-test="login-button"]');
        const error = page.locator('[data-test="error"]');

        await loginbutton.click();

        await expect(error).toBeVisible();
        await expect(error).toHaveText("Epic sadface: Username is required");
        await page.waitForTimeout(2000);
    });

    test("should display an error message when logging in with an invalid username", async ({ page }) => {

        const username = page.locator('[data-test="username"]');
        const password = page.locator('[data-test="password"]');
        const loginbutton = page.locator('[data-test="login-button"]');
        const error = page.locator('[data-test="error"]');

        await username.fill("telecom123")
        await password.fill("secret_sauce")
        await loginbutton.click()

        await expect(error).toBeVisible()
        await expect(error).toHaveText("Epic sadface: Username and password do not match any user in this service")
        await page.waitForTimeout(2000)


    })

    test("should successfully login with valid credentials", async ({ page }) => {

        const username = page.locator('[data-test="username"]');
        const password = page.locator('[data-test="password"]');
        const loginbutton = page.locator('[data-test="login-button"]');
        const inventorylist = page.locator('[data-test="inventory-list"]');

        await username.fill("standard_user")
        await password.fill("secret_sauce")
        await loginbutton.click()
        const homeurl = page.url()

        await expect(inventorylist).toBeVisible()
        await expect(homeurl).toBe("https://www.saucedemo.com/inventory.html")
        await page.waitForTimeout(3000)
    })

});