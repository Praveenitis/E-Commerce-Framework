const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/loginPage');
const { ProductPage } = require('../pages/productPage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');

const loginData = require('../test-data/loginData.json');
const productData = require('../test-data/productData.json');
const checkoutData = require('../test-data/checkoutData.json');


test.describe('Checkout Functionality', () => {

    let loginPage;
    let productPage;
    let cartPage;
    let checkoutPage;


    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);

        // Login
        await loginPage.navigateToLogin();

        await loginPage.login(
            process.env.LOGIN_EMAIL,
            process.env.LOGIN_PASSWORD
        );

        // Navigate to Products
        await productPage.navigateToProducts();

        // Search product
        await productPage.searchProduct(
            productData.searchProduct
        );

        // Add product directly from search results
        await productPage.addSearchedProductToCart(
            productData.searchProduct
        );

        // Open Cart
        await productPage.viewCart();

        // Wait for Cart
        await cartPage.waitForCart();

        // Proceed to Checkout
        await cartPage.proceedToCheckout();

    });


   test(
    'Verify Checkout Page',
    { tag: ['@smoke', '@regression'] },
    async () => {

        await checkoutPage.verifyCheckoutPage();

        await expect(checkoutPage.deliveryAddress)
            .toBeVisible();

        await expect(checkoutPage.billingAddress)
            .toBeVisible();

        await expect(checkoutPage.orderReview)
            .toBeVisible();

    });
test(
    'Complete Order Successfully',
    { tag: ['@smoke', '@regression'] },
    async () => {

    // Enter order comment
    await checkoutPage.enterOrderComment(
        checkoutData.orderComment
    );

    // Place order
    await checkoutPage.placeOrder();

    // Enter payment details
    await checkoutPage.enterPaymentDetails(
        checkoutData.payment
    );

    // Confirm payment
    await checkoutPage.confirmPayment();

    // Verify order confirmation
    await expect(checkoutPage.orderSuccessMessage)
        .toBeVisible();

});

test(
    'Validate Payment Form',
    { tag: ['@negative', '@regression'] },
    async () => {

    await checkoutPage.enterOrderComment(
        checkoutData.orderComment
    );

    await checkoutPage.placeOrder();

    // Try to submit payment form without entering details
    await checkoutPage.confirmPayment();

    // Payment page should remain visible
    await expect(checkoutPage.nameOnCard)
        .toBeVisible();

    await expect(checkoutPage.cardNumber)
        .toBeVisible();

});


});