import React from "react"; 
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from 'axios'

axios.defaults.baseURL = "https://be-pbl-6.vercel.app/";
// axios.defaults.baseURL = "https://danatravel-be.vercel.app/";
// axios.defaults.baseURL = "http://localhost:5000";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
