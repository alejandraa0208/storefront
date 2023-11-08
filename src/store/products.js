import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        { category: 'electronics', name: 'TV', description: 'A 65 inch TV', price: 400, inventoryCount: 25 },
        { category: 'books', name: 'The Great Gatsby', description: 'Classic novel', price: 10, inventoryCount: 100 },
    ],
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
});

export const { setProducts, reduceStock } = productsSlice.actions;

export default productsSlice.reducer;