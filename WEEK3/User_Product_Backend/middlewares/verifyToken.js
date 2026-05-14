import jwt from "jsonwebtoken"

const { verify } = jwt
// to acces the cookies properties of request obj we need to use cookie parser middlewares.
// otherwise req.cookies is undefined.

export function verifyToken(req, res, next) {

  try {

    // get token from cookies
    const token = req.cookies?.token

    // if token not present
    if (!token) {
      return res.status(401).json({ message: "Please login first" })
    }

    // verify token
    const decodedToken = verify(token, "abcdef")

    console.log("Decoded token:", decodedToken)
    req.user=decodedToken

    // continue to next middleware / route
    next()

  } catch (err) {

    return res.status(401).json({
      message: "Session expired, please login again"
    })

  }
}
