import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const activeCategory = useSelector((state) => state.categories.activeCategory);

  const dispatch = useDispatch();

  const filteredProducts = Array.isArray(products) ? products.filter(
    (product) => !activeCategory || product.category === activeCategory
  ) : [];

  return (
    <Grid container spacing={2} sx={{ minHeight: '100vh', width: '100%', flexGrow: 1 }}>
      {filteredProducts.map((product) => (
        <Grid item key={product.name} xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
          <Card sx={{ flexGrow: 1, display: 'flex', m: 'auto' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: 140 }}
                image={product.image}
                title={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body2">
                  Price: ${product.price}
                </Typography>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;