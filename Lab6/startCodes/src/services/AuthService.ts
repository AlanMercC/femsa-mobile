import {saveToken,deleteToken} from '../utils/storage'

export const login = async (username: string, password: string) => {
  if (username === "user" && password === "password") {
    const token = "fake-jwt-token";
    // Se Almacena el token de forma segura
    await saveToken(token);
    return true;
  } else {
    throw new Error("Invalid credentials");
  }
};
export const logout = async () => {
  // Eliminar el token
  await deleteToken();
};