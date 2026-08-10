class ProductPage {

    constructor(page) {
        this.page = page;

        // Navigation
        this.productsLink = page.getByRole('link', { name: 'Products' });

        // Products page
      this.productsTitle = page.getByText('All Products');
this.searchedProductsTitle = page.getByText('Searched Products');

        // Search
        this.searchBox = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');

        // Search results
        this.productCards = page.locator('.productinfo');

        // Product details
        this.productDetails = page.locator('.product-information');
        this.productName = this.productDetails.locator('h2');
        this.productCategory = this.productDetails.locator('p').first();
        this.productPrice = this.productDetails.locator('span span');

        // Add to cart
        this.addToCartButton = page.getByText('Add to cart').first();

        // Cart
        this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
    }


    async navigateToProducts() {
        await this.productsLink.click();
    }


    async searchProduct(productName) {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }


    async selectFirstProduct() {
    await this.page
        .locator('.choose')
        .first()
        .getByRole('link', { name: 'View Product' })
        .click();
}


    async addProductToCart() {
        await this.addToCartButton.click();
    }


    async viewCart() {
        await this.viewCartLink.click();
    }
}


module.exports = { ProductPage };