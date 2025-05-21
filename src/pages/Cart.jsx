import React from 'react';
import { useCart } from '../context/CartContext';
import { 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Box,
  Button,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <Box sx={{ width: '100%', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f8fbff 0%, #e3f0ff 100%)', boxSizing: 'border-box' }}>
        <Typography variant="h5" gutterBottom>
          Tu carrito está vacío
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          href="/shop"
          sx={{ mt: 2 }}
        >
          Ir a la tienda
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', minHeight: '80vh', p: { xs: 1, md: 4 }, background: 'linear-gradient(135deg, #f8fbff 0%, #e3f0ff 100%)', boxSizing: 'border-box' }}>
      <Typography variant="h3" fontWeight={700} color="primary" align="center" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.7rem' } }}>
        Tu Carrito
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <List>
            {cart.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '80px', height: '80px', objectFit: 'contain', marginRight: '16px' }} 
                  />
                  <ListItemText
                    primary={item.title}
                    secondary={`$${item.price.toFixed(2)}`}
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                    <IconButton 
                      size="small" 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                    <IconButton 
                      size="small" 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <ListItemSecondaryAction>
                    <Typography variant="subtitle1" sx={{ mr: 2 }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                    <IconButton 
                      edge="end" 
                      aria-label="delete"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Resumen del Pedido
              </Typography>
              <Box sx={{ my: 2 }}>
                <Typography variant="subtitle1">
                  Subtotal: ${total.toFixed(2)}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  Envío: Gratis
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6">
                  Total: ${total.toFixed(2)}
                </Typography>
              </Box>
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                sx={{ mb: 2 }}
                onClick={() => {/* Implementar checkout */}}
              >
                Proceder al Pago
              </Button>
              <Button 
                variant="outlined" 
                color="error" 
                fullWidth
                onClick={clearCart}
              >
                Vaciar Carrito
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart; 