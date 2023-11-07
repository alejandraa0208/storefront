import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Products = () => {
  const products = useSelector((state) => state.products);
  const activeCategory = useSelector((state) => state.categories.activeCategory);

  const filteredProducts = products.filter(
    (product) => !activeCategory || product.category === activeCategory
  );

  return (
    <Grid container spacing={2} style={{ width: '100%', height: '100%' }}>
      {filteredProducts.map((product) => (
        <Grid item key={product.name} xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: { xs: '100%', sm: '100%', md: '345px' }, m: 'auto' }}>
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
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;