# Apartments for Rent

This repository contains a web application for managing and browsing apartment rentals. The project is built using modern web technologies and follows best practices for structure, scalability, and maintainability.

---

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [Contributing](#contributing)
7. [License](#license)

---

## Features

- **Apartment Listing**: View a list of available apartments with details like price, rooms, and description.
- **Filters**: Filter apartments by price range, number of rooms, and other criteria.
- **CRUD Operations**: Add, update, delete apartments.
- **Pagination**: Browse apartments efficiently with paginated results.
- **Validation**: Robust form validation for data inputs.

---

## Technologies Used

- **Frontend**:
  - React.js with React Router for navigation
  - Redux Toolkit for state management
  - Formik and Yup for form handling and validation
  - CSS Modules for styling

- **Backend**:
  - Node.js with Express.js
  - MongoDB for database
  - Mongoose for schema-based data modeling

- **Other Tools**:
  - Axios for API calls
  - ESLint and Prettier for code quality

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SVelikiy/apartments_for_rent.git
   ```

2. Navigate to the project directory:
   ```bash
   cd apartments_for_rent
   ```

3. Install dependencies for both frontend and backend:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Create `.env` files in the `backend` and `frontend` directories.
   - Add necessary configurations (e.g., database connection strings, API base URLs).

5. Start the development servers:
   ```bash
   # Start backend server
   cd backend
   npm run dev

   # Start frontend server
   cd ../frontend
   npm start
   ```

---

## Usage

1. Open the application in your browser:
   - Default URL: `https://apartments-for-rent-nu.vercel.app/`

2. Use the filter form to narrow down apartment listings.

3. Perform CRUD operations on apartments through the UI.

---

## Folder Structure

```
apartments_for_rent/
├── backend/          # Backend server code
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/         # React frontend code
│   ├── components/
│   ├── pages/
│   ├── store/
│   └── App.js
└── README.md       # Project documentation
```

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.


