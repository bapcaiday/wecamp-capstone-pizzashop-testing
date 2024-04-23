const Product=require('../../pages/product')
const productDetailForm=require('../../pages/productDetailForm')
import newProductData from '../../fixtures/newProductData.json'


describe('Create product',()=>{
    beforeEach(()=>{
        cy.login(Cypress.env('admin_email'),Cypress.env('admin_psw'))
        Product.clickProductManagementLink()
        cy.wait(1000)
    })

    it("Verify that a product can be created successfully ",()=>{
        Product.clickAddButton()
        cy.fillProductDetail(newProductData.name,newProductData.price,newProductData.image,newProductData.brand,
                newProductData.countInStock, newProductData.category, newProductData.description)
        productDetailForm.submitBtnClick()
        cy.wait(1000)
        cy.url().should('include',Cypress.env('productList_url'))
        Product.element.productBody().contains('tr',newProductData.name).should('exist')
    })

    it("Verify that a product can be added failed with lack of name ",()=>{
        Product.clickAddButton()
        cy.fillProductDetail(newProductData.name,newProductData.price,newProductData.image,newProductData.brand,
                newProductData.countInStock, newProductData.category, newProductData.description)
        productDetailForm.element.nameInput().clear()
        productDetailForm.submitBtnClick()
        cy.wait(1000)
        cy.get('div.alert.alert-danger').should('exist');
        productDetailForm.clickBackBtn()
    })

    it("Verify that if we don't enter any fields, a default product will be created",()=>{
        Product.clickAddButton()
        productDetailForm.submitBtnClick()
        cy.url().should('include',Cypress.env('productList_url'))
        Product.element.productBody().contains('tr',"Sample Name").should('exist')

    })


    afterEach(()=>{
        cy.removeLastProduct();
    })
    
})