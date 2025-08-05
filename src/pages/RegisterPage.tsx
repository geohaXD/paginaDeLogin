import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';
import { Alert, Container, Typography, Link } from '@mui/material';
import { RegisterForm } from '../components/Auth/RegisterForm';

export const RegisterPage = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (userData: any) => {
    try {
      await authService.register({
        nombre: userData.nombre,
        cedula: userData.cedula,
        correo: userData.correo,
        tipo_usuario: userData.tipoUsuario,
        telefono: userData.telefono,
        direccion: userData.direccion,
        password: userData.password
      });
      setSuccess(true);
      setTimeout(() => navigate('/login'), 2000); // Redirige a login después de registro exitoso
    } catch (err) {
      setError('Error en el registro. Intente nuevamente.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Registro de Usuario
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Registro exitoso! Redirigiendo...
        </Alert>
      )}
      <RegisterForm onSubmit={handleRegister} />
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        ¿Ya tienes cuenta? <Link href="/login">Inicia sesión aquí</Link>
      </Typography>
    </Container>
  );
};