//#region Requires
const express = require('express');
const app = express();
const PORT = process.env.PORT || 7005;
const bodyParser = require('body-parser');
const path = require("path");

//#endregion

//#region MW
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//#endregion

//#region End Points
 const OrderRoutes = require("./Routes/OrderRoutes");
 app.use("/orders", OrderRoutes);
 const ProductRoutes = require("./Routes/ProductRoutes");
 app.use("/products", ProductRoutes);

//#endregion

//#ServerListenRegion
app.listen(PORT, ()=>{console.log("http://localhost" +PORT)});

/*
Products
{
  "Name": "pizza",
  "price": 12
}
{
  "Name": "cake",
  "price": 5
}
{
  "Name": "eggs",
  "price": 8
}
{
  "Name": "chocolate",
  "price": 4
}
{
  "Name": "chocolate",
  "price": 9
}
*/

/*
Orders
{
  "items": [1,2],
  "TotalPrice": 18
}
{
  "items": [3,4],
  "TotalPrice": 90
}
*/