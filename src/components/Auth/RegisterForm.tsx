import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Box, MenuItem } from '@mui/material';

const schema = yup.object().shape({
  nombre: yup.string().required('Nombre es requerido'),
  cedula: yup.string().required('Cédula es requerida'),
  correo: yup.string().email('Email inválido').required('Email es requerido'),
  tipoUsuario: yup.string().required('Tipo de usuario es requerido'),
  telefono: yup.string(),
  direccion: yup.string(),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('Contraseña requerida'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
    .required('Confirma tu contraseña')
});

export const RegisterForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
      <TextField
        fullWidth
        label="Nombre Completo"
        {...register('nombre')}
        error={!!errors.nombre}
        helperText={errors.nombre?.message}
        sx={{ mb: 2 }}
      />
      
      <TextField
        fullWidth
        label="Cédula"
        {...register('cedula')}
        error={!!errors.cedula}
        helperText={errors.cedula?.message}
        sx={{ mb: 2 }}
      />
      
      <TextField
        fullWidth
        label="Correo Electrónico"
        {...register('correo')}
        error={!!errors.correo}
        helperText={errors.correo?.message}
        sx={{ mb: 2 }}
      />
      
      <TextField
        fullWidth
        select
        label="Tipo de Usuario"
        {...register('tipoUsuario')}
        error={!!errors.tipoUsuario}
        helperText={errors.tipoUsuario?.message}
        sx={{ mb: 2 }}
      >
        <MenuItem value="comprador">Comprador</MenuItem>
        <MenuItem value="vendedor">Vendedor</MenuItem>
        <MenuItem value="mecanico">Mecánico</MenuItem>
      </TextField>
      
      <TextField
        fullWidth
        label="Teléfono (Opcional)"
        {...register('telefono')}
        error={!!errors.telefono}
        helperText={errors.telefono?.message}
        sx={{ mb: 2 }}
      />
      
      <TextField
        fullWidth
        label="Dirección (Opcional)"
        {...register('direccion')}
        error={!!errors.direccion}
        helperText={errors.direccion?.message}
        sx={{ mb: 2 }}
      />
      
      <TextField
        fullWidth
        type="password"
        label="Contraseña"
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
        sx={{ mb: 2 }}
      />
      
      <TextField
        fullWidth
        type="password"
        label="Confirmar Contraseña"
        {...register('confirmPassword')}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
        sx={{ mb: 3 }}
      />
      
      <Button type="submit" fullWidth variant="contained" size="large">
        Registrarse
      </Button>
    </Box>
  );
};