import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)', // Resta la altura del navbar
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #e3f0ff 0%, #fafcff 100%)',
        p: 0,
        m: 0,
      }}
    >
      <Typography variant="h2" fontWeight={700} color="primary" gutterBottom sx={{ fontSize: { xs: '2.2rem', md: '3.5rem' } }}>
        Bienvenido a la Tienda
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '1.1rem', md: '1.7rem' } }}>
        ¡Explora nuestros productos y añade lo que te guste al carrito!
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4, width: { xs: '90vw', md: '40vw' } }}>
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
          alt="Shopping"
          style={{
            width: '100%',
            maxWidth: 600,
            height: 'auto',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
          }}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={Link}
        to="/shop"
        sx={{ mt: 2, fontWeight: 600, borderRadius: 2, px: 4 }}
      >
        Ir a la tienda
      </Button>
    </Box>
  );
};

export default Home; 