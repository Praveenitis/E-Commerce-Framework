class LoginPage {

    constructor(page) {
        this.page = page;

        // Navigation
        this.signupLoginLink = page.getByRole('link', { name: 'Signup / Login' });

        // Login form
        this.loginEmail = page.locator('[data-qa="login-email"]');
        this.loginPassword = page.locator('[data-qa="login-password"]');
        this.loginButton = page.locator('[data-qa="login-button"]');

        // Messages
        this.loginErrorMessage = page.getByText(
            'Your email or password is incorrect!'
        );

        // Logged-in user
        this.loggedInAs = page.locator('li').filter({
            hasText: 'Logged in as'
        });

        // Logout
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
    }


    async navigateToLogin() {
        await this.page.goto('https://automationexercise.com');

        await this.signupLoginLink.click();

        await this.loginEmail.waitFor();
    }


    async login(email, password) {
        await this.loginEmail.fill(email);
        await this.loginPassword.fill(password);

        await this.loginButton.click();
    }


    async logout() {
        await this.logoutLink.click();
    }
}


module.exports = { LoginPage };