import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {CssBaseline} from "@mui/material";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import ProductLayout from "./layout/ProductLayout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Provider store={store}>
            <CssBaseline/>
            <BrowserRouter>
                <Switch>
                    <Route path="/" render={(props)=> <ProductLayout {...props} />} />
                    <Redirect to="/products" from="/" />
                </Switch>
            </BrowserRouter>
        </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
