import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import DetailsScreen from '../../AdvancedNavigationApp1/src/screens/DetailsScreen';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
    Provider: ({ children }: any) => children,
}));

describe('DetailsScreen', () => {
    const route = { params: { itemId: 1 } };
    const navigation = { navigate: jest.fn() };

    it('renders correctly with given itemId', () => {
        const { getByText } = render(<DetailsScreen route={route} navigation={navigation} />);
        
        expect(getByText('Detalles')).toBeTruthy();
        expect(getByText('Item: algo')).toBeTruthy();
        expect(getByText('Item ID: 1')).toBeTruthy();
    });

    it('navigates back to Feed when button is pressed', () => {
        const { getByText } = render(<DetailsScreen route={route} navigation={navigation} />);
        const button = getByText('Volver al Feed');
        
        expect(button).toBeDefined();
    });
});