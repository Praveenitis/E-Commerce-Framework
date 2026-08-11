# E-Commerce Automation Framework

A scalable UI automation framework built using **Playwright, JavaScript, Page Object Model (POM), JSON test data, and GitHub Actions CI/CD**.

The framework automates critical e-commerce workflows including authentication, product search, cart management, checkout, payment, order confirmation, and logout.

---

## 🚀 Project Overview

This project demonstrates how to design and implement a maintainable end-to-end test automation framework for an e-commerce application.

The framework focuses on:

- Page Object Model (POM)
- Data-driven testing
- Reusable page methods
- Reliable locators
- Test tagging
- Positive and negative test scenarios
- Automated screenshots, videos, and traces
- HTML test reporting
- Environment-based configuration
- Git version control
- GitHub Actions CI/CD

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Playwright | UI Test Automation |
| JavaScript | Programming Language |
| Node.js | Runtime Environment |
| Page Object Model | Framework Design Pattern |
| JSON | Test Data Management |
| Git | Version Control |
| GitHub | Source Code Management |
| GitHub Actions | CI/CD |
| dotenv | Environment Configuration |

---

## 🏗️ Framework Architecture

```text
E-Commerce-Framework/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
│   ├── loginPage.js
│   ├── homePage.js
│   ├── productPage.js
│   ├── cartPage.js
│   ├── checkoutPage.js
│   └── logoutPage.js
│
├── tests/
│   ├── login.spec.js
│   ├── product.spec.js
│   ├── cart.spec.js
│   ├── checkout.spec.js
│   └── logout.spec.js
│
├── test-data/
│   ├── loginData.json
│   ├── productData.json
│   └── checkoutData.json
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```text

🧪 Test Coverage

🔐 Login
Valid login
Invalid login
Login validation

🛍️ Product
Navigate to Products
Search products
Validate search results
Select product
Verify product details
Add product to cart

🛒 Cart
Verify Cart page
Verify product name
Verify product price
Verify product quantity
Verify product total
Remove product from cart

💳 Checkout
Verify checkout page
Verify delivery address
Verify billing address
Verify order summary
Add order comments
Place order
Enter payment details
Confirm payment
Verify order confirmation
Validate payment form

🚪 Logout
Verify logout functionality
Verify redirection to login page
Verify login form after logout



🧩 Page Object Model

Each application page is represented by a dedicated Page Object.

```text
LoginPage
    ↓
loginPage.js

ProductPage
    ↓
productPage.js

CartPage
    ↓
cartPage.js

CheckoutPage
    ↓
checkoutPage.js

LogoutPage
    ↓
logoutPage.js
```text


Example : 
```text
async login(email, password) {

    await this.loginEmail.fill(email);
    await this.loginPassword.fill(password);
    await this.loginButton.click();
}

The test can simply call : 

await loginPage.login(
    process.env.LOGIN_EMAIL,
    process.env.LOGIN_PASSWORD
);
```text

This improves:

Reusability
Maintainability
Readability
Scalability


📊 Data-Driven Testing

Test data is separated from test logic using JSON files.
```text
{
    "searchProduct": "Blue Top",
    "expectedProductName": "Blue Top",
    "expectedQuantity": "1"
}
```text

🏷️ Test Tags

Tests are categorized using Playwright tags.

Smoke Tests

Critical business flows:
```
npx playwright test --grep @smoke
```
Regression Tests
Complete functional validation:
```
npx playwright test --grep @regression
```
Negative Tests
Invalid and error scenarios:
```
npx playwright test --grep @negative
```

▶️ Getting Started : 

1. Clone the Repository
```
git clone <repository-url>
```

2. Navigate to the Project
```
cd E-Commerce-Framework
```

3. Install Dependencies
```
npm install
```

4. Install Playwright Browsers
```
npx playwright install
```



🔐 Environment Configuration

Sensitive credentials are managed using environment variables.

Create a .env file in the project root:
```

BASE_URL=https://automationexercise.com
LOGIN_EMAIL=your_email
LOGIN_PASSWORD=your_password
```


