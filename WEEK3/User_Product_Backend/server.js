// create http server
import exp from "express"
import { connect } from "mongoose"
import cookieParser from "cookie-parser"

import { userApp } from "./APIs/UserAPI.js"
import { productApp } from "./APIs/ProductAPI.js"
import { config } from "dotenv"

config() //process.env.PORT, process.env.DB_URL, process.env.SECRET_KEY


const app = exp()

// port number
const PORT = process.env.PORT || 4000

// middleware to parse JSON
app.use(exp.json())

// cookie parser middleware
app.use(cookieParser())

// routes
app.use("/user-api", userApp)
app.use("/product-api", productApp)

// connect to MongoDB
async function connectDB() {
  try {

    await connect(process.env.DB_URL)
    console.log("Connected to DB server...")

    // start server
    app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)})

  } catch (err) {
      console.log("Error connecting to DB server:", err)
  }
}

connectDB()

// error handling middleware
app.use((err, req, res, next) => {

  console.log(err.name)

  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation error",
      error: err.message
    })
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ObjectId",
      error: err.message
    })
  }

  if (err.name === "MongoServerError" && err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
      error: err.keyValue
    })
  }

  // server error
  res.status(500).json({
    message: "Server side error"
  })

})








