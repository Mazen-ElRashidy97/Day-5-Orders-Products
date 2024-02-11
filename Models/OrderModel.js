//#region DataBase [Static]
var Orders = [];
var OrderID = 0;

//#endregion
class OrdersModel {
    constructor(body={items, TotalPrice}) {
        this.items = body.items;
        this.TotalPrice = body.TotalPrice;

    }
    AddOrder(){
        this.id = ++OrderID;
        Orders.push(this);
    }

    static DeleteOrder(ID) {
        Orders = Orders.filter(order=>order.id != ID)
    }

    static GetAll() {
        return Orders;
    }

}

module.exports = OrdersModel;



//Add new Student==>let ns = new StudentModle("name","dept","grade") ==> ns.save() ==> caller ==> this