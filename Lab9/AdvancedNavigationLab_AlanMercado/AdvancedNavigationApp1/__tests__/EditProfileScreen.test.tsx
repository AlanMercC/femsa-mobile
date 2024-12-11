import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import EditProfileScreen from '../../AdvancedNavigationApp1/src/screens/EditProfileScreen';
import { updateUser } from '../../AdvancedNavigationApp1/src/redux/actions';

jest.mock('../src/redux/actions', () => ({
    updateUser: jest.fn(),
}));

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
    Provider: ({ children }: any) => children,
}));


jest.mock('../src/screens/EditProfileScreen', () => {
    return jest.fn().mockImplementation(() => {
        return {
            user: {
                name: 'John Doe',
                email: ' ',
                avatar: ' ',
            },
        };
    }
    );
}
);

const mockStore = configureStore([]);
const initialState = {
    user: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'https://example.com/avatar.jpg',
    },
};

describe('EditProfileScreen', () => {
    let store: any;
    let navigation: any;

    beforeEach(() => {
        store = mockStore(initialState);
        navigation = { goBack: jest.fn() };
    });

    it.skip('renders correctly with initial state', () => {
        const { getByText, getByDisplayValue } = render(
            
                <EditProfileScreen navigation={navigation} />
            
        );

        expect(getByText('Editar Perfil')).toBeTruthy();
        expect(getByDisplayValue('John Doe')).toBeTruthy();
        expect(getByDisplayValue('john.doe@example.com')).toBeTruthy();
        expect(getByDisplayValue('https://example.com/avatar.jpg')).toBeTruthy();
    });

    it.skip('updates state and dispatches action on save', () => {
        const { getByText, getByDisplayValue } = render(
            
                <EditProfileScreen navigation={navigation} />
            
        );

        const nameInput = getByDisplayValue('John Doe');
        const emailInput = getByDisplayValue('john.doe@example.com');
        const avatarInput = getByDisplayValue('https://example.com/avatar.jpg');
        const saveButton = getByText('Guardar Cambios');

        fireEvent.changeText(nameInput, 'Jane Doe');
        fireEvent.changeText(emailInput, 'jane.doe@example.com');
        fireEvent.changeText(avatarInput, 'https://example.com/new-avatar.jpg');
        fireEvent.press(saveButton);

        expect(updateUser).toHaveBeenCalledWith({
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            profilePicture: 'https://example.com/new-avatar.jpg',
        });
        expect(navigation.goBack).toHaveBeenCalled();
    });
});