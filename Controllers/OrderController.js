const OrderValidate = require("../Utils/OrderValidate");
const OrdersModel = require("../Models/OrderModel");

//handles the logic for all the call back functions of each request(order routes)

const GetAllOrders = (req, res) => {
  let AllOrders = OrdersModel.GetAll();
  res.status(200).json(AllOrders);
};

const GetOrderByID = (req, res) => {
  let ID = req.params.id;

  let getOrder = OrdersModel.GetAll().find((order) => order.id == ID);

  getOrder
    ? res.status(200).json(getOrder)
    : res.status(404).send("The Order is unavailable.");
};

const AddNewOrder = (req, res) => {
  //1)get Body
  let newOrder = req.body; //{}==>newStudent.id = ++StdID
  //2)push array
  if (OrderValidate(newOrder)) {
    let nOrder = new OrdersModel(newOrder);
    nOrder.AddOrder();
    //3)res
    res.status(201).json({ Message: "Added Order Successfully", data: nOrder });
  } else {
    res.status(404).json({ Message: OrderValidate.errors[0].message });
  }
};

const UpdateOrderByID = (req, res) => {
  //1)get id
  let ID = req.params.id;
  //2)get body
  let newOrderData = req.body;
  //3)update [find students by Id]==>[Update]

  if (OrderValidate(newOrderData)) {
    let foundOrder = OrdersModel.GetAll().find((order) => order.id == ID);
    if (foundOrder) {
      foundOrder.items = newOrderData.items;
      foundOrder.TotalPrice = newOrderData.TotalPrice;
      res
        .status(201)
        .json({ Message: "Updated Successfully", data: OrdersModel.GetAll() });
    } else {
      res.status(404).json({ Message: "Order id not found" });
    }
    //4)res
  } else {
    res.status(400).json({ Message: OrderValidate.errors[0].message });
  }
};

const DeleteOrderByID = (req, res) => {
  //1)get id
  let ID = req.params.id;
  //2)find And Delete
  let Order = OrdersModel.GetAll().find((order) => order.id == ID);

  if (Order) {
    OrdersModel.DeleteOrder(ID);
    res.status(200).json({
      Message: "Order deleted Successfully",
      data: OrdersModel.GetAll(),
    });
  } else {
    res.status(404).json({ Message: "Order id not found" });
  }
};

module.exports = {
  GetAllOrders,
  GetOrderByID,
  AddNewOrder,
  UpdateOrderByID,
  DeleteOrderByID,
};
