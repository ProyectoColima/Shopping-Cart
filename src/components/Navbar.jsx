import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Toolbar, Typography, IconButton, Badge, Button, Box } from '@mui/material';

const Navbar = ({ cartCount }) => {
  return (
    <AppBar position="static" sx={{ width: '100%', m: 0, p: 0, left: 0, boxSizing: 'border-box', overflowX: 'hidden' }}>
      <Toolbar sx={{ width: '100%', m: 0, p: 0, boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Button color="inherit" component={Link} to="/">Inicio</Button>
          <Button color="inherit" component={Link} to="/shop">Tienda</Button>
        </Box>
        <IconButton color="inherit" component={Link} to="/cart">
          <Badge badgeContent={cartCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 