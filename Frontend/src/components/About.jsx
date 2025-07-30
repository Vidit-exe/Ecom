import React from 'react';
import { Box, Container, Typography, Grid, Avatar, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const team = [
  { name: 'Vidit Joshi', role: 'Founder & CEO', image: 'https://via.placeholder.com/150?text=Vidit' },
  { name: 'Anjali Desai', role: 'Marketing Head', image: 'https://via.placeholder.com/150?text=Anjali' },
  { name: 'Rohan Mehta', role: 'Lead Developer', image: 'https://via.placeholder.com/150?text=Rohan' },
];

const About = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography variant="h4" fontWeight="bold" align="center" mb={3}>
            About Us
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" align="center" mb={5}>
            Learn more about our journey, vision, and the amazing team behind this platform.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Our Story
            </Typography>
            <Typography color="text.secondary">
              Our journey began in 2024 with a mission to revolutionize online shopping. We aim to bring unique, high-quality products to customers across the country. With a growing user base and trusted sellers, our platform is fast becoming the go-to place for all things trendy and reliable.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              src="https://via.placeholder.com/600x400?text=Our+Mission"
              alt="Our Mission"
              style={{ width: '100%', borderRadius: 8 }}
            />
          </Grid>
        </Grid>

        <Box mt={8}>
          <Typography variant="h5" fontWeight="bold" mb={3} align="center">
            Meet Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {team.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ textAlign: 'center', py: 3 }}>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                  />
                  <CardContent>
                    <Typography variant="h6">{member.name}</Typography>
                    <Typography color="text.secondary">{member.role}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
