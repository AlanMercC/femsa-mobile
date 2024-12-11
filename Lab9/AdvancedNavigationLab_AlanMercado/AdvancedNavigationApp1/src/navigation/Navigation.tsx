import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationsScreen from '../screens/NotificationsScreen';
import { useSelector } from 'react-redux'; 
import { ActivityIndicator, Text, View } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

import FeedScreen from '../screens/FeedScreen';
import SearchScreen from '../screens/SearchScreen';
import DetailsScreen from '../screens/DetailsScreen';

import RegisterScreen from '../screens/RegisterScreen';
import HomeScreenWithErrorBoundary from '../screens/LoginScreen';
import EditProfileScreen from '../screens/EditProfileScreen';


// Tipos de los navegadores
type RootStackParamList = {
  Auth: undefined;
  Login: undefined;
  App: undefined;
};

type AppDrawerParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  EditProfile: undefined;
  Login: undefined;
};

type BottomTabParamList = {
  Feed: undefined;
  Search: undefined;
  Notifications: undefined;
  Details: undefined;
  HomeScreen: undefined;
};

const linking = {
    prefixes: ['myapp://'], 
    config: {
      screens: {
        Home: '',
        Profile: 'profile/:id',
        Details: 'details/:itemId',
      },
    },
  };

  const Loading = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Loading...</Text>
    </View>
  );

// Crear el Stack principal
const Stack = createNativeStackNavigator<RootStackParamList>();

// Crear el Drawer para la navegación principal
const Drawer = createDrawerNavigator<AppDrawerParamList>();

// Crear el Bottom Tab para la navegación dentro del Drawer
const Tab = createBottomTabNavigator<BottomTabParamList>();

const AppNavigation = () => {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  // Función que devuelve el contenido de la navegación dependiendo de si el usuario está autenticado
  const AuthStack = () => {
    return (
        <Suspense fallback={<Loading />}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={RegisterScreen} />
        <Stack.Screen name="Login" component={HomeScreenWithErrorBoundary} /> 
        <Stack.Screen name="App" component={AppDrawerNavigation} />
        
      </Stack.Navigator>
      </Suspense> 
    );
  };

  const AppDrawerNavigation = () => {
    return (
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={HomeTabNavigation} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="EditProfile" component={EditProfileScreen} />
        <Drawer.Screen name="Login" component={AuthStack} />
      </Drawer.Navigator>
    );
  };

  const HomeTabNavigation = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} /> 
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer linking={linking}>
        
      {isAuthenticated ? (
        <AppDrawerNavigation /> // Si el usuario está autenticado, muestra el Drawer
      ) : (
        <AuthStack /> // Si no está autenticado, muestra el stack de autenticación
      )}
      
    </NavigationContainer>
  );
};

export default AppNavigation;