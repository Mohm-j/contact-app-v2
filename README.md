# 📇 Contact App

A simple and modern contact management app built with React, Context API, and useReducer. The project supports both **localStorage** (main branch) and a **mock REST API with JSON Server** (in a separate branch) for managing contacts.

---

## ✨ Features

* Add, edit, and delete contacts
* Delete all contacts with a confirmation modal
* Real-time search and filtering
* Alert system for success and error messages
* Form validation before submission
* Clean and modular UI with CSS Modules
* State management using Context API + useReducer
* Data persistence with localStorage or json-server (depending on the branch)

---

## 🌐 Available Branches

### ✅ `main`

* Uses `localStorage` to store and manage contacts locally.

### ✅ `json-server`

* Contacts are managed via a mock REST API using `json-server`
* Axios is used for making HTTP requests
* The app runs concurrently with the mock server using `concurrently`

---

## 💠 Tech Stack

* **React** (Hooks: `useState`, `useEffect`, `useReducer`, `useContext`)
* **Context API** for global state
* **useReducer** for predictable state updates
* **Axios** for API communication
* **JSON Server** as mock backend
* **localStorage** (on `main`) for persistence
* **CSS Modules** for scoped styling
* **Vite** as build tool and dev server
* **Concurrently** to run frontend and backend together

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Mohm-j/contact-app-v2.git
cd contact-app-v2
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run the app (with JSON Server)

Make sure you're on the `json-server` branch:

```bash
git checkout json-server
```

Start both React app and json-server concurrently:

```bash
npm start
```

This will:

* Start Vite dev server on [http://localhost:5173](http://localhost:5173)
* Start JSON Server on [http://localhost:3001](http://localhost:3001)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Contact.jsx
│   ├── ContactForm.jsx  
│   ├── ContactList.jsx
│   ├── ContactItem.jsx
│   ├── Modal.jsx
│   ├── Alert.jsx
│   └── SearchBar.jsx
├── context/
│   └── ContactContext.jsx
├── services/
│   └── api.js          ← Axios API methods (in json-server branch)
├── utils/
│   └── helper.js
├── Layout/
│   └── Layout.jsx
├── App.jsx
└── main.jsx
```

---

## 💡 Notes

* In `main`, data is stored in **localStorage** and syncs on every change.
* In `json-server`, data is stored and synced via a RESTful API (`db.json`) using **json-server**.
* Alert messages automatically disappear after a few seconds.
* The app prevents adding/editing contacts with empty or invalid inputs.
* The delete-all operation asks for confirmation in a modal.

---

## 👤 Author

* [GitHub Profile](https://github.com/Mohm-j)

---

## 🛆 Additional Scripts

* `npm run dev` – Start development server (main branch)
* `npm run server` – Run only JSON Server on port 3001
* `npm start` – Run both frontend and backend together (only in `json-server` branch)
