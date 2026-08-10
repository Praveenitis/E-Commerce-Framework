class CartPage {

    constructor(page) {
        this.page = page;

        // Cart
        this.cartTable = page.locator('#cart_info_table');
        this.cartRows = page.locator('#cart_info_table tbody tr');

        // Product details
        this.productName = this.cartRows
            .first()
            .locator('.cart_description h4 a');

        this.productPrice = this.cartRows
            .first()
            .locator('.cart_price p');

        this.productQuantity = this.cartRows
            .first()
            .locator('.cart_quantity button');

        this.productTotal = this.cartRows
            .first()
            .locator('.cart_total_price');

        // Remove
        this.deleteButton = this.cartRows
            .first()
            .locator('.cart_quantity_delete');

        // Empty cart
        this.emptyCartMessage = page.getByText('Cart is empty!');
    }


    async waitForCart() {
        await this.cartTable.waitFor({
            state: 'visible'
        });
    }


    async removeProduct() {

    if (await this.cartRows.count() > 0) {
        await this.deleteButton.click();
    }

}
}


module.exports = { CartPage };