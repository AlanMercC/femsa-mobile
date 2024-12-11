import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { login } from '../redux/actions';
import { useDispatch } from 'react-redux';
import ErrorBoundary from '../components/ErrorBoundary';

const LoginScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleLogin = () => {
    if (email != 'alan@algo.com' || password != '123456') {
        setHasError(true);
        if(hasError) console.error('contraseña o correo inscorrecto');
    }else{
    dispatch(login());
    navigation.replace('App'); // Si está autenticado, redirige a la app principal.
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
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
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

const HomeScreenWithErrorBoundary = () => {
    return (
      <ErrorBoundary>
        <LoginScreen />
      </ErrorBoundary>
    );
  };
  
  export default HomeScreenWithErrorBoundary;