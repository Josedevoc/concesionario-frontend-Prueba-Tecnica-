import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://concesionario-backend-fastapi.onrender.com',
});

export const getVehicles = () => api.get('/api/vehicles');
export const createVehicle = (data) => api.post('/api/vehicles', data);
export const updateVehicle = (id, data) => api.put(`/api/vehicles/${id}`, data);
export const deleteVehicle = (id) => api.delete(`/api/vehicles/${id}`);