const Product=require('../../pages/product')
const productDetailForm=require('../../pages/productDetailForm')
import updatedProductData from '../../fixtures/updatedProductData.json'

describe("Update product",()=>{
    beforeEach(()=>{
        cy.login(Cypress.env('admin_email'),Cypress.env('admin_psw'))
        Product.clickProductManagementLink()
        cy.createProduct()
        cy.wait(1000)
    })

    it("Verify that a product can be updated successfully ",()=>{
        cy.updateLastProduct()
        cy.wait(1000)
        cy.fillProductDetail(updatedProductData.name,updatedProductData.price,updatedProductData.image,updatedProductData.brand,
            updatedProductData.countInStock, updatedProductData.category, updatedProductData.description)
        productDetailForm.submitBtnClick()
        Product.element.productBody().contains('tr',updatedProductData.name).should('exist')
    })

    it("Verify that a product can be updated failed when lack of field name ",()=>{
        cy.updateLastProduct()
        cy.wait(1000)
        cy.fillProductDetail(updatedProductData.name,updatedProductData.price,updatedProductData.image,updatedProductData.brand,
            updatedProductData.countInStock, updatedProductData.category, updatedProductData.description)
        productDetailForm.element.nameInput().clear()
        productDetailForm.submitBtnClick()
        cy.wait(1000)
        cy.get('div.alert.alert-danger').should('exist');
        productDetailForm.clickBackBtn()
    })

    it("Verify that when user click go back before submitting, product will not be updated",()=>{
        cy.updateLastProduct()
        cy.wait(1000)
        cy.fillProductDetail(updatedProductData.name,updatedProductData.price,updatedProductData.image,updatedProductData.brand,
            updatedProductData.countInStock, updatedProductData.category, updatedProductData.description)
        productDetailForm.clickBackBtn()
        cy.wait(1000)
        Product.element.productBody().contains('tr',updatedProductData.name).should('not.exist')
    })

    
    afterEach(()=>{
        cy.removeLastProduct();
    })

})