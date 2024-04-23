const Product=require('../../pages/product')
const productDetailForm=require('../../pages/productDetailForm')

describe('Remove product',()=>{
    beforeEach(()=>{
        cy.login(Cypress.env('admin_email'),Cypress.env('admin_psw'))
        Product.clickProductManagementLink()
        cy.wait(1000)
    })

    it("Verify that the product disappears when the user removes it",()=>{
        cy.createProduct()
        cy.wait(1000)
        cy.get('table.table tbody tr:last-child td:first-child').invoke('text').then((id) => {
            // In ra dữ liệu của cột ID
            cy.removeLastProduct()
            Product.element.productBody().contains('tr',id).should('not.exist')
        });

        
        cy.wait(1000)
    })
})