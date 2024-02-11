const Ajv = require("ajv");

const ajv = new Ajv();

//Products
let ProductSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    Name: { type: "string", minLength: 3, maxLength: 40 },
    price: { type: "integer", minimum: 1 },
  },
  required: ["Name", "price"],
  additionalProperties: false,
};

module.exports = ajv.compile(ProductSchema);