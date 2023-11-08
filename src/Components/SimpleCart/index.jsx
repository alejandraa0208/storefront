import React from 'react';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const SimpleCart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <List>
      {cartItems && cartItems.map((item) => ( // Check if cartItems is not undefined
        <ListItem key={item.id}>
          <ListItemText primary={item.name} />
          {/* Add remove from cart functionality if needed */}
        </ListItem>
      ))}
    </List>
  );
};

export default SimpleCart;
