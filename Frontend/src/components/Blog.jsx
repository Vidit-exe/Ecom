import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Avatar, Chip, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

const blogs = [
  {
    id: 1,
    title: 'The Ultimate Shopping Guide for 2025',
    description: 'Discover what’s trending this year and how to shop smarter for fashion, electronics and more.',
    image: 'https://via.placeholder.com/400x250?text=Shopping+Guide',
    author: 'Ritika Sharma',
    date: 'July 28, 2025',
    tags: ['Tips', 'Shopping', 'Trends'],
  },
  {
    id: 2,
    title: 'Why Sustainability is the Future of Fashion',
    description: 'Learn how the industry is evolving and why sustainable fashion matters more than ever.',
    image: 'https://via.placeholder.com/400x250?text=Sustainable+Fashion',
    author: 'Karan Mehta',
    date: 'July 22, 2025',
    tags: ['Fashion', 'Sustainability', 'Eco'],
  },
  {
    id: 3,
    title: 'Top 5 Tech Gadgets You Can’t Miss',
    description: 'Explore the best and latest tech products that are redefining everyday convenience.',
    image: 'https://via.placeholder.com/400x250?text=Tech+Gadgets',
    author: 'Priya Nair',
    date: 'July 18, 2025',
    tags: ['Tech', 'Gadgets', 'Innovation'],
  },
];

const Blog = () => {
  return (
    <Box sx={{ py: 6, bgcolor: '#f5f7fa' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
            From Our Blog
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" align="center" mb={5}>
            Stay updated with latest tips, trends and insights
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Card elevation={4} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    image={blog.image}
                    alt={blog.title}
                    height="200"
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                      <Avatar sx={{ width: 30, height: 30, bgcolor: 'primary.main' }}>
                        <PersonIcon fontSize="small" />
                      </Avatar>
                      <Typography variant="body2">{blog.author}</Typography>
                    </Stack>

                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {blog.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {blog.description}
                    </Typography>

                    <Stack direction="row" spacing={1} my={2} flexWrap="wrap">
                      {blog.tags.map((tag, index) => (
                        <Chip key={index} label={tag} variant="outlined" size="small" />
                      ))}
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                      <CalendarMonthIcon fontSize="small" color="action" />
                      <Typography variant="caption" color="text.secondary">{blog.date}</Typography>
                    </Stack>

                    <Button variant="contained" fullWidth sx={{ mt: 3 }}>
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
