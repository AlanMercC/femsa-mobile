import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { fetchUserData } from './ApiService';
const UserProfileList = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState<string | undefined >(undefined);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data); // Guardamos los datos en el estado
      } catch (err) {
        setError('Error al cargar los datos');
      }
    };
    getUserData();
  }, []);
  if (error) {
    return <Text  style={styles.loadingText}>{error}</Text>; // Mostramos el mensaje de error
  }
  if (!userData) {
    return <Text style={styles.errorText}>Cargando...</Text>; // Mostramos un mensaje mientras se cargan los datos
  }
  return (
    <View  style={styles.container}>
      <FlatList
        data={userData}
        renderItem={({ item }) => <Text>{item.name}</Text>} // Mostramos el nombre de cada usuario
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f8f8',
    },
    loadingText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
    errorText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'red',
        marginTop: 20,
    },
    itemText: {
        fontSize: 16,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default UserProfileList;





