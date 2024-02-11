const Ajv = require("ajv");

const ajv = new Ajv();

//Order
let OrderSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    items: { type: "array", minItems: 1, items: { type: "integer" } },
    TotalPrice: { type: "integer", minimum: 11 },
  },
  required: ["items", "TotalPrice"],
  additionalProperties: false,
};

module.exports = ajv.compile(OrderSchema);


