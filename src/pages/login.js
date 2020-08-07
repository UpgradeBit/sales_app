import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    TextInput,
    ScrollView,
    Alert,
} from 'react-native';
import {
    Button,
    Input,
    Text,
    Icon,
} from 'react-native-elements';

export default class Login extends Component {
    render() {
        return (
            <ScrollView style={styles.scroll}>
                {/*Текст сверху*/}
                <Text style={styles.textIntro}>Акцион</Text>
                <Text h2 style={styles.textIntro}>Привет!</Text>
                {/*Форма логина*/}
                {/*Ввод почты*/}
                <Input
                    placeholder="Email"
                    keyboardType={'email-address'}
                    autoCorrect={false}
                    leftIcon={
                        <Icon
                            name="user"
                            type="font-awesome"
                            size={24}
                            color="black"/>
                    }
                />
                {/*Ввод пароля*/}
                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    leftIcon={
                        <Icon
                            name="lock"
                            type="font-awesome"
                            size={24}
                            color="black"/>
                    }
                />
                {/*Кнопка входа*/}
                <Button
                    title="Log in"
                />
                {/*Забыли пароль*/}
                <Button
                    title="Forgot password?"
                    type="clear"
                    buttonStyle={styles.alignRight}
                />
                {/*Иконки снизу*/}
                <View style={styles.iconRow}>
                    <Icon
                        reverse
                        name="vk"
                        type="font-awesome"
                        color="#597da3"
                    />
                    <Icon
                        reverse
                        name="google-plus-square"
                        type="font-awesome"
                        color="#d34836"/>
                </View>
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
    //Стиль текста сверху
    textIntro: {
        textAlign: 'center',
    },
    //Стиль кнопки забыли пароль
    alignRight: {
        alignSelf: 'flex-end',
    },
    //Стиль для иконок в ряд
    iconRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
