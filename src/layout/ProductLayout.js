import React from 'react';
import Header from "../components/Header";
import {Route} from "react-router-dom";
import {routes} from "./routes";
import {useGetProductsQuery} from "../redux/services/products";

const ProductLayout = () => {
    useGetProductsQuery("products")
    const listRoute =()=>{
        return routes.map((route,index)=>{
            return <Route key={index} path={route.path} component={route.component} exact={route.exact} />
        })
    }
    return (
        <div>
            <Header />
            {listRoute()}
        </div>
    );
};

export default ProductLayout;