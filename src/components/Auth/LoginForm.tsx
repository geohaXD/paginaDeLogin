import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Box } from '@mui/material';

const schema = yup.object().shape({
  correo: yup.string().email('Email inválido').required('Email es requerido'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('Contraseña requerida')
});

export const LoginForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
      <TextField
        fullWidth
        label="Correo"
        {...register('correo')}
        error={!!errors.correo}
        helperText={errors.correo?.message}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        type="password"
        label="Contraseña"
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
        sx={{ mb: 3 }}
      />
      <Button type="submit" fullWidth variant="contained">
        Iniciar Sesión
      </Button>
    </Box>
  );
};