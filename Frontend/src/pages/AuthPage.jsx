import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Tabs,
  Tab,
} from '@mui/material';
import { loginUser, registerUser } from '../Api/authService';

const AuthPage = () => {
  const [tab, setTab] = useState(0);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });

  const handleTabChange = (event, newValue) => setTab(newValue);

  
const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await loginUser(loginData);
    console.log('Login Success:', res);
    location.href = "/"
    // You can redirect or store token/user here
  } catch (error) {
    console.error('Login Error:', error.response?.data?.message || error.message);
  }
};

  const handleSignup = async (e) => {
  e.preventDefault();
  try {
    const res = await registerUser(signupData);
    console.log('Signup Success:', res);
    // Redirect or show success
  } catch (error) {
    console.error('Signup Error:', error.response?.data?.message || error.message);
  }
};

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 10, p: 4, borderRadius: 3 }}>
        <Tabs value={tab} onChange={handleTabChange} variant="fullWidth">
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>

        {tab === 0 && (
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
            <Typography variant="h5" mb={2}>Welcome Back 👋</Typography>
            <TextField
              fullWidth
              label="Email"
              name='email'
              margin="normal"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              required
            />
            <TextField
              fullWidth
              label="Password"
              name='password'
              type="password"
              margin="normal"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              required
            />
            <Button variant="contained" color="primary" fullWidth type="submit" sx={{ mt: 2 }}>
              Login
            </Button>
          </Box>
        )}

        {tab === 1 && (
          <Box component="form" onSubmit={handleSignup} sx={{ mt: 3 }}>
            <Typography variant="h5" mb={2}>Create Account ✨</Typography>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              value={signupData.name}
              onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
              required
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
              required
            />
            <Button variant="contained" color="primary" fullWidth type="submit" sx={{ mt: 2 }}>
              Sign Up
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default AuthPage;
