import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { login } from "../services/AuthService";
 
const LoginScreen: React.FC = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
 
  const handleLogin = async () => {
    if (username.length < 3 || password.length < 8) {
      setError("Username must be at least 3 characters, and password at least 8.");
      return;
    }
    if (!passwordRegex.test(password)) {
        setError("Password must contain at least one letter and one number.");
        return;
      }
    try {
      await login(username, password);
      navigation.navigate("Profile");
    } catch (err) {
      setError("Login failed. Invalid credentials.");
    }
  };
 
  return (
    <View>
      <TextInput
        placeholder="Username"
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};
 
export default LoginScreen;