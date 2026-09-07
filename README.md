# ⚡ Khayam Electric

A responsive e-commerce web application for electrical and lighting products.

**Khayam Electric** is a personal frontend project built to practice and demonstrate modern web development concepts such as REST API integration, dynamic product rendering, asynchronous JavaScript, responsive UI, shopping cart functionality, and CRUD operations through a separate React-based admin panel.

---

## 🚀 Features

### 🛍️ Storefront

* Responsive e-commerce interface
* Product categories for lighting and electrical products
* Dynamic product rendering from REST API
* Product detail pages
* Dynamic product title, price, rating, category and description
* Dynamic product features/specifications
* Dynamic related products
* Shopping cart functionality
* Responsive product sliders using Swiper
* Mobile-friendly category navigation
* Persian RTL interface

### ⚙️ API & JavaScript

* REST API integration
* Fetch API
* Async/Await
* Dynamic data rendering
* CRUD operations
* Product creation, editing and deletion
* JSON Server for local backend development

### 🛠️ Admin Panel

A separate React-based admin panel is included for managing products.

Admin features include:

* View products
* Add new products
* Edit products
* Delete products
* Product management through REST API
* React-based component structure

---

## 🧰 Technologies

### Frontend

* HTML5
* CSS3
* JavaScript (ES6+)
* Bootstrap
* Swiper.js
* Font Awesome

### Backend / API

* REST API
* Fetch API
* JSON Server

### Admin Panel

* React
* JavaScript
* Vite
* REST API

### Development Tools

* Git
* GitHub
* Visual Studio Code

---

## 📁 Project Structure

```text
khayam-electric/
│
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
│
├── admin-react/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── index.html
├── product.html
├── products.json
├── README.md
└── .gitignore
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/khayam-electric.git
```

Replace `YOUR_USERNAME` with your GitHub username.

Then:

```bash
cd khayam-electric
```

---

### 2. Start JSON Server

Make sure Node.js is installed.

From the project root:

```bash
npx json-server products.json
```

The API will run on:

```text
http://localhost:3000
```

Products can be accessed through:

```text
http://localhost:3000/products
```

---

### 3. Run the storefront

Open the project with VS Code and run the storefront using **Live Server**.

The storefront will normally be available at:

```text
http://127.0.0.1:5500
```

---

### 4. Run the React Admin Panel

Open a new terminal:

```bash
cd admin-react
```

Install dependencies if necessary:

```bash
npm install
```

Then start the development server:

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

---

## 🔄 Application Architecture

The project uses a simple development architecture:

```text
                ┌─────────────────────┐
                │   Khayam Electric   │
                │     Storefront      │
                └──────────┬──────────┘
                           │
                           │ REST API
                           ▼
                ┌─────────────────────┐
                │     JSON Server     │
                │    localhost:3000   │
                └──────────┬──────────┘
                           │
                           │
                ┌──────────▼──────────┐
                │    products.json    │
                └─────────────────────┘
                           ▲
                           │
                           │ REST API
                ┌──────────┴──────────┐
                │   React Admin Panel │
                │   Product CRUD      │
                └─────────────────────┘
```

---

## 🎯 What I Practiced

This project was developed as a practical frontend project to strengthen my understanding of:

* DOM manipulation
* Modern JavaScript
* ES6+ syntax
* Functions and modules
* Async/Await
* Fetch API
* REST APIs
* JSON data handling
* CRUD operations
* Dynamic UI rendering
* Responsive web design
* Bootstrap
* Swiper.js
* React components
* State management
* Git and GitHub workflow

---

## 📱 Responsive Design

The interface is designed to work across different screen sizes, including:

* Desktop
* Tablet
* Mobile

Special attention was given to mobile navigation, product cards, category sliders and responsive layouts.

---

## 🔮 Future Improvements

Possible future improvements include:

* User authentication
* Real backend database
* Online payment integration
* Product search and advanced filtering
* Product pagination
* User accounts
* Order management
* Image upload system
* Deployment with a production backend
* Connecting the project to a real database

---

## 👨‍💻 About

This project was created as a personal frontend development project to practice building a complete e-commerce experience and to demonstrate practical frontend and API integration skills.

**Developer:** Amir Rahimi

**Role:** Frontend Developer

---

## 📄 License

This project was created for educational and portfolio purposes.
