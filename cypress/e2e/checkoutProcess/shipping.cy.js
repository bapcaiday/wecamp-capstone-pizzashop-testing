const Product=require('../../pages/product');
const Cart=require('../../pages/cart');
const Shipping=require('../../pages/shipping');

import shippingData from "../../fixtures/shippingFormData.json"

describe('Proceeding to Shipping',()=>{
    beforeEach(()=>{
        cy.login(Cypress.env('cus_email'),Cypress.env('cus_psw'));
        cy.addToCart(0)
        Cart.clickCheckOutBtn()
        cy.wait(1000)
    })

    it("Verify that all fields of shipping form are required",()=>{
        Shipping.element.addressField().should('have.attr','required')
        Shipping.element.cityField().should('have.attr','required')
        Shipping.element.codeField().should('have.attr','required')
        Shipping.element.countryField().should('have.attr','required')
        cy.screenshot()
    })

    it("Verify that user can not submit when haven't completed all fields",()=>{
        Shipping.typeCity(shippingData.city);
        Shipping.typePostalCode(shippingData.code);
        Shipping.typeCountry(shippingData.country);
        Shipping.clickSubmitBtn();
        cy.wait(1000)
        Shipping.element.addressField()
            .then(($el) =>{
                const validity = $el[0].checkValidity(); // Kiểm tra tính hợp lệ của input
                const validationMessage = $el[0].validationMessage;
                expect(validity).to.be.false; // Kiểm tra tính hợp lệ của input
                expect(validationMessage).to.not.be.empty; // Kiểm tra xem có hiển thị validationMessage không
            })  
    })

    it("Verify when user complete all fields, system will redirect to payment page",()=>{
        Shipping.typeAddress(shippingData.address)
        Shipping.typeCity(shippingData.city);
        Shipping.typePostalCode(shippingData.code);
        Shipping.typeCountry(shippingData.country);
        Shipping.clickSubmitBtn();
        cy.wait(1000)
        cy.url().should('include',Cypress.env('payment_url'))             
    })

    it("Verify that user can not access payment page when not submiting shipping form",()=>{
        Shipping.element.paymentLink().should('have.class','disabled');
        cy.visit(Cypress.env('payment_url'))
        cy.wait(1000)
        cy.url().should('include',Cypress.env('shipping_url'))
     })
 
    it("Verify that user can not access placeorder page when not submiting shipping form",()=>{
         Shipping.element.placeoderLink().should('have.class','disabled');
         cy.visit(Cypress.env('placeorder_url'))
        cy.wait(1000)
        cy.url().should('include',Cypress.env('shipping_url'))
    })

    

})

