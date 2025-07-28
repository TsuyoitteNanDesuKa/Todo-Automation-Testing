import TodoPage from "../../pages/TodoPage";

describe('CRUD tests', () => {
    beforeEach(() => {
        TodoPage.visit();
        TodoPage.login();
    });
 
    it('Create', () => {
        // Verify todo container is visible
        TodoPage.getTodoContainer().should('be.visible');
        
        // Create new todo
        const testText = 'test input';
        TodoPage.createTodo(testText);
        
        // Verify todo was created
        TodoPage.getTodoItems().should('contain', testText);
    });

    it('Edit', () => {
        // Verify todo container is visible
        TodoPage.getTodoContainer().should('be.visible');
        
        // Edit existing todo
        const oldText = 'test input';
        const newText = 'edited input';
        TodoPage.editTodo(oldText, newText);
        
        // Verify todo was edited
        TodoPage.getTodoItems()
            .should('not.contain', oldText)
            .should('contain', newText);
    });

    it('Delete', () => {
        // Verify todo container is visible
        TodoPage.getTodoContainer().should('be.visible');
        
        // Delete todo
        const textToDelete = 'edited input';
        TodoPage.deleteTodo(textToDelete);
        
        // Verify todo was deleted (could be implemented via error msg)
        // TodoPage.getTodoItems().should('not.contain', textToDelete);
    });
});