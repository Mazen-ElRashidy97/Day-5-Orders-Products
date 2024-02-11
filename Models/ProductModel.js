//#region DataBase [Static]
var Products = [];
var ProductID = 0;

//#endregion
class ProductsModel {
    constructor(body={Name, price}) {
        this.Name = body.Name;
        this.price = body.price;

    }
    AddProduct(){
        this.id = ++ProductID;
        Products.push(this);
    }

    static DeleteProduct(ID) {
        Products = Products.filter(product=>product.id != ID)
    }

    static GetAll() {
        return Products;
    }
}

module.exports = ProductsModel;

//Add new Student==>let ns = new StudentModle("name","dept","grade") ==> ns.save() ==> caller ==> this