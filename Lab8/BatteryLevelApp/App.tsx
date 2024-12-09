import React, { useState, useEffect } from 'react';
import { Text, View, Button, Alert, DeviceEventEmitter } from 'react-native';
import BatteryLevelManager from './src/BatteryLevelManager';

const App = () => {
  const [batteryLevel, setBatteryLevel] = useState<number>(-1);

  useEffect(() => {
    BatteryLevelManager.startMonitoringBatteryLevel();

    const levelChangeListener = (event: { batteryLevel: number }) => {
      setBatteryLevel(event.batteryLevel);
      if (event.batteryLevel < 0.2) {
        Alert.alert('Advertencia', 'El nivel de batería es bajo.');
      }
    };

    const batteryEventListener = DeviceEventEmitter.addListener(
      'BatteryLevelChanged',
      levelChangeListener
    );

    return () => {
      BatteryLevelManager.stopMonitoringBatteryLevel();
      batteryEventListener.remove();
    };
  }, []);

  return (
    <View>
      <Text>Nivel de batería: {batteryLevel * 100}%</Text>
    </View>
  );
};

export default App;