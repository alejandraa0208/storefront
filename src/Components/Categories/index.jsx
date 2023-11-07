import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { setActiveCategory } from '../../store/categories/index';

const Categories = () => {
    const categories = useSelector((state) => state.categories.categories);
    const dispatch = useDispatch();
  
    const handleCategoryClick = (category) => {
      dispatch(setActiveCategory(category));
    };
  
    return (
      <List component="nav">
        {categories.map((category) => (
          <ListItem button key={category.name} onClick={() => handleCategoryClick(category.name)}>
            <ListItemText primary={category.displayName} />
          </ListItem>
        ))}
      </List>
    );
  };
  
  export default Categories;