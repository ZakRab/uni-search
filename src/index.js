import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SearchProvider } from "./context/SearchContext";
import { UserProvider } from "./context/UserContext";
import { WikiProvider } from "./context/WikiContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WikiProvider>
    <UserProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </UserProvider>
  </WikiProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
