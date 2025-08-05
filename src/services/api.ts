import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5062/api', // Reemplaza con tu URL de backend
  headers: {
    'Content-Type': 'application/json'
  }
});

export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { correo: email, password });
    return response.data;
  },
  register: async (userData: any) => {
    const response = await api.post('/auth/registro', userData);
    return response.data;
  }
};