import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/actions';

const SettingsScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: any) => (state.userPreferences || state.auth.userPreferences)); // Estado global del tema

  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  const toggleSwitch = () => {
    setIsDarkMode(previousState => !previousState);
    dispatch(setTheme(isDarkMode ? 'light' : 'dark')); // Cambiar el tema en el estado global
  };

  const handleLogout = () => {
    // Lógica para hacer logout, por ejemplo, limpiar el estado de autenticación
    navigation.navigate('Login'); // Redirige a la pantalla de login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajustes</Text>

      
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Modo Oscuro</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleSwitch}
        />
      </View>

      
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Información de Usuario</Text>
        <Button
          title="Ver perfil"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>

      
      <Button
        title="Cerrar sesión"
        onPress={handleLogout}
        color="red"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  settingText: {
    fontSize: 18,
    marginRight: 10,
  },
});

export default SettingsScreen;