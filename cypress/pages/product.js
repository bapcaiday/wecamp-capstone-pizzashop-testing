class Product{
    element={
        cardImg: ()=> cy.get('.card-img-top'),
        cardTitle: ()=>cy.get('.card-title'),
        addToCartBtn: ()=>cy.get("button[type='button']").filter(':contains("Add To Cart")'),
        productManagementLink: ()=> cy.get('.dropdown-menu').contains('Products'),
        productAttr:()=> cy.get('table.table').find('thead'),
        productBody: ()=> cy.get('table.table tbody'),
        editButton: ()=> cy.get('a.btn > i'),
        removeButton: ()=>cy.get("button[type='button']:has(i)"),
        addButton: ()=> cy.get("button[type='button']").filter(':contains(" Create Product")')
    }

    clickCardImg(id){
        this.element.cardImg().then((item)=>{
            item[id].click();
        })
    }

    clickCardTitle(id){
        this.element.cardTitle().then((item)=>{

            item[id].click();
        })
    }

    clickAddToCart(){
        this.element.addToCartBtn().click();
    }

    clickProductManagementLink(){
        cy.get('#adminMenu').click();
        this.element.productManagementLink().click();
    }

    clickEditButton(id){
        this.element.editButton().then((item)=>{
            item[id].click();
        })
    }

    clickRemoveButton(id){
        this.element.removeButton().then((item)=>{
            item[id].click();
        })
    }

    clickAddButton(){
        this.element.addButton().click();
    }
}

module.exports =new Product;