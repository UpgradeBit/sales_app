import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Login from './src/pages/login';
import Signup from "./src/pages/signup";
import Company_profile from "./src/pages/company_profile"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Company_profile from './src/pages/company_profile';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
