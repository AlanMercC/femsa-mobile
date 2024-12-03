// Utility file where students are expected to implement secure storage functions

import * as Keychain from 'react-native-keychain';
// Función para guardar el token JWT en Keychain
export const saveToken = async (token: string): Promise<boolean> => {
  try {
    await Keychain.setGenericPassword('jwt_token', token);
    console.log('Token guardado correctamente');
    return true;
  } catch (error) {
    console.error('Error al guardar el token: ', error);
    return false;
  }
};
// Función para obtener el token JWT desde Keychain
export const getToken = async (): Promise<Keychain.UserCredentials | null> => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      console.log('Token obtenido correctamente');
      return credentials;
    } else {
      console.log('No se encontró el token');
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el token: ', error);
    return null;
  }
};
// Función para eliminar el token JWT de Keychain
export const deleteToken = async (): Promise<boolean> => {
  try {
    await Keychain.resetGenericPassword();
    console.log('Token eliminado correctamente');
    return true;
  } catch (error) {
    console.error('Error al eliminar el token: ', error);
    return false;
  }
};