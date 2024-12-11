export const setTheme = (theme: 'light' | 'dark') => ({
    type: 'SET_THEME',
    payload: theme,
  });

  export const logout = () => ({
    type: 'LOGOUT',
  });

  export const login = () => ({
    type: 'LOGIN',
  });

  export type User = {
    name: string;
    email: string;
    profilePicture: string;
  };

  export const updateUser = (user: User) => ({
    type: 'UPDATE_USER',
    payload: user,
  });