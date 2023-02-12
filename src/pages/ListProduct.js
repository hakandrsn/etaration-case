import React, { useEffect, useRef } from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";
import Filter from "../components/filter/Filter";
import List from "../components/list/List";
import Cart from "../components/cart/Cart";
import useWindowSize from "../hooks/useWindowSize";
import {useDispatch, useSelector} from 'react-redux';
import {useGetProductsQuery} from "../redux/services/products";
import {addLocalCart} from "../redux/features/cart/cartSlice";
import useLocalStorage from "../hooks/useLocalStorage";

const ListProduct = () => {
    const size = useWindowSize();
    const { cart } = useSelector(state => state.cart)
    const changeSize=(s,a,b)=>{
        return size.width < s ? a : b
    }

    return (
        <Grid2 marginTop={3} container justifyContent="space-evenly" alignItems="flex-start" flexDirection={changeSize(600,"column","row")}>
            <Grid2 container item xs={changeSize(786,12,2)} display="flex" justifyContent="center" >
                <Filter />
            </Grid2>
            <Grid2 container item xl={8} md={6} xs={changeSize(786,12,5)} display="flex">
                <List />
            </Grid2>
            {cart.length > 0 && <Grid2 container item xs={changeSize(786,12,2)}   >
                <Cart />
            </Grid2>}
        </Grid2>
    );
};

export default ListProduct;