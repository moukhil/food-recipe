# Food Recipe Application

A modern full-stack **Food Recipe Management System** built using **React.js**, **Spring Boot**, and **MySQL**. The application allows users to search recipes, explore recipe details, browse popular dishes, and add new recipes through an intuitive and responsive interface.

---

## Live Demo

**Frontend:*https://food-recipe-topaz.vercel.app/*

---

## Screenshots

> Add screenshots of your application here.

### Home Page
<img src="screenshots/home.png" width="900"/>

### Recipe Details
<img src="screenshots/details.png" width="900"/>

### Add Recipe
<img src="screenshots/addrecipe.png" width="900"/>

---

# Features

- Search recipes by name
- View detailed recipe information
- Popular Recipes section
- Add new recipes
- Responsive design
- REST API integration
- MySQL database storage
- Fast and modern UI
- Beautiful Red, White & Black theme

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Tailwind CSS
- React Router
- Fetch API
- Vite

## Backend

- Spring Boot
- Spring Data JPA
- Maven
- REST APIs

## Database

- MySQL

## Deployment

- Frontend → Vercel
- Backend → Render
- Database → MySQL

---

# Project Structure

```
Food-Recipe
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend
│   ├── src
│   ├── pom.xml
│   └── application.properties
│
└── README.md
```

---

# API Endpoints

## Get All Recipes

```
GET /recipe
```

---

## Search Recipe by Name

```
GET /recipe/{name}
```

---

## Get Recipe by ID

```
GET /recipe/id/{id}
```

---

## Add New Recipe

```
POST /recipe
```

Request Body

```json
{
  "strMeal": "Egg Fried Rice",
  "strCategory": "Rice",
  "strDescription": "Easy and delicious fried rice recipe.",
  "strImg": "https://example.com/image.jpg"
}
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/moukhil/food-recipe.git
```

```bash
cd food-recipe
```

---

## Frontend Setup

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run

```bash
npm run dev
```

---

## Backend Setup

```bash
cd backend
```

Configure MySQL inside

```
application.properties
```

Example

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/foodrecipe
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Run

```bash
./mvnw spring-boot:run
```

or

```bash
mvn spring-boot:run
```

---

# Database Schema

| Column | Type |
|---------|------|
| id | BIGINT |
| str_meal | VARCHAR(255) |
| str_category | VARCHAR(255) |
| str_description | TEXT |
| str_img | TEXT |

---

# Future Improvements

- Favorite Recipes
- User Authentication
- Recipe Ratings
- Comments & Reviews
- Categories
- Trending Recipes
- Pagination
- Dark Mode
- Bookmark Recipes
- Filter by Category
- Ingredients Search

---

# Author

**Shaik Moukhil**

Email
> shaikmoukhil@gmail.com

LinkedIn
> https://linkedin.com/in/moukhil-shaik

GitHub
> https://github.com/moukhil

---

# Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates further improvements.

---

## 📜 License

This project is licensed under the MIT License.
