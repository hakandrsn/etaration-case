import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardMedia, Typography} from "@mui/material";
import {addCart, deleteCart} from "../../redux/features/cart/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import useWindowSize from "../../hooks/useWindowSize";

const CardDetail = ({product}) => {
    const {cart} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const size = useWindowSize();
    return (
        <Card sx={{
            display: "flex",
            flexDirection: size.width < 800 && "column",
            width: size.width < 800 ? "80%" : "90%",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={product.image}
                    alt="green iguana"
                    sx={{minWidth: 170}}
                />
            </CardActionArea>
            <CardActions sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", paddingX: 3,height:"100%"}}>
                <Typography gutterBottom variant="h5" component="div">
                    {product.brand}
                </Typography>
                <Typography variant="h6" color="grey">
                    {product.price}
                </Typography>
                {cart.length > 0 && cart?.find((c) => c.item.id === product.id) ?
                    <Button sx={{marginY: 2}} onClick={() => dispatch(deleteCart(product.id))} color="error"
                            fullWidth variant={"contained"}
                            size="small">
                        Delete to Cart
                    </Button>
                    :
                    <Button sx={{marginY: 2}} onClick={() => dispatch(addCart({"item": product, "count": 1}))}
                            color="primary" fullWidth
                            variant={"contained"} size="small">
                        Add to Cart
                    </Button>
                }
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default CardDetail;