import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import categoriesReducer from './categories/index';
import productsReducer from './products';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        categories: categoriesReducer,
        products: productsReducer,
    },
});