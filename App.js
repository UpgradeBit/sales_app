import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Login from './src/pages/login';
import Signup from "./src/pages/signup";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LoginScreen({ navigation }) {
  return (
      <View>
        <Login/>
        <Button
            title="Create Account"
            type="clear"
            onPress={() => navigation.navigate('Signup')}
        />
      </View>
  );
}

const Stack = createStackNavigator();

function SignUpScreen() {
  return (
      <Signup/>
  )
}


const App: () => React$Node = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
