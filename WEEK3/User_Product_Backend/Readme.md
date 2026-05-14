### 
1.generate package.json
2.create express server.
3.install mongoose and connect to mongodb server.

  Rest API---moongodb native driver-->db server
  Rest API ---mongoose ODM tool-->db server

  4.Build user Rest API
    -Create user
	-Read all users
	-Read user by id
	-Update user by id
	-Delete user by id

 5.Create schema and model of the resource(user)     (schema is the structure of the document and model is the interface)
       -----------------------
	    import {Schema} from 'mongoose'

//Create  user schema.(username,password,email,age)
new userSchema=new Schema({                         //new is an operator to create an object of class Schema.
	//structure of user resource.
	username:{type:String,required:[true,"Username is required"],   //String is mongoose data type.   //string is java script data type
		minLength:[4,"Username must be at least 4 characters long"],
		maxLength:[6,"username sixe exceed 6 char"]   //validation rules for username field.
	}, 
	password:{
		type:String,required:[true,"Password is required"],
	},
	age:{
		type:Number,required:[true,"Age is required"],
	}   
	                                                                      
})                   
-----------------------------------

6.Create user API and define the API routes.



-->handiling unavailable resources
-->validators during update
-->hashing password (hashing is irreversable process. it is used to secure password.)(bcryptjs ())
-->unique fields
-->refined version of error handiling middleware..


//stats code
-->200 --success
-->201 --resource created
-->400 --bad request
-->404 --resource not found
-->401 --unauthorized
-->500 --internal server 

### user Authentication.(login).
--Submit credentials and get token.

# User Product Backend

This repository contains a small Express.js REST API for managing users and products using MongoDB (via Mongoose). It includes authentication, route protection middleware, and example CRUD endpoints for `User` and `Product` resources.

## Table of contents

- Project overview
- Tech stack
- Prerequisites
- Installation
- Configuration (environment variables)
- Running the app
- API endpoints
- Authentication
- Project structure
- Development notes
- Contributing
- License

## Project overview

This backend implements a simple REST API with the following capabilities:

- Create / read / update / delete users
- Create / read / update / delete products
- JWT-based authentication and protected routes
- Input validation and basic error handling

Use this project as a starter template for small services or for learning how to build authenticated REST APIs with Express and Mongoose.

## Tech stack

- Node.js + Express
- MongoDB (Mongoose ODM)
- JWT for authentication
- bcryptjs for password hashing

## Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- MongoDB instance (local or hosted)

## Installation

1. Clone the repo:

```bash
git clone <repo-url>
cd User_Product_Backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root (see Configuration below).

## Configuration (environment variables)

Create a `.env` file with these variables:

- `PORT` — port the server listens on (default 3000)
- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — secret used to sign JWT tokens

Example `.env`:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/user_product_db
JWT_SECRET=your_super_secret_key
```

## Running the app

Start the server:

```bash
npm start
```

By default the server will run on the port specified in `PORT` and connect to `MONGO_URI`.

## API Endpoints

Base URL: `http://localhost:3000` (adjust according to `PORT`)

Note: The project places route implementations in `APIs/ProductAPI.js`, `APIs/UserAPI.js` and authentication in `Auth/auth.js`.

Users

- POST /api/users — create a new user
	- Body (JSON): `{ "username": "alice", "password": "pass123", "email": "a@e.com", "age": 30 }`
	- Response: `201 Created` with created user (password omitted)

- GET /api/users — list users (protected)

- GET /api/users/:id — get user by id (protected)

- PUT /api/users/:id — update user by id (protected)

- DELETE /api/users/:id — delete user by id (protected)

Authentication

- POST /api/auth/login — login with credentials
	- Body: `{ "username": "alice", "password": "pass123" }`
	- Response: `200 OK` with `{ "token": "<JWT>" }`

Products

- POST /api/products — create product (protected)
	- Body example: `{ "name": "Widget", "price": 9.99, "description": "..." }`

- GET /api/products — list products (public or protected depending on implementation)

- GET /api/products/:id — get product by id

- PUT /api/products/:id — update product by id (protected)

- DELETE /api/products/:id — delete product by id (protected)

Example curl (register user):

```bash
curl -X POST http://localhost:3000/api/users \
	-H "Content-Type: application/json" \
	-d '{"username":"alice","password":"pass123","email":"a@e.com","age":30}'
```

Example curl (login):

```bash
curl -X POST http://localhost:3000/api/auth/login \
	-H "Content-Type: application/json" \
	-d '{"username":"alice","password":"pass123"}'
```

Use the returned token in the `Authorization` header for protected routes:

```
Authorization: Bearer <JWT>
```

## Authentication & Security

- Passwords should be hashed before storing (see `bcryptjs` usage in the codebase).
- Protected routes are enforced with the `middlewares/verifyToken.js` middleware.
- Use a strong `JWT_SECRET` in production and keep it out of source control.

## Project structure

- `server.js` — application entry point
- `APIs/UserAPI.js` — user route handlers
- `APIs/ProductAPI.js` — product route handlers
- `Auth/auth.js` — authentication routes and helpers
- `middlewares/verifyToken.js` — JWT verification middleware
- `models/UserModel.js` — Mongoose schema & model for users
- `models/ProductModel.js` — Mongoose schema & model for products

## Development notes

- Validation: ensure required fields are validated in routes or Mongoose schemas.
- Error handling: centralize error handling middleware for consistent responses and status codes.
- Status codes used in this project:
	- `200` — success
	- `201` — resource created
	- `400` — bad request / validation error
	- `401` — unauthorized
	- `404` — not found
	- `500` — internal server error

## Testing

You can test endpoints with `curl`, Postman, or HTTP client extensions. Consider adding automated tests with Jest or Mocha for critical routes.

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feat/your-feature`
3. Commit your changes
4. Open a pull request with a clear description

## Contact

If you need help integrating or extending this project, open an issue or contact the maintainer.

## License

This project does not include a license file; add one if you plan to open-source it.


