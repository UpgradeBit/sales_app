import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {HomeTabs} from "./tabNavigator";
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();

function StackNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeTabs}
                    options={options}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const options = {
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
}

module.exports.StackNavigator = StackNavigator;