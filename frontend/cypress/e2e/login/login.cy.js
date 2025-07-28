import LoginPage from "../../pages/LoginPage";

describe('Login tests', () => {
    beforeEach(() => {
        LoginPage.visit();
    });

    it('Valid Login', () => {
        // Verify login tab is visible
        LoginPage.getHeader().should('be.visible');
        LoginPage.getUsernameField().should('be.visible');
        LoginPage.getPasswordField().should('be.visible');
        LoginPage.getLoginButton().should('be.visible');

        // Perform login
        LoginPage.login('testuser', 'password');
        
        // Verify successful login
        LoginPage.getTodoContainer().should('be.visible');
    });

    it('Invalid Login', () => {
        // Verify login tab is visible
        LoginPage.getHeader().should('be.visible');
        LoginPage.getUsernameField().should('be.visible');
        LoginPage.getPasswordField().should('be.visible');
        LoginPage.getLoginButton().should('be.visible');

        // Perform login with invalid credentials
        LoginPage.login('wrong user', 'wrong password');
        
        // Verify error message
        LoginPage.getError().should('be.visible');
    });
});