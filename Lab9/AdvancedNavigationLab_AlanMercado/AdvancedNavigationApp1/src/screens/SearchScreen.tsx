import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar</Text>
      <TextInput style={styles.input} placeholder="Buscar..." />
      <Button
        title="Ver detalles"
        onPress={() => navigation.navigate('Details', { itemId: 2 })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});

export default SearchScreen;