import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FeedScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed</Text>
      <Button
        title="Ver detalles"
        onPress={() => navigation.navigate('Details', { itemId: 1 })}
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
});

export default FeedScreen;