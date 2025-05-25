import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

// axios.defaults.baseURL = "https://danatravel-be.vercel.app/";
axios.defaults.baseURL = "https://dana-travel-backend.vercel.app/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
