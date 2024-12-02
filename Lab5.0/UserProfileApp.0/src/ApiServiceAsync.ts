import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const fetchUserDataAsync = async () => {
  const cachedData = await AsyncStorage.getItem('userData');
  if (cachedData) {
    return JSON.parse(cachedData); // Si hay datos en caché, los regresamos
  }
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    await AsyncStorage.setItem('userData', JSON.stringify(response.data)); // Guardamos los datos en AsyncStorage
    return response.data;
  } catch (error) {
    throw new Error('No se pudo obtener los datos de los usuarios');
  }
};