import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Global.css";
import App from "./App.jsx";
import { ContactProvider } from "./Context/ContactContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactProvider>
      <App />
    </ContactProvider>
  </StrictMode>
);
