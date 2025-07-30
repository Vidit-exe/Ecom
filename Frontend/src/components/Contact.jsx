import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with backend API or email service
    alert('Message sent successfully!');
  };

  return (
    <Box sx={{ py: 6, bgcolor: '#f9f9f9' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" align="center" mb={5}>
            We'd love to hear from you. Fill out the form and we'll get back to you shortly.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 4 }}>
              <Stack spacing={3}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <EmailIcon color="primary" />
                  <Typography color="text.secondary">support@trendystore.com</Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <PhoneIcon color="primary" />
                  <Typography color="text.secondary">+91 98765 43210</Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <LocationOnIcon color="primary" />
                  <Typography color="text.secondary">
                    101, Main Street, Ahmedabad, Gujarat, India
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Your Name" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Email" type="email" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Subject" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" size="large" fullWidth>
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