The .env file is excluded from Git using .gitignore.

A .env.example file is provided as a template.

Environment Variables
Variable	Description
BASE_URL	Application base URL
LOGIN_EMAIL	Valid test account email
LOGIN_PASSWORD	Valid test account password


🧪 Running Tests
```
Run All Tests
npx playwright test
```

Run a Specific Module
```
npx playwright test tests/login.spec.js
npx playwright test tests/product.spec.js
npx playwright test tests/cart.spec.js
npx playwright test tests/checkout.spec.js
npx playwright test tests/logout.spec.js
```

Run Tests in Headed Mode
```
npx playwright test --headed
```

Run a Specific Test
```
npx playwright test -g "Valid Login"
```

Run with a Single Worker
```
npx playwright test --workers=1
```


📊 HTML Test Reporting : 

The framework uses Playwright's built-in HTML reporter.

After test execution, generate/open the report using:

npx playwright show-report

The report provides:

Test execution status
Passed tests
Failed tests
Flaky tests
Skipped tests
Execution duration
Test tags
Trace availability



🔍 Failure Debugging :

The framework is configured to collect debugging artifacts.

📸 Screenshots

Screenshots are captured when a test fails.

🎥 Video

Videos are retained for failed tests.

🔎 Trace

Playwright traces are captured on the first retry.

These artifacts help investigate:

Locator failures
Timing issues
Navigation problems
Unexpected UI behavior
Flaky tests



⚙️ GitHub Actions CI/CD :

The framework is integrated with GitHub Actions for continuous integration.

Tests are automatically executed when changes are pushed to the main branch.

CI Pipeline: 

```
Developer Push
      ↓
GitHub Repository
      ↓
GitHub Actions
      ↓
Checkout Repository
      ↓
Setup Node.js
      ↓
Install Dependencies
      ↓
Install Playwright
      ↓
Run Automated Tests
      ↓
Generate Test Report
      ↓
Upload Test Artifacts
      ↓
CI Result

```

GitHub Secrets:

Sensitive credentials are stored using GitHub Repository Secrets:
```

BASE_URL
LOGIN_EMAIL
LOGIN_PASSWORD
```
Credentials are not stored directly in the repository.



📁 Test Execution Strategy : 

The framework supports multiple execution strategies.
```
Smoke
  ↓
Critical business functionality

Regression
  ↓
Complete functional coverage

Negative
  ↓
Invalid and error scenarios

This allows fast validation during development while maintaining broader regression coverage.
```


🔄 Git Workflow :

The project uses Git for version control.

Main development branch:
```
main
```
Meaningful commit messages are used for project changes.

Example:
```
git add .
git commit -m "Add checkout automation"
git push origin main
```



🎯 Key Framework Features : 


✅ Playwright UI Automation
✅ JavaScript
✅ Page Object Model
✅ Reusable Page Methods
✅ JSON-Based Test Data
✅ Positive Testing
✅ Negative Testing
✅ Smoke Testing
✅ Regression Testing
✅ Test Tagging
✅ Environment Variables
✅ HTML Reporting
✅ Screenshots on Failure
✅ Video on Failure
✅ Trace on Retry
✅ Git Version Control
✅ GitHub Actions CI/CD



📌 Future Improvements : 

Potential enhancements for future versions:

Cross-browser execution
API testing integration
Database validation
Parallel execution optimization
Allure reporting
Test result notifications
Docker-based execution
Multi-environment execution
Expanded test coverage


👨‍💻 Author :

Praveen G U

Aspiring QA Automation Engineer

Skills Demonstrated:

Playwright · JavaScript · Page Object Model · Git · GitHub Actions · JSON · CI/CD · UI Automation



⭐ Project Highlights : 

This project demonstrates an end-to-end approach to modern UI test automation, from designing maintainable Page Object based tests to executing them automatically through a CI/CD pipeline.

The framework is designed with:

Reusability
Maintainability
Test isolation
Data-driven testing
Reporting
Failure debugging
Continuous Integration


Repository URL : https://github.com/Praveenitis/E-Commerce-Framework.git

