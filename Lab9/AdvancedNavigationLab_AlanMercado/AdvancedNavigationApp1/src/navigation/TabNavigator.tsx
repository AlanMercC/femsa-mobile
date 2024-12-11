import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from '../screens/FeedScreen';
import SearchScreen from '../screens/SearchScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Feed" component={FeedScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

export const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedStack} />
    <Tab.Screen name="Search" component={SearchStack} />
  </Tab.Navigator>
);