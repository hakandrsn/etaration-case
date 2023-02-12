import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Container, TextField } from "@mui/material";
import { TextFields, Wallet } from "@mui/icons-material";
import { useDispatch, useSelector } from 'react-redux';
import { searchData } from '../redux/features/product/productSlice';
import {Link} from "react-router-dom";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Header() {
    const { cart } = useSelector(state => state.cart);
    const {search} = useSelector(state => state.products);
    const dispatch = useDispatch()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: "#0984e3" }} position="static">
                <Container maxWidth="xxl">
                    <Toolbar>
                        <Link to={"/products"} style={{textDecoration:"none",color:"black"}}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                Etaration
                            </Typography>
                        </Link>
                        <Box sx={{ flexGrow: 1 }} />
                        <Search sx={{ maxWidth: 600, minWidth: 200, width: 350 }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                type="search"
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                value={search}
                                onChange={(e) => dispatch(searchData(e.target.value))}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Box>
                                <IconButton name="wallet" size="large" aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={cart.length} color="error">
                                        <Wallet />
                                    </Badge>
                                </IconButton>
                                <span>{cart.length>0 && cart.reduce((a,b)=>a+(b.item.price*b.count),0)+" ₺"}</span>
                            </Box>

                            <Box>
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <span>Hakan Dursun</span>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}