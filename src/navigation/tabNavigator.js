import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
const Tab = createBottomTabNavigator();
import Main from '../screens/main';
import AddPost from "../screens/addPost";
import { Icon } from 'react-native-elements';

function HomeTabs(){
    return (
        <Tab.Navigator
            screenOptions={options.screenOptions}
            tabBarOptions={options.tabBarOptions}>
            <Tab.Screen name="Home" component={Main}/>
            <Tab.Screen name="Search" component={Main}/>
            <Tab.Screen name="AddPost" component={AddPost}/>
            <Tab.Screen name="Map" component={Main}/>
            <Tab.Screen name="Profile" component={Main}/>
        </Tab.Navigator>
    );
}

const options = {
    screenOptions: (
        ({ route }) => ({
            tabBarIcon: ({ focused, color, size}) => {
                let iconName;

                if (route.name === 'Home')
                    iconName = 'home';
                else if (route.name === 'Search')
                    iconName = 'search';
                else if (route.name === 'AddPost')
                    iconName = 'add';
                else if (route.name === 'Map')
                    iconName = 'map';
                else if (route.name === 'Profile')
                    iconName = 'account-circle';

                return <Icon type="material" name={iconName} size={size} color={color}/>
            }
        })
    ),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
    }
}

module.exports.HomeTabs = HomeTabs;
