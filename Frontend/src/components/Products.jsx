import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  Button,
  Pagination,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/products/productActions';

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error, totalPages } = useSelector((state) => state.products);

  const [page, setPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('');

  // Fetch products from backend
  useEffect(() => {
    dispatch(getProducts({ page, category: currentCategory }));
  }, [dispatch, page, currentCategory]);

  // Extract categories from products dynamically
  const categories = [...new Set(products?.map((p) => p.category))];

  console.log("Products:: ", products);
  console.log("Category:: ", categories);
  

  const handleChange = (event, newCategory) => {
    setCurrentCategory(newCategory);
    setPage(1); // Reset page when category changes
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ py: 6, backgroundColor: '#f5f5f5' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" fontWeight="bold" align="center" mb={4}>
            Explore Our Products
          </Typography>
        </motion.div>

        {/* Category Tabs */}
        {categories.length > 0 && (
          <Tabs
            value={currentCategory}
            onChange={handleChange}
            centered
            textColor="primary"
            indicatorColor="primary"
            sx={{ mb: 4 }}
          >
            <Tab label="All" value="" />
            {categories.map((category) => (
              <Tab key={category} label={category} value={category} />
            ))}
          </Tabs>
        )}

        {/* Loading and Error Handling */}
        {loading ? (
          <Box textAlign="center" py={6}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" align="center">{error}</Typography>
        ) : (
          <>
            <Grid container spacing={4}>
              {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product._id}>
                  <motion.div whileHover={{ scale: 1.03 }}>
                    <Card elevation={3}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={
                          product.images?.[0]?.url || 'https://via.placeholder.com/300x200?text=No+Image'
                        }
                        alt={product.name}
                      />
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {product.name}
                        </Typography>
                        <Typography color="text.secondary">₹{product.price}</Typography>
                        <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <Box display="flex" justifyContent="center" mt={4}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                />
              </Box>
            )}
          </>
        )}
      </Container>
    </Box>
  );
};

export default Products;
