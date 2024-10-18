# E-Commerce-Site-with-Redux

This project is a full-stack eCommerce application built with React (Frontend), Node.js, Express (Backend), and MongoDB (Database). It allows users to register, be assigned different roles such as admin, seller, and shopper, and perform specific actions based on their role.

Features
User Registration & Authentication:

Register new users with role-based access control (admin, seller, shopper).
Login functionality with JWT token-based authentication.
Admin Role:

Add and delete users.
Fetch a list of all users.
Seller Role:

Post products for sale.
Fetch a list of their posted products.
Shopper Role:

View all available products.
Purchase products.
Global State Management:

Utilizes Redux Toolkit for managing user authentication state.
API integration for fetching and manipulating data.
Technologies Used
Backend:
Node.js: JavaScript runtime for backend development.
Express.js: Web framework for handling API requests.
MongoDB: NoSQL database for storing users and product data.
Mongoose: ODM for MongoDB.
JWT (JSON Web Tokens): Used for secure authentication.
Bcrypt.js: Hashing passwords for secure storage.
Frontend:
React: JavaScript library for building user interfaces.
Redux Toolkit: For state management.
Axios: For making HTTP requests to the backend.
React Router: For navigation between different pages.
TailwindCSS or ChakraUI (optional): For styling the frontend.

Project Structure
Backend Structure:

ecommerce-backend/
│
├── models/
│   ├── User.js            # User schema
│   └── Product.js         # Product schema
│
├── routes/
│   ├── auth.js            # Authentication routes (register/login)
│   ├── admin.js           # Admin routes (add/delete users)
│   ├── seller.js          # Seller routes (post products)
│   └── shopper.js         # Shopper routes (view/purchase products)
│
├── middlewares/
│   └── authMiddleware.js  # JWT and role-based middleware
│
├── .env                   # Environment variables (e.g., MongoDB URI, JWT secret)
├── server.js              # Main entry point for the backend server
└── package.json           # Node dependencies and scripts

Frontend Structure:

ecommerce-frontend/
│
├── src/
│   ├── components/
│   │   ├── AdminPage.jsx  # Admin page component
│   │   ├── SellerPage.jsx # Seller page component
│   │   └── ShopperPage.jsx # Shopper page component
│   │
│   ├── store.js           # Redux store configuration
│   ├── App.js             # Main app entry point
│   ├── index.js           # React DOM entry point
│   └── package.json       # React dependencies and scripts

Setup Instructions
Prerequisites:
Node.js (v14 or higher)
MongoDB (either locally or via a service like MongoDB Atlas)
npm (comes with Node.js)
1. Clone the Repository
   git clone https://github.com/your-username/ecommerce-web-app.git
cd ecommerce-web-app
2. Backend Setup
Navigate to the backend directory:
cd ecommerce-backend
Install Dependencies:
npm install
Create a .env File:
Create a .env file in the ecommerce-backend directory with the following variables:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the Backend Server:
npm start
Your backend server will run on http://localhost:5000.

3. Frontend Setup
Navigate to the frontend directory:
cd ecommerce-frontend
Install Dependencies:
npm install
Start the Frontend Development Server:
npm run dev
Your React frontend will run on http://localhost:3000.
API Endpoints
Authentication (Public)
POST /api/auth/register: Register a new user.
POST /api/auth/login: Login a user and get a JWT token.
Admin (Protected, Admin Only)
GET /api/admin/users: Fetch all users.
POST /api/admin/add-user: Add a new user.
DELETE /api/admin/delete-user/:id: Delete a user.
Seller (Protected, Seller Only)
GET /api/seller/products: Fetch seller's posted products.
POST /api/seller/post-product: Post a new product.
Shopper (Protected, Shopper Only)
GET /api/shopper/products: Fetch all available products.
POST /api/shopper/purchase: Purchase a product.
Frontend Pages
Admin Page
Allows an admin to add and delete users.
Seller Page
Allows a seller to post new products.
Shopper Page
Displays products available for purchase and allows a shopper to make purchases.
How to Use the Application
Register: First, register as a user, selecting the appropriate role (admin, seller, or shopper).
Login: After registration, log in with your credentials to receive a JWT token.
Admin: If logged in as an admin, you can add and delete users.
Seller: If logged in as a seller, you can post products for sale.
Shopper: If logged in as a shopper, you can view products and make purchases.
Future Enhancements
Implement order history for shoppers.
Add pagination and search functionality for product listings.
Implement role-based dashboards with more detailed metrics.
Add payment gateways for real-time transactions.
Use Redux Persist to persist authentication state across page refreshes.
Contributions
Feel free to submit a pull request if you'd like to contribute to this project. Make sure to open an issue to discuss the change first.

License
This project is licensed under the MIT License.
