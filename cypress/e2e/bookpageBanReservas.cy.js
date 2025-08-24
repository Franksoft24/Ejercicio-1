import userData from '../fixtures/user.json'; // Importar datos de usuario desde el archivo user.json

describe("Practica 1 - Prueba de la pagina de libros", () => {

    beforeEach(() => {
        cy.visit("/books"); // Visitar la pagina de libros antes de cada test, El baseUrl esta en cypress.config.js
    });

    it('Login - credenciales incorrectas', () => {
        cy.contains('li','Login').click(); // Hacer click en el boton de Login
        cy.get('#userName').type('incorrectUser'); // Ingresar un usuario incorrecto
        cy.get('#password').type('incorrectPassword'); // Ingresar una contraseña incorrecta
        cy.get('#login').click(); // Hacer click en el boton de Login
        cy.get('#name').should('contain', 'Invalid username or password!'); // Verificar que se muestre el mensaje de error de login
    });
    it('Login - credenciales correctas', () => {
        cy.contains('li','Login').click(); // Hacer click en el boton de Login
        cy.get('#userName').type(userData.username); // Ingresar un usuario correcto
        cy.get('#password').type(userData.password); // Ingresar una contraseña correcta
        cy.get('#login').click(); // Hacer click en el boton de Login
        cy.get('#userName-value').should('contain', user); // Verificar que se muestre el nombre del usuario logueado
    });
    it('Buscar libro existente utilizando palabras claves', () => {
        cy.get('#searchBox').type('JavaScript'); // Ingresar el nombre del libro a buscar
        cy.get('.rt-tbody').should('contain', 'Learning JavaScript Design Patterns'); // Verificar que se muestre el libro buscado
    });
    it('Buscar libro inexistente', () => {
        cy.get('#searchBox').type('ISTQB Fundamentals'); // Ingresar el nombre del libro a buscar
        cy.get('.rt-noData').should('contain', 'No rows found'); // Verificar que se muestre el mensaje de no se encontraron libros
    });
});