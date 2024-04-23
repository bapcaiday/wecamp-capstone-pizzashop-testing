// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
const loginForm=require('../pages/login')
const product=require('../pages/product')
const productDetailForm=require('../pages/productDetailForm')
const Shipping=require('../pages/shipping')

Cypress.Commands.add('login', (email, password) => { 
    cy.visit(Cypress.env('login_url'))
    loginForm.enterEmailInput(email)
    loginForm.enterPasswordInput(password)
    loginForm.clickLoginBtn();
    cy.wait(1000)
})

Cypress.Commands.add('addToCart',(index)=>{
    product.clickCardImg(index);
    cy.wait(1000)
    product.clickAddToCart();
})

Cypress.Commands.add("fillProductDetail",(name,price,image,brand,countInStock,category,description)=>{
    productDetailForm.typeName(name),
    productDetailForm.typePrice(price),
    productDetailForm.typeImage(image),
    productDetailForm.typeBrand(brand),
    productDetailForm.typeCountInStock(countInStock),
    productDetailForm.typeCategory(category),
    productDetailForm.typeDescription(description)
})

Cypress.Commands.add('fillShippingInfo', (address, city, postalCode, country) => {
    Shipping.typeAddress(address)
    Shipping.typeCity(city)
    Shipping.typePostalCode(postalCode)
    Shipping.typeCountry(country)
    Shipping.clickSubmitBtn()
})


Cypress.Commands.add('removeLastProduct',()=>{
    product.element.removeButton().then(item=>{
        const index=item.length-1;
        product.clickRemoveButton(index)  

    })
})

Cypress.Commands.add('updateLastProduct',()=>{
    product.element.editButton().then(item=>{
        const index=item.length-1;
        product.clickEditButton(index)  
    })
})

Cypress.Commands.add('createProduct',()=>{
    product.clickAddButton()
    productDetailForm.submitBtnClick()
})
