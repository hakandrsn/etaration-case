import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    Typography
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {isEmpty} from "lodash";
import Cart from "../components/cart/Cart";
import CardDetail from "../components/detail/CardDetail";
import BackDropCustom from "../components/utils/BackDropCustom";

const DetailProduct = () => {
    const {id} = useParams();
    const {data} = useSelector(state => state.products)
    const {cart} = useSelector(state => state.cart)
    const [product, setProduct] = React.useState({})
    useEffect(() => {
        if (isEmpty(data)) return;
        setProduct(data.find(item => item.id === id))
    }, [id, data.length])
    if (product === {}) return <Typography variant="h1">Loading...</Typography>;
    return (
        <Grid2 marginTop={3} container justifyContent="space-evenly" alignItems="flex-start">
            <BackDropCustom loading={product === {}} />
            <Grid2 sx={{display: "flex", justifyContent: "center", marginTop: 5}} item xs={cart.length>0?8:12}>
                {product !== {} && <CardDetail product={product} /> }
            </Grid2>
            {cart.length > 0 &&
                <Grid2 md={4} xs={5}>
                    <Cart/>
                </Grid2>
            }
        </Grid2>
    );
};

export default DetailProduct;