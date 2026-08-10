const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/loginPage');
const { LogoutPage } = require('../pages/logoutPage');

const loginData = require('../test-data/loginData.json');


test.describe('Logout Functionality', () => {

    let loginPage;
    let logoutPage;


    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        logoutPage = new LogoutPage(page);

        // Login
        await loginPage.navigateToLogin();

        await loginPage.login(
            loginData.validUser.email,
            loginData.validUser.password
        );

    });


    test(
    'Verify Logout Functionality',
    { tag: ['@smoke', '@regression'] },
    async ({ page }) => {

        // Verify Logout link is visible
        await expect(logoutPage.logoutLink)
            .toBeVisible();

        // Logout
        await logoutPage.logout();

        // Verify login page
        await logoutPage.verifyLoginPage();

        // Verify URL
        await expect(page)
            .toHaveURL(/login/);

    });

});