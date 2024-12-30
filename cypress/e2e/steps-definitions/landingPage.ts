import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
// import todoPage from "../page-objects/todo.page";

Given(/^I open landing page$/, function () {
    cy.visit('https://todomvc.com/examples/react/dist/');
});

Then(/^I see landing page correctly$/, function () {
    cy.title().should('eq', "TodoMVC: React");
});

When(/^I add new TODO with message "([^"]*)"$/, function (todoMessage: string) {
    cy.get('#todo-input').type(`${todoMessage}{enter}`);
});

Then(/^I do not see TODOs$/, function () {
    cy.get('[data-testid="todo-item"]').should('have.length', 0);
});

Then(/^I see new TODO correctly with message "([^"]*)"$/, function (expectedMessage: string) {
    cy.get('[data-testid="todo-item"]').should('have.text', expectedMessage);
    cy.get('[data-testid="todo-item"]').should('have.length', 1);
    //
    cy.get('span.todo-count').should('contain.text', 'item left!');
    //
    cy.get('[href="#/"]').should('have.text', 'All');
    cy.get('[href="#/active"]').should('have.text', 'Active');
    cy.get('[href="#/completed"]').should('have.text', 'Completed');
    cy.get('.clear-completed').should('have.text', 'Clear completed');
});

When(/^I edit TODO with message "([^"]*)"$/, function (newMessage: string) {
    cy.get('[data-testid=\"todo-item\"]').dblclick();
    cy.focused().clear();
    cy.focused().type(newMessage + '{enter}');
});

When(/^I check one TODO$/, function () {
    cy.get('[data-testid="todo-item-toggle"]').check();
});

Then(/^I see TODO checked correctly$/, function () {
    cy.get('[data-testid="todo-item-toggle"]').should('be.checked');
});

When(/^I clear completed TODOs$/, function () {
    cy.get('.clear-completed').click();
});

When(/^I select "([^"]*)" filter$/, function (filterName: string) {
    switch(filterName) {
        case 'All':
            cy.get('[href="#/"]').click();
            break;
        case 'Active':
            cy.get('[href="#/active"]').click();
            break;
        case 'Completed':
            cy.get('[href="#/completed"]').click();
            break;
    }
});

Then(/^I see (\d+) left TODOs$/, function (numberOfTodos: number) {
    cy.get('[data-testid="todo-item"]:not(.completed)').should('have.length', numberOfTodos);
    cy.get('span.todo-count').should('contains.text', numberOfTodos + ' item left!');
});

Then(/^I see (\d+) "([^"]*)" TODOs$/, function (numberOfTodos: number, filterName: string) {
    switch(filterName) {
        case 'letf':
            cy.get('[data-testid="todo-item"]:not(.completed)').should('have.length', numberOfTodos);
            break;
        case 'completed':
            cy.get('[data-testid="todo-item"]').should('have.length', numberOfTodos);
            break;
    }
    cy.get('span.todo-count').should('contains.text', numberOfTodos + ' item left!');
});