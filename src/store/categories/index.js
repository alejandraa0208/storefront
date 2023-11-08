import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [
      { name: 'electronics', displayName: 'Electronics', description: 'All your electronic needs' },
      { name: 'books', displayName: 'Books', description: 'Read your favorite stories' },
    ],
    activeCategory: null,
  };
  
  export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
      setActiveCategory: (state, action) => {
        state.activeCategory = action.payload;
      },
    },
  });
  
  export const { setActiveCategory } = categoriesSlice.actions;
  
  export default categoriesSlice.reducer;
  