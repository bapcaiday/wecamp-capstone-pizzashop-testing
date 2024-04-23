const Product=require('../../pages/product');
const Cart=require('../../pages/cart');
const Shipping=require('../../pages/shipping');
const Payment=require('../../pages/payment')

import shippingData from "../../fixtures/shippingFormData.json"

describe('Proceeding to payment and placeorder page',()=>{
    beforeEach(()=>{
        cy.login(Cypress.env('cus_email'),Cypress.env('cus_psw'));
        cy.addToCart(0)
        Cart.clickCheckOutBtn()
        cy.fillShippingInfo(shippingData.address,shippingData.city,shippingData.code,shippingData.country)
        cy.wait(1000)
    })

    it("Verify that user can not continue to placeorder if not select payment method",()=>{
        Payment.unCheckSelectMethod();
        Payment.clickSubmitBtn();
        cy.wait(1000);
        cy.url().should('include',Cypress.env('payment_url'))
    })

    it("Verify that user can continue will be redirect to placeorder if select payment method",()=>{
        Payment.clickSubmitBtn();
        cy.wait(1000);
        cy.url().should('include',Cypress.env('placeorder_url'))
    })

})