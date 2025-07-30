import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../Api/productService';
import { Box, Typography, CircularProgress, Grid, Rating } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await fetchProductDetails(id);
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <CircularProgress />;

  if (!product) return <Typography>No Product Found</Typography>;

  return (
    <Box p={4}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img
            src={product.images[0]?.url || "https://via.placeholder.com/300"}
            alt={product.name}
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4">{product.name}</Typography>
          <Rating value={product.ratings} readOnly precision={0.5} />
          <Typography variant="h6" color="text.secondary">₹{product.price}</Typography>
          <Typography sx={{ mt: 2 }}>{product.description}</Typography>
          <Typography sx={{ mt: 2 }}>Stock: {product.Stock > 0 ? 'In Stock' : 'Out of Stock'}</Typography>
          <Typography sx={{ mt: 2 }}>Category: {product.category}</Typography>
        </Grid>
      </Grid>

      <Box mt={6}>
        <Typography variant="h5">Reviews:</Typography>
        {product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <Box key={review._id} mt={2} p={2} border="1px solid #ccc" borderRadius="10px">
              <Typography fontWeight="bold">{review.name}</Typography>
              <Rating value={review.rating} readOnly />
              <Typography>{review.comment}</Typography>
            </Box>
          ))
        ) : (
          <Typography>No reviews yet.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetails;
