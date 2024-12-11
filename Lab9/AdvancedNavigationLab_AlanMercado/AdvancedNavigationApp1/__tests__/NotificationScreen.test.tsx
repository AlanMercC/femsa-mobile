import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import NotificationsScreen from '../../AdvancedNavigationApp1/src/screens/NotificationsScreen';

describe('NotificationsScreen', () => {
    const navigation = { navigate: jest.fn() };

    it('renders correctly', () => {
        const { getByText } = render(<NotificationsScreen navigation={navigation} />);

        expect(getByText('Notificaciones')).toBeTruthy();
        expect(getByText('No tienes notificaciones nuevas en este momento.')).toBeTruthy();
        expect(getByText('Ir a configuración')).toBeTruthy();
    });

    it('navigates to Settings when button is pressed', () => {
        const { getByText } = render(<NotificationsScreen navigation={navigation} />);
        const button = getByText('Ir a configuración');

        fireEvent.press(button);

        expect(navigation.navigate).toHaveBeenCalledWith('Settings');
    });
});