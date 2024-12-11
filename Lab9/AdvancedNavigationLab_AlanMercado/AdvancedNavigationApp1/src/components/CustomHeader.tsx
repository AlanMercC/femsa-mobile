import React from 'react';
import { View, Text } from 'react-native';

const CustomHeader = () => (
  <View style={{ height: 60, backgroundColor: 'blue', justifyContent: 'center' }}>
    <Text style={{ color: 'white', fontSize: 20 }}>Mi Social App</Text>
  </View>
);

export default CustomHeader;