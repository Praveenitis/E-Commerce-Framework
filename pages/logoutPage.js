class LogoutPage {

    constructor(page) {
        this.page = page;

        // Logout link
        this.logoutLink =  page.locator('a[href="/logout"]');

        // Login form
        this.loginEmail = page.locator('[data-qa="login-email"]');
        this.loginPassword = page.locator('[data-qa="login-password"]');
        this.loginButton = page.locator('[data-qa="login-button"]');
    }


    async logout() {
        await this.logoutLink.click();
    }


    async verifyLoginPage() {
        await this.loginEmail.waitFor({
            state: 'visible'
        });

        await this.loginPassword.waitFor({
            state: 'visible'
        });
    }
}


module.exports = { LogoutPage };