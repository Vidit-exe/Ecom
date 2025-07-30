import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, IconButton, Button, Divider, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from 'framer-motion';

const cartItems = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 2999,
    quantity: 1,
    image: 'https://via.placeholder.com/300x200?text=Headphones',
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: 1599,
    quantity: 2,
    image: 'https://via.placeholder.com/300x200?text=Jacket',
  },
];

const Cart = () => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Your Shopping Cart
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {cartItems.map((item) => (
              <Card key={item.id} sx={{ mb: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.name}
                      sx={{ height: '100%', objectFit: 'cover' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CardContent>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography color="text.secondary">Price: ₹{item.price}</Typography>
                      <Typography color="text.secondary">Quantity: {item.quantity}</Typography>
                      <IconButton color="error" sx={{ mt: 1 }}>
                        <DeleteIcon />
                      </IconButton>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={4}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Order Summary
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Stack direction="row" justifyContent="space-between" mb={1}>
                  <Typography>Subtotal</Typography>
                  <Typography>₹{totalPrice}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" mb={2}>
                  <Typography>Shipping</Typography>
                  <Typography>₹100</Typography>
                </Stack>
                <Divider sx={{ mb: 2 }} />
                <Stack direction="row" justifyContent="space-between" fontWeight="bold">
                  <Typography>Total</Typography>
                  <Typography>₹{totalPrice + 100}</Typography>
                </Stack>
                <Button fullWidth variant="contained" sx={{ mt: 3 }}>
                  Proceed to Checkout
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cart;
