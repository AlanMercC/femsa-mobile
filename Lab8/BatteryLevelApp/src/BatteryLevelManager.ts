import { NativeModules, Platform } from 'react-native';

const { BatteryLevelManager } = NativeModules;

export interface BatteryLevelManager {
  getBatteryLevel(callback: (level: number) => void): void;
  startMonitoringBatteryLevel(): void;
  stopMonitoringBatteryLevel(): void;
}

export default BatteryLevelManager;