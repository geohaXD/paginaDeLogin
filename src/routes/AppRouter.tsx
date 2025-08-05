import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { HomePage } from '../pages/HomePage';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      {/* Ruta protegida - ejemplo de cómo sería para tu app principal */}
      <Route path="/app" element={
        <ProtectedRoute>
          {/* Aquí irá el layout principal de tu aplicación */}
          <div>Tu aplicación principal irá aquí</div>
        </ProtectedRoute>
      } />
    </Routes>
  );
};