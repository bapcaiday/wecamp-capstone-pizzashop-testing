class productDetailForm{
    element={
        nameInput: ()=>cy.get("input#name.form-control"),
        priceInput: ()=>cy.get("input#price.form-control"),
        imageInput: ()=>cy.get("input#image.form-control"),
        brandInput: ()=>cy.get("input#brand.form-control"),
        countInStockInput: ()=>cy.get("input#countInStock.form-control"),
        categoryInput: ()=>cy.get("input#category.form-control"),
        descriptionInput: ()=>cy.get("input#description.form-control"),
        submitBtn: ()=>cy.get("button[type='submit']").filter(":contains('Update Product')"),
        backBtn: ()=> cy.get('a.btn.btn-dark.my-3').contains('Go Back')
    }

    clickBackBtn(){
        this.element.backBtn().click()
    }

    typeName(val){
        this.element.nameInput().clear()
        this.element.nameInput().type(val)
    }

    typePrice(val){
        this.element.priceInput().clear()
        this.element.priceInput().type(val)
    }

    typeImage(val){
        this.element.imageInput().clear()
        this.element.imageInput().type(val)
    }

    typeBrand(val){
        this.element.brandInput().clear()
        this.element.brandInput().type(val)
    }

    typeCountInStock(val){
        this.element.countInStockInput().clear()
        this.element.countInStockInput().type(val)
    }

    typeCategory(val){
        this.element.categoryInput().clear()
        this.element.categoryInput().type(val)
    }

    typeDescription(val){
        this.element.descriptionInput().clear()
        this.element.descriptionInput().type(val)
    }

    submitBtnClick(){
        this.element.submitBtn().click()
    }
}

module.exports =new productDetailForm;