import axios from 'axios';
export const fetchUserData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data; // regresa los datos si la consulta es exitosa
  } catch (error) {
    throw new Error('No se pudo obtener los datos de los usuarios');
  }
};