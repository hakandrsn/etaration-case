import React, {useEffect} from 'react';
import Header from "../components/Header";
import {Route} from "react-router-dom";
import {routes} from "./routes";
import {useGetProductsQuery} from "../redux/services/products";
import {useDispatch, useSelector} from "react-redux";
import {getCartFromLocalStorage} from "../redux/features/cart/localSave";
import {addLocalCart} from "../redux/features/cart/cartSlice";

const ProductLayout = () => {
    useGetProductsQuery("products")
    const {cart}=useSelector(state=>state.cart)
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(addLocalCart(getCartFromLocalStorage()))
    },[cart.length])
    const listRoute =()=>{
        return routes.map((route,index)=>{
            return <Route
                key={index}
                path={route.layout+ route.path}
                component={route.component}
                exact={route.exact} />
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