# 🍽️ Recipes App

A modern and responsive **Recipes App** built with Java script that allows users to search, browse, and explore thousands of delicious recipes using **TheMealDB API**. Users can view recipe details including ingredients, cooking instructions and meal category.

---

## 📸 Project Preview

> **Add screenshots of your application here**

### Home Page
![Home Page](screenshots/home.png)

### Search Results
![Search Results](screenshots/search.png)

### Recipe Details
![Recipe Details](screenshots/details.png)

---

# 📚 Table of Contents

- Overview
- Features
- Technologies Used
- Project Structure
- Installation
- Usage
- API Used
- Screenshots
- Future Enhancements
- Learning Outcomes
- Author
- License

---

# 📖 Overview

Recipes App is a web application that enables users to search for recipes by meal name and explore detailed cooking instructions. It consumes data from **TheMealDB REST API** and presents it in a clean, responsive, and user-friendly interface.

The application demonstrates API integration, React component architecture, state management using React Hooks, and responsive web design.

---

# ✨ Features

- 🔍 Search recipes by meal name
- 🍽️ View recipe details
- 🥗 Display ingredients list
- 📝 Cooking instructions
- 🌍 Show meal category
- 🖼️ High-quality meal images
- 📱 Responsive design
- ❌ Error handling
- ⏳ Loading indicator

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|----------|
| HTML5 | Page Structure |
| CSS3 | Styling |
| JavaScript (ES6+) | Logic |
| Fetch API | API Requests |
| TheMealDB API | Recipe Data |

---

# 📂 Project Structure

```
recipes-app/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │     ├── Navbar.jsx
│   │     ├── SearchBar.jsx
│   │     ├── RecipeCard.jsx
│   │     ├── RecipeDetails.jsx
│   │     └── Footer.jsx
│   │
│   ├── pages/
│   │     ├── Home.jsx
│   │     └── Details.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/yourusername/recipes-app.git
```

---

## Navigate to Project Folder

```bash
cd recipes-app
```

---

## Install Dependencies

```bash
npm install
```

---

## Run the Application

```bash
npm run dev
```

The application will start at:

```
http://localhost:5173
```

---

# 🚀 Usage

1. Open the application.
2. Enter a recipe name in the search box.
3. Click the Search button.
4. Browse available recipes.
5. Click on a recipe to view complete details.
6. Read cooking instructions.
7. Watch the YouTube cooking tutorial if available.

---

# 🌐 API Used

This project uses **TheMealDB API**.

### Search Recipe

```
https://www.themealdb.com/api/json/v1/1/search.php?s=
```

### Lookup Recipe

```
https://www.themealdb.com/api/json/v1/1/lookup.php?i=
```

Example:

```
https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken
```

---

# 🖥️ Screenshots

## Home Page

- Search Bar
- Featured Recipes
- Responsive Layout

---

## Recipe Details

Displays:

- Recipe Image
- Meal Name
- Category
- Area
- Ingredients
- Instructions
- YouTube Tutorial

---

# 💡 Future Enhancements

- ❤️ Favorite Recipes
- 🌙 Dark Mode
- 📂 Filter by Category
- 🌎 Filter by Country
- 🥦 Ingredient Search
- 🔥 Trending Recipes
- 🔖 Bookmark Recipes
- 👤 User Authentication
- ☁️ Backend Integration
- 🗄️ Database Support
- Pagination
- Infinite Scroll

---

# 🎯 Learning Outcomes

Through this project, I learned:

- React Component Architecture
- React Hooks
- API Integration
- Fetch API
- State Management
- Conditional Rendering
- Responsive Web Design
- Error Handling
- Project Organization
- Modern Frontend Development using Vite

---

# 📈 Project Highlights

- ✔ Responsive UI
- ✔ API Integration
- ✔ Dynamic Search
- ✔ Clean Code Structure
- ✔ Beginner Friendly
- ✔ Easy to Extend

---

# 👨‍💻 Author

**Terati Anand**

- GitHub: https://github.com/yourusername
- Email: teratianand@gmail.com

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push the branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute this project for learning and educational purposes.

---

## ⭐ If you found this project useful, don't forget to give it a Star on GitHub!
