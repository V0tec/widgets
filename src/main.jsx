import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EventBusProvider } from "./context/EventBusContext";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EventBusProvider>
      <App />
    </EventBusProvider>
  </React.StrictMode>
);
