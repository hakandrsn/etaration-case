import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, deleteCart } from '../redux/features/cart/cartSlice';
import {Link} from "react-router-dom";

const CardCustom = ({item}) => {
    const {cart} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    return (
        <Card>
       <Link to={`/product/${item.id}`} style={{textDecoration:"none"}}>
        <CardMedia
            sx={{height: 150}}
            image={item.image}
            title="green iguana"
        />
           <CardContent>
               <Typography variant="body2" color="grey" marginBottom={1}>
                   {item.price + " ₺"}
               </Typography>
               <Typography gutterBottom variand="inherit" color="black"
                           sx={{marginBottom: -2, fontSize: 19}}
                           noWrap={true}>
                   {item.name}
               </Typography>
           </CardContent>
       </Link>
        <CardActions>
           {cart.length>0 && cart?.find((c) => c.item.id === item.id) ?
                <Button onClick={() => dispatch(deleteCart(item.id))} color="error" fullWidth variant={"contained"}
                        size="small">
                    Delete to Cart
                </Button>
                :
                <Button onClick={() => dispatch(addCart({"item":item,"count":1}))} color="primary" fullWidth
                        variant={"contained"} size="small">
                    Add to Cart
                </Button>
            }
        </CardActions>
    </Card>
    );
};

export default CardCustom;