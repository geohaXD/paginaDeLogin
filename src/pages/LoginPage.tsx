import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';
import { LoginForm } from '../components/Auth/LoginForm';
import { Alert, Container, Typography } from '@mui/material';

export const LoginPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (data: any) => {
    try {
      const response = await authService.login(data.correo, data.password);
      localStorage.setItem('token', response.token);
      navigate('/');
    } catch (err) {
      setError('Credenciales inválidas');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Iniciar Sesión
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
      <LoginForm onSubmit={handleLogin} />
    </Container>
  );
};