import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    Backdrop,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    CircularProgress,
    Typography
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {isEmpty} from "lodash";
import Cart from "../components/cart/Cart";
import useWindowSize from "../hooks/useWindowSize";
import {addCart, deleteCart} from "../redux/features/cart/cartSlice";

const DetailProduct = () => {
    const {id} = useParams();
    const {data} = useSelector(state => state.products)
    const {cart} = useSelector(state => state.cart)
    const [product, setProduct] = React.useState({})
    const dispatch = useDispatch()
    const size = useWindowSize();
    useEffect(() => {
        if (isEmpty(data)) return;
        setProduct(data.find(item => item.id === id))
    }, [id, data.length])
    const ProductCard = () => {
        if (product !== {}) return (
            <Card sx={{
                display: "flex",
                flexDirection: size.width < 800 && "column",
                width: size.width < 800 ? "85%" : "90%",
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
                <CardActions sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", paddingX: 3}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.brand}
                    </Typography>
                    <Typography>
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
    }
    if (product === {}) return <Typography variant="h1">Loading...</Typography>;
    return (
        <Grid2 marginTop={3} container justifyContent="space-evenly" alignItems="flex-start">
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={product === {}}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
            <Grid2 sx={{display: "flex", justifyContent: "center", marginTop: 5}} item xs={cart.length>0?8:12}><ProductCard/></Grid2>
            {cart.length > 0 &&
                <Grid2 xs={4}>
                    <Cart/>
                </Grid2>
            }
        </Grid2>
    );
};

export default DetailProduct;