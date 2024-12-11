import React, { useState, useEffect } from 'react';
import FastImage from 'react-native-fast-image';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { updateUser } from '../redux/actions'; 

const EditProfileScreen = ({ navigation }: any) => {
  // Obtén los datos del usuario desde el estado global de Redux
  const user = useSelector((state: any) => state.user);

  // Define los estados locales para los campos editables
  const [name, setName] = useState<string>(user?.name ?? '');
  const [email, setEmail] = useState<string>(user?.email?? '');
  const [avatar, setAvatar] = useState<string>(user?.avatar?? '');

  const dispatch = useDispatch();

  // Actualiza los valores locales si los datos del usuario cambian en Redux
  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setAvatar(user?.avatar);
  }, [user]);

  const handleSave = () => {
    // Llama a la acción de Redux para actualizar el usuario
    dispatch(updateUser({ name, email, profilePicture: avatar }));
    navigation.goBack(); // Regresa a la pantalla anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Editar Perfil</Text>
      <FastImage
        style={styles.avatar}
        source={{
          uri: avatar ?? 'https://avatars.githubusercontent.com/u/50228705?v=4',
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Correo Electrónico:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Avatar URL:</Text>
      <TextInput
        style={styles.input}
        value={avatar}
        onChangeText={setAvatar}
      />

      <Button title="Guardar Cambios" onPress={handleSave} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 12,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 16,
    alignSelf: 'center',
  },
});

export default EditProfileScreen;