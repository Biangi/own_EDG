import React from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Home from './06-react-redux/App'
import store from './06-react-redux/redux/store';
import './Home/css/home.css'
const root = createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <Home/>
    </Provider>
    // </React.StrictMode> 
)
// console.log("hello wrold")