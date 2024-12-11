/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.mock('react-redux', () => ({
  useSelector: jest.fn(
    (fn) => fn({ user: { email: '', name: '', profilePicture: '', isAuthenticated: false } }),
  ),
  useDispatch: jest.fn(),
  Provider: ({ children }: any) => children,
}));

jest.mock('../src/navigation/Navigation', () => {
  return jest.fn().mockReturnValue(null);
}
);

jest.mock('@react-navigation/drawer', () => {
  return {
    createDrawerNavigator: jest.fn(),
  };
}
);

jest.mock('@react-navigation/bottom-tabs', () => {
  return {
    createBottomTabNavigator: jest.fn(),
  };
});

jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: jest.fn(),
  };
});
it('renders correctly', () => {
  renderer.create(<App />);
});
