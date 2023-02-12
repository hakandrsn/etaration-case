import React, {useEffect} from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import {addCart, addLocalCart, decrementCount, incrementCount} from "../../redux/features/cart/cartSlice";
import {useDispatch, useSelector} from 'react-redux';

const Cart = () => {
    const {cart} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const CartCounter = ({count, id}) => {
        return (
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 20,
                alignContent: "center"
            }}>
                <button onClick={() => dispatch(decrementCount(id))} style={{
                    fontSize: 20,
                    marginBottom: 4,
                    border: "none",
                    backgroundColor: "transparent",
                    padding: 2,
                    cursor: "pointer"
                }}>-
                </button>
                <span style={{
                    marginLeft: 4,
                    marginRight: 4,
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: 5,
                    padding: 3
                }}>{count}</span>
                <button onClick={() => dispatch(incrementCount(id))} style={{
                    fontSize: 20,
                    border: "none",
                    backgroundColor: "transparent",
                    padding: 2,
                    cursor: "pointer"
                }}>+
                </button>
            </Box>
        )
    }
    const listCart = () => {
        return (
            <Card variant="outlined" sx={{width: "75%", minWidth: 200, marginBottom: 4}}>
                <CardContent component="div">
                    <Typography component="div" color="primary" marginBottom={1}>
                        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: 0}}>
                            {
                                cart.length > 0 && cart.map((i) => {
                                    const {item: {name, image, price, id}, count} = i;
                                    return (
                                        <ListItem key={id}
                                                  sx={{padding: 0, margin: 0}}
                                        >
                                            <ListItemAvatar>
                                                <Avatar alt={name} src={image}/>
                                            </ListItemAvatar>
                                            <ListItemText sx={{width: "100%"}} primary={name} secondary={price}/>
                                            <CartCounter count={count} id={id}/>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Typography>
                </CardContent>
            </Card>
        )
    }
    return (
        <Grid2 width={"100%"} display="flex"
               alignItems="center" flexDirection="column" item>
            <div style={{textTransform: "capitalize", textAlign: "center", marginBottom: 4}}>Products</div>
            <Divider sx={{marginY: 1}}/>
            {listCart()}
            <Card variant="outlined" sx={{width: "75%", minWidth: 200}}>
                <CardContent>
                    <Typography sx={{color: "black", fontSize: 18}} color="primary">
                        Total Price : {cart.length > 0 && cart.reduce((a, b) => a + (b.item.price * b.count), 0) + " ₺"}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="primary" fullWidth variant="contained" size="small">
                        Checkout
                    </Button>
                </CardActions>
            </Card>
        </Grid2>
    );
};

export default Cart;