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
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeTabs}
                        options={generateOptions("Home")}/>
                    <Stack.Screen name="addingPost"
                                  component={AddPost}
                                  options={generateOptions("AddPost")}/>
                </Stack.Navigator>
        )
    }
}

function generateOptions(tab){
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
                    // else
                    //     NavigationActions.navigate('Home', {resetPopLib: true});
                }}
            />
        )
    }
}