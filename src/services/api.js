import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://concesionario-backend-fastapi.onrender.com',
});

// Agrega el token automáticamente en cada request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (data) => api.post('/auth/login', data);
export const getVehicles = () => api.get('/api/vehicles/');
export const createVehicle = (data) => api.post('/api/vehicles/', data);
export const updateVehicle = (id, data) => api.put(`/api/vehicles/${id}`, data);
export const deleteVehicle = (id) => api.delete(`/api/vehicles/${id}`);
export const register = (data) => api.post('/auth/register', data);