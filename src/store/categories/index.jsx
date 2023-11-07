import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [
            { name: 'electronics', 
            displayName: 'Electronics', 
            description: 'Gadgets and gizmos aplenty.',
            price: '400',
            image: 'src/assets/tv.jpeg'
            },
            { name: 'books', 
            displayName: 'Books', 
            description: 'Explore new worlds.' ,
            price: '10',
            image: 'src/assets/greatgatsby.jpeg'
            },
        ],
        activeCategory: null,
    },
    reducers: {
        setActiveCategory(state, action) {
            state.activeCategory = action.payload;
        },
    },
});

export const { setActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;