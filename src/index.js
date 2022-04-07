import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { UserContextProvider } from "./contexts/UserContext";
import { SelectedPersonProvider } from "./contexts/PeopleContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SelectedPersonProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </SelectedPersonProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
