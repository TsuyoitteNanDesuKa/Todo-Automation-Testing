class TodoPage {
    visit() {
        cy.visit('/');
        cy.clearAllCookies();
    }

    // Login elements
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

    // Todo elements
    getTodoContainer() {
        return cy.get('.todo-container');
    }

    getTodoInput() {
        return cy.get('input');
    }

    getAddButton() {
        return cy.get('.add-btn');
    }

    getTodoItems() {
        return cy.get('li');
    }

    getTodoItemByText(text) {
        return cy.contains('span', text).closest('li');
    }

    // Methods
    login(username = 'testuser', password = 'password') {
        this.getUsernameField().clear().type(username);
        this.getPasswordField().clear().type(password);
        this.getLoginButton().click();
    }

    createTodo(text) {
        this.getTodoInput().clear().type(text);
        this.getAddButton().click();
    }

    editTodo(oldText, newText) {
        this.getTodoItemByText(oldText)
            .find('.edit-btn')
            .click();
        
        cy.get('.edit-input').clear().type(newText);
        cy.get('.save-btn').click();
    }

    deleteTodo(text) {
        this.getTodoItemByText(text)
            .find('.delete-btn')
            .click();
    }
}

export default new TodoPage();