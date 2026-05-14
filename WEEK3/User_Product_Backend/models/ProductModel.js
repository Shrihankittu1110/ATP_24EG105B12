/*
//product document structure
1.productId(required)
2.productName(required)
price(requried,min price 10000 and max price 50000)
brand(required)
*/
import { Schema, model } from "mongoose"

// product document structure
const productSchema = new Schema({

  productId: {
    type: String,
    required: [true, "ProductId is required"],
    unique: [true, "ProductId must be unique"]
  },

  productName: {
    type: String,
    required: [true, "Product name is required"]
  },

  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [10000, "Minimum price is 10000"],
    max: [50000, "Maximum price is 50000"]
  },

  brand: {
    type: String,
    required: [true, "Brand is required"]
  }

}, {
  versionKey: false
})

// generate product model
export const ProductModel = model("product", productSchema)