//create user schma
//import schma then create object
// define username{
// here it takes the properites like css 
//}
//string -js data type
//String -mongoose daatype
//generarte userModel
import { Schema, model,Types } from "mongoose"
//create cart schema{product,count}
const cartSchema = new Schema({
  product:{
    type:Types.ObjectId,
    ref:"product"//name of the product model
  },
  count:{
    type:Number,
    default:1
  }
  })

// create user schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      minLength: [4, "Minimum length is 4 characters"],
      maxLength: [10, "Maximum length is 10 characters"],
      unique: true
    },

    password: {
      type: String,
      required: [true, "Password is required"]
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true
    },

    age: {
      type: Number
    },
    cart:[cartSchema] //it can accept cartschema object type
  },
  {
    versionKey: false
  }
)

// generate user model
export const UserModel = model("user", userSchema)









