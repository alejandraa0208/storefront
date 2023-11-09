import { createSlice } from '@reduxjs/toolkit';
import { reduceStock } from './products';

const initialState = {
    cart: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find(item => item._id === action.payload._id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
    }
});

export const handleAddToCart = (product) => async (dispatch, getState) => {
    const amount = 1;

    const products = getState().products.products;
    const productToUpdate = products.find(p => p._id === product._id);
    if (productToUpdate && productToUpdate.inventoryCount >= amount) {
        dispatch(reduceStock({ productId: product._id, amount }));
        dispatch(handleAddToCart(product));
        await fetch(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ inventoryCount: product.inventoryCount - amount }),
        });
    } else {
        alert('Not enough stock available.');
    }
}

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;