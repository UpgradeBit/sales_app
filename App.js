import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import StackNavigator from "./src/navigation/ScreenNavigator";
import {NavigationContainer} from "@react-navigation/native";

const App: () => React$Node = () => {
  return (
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
  );
};

export default App;
