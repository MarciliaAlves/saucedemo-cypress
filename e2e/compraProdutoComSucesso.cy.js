/// <reference types="Cypress"/ >


describe('Teste E2E  - Realizar a compra de produtos com sucesso', () => {
    it('Compra de produtos com sucesso ', () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('.title').should('contain', 'Products')

        //ordenação de produtos de menor para maior valor:
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)')
        //validar ordenação dos produtos:
        cy.get('#item_2_title_link > .inventory_item_name').should('contain','Sauce Labs Onesie')
        cy.get('#item_0_title_link > .inventory_item_name').should('contain','Sauce Labs Bike Light')
        cy.get('#item_1_title_link > .inventory_item_name').should('contain','Sauce Labs Bolt T-Shirt')

        //Adiconar produtos ao carrinho
        cy.contains('Sauce Labs Onesie').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bike Light').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        //Checagem da quantidade de produtos adicionados ao carrinho: 
        cy.get('.shopping_cart_link').should('have.text', '3')

        //Check no carrinho:
        cy.get('.shopping_cart_link').click()
        cy.get('#item_2_title_link > .inventory_item_name').should('contain', 'Sauce Labs Onesie')
        cy.get('#item_0_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bike Light')
        cy.get('#item_1_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bolt T-Shirt')

        //Checkout:
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Teste Primeiro Nome')
        cy.get('[data-test="lastName"]').type('Teste Último Nome')
        cy.get('[data-test="postalCode"]').type('60347500')
        cy.get('[data-test="continue"]').click()

        //Verificação de produtos no checkout:
        cy.get('#item_2_title_link > .inventory_item_name').should('contain', 'Sauce Labs Onesie')
        cy.get('#item_0_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bike Light')
        cy.get('#item_1_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bolt T-Shirt')

        //Checagem do valor total:
        cy.get('.summary_total_label').should('have.text','Total: $36.69')

        //validação da compra
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('have.text','Thank you for your order!')


        //




        


        

        

        
        
        

        

        
        

        

    });
    
});