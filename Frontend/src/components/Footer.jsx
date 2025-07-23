import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Button, AppBar, Toolbar, Typography, IconButton, Container, Box, Grid, Link as MuiLink } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: '#111', color: 'white', py: 6, mt: 6 }}>
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>TrendyStore</Typography>
          <Typography variant="body2" color="gray">
            Your favorite destination for trendy products. Quality meets style.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>Quick Links</Typography>
          <MuiLink href="#" color="inherit" display="block">About Us</MuiLink>
          <MuiLink href="#" color="inherit" display="block">Blog</MuiLink>
          <MuiLink href="#" color="inherit" display="block">Careers</MuiLink>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>Follow Us</Typography>
          <MuiLink href="#" color="inherit" display="block">Instagram</MuiLink>
          <MuiLink href="#" color="inherit" display="block">Facebook</MuiLink>
          <MuiLink href="#" color="inherit" display="block">Twitter</MuiLink>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer