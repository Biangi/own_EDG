import React from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './08-antd-mobile/redux/store';
import Home from './08-antd-mobile/App'

import './Home/css/home.css'
const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <Provider store={store}>
        <Home/>
    </Provider>
    </React.StrictMode> 
)
// console.log("hello wrold")