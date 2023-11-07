import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: [
        { category: 'electronics', name: 'TV', description: 'A 65 inch TV', price: 400, inventoryCount: 25 },
        { category: 'books', name: 'The Great Gatsby', description: 'Classic novel', price: 10, inventoryCount: 100 },
    ],
    reducers: {

    },
});

export default productsSlice.reducer;