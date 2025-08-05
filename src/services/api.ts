import axios from 'axios';

const api = axios.create({
  // Usa la IP de tu máquina + puerto de la API
  baseURL: 'http://192.168.0.109:5062/api', // Reemplaza con tu IP
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