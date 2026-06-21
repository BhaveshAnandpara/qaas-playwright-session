import { test, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

let loginPage: LoginPage;

test.describe("login test", async () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto("https://www.saucedemo.com/");
    })

    test("should display an error message when logging in with empty credentials", async ({
        page,
    }) => {

        await loginPage.loginbutton.click();

        await expect(loginPage.error).toBeVisible();
        await expect(loginPage.error).toHaveText("Epic sadface: Username is required");
        await page.waitForTimeout(2000);
    });


    test("should display an error message when logging in with an invalid username", async ({ page }) => {

        await loginPage.login("telecom123", "secret_sauce")

        await expect(loginPage.error).toBeVisible()
        await expect(loginPage.error).toHaveText("Epic sadface: Username and password do not match any user in this service")
        await page.waitForTimeout(2000)

    })

    test("should successfully login with valid credentials", async ({ page }) => {
        const inventorylist = page.locator('[data-test="inventory-list"]');

        await loginPage.login("standard_user", "secret_sauce")
        const homeurl = page.url()

        await expect(inventorylist).toBeVisible()
        await page.waitForTimeout(3000)

    })

    test("should display six products after successful login", async ({ page }) => {
        const inventorylist = page.locator('[data-test="inventory-list"]');
        const products = page.locator('[data-test="inventory-item"]');

        await loginPage.login("standard_user", "secret_sauce")
        const homeurl = page.url()

        await expect(inventorylist).toBeVisible()
        await expect(products).toHaveCount(6);
        await page.waitForTimeout(3000)

    })
});