## 🐾 PetLog – A Personal Pet Tracker (with Redux Toolkit + Firebase)

Build a **PetLog App**, a personal pet tracker where users can register, log in, and manage their own list of pets. The application must use **Firebase Authentication** for secure login and **Firestore** to store user-specific pet entries. Use **Redux Toolkit** to manage the global authentication state and ensure that login status persists across page reloads.

---

### 🔐 Authentication
- Implement **Firebase Email/Password Authentication**
- Create a **login/register form** at `/login`
- After a successful login, redirect the user to the `/pets` route
- Store the logged-in user’s `uid` and `email` in the Redux store using an `authSlice`
- Use `onAuthStateChanged` to maintain login state even after refresh
- Navbar should display the user’s email and provide a **logout** button

---

### 🐶 Pet Dashboard (`/pets`)
- Accessible only to logged-in users (protected route)
- Allow users to:
  - Add a new pet with:  
    → `name`, `type`, `age`, `notes`  
  - View a list of pets they’ve added  
  - Delete any of their pets
- Store pet data in **Firestore**, linked to the user’s UID

---

### 📁 Firestore Document Structure
Each pet entry should follow this structure:

```json
{
  "uid": "USER_ID",
  "name": "Tommy",
  "type": "Dog",
  "age": 2,
  "notes": "Loves playing fetch",
  "createdAt": TIMESTAMP
}
```

---

### 🧠 Redux Toolkit Setup
- Create an `authSlice` with:
  - `loginUser` – to store user on login
  - `logoutUser` – to clear user on logout
  - `setUser` – to persist user from `onAuthStateChanged`
- Access user data from Redux throughout the app

---

### 🧩 Suggested Components
- `Login` – Login/Register form
- `Navbar` – Shows email + Logout
- `PetList` – Displays user’s pets
- `PetCard` – Renders individual pet with delete option
- `AddPetForm` – Form to add a new pet
- `PrivateRoute` – Protects `/pets` route from unauthenticated access

---

### 🧪 Bonus (Optional Enhancements)(only if you are able to complete above functionality early)
- Add a dropdown to select pet type
- Sort pets by creation date (latest first)
- Show 6 pets per page
---
