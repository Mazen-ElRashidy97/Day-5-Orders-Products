const ProductValidate = require("../Utils/ProductValidate");
const ProductsModel = require("../Models/ProductModel");

//handles the logic for all the call back functions of each request(Product routes)

const GetAllProducts = (req, res) => {
  let AllProducts = ProductsModel.GetAll();
  res.status(200).json(AllProducts);
};

const GetProductByID = (req, res) => {
  let ID = req.params.id;

  let getProduct = ProductsModel.GetAll().find((Product) => Product.id == ID);

  getProduct
    ? res.status(200).json(getProduct)
    : res.status(404).send("The Product is unavailable.");
};

const AddNewProduct = (req, res) => {
  //1)get Body
  let newProduct = req.body; //{}==>newStudent.id = ++StdID
  //2)push array
  if (ProductValidate(newProduct)) {
    let nProduct = new ProductsModel(newProduct);
    nProduct.AddProduct();
    //3)res
    res.status(201).json({ Message: "Added Product Successfully", data: nProduct });
  } else {
    res.status(404).json({ Message: ProductValidate.errors[0].message });
  }
};

const UpdateProductByID = (req, res) => {
  //1)get id
  let ID = req.params.id;
  //2)get body
  let newProductData = req.body;
  //3)update [find students by Id]==>[Update]

  if (ProductValidate(newProductData)) {
    let foundProduct = ProductsModel.GetAll().find((Product) => Product.id == ID);
    if (foundProduct) {
      foundProduct.Name = newProductData.Name;
      foundProduct.price = newProductData.price;
      res
        .status(201)
        .json({ Message: "Updated Successfully", data: ProductsModel.GetAll() });
    } else {
      res.status(404).json({ Message: "Product id not found" });
    }
    //4)res
  } else {
    res.status(400).json({ Message: ProductValidate.errors[0].message });
  }
};

const DeleteProductByID = (req, res) => {
  //1)get id
  let ID = req.params.id;
  //2)find And Delete
  let Product = ProductsModel.GetAll().find((Product) => Product.id == ID);

  if (Product) {
    ProductsModel.DeleteProduct(ID);
    res.status(200).json({
      Message: "Product deleted Successfully",
      data: ProductsModel.GetAll(),
    });
  } else {
    res.status(404).json({ Message: "Product id not found" });
  }
};

module.exports = {
  GetAllProducts,
  GetProductByID,
  AddNewProduct,
  UpdateProductByID,
  DeleteProductByID,
};
