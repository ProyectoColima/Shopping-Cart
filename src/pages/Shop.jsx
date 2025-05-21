import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { Grid, CircularProgress, Alert, Box, Typography } from '@mui/material';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error al cargar los productos');
        setLoading(false);
      });
  }, []);

  if (loading) return <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 8 }}><CircularProgress /></Box>;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box sx={{ width: '100%', minHeight: '80vh', p: { xs: 1, md: 4 }, background: 'linear-gradient(135deg, #f8fbff 0%, #e3f0ff 100%)', boxSizing: 'border-box' }}>
      <Typography variant="h3" fontWeight={700} color="primary" align="center" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.7rem' } }}>
        Tienda
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <ProductCard product={product} onAdd={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Shop; 