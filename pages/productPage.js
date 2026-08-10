class ProductPage {

    constructor(page) {
        this.page = page;

        // Navigation
        this.productsLink = page.getByRole('link', {
            name: 'Products',
            exact: true
        });

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
        this.viewCartLink = page.getByRole('link', {
            name: 'View Cart',
            exact: true
        });
    }


    async navigateToProducts() {
        await this.page.goto('https://automationexercise.com/products', {
            waitUntil: 'domcontentloaded'
        });

        await this.productsTitle.waitFor({
            state: 'visible'
        });
    }

    async addSearchedProductToCart(productName) {

    const productCard = this.page
        .locator('.productinfo')
        .filter({ hasText: productName })
        .first();

    await productCard
        .getByText('Add to cart')
        .click();
}


    async searchProduct(productName) {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }

    async addSearchedProductToCart(productName) {

    const productCard = this.page
        .locator('.productinfo')
        .filter({ hasText: productName })
        .first();

    await productCard
        .getByText('Add to cart')
        .click();
}


    async selectFirstProduct() {
        await this.page
            .getByRole('link', {
                name: 'View Product',
                exact: true
            })
            .first()
            .click();
    }


    async addProductToCart() {
        await this.addToCartButton.click();
    }


    async viewCart() {
        await this.viewCartLink.click();

        await this.page.waitForURL('**/view_cart');
    }
}


module.exports = { ProductPage };