import React from 'react'
import { createRoot } from 'react-dom/client';
import Home from './05-redux/App'
import './Home/css/home.css'
const root = createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
        <Home/>
    // </React.StrictMode> 
)
// console.log("hello wrold")