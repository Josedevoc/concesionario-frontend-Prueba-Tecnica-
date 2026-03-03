import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api = axios.create({ baseURL: BASE_URL });

export const getVehicles = () => api.get('/api/vehicles');
export const createVehicle = (data) => api.post('/api/vehicles', data);
export const updateVehicle = (id, data) => api.put(`/api/vehicles/${id}`, data);
export const deleteVehicle = (id) => api.delete(`/api/vehicles/${id}`);