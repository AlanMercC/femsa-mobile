import React, { useCallback } from 'react';
import FastImage from 'react-native-fast-image';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions'; 

const ProfileScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth); // Estado global del usuario
    
  const handleLogout = () => {
    dispatch(logout()); // Acción para hacer logout
    navigation.navigate('Login'); // Redirigir a la pantalla de login
  };

  const handleEditProfile = useCallback(() => {
    navigation.navigate('EditProfile');
  }, [navigation]); // Solo se recrea si cambia `navigation`

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

        <FastImage
        style={styles.profileImage}
        source={{
          uri: user?.profilePicture ?? 'https://avatars.githubusercontent.com/u/50228705?v=4',
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      
      <View style={styles.userInfo}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>{user.name}</Text>

        <Text style={styles.label}>Correo:</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>

      
      <Button title="Editar Perfil" onPress={handleEditProfile} />
      <Button title="Cerrar sesión" onPress={handleLogout} color="red" />
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userInfo: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProfileScreen;