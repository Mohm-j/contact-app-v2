# 📇 Contact App

A simple contact management app built with React, Context API, and useReducer. All data is stored locally using `localStorage`.

---

## ✨ Features

- Add new contacts
- Edit existing contacts
- Delete all contacts (with confirmation modal)
- Search through contacts with real-time filtering
- Display success and error messages (alerts)
- Persist data using `localStorage`
- Clean, modular design with CSS Modules
- State management with Context API & Reducer hooks

---

## 🛠 Tech Stack

- React (with Hooks: useState, useEffect, useReducer, useContext)
- Context API for global state management
- useReducer for predictable state updates
- localStorage for data persistence
- CSS Modules for scoped styling
- Vite as the build tool and dev server

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash

git clone https://github.com/Mohm-j/contact-app-v2.git

cd contact-app-v2.git


```

### 2. Install dependencies repository

npm install

### 3. Start the development server

npm run dev

📁 Project Structure

src/
├── components/
│ ├── Contact.jsx
│ ├── ContactForm.jsx  
│ ├── ContactList.jsx
│ ├── ContactItem.jsx
│ ├── Modal.jsx
│ ├── Alert.jsx
│ └── SearchBar.jsx
├── context/
│ └── ContactContext.jsx
├── Layout/
│ └── Layout.jsx
├── utils/
│ └── helper.js
├── App.jsx
└── main.jsx

💡 Notes

.Data is saved in the browser using localStorage, so it persists across page reloads.

.useEffect hooks are used to load and sync contacts with localStorage.

.Form inputs are validated for completeness and correct formats before adding or updating contacts.

.Alert messages appear temporarily and clear automatically.

.Confirmation modal is used before deleting all contacts.

👤 Author

[GitHub Profile](https://github.com/Mohm-j)
