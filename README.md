## 🚀 Project Overview

This project is a fully functional MERN application that includes a backend API developed with Node.js and Express, along with a frontend user interface built using React. It features CRUD operations, state management, and RESTful API integration.

## 🛠️ Technologies Used

- **Frontend**: React, JavaScript, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Others**: Axios (for API requests)

## 📂 Folder Structure

- **frontend/**: Contains the React-based user interface
- **backend/**: Contains the Node.js and Express backend, with API routes and controllers

## 📋 Prerequisites

Make sure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (local instance that is MongoDB Compass)

## 🔧 Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone 
   cd Auth-app
   ```

2. **Install dependencies**:
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```
   - For the backend:
     ```bash
     cd backend
     npm install
     ```

3. **Environment Variables**:
   - Create a `.env` file in the backend directory with the following:
     ```plaintext
     MONGO_URI= "mongodb://127.0.0.1:27017/<DB_NAME>"
     PORT=4001
     ```

## 🖥️ Running the Application

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Start the React app:
   ```bash
   npm start
   ```
3. Access the app at `http://localhost:3000`.

### Backend
1. Open a separate terminal.
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Start the Express server:
   ```bash
   npm start
   ```
4. The backend will run at `http://localhost:4001`.

## 🌐 API Endpoints

Here’s a quick summary of the main API endpoints:

- **GET /** - Retrieve all items
- **POST /register** - Add a new item
- **PUT /user-list** - Update an existing item

## 📌 Features

- **Full Functionality**: Perform create, read operations on user.
- **Responsive Design**: Optimized for various screen sizes.
- **API Integration**: Seamless interaction between frontend and backend.

## 🤝 Contributing

If you'd like to contribute to this project, please fork the repository and make any updates or improvements.
