import React from "react";
const {Component} = require('react');
import {HomeTabs} from "./tabNavigator";
import AddPost from '../screens/addPost';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();

export default class StackNavigator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Stack.Navigator
                    initialRouteName="Home">
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeTabs}
                        options={this.generateOptions("Home")}/>
                </Stack.Navigator>
        )
    }

    generateOptions(tab, navigate){
        return {
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
            headerRight: () => (
                <Icon
                    color="gray"
                    name="filter"
                    type="material"
                    onPress={() => alert('Filter')}
                />
            ),
            headerLeft: () => (
                <Icon
                    color="gray"
                    name={tab === "Home"? "refresh": "undo"}
                    type="material"
                    onPress={() => {
                        if (tab === 'Home')
                            alert('refresh');
                        else{
                            console.log('Redirecting Home');
                            navigate('Home');
                        }
                    }}
                />
            )
        }
    }
}
