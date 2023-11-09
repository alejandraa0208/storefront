import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [
      { name: 'electronics', displayName: 'Electronics', description: 'All your electronic needs' },
      { name: 'books', displayName: 'Books', description: 'Read your favorite stories' },
    ],
    activeCategory: null,
  };

  export const fetchCategories = () => async (dispatch) => {
    const response = await fetch('https://api-js401.herokuapp.com/api/v1/categories');
    const data = await response.json();
    dispatch(setCategories(data.results));
  }
  
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
  