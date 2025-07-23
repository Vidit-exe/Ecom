import React, { useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CategoryCard from '../components/CategoryCard';
import axios from "axios"

const categories = ['Clothing', 'Electronics', 'Food', 'Books', 'Accessories'];

function Home() {
  const fetchData = async () => {
    const data = await axios.get("http://localhost:4000/api/v1/products");
    console.log(data.data);
    
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Explore Categories
      </Typography>
      <Grid container spacing={2}>
        {categories.map((cat) => (
          <Grid item key={cat}>
            <CategoryCard title={cat} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
