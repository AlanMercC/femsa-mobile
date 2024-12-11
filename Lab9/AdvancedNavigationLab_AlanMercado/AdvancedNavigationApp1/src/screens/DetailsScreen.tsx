import React, { useMemo } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({ route, navigation }: any) => {
    
  const item = useMemo(() => {
    const { itemId } = route.params || {};
    
    return {'item': 'algo', 'item_id':itemId}; 
  }, [route.params?.itemId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles</Text>
      <Text>Item: {item.item}</Text>
      <Text>Item ID: {item.item_id}</Text>
      <Button
        title="Volver al Feed"
        onPress={() => navigation.navigate('Feed')}
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

export default DetailsScreen;