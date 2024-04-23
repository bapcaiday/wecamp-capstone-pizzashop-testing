const Product=require('../../pages/product');

describe('View products list',()=>{
    beforeEach(()=>{
        cy.login(Cypress.env('admin_email'),Cypress.env('admin_psw'))
    })

    it("Verify that all product appear and can be viewed correctly",()=>{
        Product.clickProductManagementLink();
        cy.wait(1000)
        cy.url().should('include',Cypress.env('productList_url'))
        Product.element.productAttr().should('exist').within(() => {
            // Kiểm tra xem các cột ID, NAME, PRICE, CATEGORY, BRAND, ACTIONS có tồn tại hay không
            cy.get('th').should('contain', 'ID');
            cy.get('th').should('contain', 'NAME');
            cy.get('th').should('contain', 'PRICE');
            cy.get('th').should('contain', 'CATEGORY');
            cy.get('th').should('contain', 'BRAND');
            cy.get('th').should('contain', 'ACTIONS');
        });
        
    })
    
})