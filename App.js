import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Login from './src/pages/login';
import Signup from "./src/pages/signup";
import Main from "./src/pages/main";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Sales"
                component={Main}
                  options={{
                      title: "Акцион",
                      headerStyle: {
                          backgroundColor: '#ffffff',
                      },
                      headerTintColor: '#000000',
                      headerTitleStyle: {
                          fontWeight: "normal",
                          textAlign: "center"
                      },
                      headerLeftContainerStyle:{
                          marginLeft: 10
                      },
                      headerRightContainerStyle:{
                          marginRight: 10
                      },
                      headerLeft: () => (
                          <Icon
                              color="gray"
                              name="refresh"
                              type="material"
                              onPress={() => alert('refresh')}
                          />
                      ),
                      headerRight: () => (
                          <Icon
                              color="gray"
                              name="filter"
                              type="material"
                              onPress={() => alert('Filter')}
                          />
                      ),
                  }}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
