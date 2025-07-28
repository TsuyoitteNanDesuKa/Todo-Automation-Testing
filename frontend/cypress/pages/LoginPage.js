class LoginPage {
    visit() {
        cy.visit('/');
        cy.clearAllCookies();
    }

    getHeader() {
        return cy.get('h2');
    }

    getUsernameField() {
        return cy.get('[placeholder="Username (testuser)"]');
    }

    getPasswordField() {
        return cy.get('[placeholder="Password (password)"]');
    }

    getLoginButton() {
        return cy.get('button');
    }

    getError() {
        return cy.get('.error');
    }

    getTodoContainer() {
        return cy.get('.todo-container');
    }

    login(username, password) {
        this.getUsernameField().clear().type(username);
        this.getPasswordField().clear().type(password);
        this.getLoginButton().click();
    }
}

export default new LoginPage();