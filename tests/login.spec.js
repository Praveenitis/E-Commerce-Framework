const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

const loginData = require('../test-data/loginData.json');

require('dotenv').config();


test.describe('Login Functionality', () => {

    let loginPage;


    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);

        await loginPage.navigateToLogin();

    });


    test(
    'Valid Login',
    { tag: ['@smoke', '@regression'] },
    async ({ page }) => {

        await loginPage.login(
    process.env.LOGIN_EMAIL,
    process.env.LOGIN_PASSWORD
);

        await expect(loginPage.loggedInAs).toContainText('Logged in as');

    });


    test(
    'Invalid Login',
    { tag: ['@negative', '@regression'] },
    async ({ page }) => {

        await loginPage.login(
            loginData.invalidUser.email,
            loginData.invalidUser.password
        );

        await expect(loginPage.loginErrorMessage)
            .toBeVisible();

    });

});