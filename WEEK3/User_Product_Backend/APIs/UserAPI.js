import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { hash, compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js'
import { config } from 'dotenv'

config() //process.env.SECRET_KEY
const { sign } = jwt

export const userApp = exp.Router()

// USER LOGIN
userApp.post("/user-login", async (req, res) => {
  try {
    const { email, password } = req.body

    // verify email
    let user = await UserModel.findOne({ email: email })

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    // compare password
    let result = await compare(password, user.password)

    if (!result) {
      return res.status(400).json({ message: "Invalid password" })
    }

    // create token
    const signedToken = sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: "1h" })

    // store token in cookie
    res.cookie("token", signedToken, {httpOnly: true,sameSite: "lax",secure: false
    })

    res.status(200).json({ message: "Login success", payload: user })

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// CREATE USER (REGISTER)
userApp.post("/users", async (req, res) => {
  try {

    const newUser = req.body

    // check if user already exists
    let existingUser = await UserModel.findOne({ email: newUser.email })

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" })
    }

    
    // hash password
    const hashedPassword = await hash(newUser.password, 10)
    newUser.password = hashedPassword

    // create document
    const newUserDocument = new UserModel(newUser)

    // save
    await newUserDocument.save()

    res.status(201).json({ message: "User created" })

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// READ ALL USERS (PROTECTED ROUTE)
userApp.get("/users", verifyToken, async (req, res) => {
  try {

    let userList = await UserModel.find().populate("cart.product").select('-password')

    res.status(200).json({message: "Users list",payload: userList})

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// READ USER BY ID(PROTECTED ROUTE)
userApp.get('/user',verifyToken, async (req, res) => {
  try {
//read user email from req
    const emailofUser=req.user?.email;

    const userObj = await UserModel.findOne({email:emailofUser}).select('-password')

    if (!userObj) {
      return res.status(404).json({ message: "User not found" })
    }

    res.status(200).json({message: "User details",payload: userObj})

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// UPDATE USER
userApp.put('/users/:id',verifyToken, async (req, res) => {
  try {

    const uid = req.params.id
    const modifiedUser = req.body

    const updatedUser = await UserModel.findByIdAndUpdate(
      uid,
      { $set: { ...modifiedUser } },
      { new: true, runValidators: true }
    )

    res.status(200).json({message: "User updated",payload: updatedUser})

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// DELETE USER
userApp.delete('/users/:id', async (req, res) => {
  try {

    const uid = req.params.id

    const userObj = await UserModel.findByIdAndDelete(uid)

    if (!userObj) {
      return res.status(404).json({ message: "User not found" })
    }

    res.status(200).json({ message: "User deleted" })

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
/*
//add product to cart
userApp.put('/cart/product-id/:pid',verifyToken,async(req,res)=>{
  //get product id from url params
  let productId=req.params.pid;
  //get current user deteils
  const emailOfUser=req.user?.email
  //add product id to user cart
  let result=await UserModel.findOneAndUpdate({email:emailOfUser},{$addToSet:{cart:{product:productId}}})
  //if user invalid.
  if(!result){
    return res.status(500).json({message:"Error adding product to cart"})
  }
  res.status(200).json({message:"product added to cart"})
})
  */
 //given task.

//before add,first it should check that product is already in the cart. 
//if the product is there,then increment count by 1 
//otherwise add that product to cart.
userApp.put('/cart/product-id/:pid',verifyToken,async(req,res)=>{
    // get product id from params
    let productId=req.params.pid
    // get logged-in user email
    const emailOfUser=req.user?.email
    // find user
    const user = await UserModel.findOne({email:emailOfUser})
    if(!user){
      return res.status(404).json({message:"User not found"})
    }
    // check if product already exists in cart
    const productInCart=user.cart.find((item)=>item.product.toString()===productId)
    if(productInCart){
      // increment count
      productInCart.count+=1
    }else{
      // add new product
      user.cart.push({product:productId})
    }
    // save updated cart
    await user.save()
    res.status(200).json({message:"Product added to cart"})
  
})



