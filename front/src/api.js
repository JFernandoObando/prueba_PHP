// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const registerUser = async (nombre, correo, pass) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      nombre,
      correo,
      pass,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (correo, pass) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      correo,
      pass,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
