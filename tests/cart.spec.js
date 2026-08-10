const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/loginPage');
const { ProductPage } = require('../pages/productPage');
const { CartPage } = require('../pages/cartPage');

const loginData = require('../test-data/loginData.json');
const productData = require('../test-data/productData.json');


test.describe('Cart Functionality', () => {

    let loginPage;
    let productPage;
    let cartPage;


    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);
        cartPage = new CartPage(page);

        await loginPage.navigateToLogin();

        await loginPage.login(
            loginData.validUser.email,
            loginData.validUser.password
        );

        await productPage.navigateToProducts();

        await productPage.searchProduct(
            productData.searchProduct
        );

        await productPage.addSearchedProductToCart(
            productData.searchProduct
        );

        await productPage.viewCart();

        await cartPage.waitForCart();
    });

    test.afterEach(async () => {

    if (cartPage) {
        await cartPage.removeProduct();
    }

});


    test('Verify Cart Product Details', async () => {

        await expect(cartPage.productName)
            .toHaveText(productData.expectedProductName);

        await expect(cartPage.productPrice)
            .toBeVisible();

        await expect(cartPage.productQuantity)
            .toHaveText(productData.expectedQuantity);

        await expect(cartPage.productTotal)
            .toBeVisible();
    });


    test('Verify Cart Page', async () => {

        await expect(cartPage.cartTable)
            .toBeVisible();

    });


    test('Remove Product from Cart', async () => {

        await cartPage.removeProduct();

        await expect(cartPage.cartTable)
            .not.toBeVisible();

    });

});