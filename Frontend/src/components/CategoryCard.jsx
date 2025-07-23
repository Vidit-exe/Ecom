import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function CategoryCard({ title }) {
  return (
    <Card sx={{ width: 200, m: 2, cursor: 'pointer' }} elevation={2}>
      <CardContent>
        <Typography variant="h6" align="center">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CategoryCard;
