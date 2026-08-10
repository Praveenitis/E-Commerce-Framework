class CheckoutPage {

    constructor(page) {
        this.page = page;

        // Address
        this.deliveryAddress = page.getByText('Your delivery address');
        this.billingAddress = page.getByText('Your billing address');

        // Order review
        this.orderReview = page.getByText('Review Your Order');
        this.orderTable = page.locator('#cart_info_table');

        // Order comment
        this.orderComment = page.locator('textarea[name="message"]');

        // Place order
        this.placeOrderButton = page.getByText('Place Order', {
            exact: true
        });

        // Payment details
        this.nameOnCard = page.locator('input[name="name_on_card"]');
        this.cardNumber = page.locator('input[name="card_number"]');
        this.cvc = page.locator('input[name="cvc"]');
        this.expiryMonth = page.locator('input[name="expiry_month"]');
        this.expiryYear = page.locator('input[name="expiry_year"]');

        // Payment button
        this.payAndConfirmButton = page.getByText(
            'Pay and Confirm Order',
            {
                exact: true
            }
        );

        // Order confirmation
        this.orderSuccessMessage = page.getByText(
            'Congratulations! Your order has been confirmed!'
        );
    }


    async verifyCheckoutPage() {

        await this.deliveryAddress.waitFor({
            state: 'visible'
        });

        await this.orderReview.waitFor({
            state: 'visible'
        });
    }


    async enterOrderComment(comment) {

        await this.orderComment.fill(comment);
    }


    async placeOrder() {

        await this.placeOrderButton.click();
    }


    async enterPaymentDetails(paymentData) {

        await this.nameOnCard.fill(paymentData.nameOnCard);

        await this.cardNumber.fill(paymentData.cardNumber);

        await this.cvc.fill(paymentData.cvc);

        await this.expiryMonth.fill(paymentData.expiryMonth);

        await this.expiryYear.fill(paymentData.expiryYear);
    }


    async confirmPayment() {

        await this.payAndConfirmButton.click();
    }
}


module.exports = { CheckoutPage };