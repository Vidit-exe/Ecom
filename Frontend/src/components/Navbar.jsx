import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Button, AppBar, Toolbar, Typography, IconButton, Container, Box, Grid, Link as MuiLink } from '@mui/material';
import { logoutUser } from '../Api/authService';

const logout = () => {
    logoutUser();
    location.href = "/auth"
}

const Navbar = () => (
  <AppBar position="sticky" color="default" elevation={1}>
    <Toolbar>
      <Typography variant="h6" color="primary" sx={{ flexGrow: 1 }}>
        TrendyStore
      </Typography>
      <MuiLink href="/" underline="none" color="inherit" sx={{ mx: 1 }}>Home</MuiLink>
      <MuiLink href="/products" underline="none" color="inherit" sx={{ mx: 1 }}>Products</MuiLink>
      <MuiLink href="/blog" underline="none" color="inherit" sx={{ mx: 1 }}>Blog</MuiLink>
      <MuiLink href="/cart" underline="none" color="inherit" sx={{ mx: 1 }}>Cart</MuiLink>
      <MuiLink href="/contact" underline="none" color="inherit" sx={{ mx: 1 }}>Contact</MuiLink>
      <MuiLink href="/about" underline="none" color="inherit" sx={{ mx: 1 }}>About</MuiLink>
      <MuiLink underline="none" color="inherit" sx={{ mx: 1 }}><Button onClick={logout}>Logout</Button></MuiLink>
      <IconButton color="primary">
        {/* <ShoppingCartIcon /> */}
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Navbar