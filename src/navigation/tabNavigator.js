import { createAppContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabNavigator = createBottomTabNavigator({
    Feed: {
        screen: Feed
    },
})

export default createAppContainer(TabNavigator)
