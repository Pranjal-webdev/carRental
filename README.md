# 🚗 Car Rental House

A full-stack car rental web application built using the MERN stack. The application allows users to browse cars, manage their cart, make bookings, track bookings, and interact with AI-powered car recommendations and chatbot assistance.

## 🚀 Features

### 👤 User Features
- User registration and login
- JWT-based authentication
- Browse available cars
- View detailed car information
- Add cars to cart
- Increase/decrease cart quantity
- Book cars
- View personal bookings
- Cancel pending bookings
- Submit and view reviews
- Responsive UI for mobile, tablet and desktop

### 🛡️ Admin Features
- Role-based admin authorization
- Add new cars
- Update car details
- Delete cars
- Manage booking status
- View all bookings
- Manage users

### 🤖 AI Features
- AI-powered car recommendation system
- AI chatbot for car rental assistance
- Gemini API integration
- Recommendations are generated using actual available car data from MongoDB

### 🖼️ Image Management
- Cloudinary integration for image uploads
- Car images are stored on Cloudinary
- Image URLs are stored in MongoDB

## 🔐 Authentication & Authorization

The application uses JWT-based authentication.

- JWT token is generated after successful login.
- The token is sent with protected API requests.
- Backend middleware verifies the token.
- User ID from the token is used to fetch user-specific data.
- Role-based middleware restricts admin-only operations.
- 
## 📁 Project Structure

```text
Car-Rental/
├── client/
│   ├── src/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
│
└── README.md
