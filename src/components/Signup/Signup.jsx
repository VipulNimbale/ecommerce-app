import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from '@mui/material';

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error.message); // log error
      alert(`Failed to sign up: ${error.message}`);
    }    
  };

  return (
    <Container maxWidth="sm" className="signup-container">
      <Paper elevation={3} className="signup-paper">
        <Typography variant="h5" className="signup-title">Sign Up</Typography>
        <Box component="form" onSubmit={handleSubmit} className="signup-form">
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />
          <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
            className="signup-button"
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Signup;
