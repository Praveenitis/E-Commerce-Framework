const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

const loginData = require('../test-data/loginData.json');


test.describe('Login Functionality', () => {

    let loginPage;


    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);

        await loginPage.navigateToLogin();

    });


    test('Valid Login', async ({ page }) => {

        await loginPage.login(
            loginData.validUser.email,
            loginData.validUser.password
        );

        await expect(loginPage.loggedInAs).toContainText('Logged in as');

    });


    test('Invalid Login', async ({ page }) => {

        await loginPage.login(
            loginData.invalidUser.email,
            loginData.invalidUser.password
        );

        await expect(loginPage.loginErrorMessage)
            .toBeVisible();

    });

});