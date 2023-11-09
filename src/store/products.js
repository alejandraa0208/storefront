import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        reduceStock: (state, action) => {
            const { productId, amount } = action.payload;
            const product = state.products.find(p => p._id === productId);
            if (product) {
                product.inventoryCount = Math.max(0, product.inventoryCount - amount);
            }
        },
        // You might need an increaseStock reducer here too for removing items from the cart
    },
});

export const fetchProducts = () => async (dispatch) => {
    const response = await fetch('https://api-js401.herokuapp.com/api/v1/products');
    const data = await response.json();
    dispatch(setProducts(data.results));
}

export const { setProducts, reduceStock } = productsSlice.actions;

export default productsSlice.reducer;
