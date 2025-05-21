import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductCard = ({ product, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  };

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <Card sx={{ maxWidth: 300, m: 2 }}>
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
        <Typography variant="body2" color="text.secondary">{product.description.slice(0, 60)}...</Typography>
        <Typography variant="subtitle1" color="primary">${product.price}</Typography>
        <Box display="flex" alignItems="center" mt={2}>
          <IconButton onClick={decrement}><RemoveIcon /></IconButton>
          <TextField type="number" value={quantity} onChange={handleChange} inputProps={{ min: 1, style: { width: 40, textAlign: 'center' } }} />
          <IconButton onClick={increment}><AddIcon /></IconButton>
        </Box>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={() => onAdd(product, quantity)}>
          Añadir al carrito
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard; 