import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import categoriesReducer from './categories/index';
import productsReducer from './products';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});