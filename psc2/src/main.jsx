import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { IdeaProvider } from "./context/IdeaContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <IdeaProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IdeaProvider>
    </AuthProvider>
  </React.StrictMode>
);
