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

export default class Signup extends Component {
    render() {
        return (
            <ScrollView style={styles.scroll}>
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
                <Input
                    placeholder="докажите Password"
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
                    title="Sign up"
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
});
