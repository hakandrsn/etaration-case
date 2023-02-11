import React, { useEffect, useRef } from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";
import Filter from "../components/filter/Filter";
import List from "../components/List";
import Cart from "../components/cart/Cart";
import useWindowSize from "../hooks/useWindowSize";
import { useSelector } from 'react-redux';
import {useGetProductsQuery} from "../redux/services/products";

const ListProduct = () => {
    const size = useWindowSize();

    const { cart } = useSelector(state => state.cart)
    return (
        <Grid2 marginTop={3} container justifyContent="space-evenly" alignItems="flex-start">
            <Grid2 container item xs={2} display="flex" justifyContent="center" >
                <Filter />
            </Grid2>
            <Grid2 container item xl={8} md={6} xs={5} display="flex">
                <List />
            </Grid2>
            {cart.length > 0 && <Grid2 container item xs={2} display={size.width < 786 ? "none" : "flex"}  >
                <Cart />
            </Grid2>}
        </Grid2>
    );
};

export default ListProduct;