const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/loginPage');
const { ProductPage } = require('../pages/productPage');

const loginData = require('../test-data/loginData.json');
const productData = require('../test-data/productData.json');


test.describe('Product Functionality', () => {

    let loginPage;
    let productPage;


    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);

        // Login
        await loginPage.navigateToLogin();

        await loginPage.login(
            loginData.validUser.email,
            loginData.validUser.password
        );

        // Navigate to products
        await productPage.navigateToProducts();
    });


    test('Verify Products Page', async () => {

        await expect(productPage.productsTitle)
            .toBeVisible();

    });


    test('Search Product', async () => {

        await productPage.searchProduct(
            productData.searchProduct
        );

        await expect(productPage.searchedProductsTitle)
    .toBeVisible();

        await expect(productPage.productCards.first())
            .toContainText(productData.expectedProductName);

    });


    test('Select Product and Verify Details', async () => {

        await productPage.searchProduct(
            productData.searchProduct
        );

        await productPage.selectFirstProduct();

        await expect(productPage.productDetails)
            .toBeVisible();

        await expect(productPage.productName)
            .toHaveText(productData.expectedProductName);

    });


    test('Add Product to Cart', async () => {

        await productPage.searchProduct(
            productData.searchProduct
        );

        await productPage.selectFirstProduct();

        await productPage.addProductToCart();

        await expect(productPage.viewCartLink)
            .toBeVisible();

    });

});