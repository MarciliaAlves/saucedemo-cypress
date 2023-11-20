/// <reference types="Cypress"/ >
describe('Testes funcionais de Login', () => {
    it('login com sucesso', () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('.title').should('contain', 'Products')
    });   


     it('login inválido com username correto e password errado', () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("lobo mau")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
     });
     it('login inválido com username errado e password correta', () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("chapeuzinho vermelho")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
     });
     
     it('login inválido com username correto e password caracteres especiais',() => { 
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("!@#$%¨&*()")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
    });

    it('login inválido com username caracteres especiais e password correta',() => { 
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("!@#$%¨&*()")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
    });
     
    it('login inválido com username correto  e password números',() => { 
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("0123456789")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
    });


   

     });

    