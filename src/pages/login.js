import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Label from '../../components/Label';

export default class Login extends Component{
    render(){
        return (
            <ScrollView style={styles.scroll}>

                <Container>
                    <Text style={[styles.appName, styles.textCenter]}>
                        Акцион
                    </Text>
                    <Text style={[styles.info, styles.textCenter]}>
                        Привет!
                    </Text>
                </Container>

                <Container>
                        <View style={styles.row_container}>
                            <Icon.Button name="apple" size={30} backgroundColor={'black'}/>
                            <Icon.Button name="vk" size={30}/>
                            <Icon.Button name="google-plus-square" size={30} backgroundColor={'red'}/>
                        </View>
                </Container>

                <Container>
                    <TextInput
                        placeholder={"Email adress"}
                        style={styles.textInput}
                    />
                </Container>
                <Container>
                    <TextInput
                        placeholder={"Password"}
                        secureTextEntry={true}
                        style={styles.textInput}
                    />
                </Container>

                <Container>
                    <Button
                        label="Forgot Password?"
                        styles={{button: styles.alignRight, label: styles.label}}
                        //onPress={this.press.bind(this)}
                    />
                </Container>

                <Container>
                    <Button
                        label="Sign In"
                        styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                        //onPress={this.press.bind(this)}
                    />
                </Container>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#ffffff',
        padding: 30,
        flexDirection: 'column'
    },
    textInput: {
        height: 50,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#939191',
        backgroundColor: '#FFF'
    },
    transparentButton: {
        marginTop: 30,
        borderColor: '#3B5699',
        borderWidth: 2
    },
    buttonBlueText: {
        fontSize: 20,
        color: '#3B5699'
    },
    buttonBigText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold'
    },
    buttonBlackText: {
        fontSize: 20,
        color: '#595856'
    },
    primaryButton: {
        backgroundColor: '#9e9e9e'
    },
    appName: {
        fontSize: 12,
        color: '#000000',
        marginBottom: 20,
        fontStyle: 'italic'
    },
    info:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    textCenter:{
        textAlign: 'center',
    },
    label: {
        color: '#0d8898',
        fontSize: 10
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    row_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

