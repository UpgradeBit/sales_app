const React = require('react');
const {Component} = require('react');
const {
    StyleSheet,
    View,
    ScrollView,
    } = require('react-native');
const {
    Button,
    Input,
    Text,
    Icon,
    } = require('react-native-elements');

const login = require('../../core/actions').login;
const getErrorState = require('../../core/util/getters').getErrorState;

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
                    onChangeText={value => this.setState({email: value})}
                    errorMessage={this.state?.err?.email}
                    renderErrorMessage={getErrorState('email', this.state?.err || {})}
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
                    onChangeText={value => this.setState({password: value})}
                    errorMessage={this.state?.err?.password || this.state?.err?.wrongData}
                    renderErrorMessage={getErrorState('password', this.state?.err || {}) ||
                                        getErrorState('wrongData', this.state?.err || {})}
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
                    raised
                    onPress={() => {
                        login(this.state, err => {
                            this.setState({err});
                        });
                    }}

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
                        reverse name="vk"
                        type="font-awesome"
                        color="#597da3"/>
                    <Icon
                        reverse
                        name="google-plus-square"
                        type="font-awesome"
                        color="#d34836"/>
                </View>
                <Button
                    title="Create Account"
                    type="clear"
                    //buttonStyle={}
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
    //Стиль текста сверху
    textIntro: {
        textAlign: 'center',
        marginBottom: 10
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
