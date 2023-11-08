import React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const cartItemCount = cartItems ? cartItems.length : 0;

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' component='div'>
                    Virtual Store
                </Typography>
                <Typography variant='h6'>
                    Cart ({cartItemCount})
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;