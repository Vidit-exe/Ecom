import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Button, AppBar, Toolbar, Typography, IconButton, Container, Box, Grid, Link as MuiLink } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Home = () => {
  const products = [
    { id: 1, name: 'Product One', price: '$29.99', image: 'path-to-image-1' },
    { id: 2, name: 'Product Two', price: '$49.99', image: 'path-to-image-2' },
    { id: 3, name: 'Product Three', price: '$19.99', image: 'path-to-image-3' },
  ];

  const reviews = [
    { id: 1, name: 'John Doe', comment: 'Amazing product!', rating: 5 },
    { id: 2, name: 'Jane Smith', comment: 'Loved the quality and support.', rating: 4 },
  ];

  const blogs = [
    { id: 1, title: 'Top 10 Shopping Tips', description: 'Learn the secrets of savvy shoppers.' },
    { id: 2, title: 'Why Quality Matters', description: 'Understand the value of great products.' },
  ];

  return (
    <Box>
      <Container sx={{ py: 6 }}>
        {/* Hero Section */}
        <Box textAlign="center" mb={8}>
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>Welcome to Our Trendy Store</Typography>
          </motion.h1>
          <Typography variant="h6" color="text.secondary" mb={2}>
            “Style is a way to say who you are without having to speak.”
          </Typography>
          <Button variant="contained" size="large">Shop Now</Button>
        </Box>

        {/* Product Showcase */}
        <Box mb={8}>
          <Typography variant="h5" fontWeight="bold" mb={3}>Featured Products</Typography>
          <Grid container spacing={4}>
            {products.map(product => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card>
                  <img src={product.image} alt={product.name} style={{ height: 200, width: '100%', objectFit: 'cover' }} />
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography color="text.secondary">{product.price}</Typography>
                    <Button variant="outlined" fullWidth sx={{ mt: 2 }}>Add to Cart</Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Reviews Section */}
        <Box mb={8}>
          <Typography variant="h5" fontWeight="bold" mb={3}>Customer Reviews</Typography>
          <Grid container spacing={3}>
            {reviews.map(review => (
              <Grid item xs={12} md={6} key={review.id}>
                <Box sx={{ p: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
                  <Typography fontWeight="bold">{review.name}</Typography>
                  <Typography fontStyle="italic">"{review.comment}"</Typography>
                  <Typography color="warning.main">{'★'.repeat(review.rating)}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Blog Section */}
        <Box mb={8}>
          <Typography variant="h5" fontWeight="bold" mb={3}>Latest from the Blog</Typography>
          <Grid container spacing={4}>
            {blogs.map(blog => (
              <Grid item xs={12} md={6} key={blog.id}>
                <Card sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>{blog.title}</Typography>
                  <Typography color="text.secondary">{blog.description}</Typography>
                  <Button sx={{ mt: 2 }} variant="contained">Read More</Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;