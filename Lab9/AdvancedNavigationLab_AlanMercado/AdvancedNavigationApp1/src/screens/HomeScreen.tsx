import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Bienvenido a la Home Screen!</Text>
      <Button
        title="Ir al Perfil"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Ir a Configuración"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default HomeScreen;