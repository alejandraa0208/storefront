import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/index';
import productsReducer from './products';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
    },
});