import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Box, Typography } from '@mui/material';

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el usuario está autenticado
    const token = localStorage.getItem('token');
    
    if (token) {
      // Redirigir a la aplicación principal (cambia '/app' por tu ruta real)
      navigate('/app');
    } else {
      // Redirigir a login si no está autenticado
      navigate('/login');
    }
  }, [navigate]);

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh' 
    }}>
      <CircularProgress size={60} />
      <Typography variant="h6" sx={{ mt: 3 }}>
        Redirigiendo...
      </Typography>
    </Box>
  );
};