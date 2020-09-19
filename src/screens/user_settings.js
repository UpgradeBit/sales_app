import {logger} from "react-native-logs";
import {useState} from "react";

const React = require('react');
const {Component} = require('react');
const {
    StyleSheet,
    View,
    ScrollView,
    FlatList,
    Alert,
    Switch,
} = require('react-native');

const {
    Text,
    Icon,
    ListItem,
    ButtonGroup,
} = require('react-native-elements');

const buttons = ['Сбросить', 'Настройки', 'Готово']

export default class User_settings extends Component {

    render() {
        return (
            <ScrollView style={styles.scroll}>
                {/*Пользователь*/}
                <ListItem
                    leftAvatar={{
                        size: 'large',
                        source: {
                            uri: 'https://sun9-17.userapi.com/c851524/v851524895/1baa9d/oYfw7Pzt5ZA.jpg'
                        }
                    }}
                    titleStyle={{fontSize: 20}}
                    title="Паша Ефимов"
                />
                <ButtonGroup
                    // onPress={}
                    // selectedIndex={}
                    buttons={buttons}
                />
                <ListItem
                    title="Редактировать личные данные"
                    rightIcon={
                        <Icon
                            name="angle-right"
                            type="font-awesome"
                        />
                    }
                    type="clear"
                    bottomDivider={1}
                    onPress={() => Alert.alert("Test")}
                />
                <ListItem
                    title="Геолокация"
                    type="clear"
                    bottomDivider={1}
                    onPress={() => Alert.alert("Test")}
                />
                <ListItem
                    title="Включить"
                    type="clear"
                    bottomDivider={1}
                    onPress={() => Alert.alert("Test")}
                />
                <ListItem
                    title="Запрос при первом запуске"
                    switch={{}}
                    type="clear"
                    bottomDivider={1}
                />
                <ListItem
                    title="Уведомления"
                    type="clear"
                    bottomDivider={1}
                />
                <ListItem
                    title="Новые акции от подписок"
                    checkBox={{

                    }}
                    type="clear"
                    bottomDivider={1}
                />
                <ListItem
                    title="Новые акции от категорий"
                    checkBox={{

                    }}
                    type="clear"
                    bottomDivider={1}
                />
                <ListItem
                    title="Окончание розыгрыша"
                    checkBox={{

                    }}
                    type="clear"
                    bottomDivider={1}
                />
                <ListItem
                    title="Отключить"
                    type="clear"
                    bottomDivider={1}
                />
                <ListItem
                    title="Политика конфиденциальности"
                    type="clear"
                    bottomDivider={1}
                />
                <ListItem
                    title="Удалить профиль"
                    type="clear"
                    bottomDivider={1}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#ffffff',
        padding: 30,
        flexDirection: 'column',
    },
    textList: {
        backgroundColor: '#95a5a6',
        marginTop: 5,
        marginLeft: 5,
        padding: 20,
    },
    buttonList: {
        borderBottomWidth: 1,

    }
});
