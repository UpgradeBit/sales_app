const React = require('react');
const {Component} = require('react');
const {
    StyleSheet,
    ScrollView,
} = require('react-native');
const {
    Button,
    Input,
    Icon,
} = require('react-native-elements');

const signUp = require('../../core/actions').signUp;
const getErrorState = require('../../core/util/getters').getErrorState;

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
                    onChangeText={value => this.setState({email: value})}
                    errorMessage={this.state?.err?.email || this.state?.err?.userExists}
                    renderErrorMessage={getErrorState('email', this.state?.err || {}) ||
                                        getErrorState('userExists', this.state?.err || {})}
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
                    passwordRules
                    onChangeText={value => this.setState({password: value})}
                    errorMessage={this.state?.err?.password}
                    renderErrorMessage={getErrorState('password', this.state?.err || {})}
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
                    passwordRules
                    onChangeText={value => this.setState({passwordConfirm: value})}
                    errorMessage={this.state?.err?.passwordConfirm}
                    renderErrorMessage={getErrorState('passwordConfirm', this.state?.err || {})}
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
                    onPress={() => {
                        signUp(this.state, err => {
                            this.setState({err});
                        });
                    }}
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
