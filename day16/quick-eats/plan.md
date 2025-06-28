[Problem Statement](https://github.com/Mozakir178/RCT-B46/blob/main/day14/plan.md)
# 🎯 QuickEats Food Delivery App — 3-Day Plan

---

## 💡 Problem Statement
I want to create a **QuickEats food delivery app** using **React, Redux Toolkit, and Firebase**.  
The app should let me:
- ✅ Browse food items fetched from Firestore
- ✅ Add/remove items to/from a cart
- ✅ Checkout my order and submit it to Firestore
- ✅ Toggle between light and dark themes
- ✅ Register and login using Firebase authentication

By the end of this 3-day plan, I will have built a fully working, real-world food delivery app that integrates **frontend state management** and **Firebase backend**.

---

## 📆 Abstract Overview of the 3 Days
- 💡 **Day 1 — Setup & Authentication:**  
  I will set up my project, configure Firebase auth, and implement login/logout along with a responsive navbar.

- 🛍️ **Day 2 — Products & Cart:**  
  I will fetch food products from Firestore and implement a cart using Redux Toolkit.

- ✅ **Day 3 — Checkout, Orders & Theme Toggle:**  
  I will implement checkout to submit my order to Firestore and add light/dark theme support.

---
### Final Folder Structure
```
quickeats/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation with Login/Logout and Theme Toggle
│   │   ├── ProductCard.jsx      # Individual product card for Menu
│   │   ├── ThemeToggleButton.jsx # Toggle light/dark theme
│   │   └── CheckoutButton.jsx   # Checkout action
│   │
│   ├── pages/
│   │   ├── Home.jsx             # Home page
│   │   ├── Menu.jsx             # Fetch and list all products
│   │   ├── Cart.jsx             # Show cart and handle checkout
│   │   ├── ThankYou.jsx         # Order confirmation page
│   │   ├── Login.jsx            # User login page
│   │   ├── Register.jsx         # User registration page
│   │   └── NotFound.jsx         # Optional 404 page
│   │
│   ├── slices/
│   │   ├── authSlice.js         # Firebase auth state
│   │   ├── productsSlice.js     # Fetch menuItems from Firestore
│   │   ├── cartSlice.js         # Add/remove/clear cart items
│   │   ├── ordersSlice.js       # Submit orders to Firestore
│   │   └── themeSlice.js        # Toggle light/dark theme
│   │
│   ├── firebase.js              # Firebase config and setup
│   ├── store.js                 # Redux store setup
│   ├── App.jsx                  # App with routes
│   ├── main.jsx                 # Vite entry point
│   └── index.css                # Global CSS (if needed)
│
├── index.html                   # Vite index.html at project root
├── package.json
├── vite.config.js
└── README.md

```

## 📜 Day-wise Detailed Plan

---

### 📅 Day 1 — Setup & Authentication
**🎯 My goals for Day 1:**
- ✅ Create a new React app with Vite.
- ✅ Install dependencies (`firebase`, `react-router-dom`, `@reduxjs/toolkit`, `react-redux`).
- ✅ Configure Firebase (`firebase.js`) for auth and Firestore.
- ✅ Set up Redux store and an `authSlice.js` to manage login/logout state.
- ✅ Build `Login.jsx` and `Register.jsx` with Firebase auth.
- ✅ Create a responsive `Navbar.jsx` that updates based on auth status.
- ✅ Test by registering, logging in, and logging out.


```
quickeats/
├── src/
│   ├── components/
│   │   └── Navbar.jsx              # Navbar with links + login/logout button
│   │
│   ├── pages/
│   │   ├── Home.jsx                # Home page (placeholder)
│   │   ├── Login.jsx               # Login form with Firebase auth
│   │   ├── Register.jsx            # Registration form
│   │   └── NotFound.jsx            # 404 fallback page (optional)
│   │
│   ├── slices/
│   │   └── authSlice.js            # Redux slice for login/logout state
│   │
│   ├── firebase.js                 # Firebase config and setup
│   ├── store.js                    # Redux store configuration
│   ├── App.jsx                     # Routes + layout
│   ├── main.jsx                    # Entry point
│   └── index.css                   # (Optional) global styles
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
---

### 📅 Day 2 — Products & Cart
**🎯 My goals for Day 2:**
- Routes 
- ✅ Create `productsSlice.js` with a thunk to fetch `menuItems` from Firestore.
- ✅ Build `Menu.jsx` to display products with image, title, price, and an “Add to Cart” button.
- ✅ Create `cartSlice.js` with `addToCart(item)`, `removeFromCart(id)`, and `clearCart()` reducers.
- ✅ Build `Cart.jsx` to list all cart items and allow removal and clearing of the cart.
- ✅ Test by adding and removing products from the cart.


```
quickeats/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Same Navbar (now with cart link)
│   │   ├── ProductCard.jsx         # Product card for Menu
│   │   └── CheckoutButton.jsx      # Checkout button in cart (optional for Day 2)
│   │
│   ├── pages/
│   │   ├── Home.jsx                # Home page
│   │   ├── Menu.jsx                # Fetch + display products
│   │   ├── Cart.jsx                # Cart page showing cart items
│   │   └── NotFound.jsx            # 404 page (optional)
│   │
│   ├── slices/
│   │   ├── authSlice.js            # Still part of the app (from Day 1)
│   │   ├── productsSlice.js        # Redux slice for fetching products
│   │   └── cartSlice.js            # Redux slice for managing cart
│   │
│   ├── firebase.js                 # Firebase config
│   ├── store.js                    # Redux store configuration
│   ├── App.jsx                     # Routes + layout
│   ├── main.jsx                    # Entry point
│   └── index.css                   # (Optional) global styles

```

---

### 📅 Day 3 — Checkout, Orders & Theme Toggle
**🎯 My goals for Day 3:**
- ✅ Create `ordersSlice.js` with a `submitOrder()` thunk to add an order to Firestore.
- ✅ Implement a Checkout button on `Cart.jsx` that sends the order and navigates to a `ThankYou.jsx` confirmation page.
- ✅ Set up `themeSlice.js` with a `toggleTheme()` action.
- ✅ Add a Theme Toggle button in the `Navbar` to switch light/dark themes.
- ✅ Test the full flow: log in, add items, checkout, and switch themes.


```
quickeats/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navbar with theme toggle
│   │   ├── ProductCard.jsx         # Product card
│   │   ├── CheckoutButton.jsx      # Triggers order submit
│   │   └── ThemeToggleButton.jsx   # Switch light/dark mode
│   │
│   ├── pages/
│   │   ├── Home.jsx                # Home page
│   │   ├── Menu.jsx                # Product list
│   │   ├── Cart.jsx                # Cart + Checkout button
│   │   ├── ThankYou.jsx            # Confirmation page after checkout
│   │   └── NotFound.jsx            # 404 page (optional)
│   │
│   ├── slices/
│   │   ├── authSlice.js            # Auth state
│   │   ├── productsSlice.js        # Products state
│   │   ├── cartSlice.js            # Cart state
│   │   ├── ordersSlice.js          # Redux slice for submitting orders
│   │   └── themeSlice.js           # Redux slice for theme toggle
│   │
│   ├── firebase.js                 # Firebase config
│   ├── store.js                    # Redux store
│   ├── App.jsx                     # Routes + layout
│   ├── main.jsx                    # Entry point
│   └── index.css                   # (Optional) global styles

```

---

## 🎯 Outcome After 3 Days
By the end of this plan, I will have:
- ✅ Firebase auth integrated.
- ✅ Firestore data for products and orders.
- ✅ Redux Toolkit slices for auth, products, cart, orders, and theme.
- ✅ A fully responsive UI that supports light and dark themes.

---

