const Product=require('../../pages/product');
const Cart=require('../../pages/cart');

describe('Proceeding to Checkout',()=>{
    it("Verify that proceed to checkout button is disabled when cart is empty",()=>{
        cy.visit(Cypress.env('cart_url'))
        cy.wait(1000);
        Cart.element.checkoutBtn().should('not.exist');
    })

    it("Verify that when user click checkout button without login, the system will redirect to login page",()=>{
        cy.visit(Cypress.env('home_url'));
        cy.addToCart(0);
        Cart.clickCheckOutBtn();
        cy.wait(1000);
        cy.url().should('include', Cypress.env('login_url'));
    })

    it("Verify that when user click checkout button (loged in), the system will redirect to shipping page",()=>{
        cy.login(Cypress.env('cus_email'),Cypress.env('cus_psw'));
        cy.addToCart(0);
        Cart.clickCheckOutBtn();
        cy.wait(1000);
        cy.url().should('include',Cypress.env('shipping_url'))
    })


})