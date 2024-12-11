import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const NotificationsScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificaciones</Text>

      
      <Text style={styles.notificationText}>
        No tienes notificaciones nuevas en este momento.
      </Text>

      
      <Button title="Ir a configuración" onPress={() => navigation.navigate('Settings')} />
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
  notificationText: {
    fontSize: 18,
    marginBottom: 30,
  },
});

export default NotificationsScreen;