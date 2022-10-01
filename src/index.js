import React from 'react'
import { createRoot } from 'react-dom/client';
import Home from './04-router/App'

const root = createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
        <Home/>
    // </React.StrictMode> 
)
console.log("hello wrold")