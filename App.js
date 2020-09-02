import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import {StackNavigator} from "./src/navigation/ScreenNavigator";

const stackNavigator = StackNavigator();
const App: () => React$Node = () => {
  return (
      stackNavigator
  );
};

export default App;
