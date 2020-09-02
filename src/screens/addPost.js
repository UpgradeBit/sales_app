import ImagePicker from 'react-native-image-picker';
import {ScrollView} from "react-native";
const React = require('react');
const {Component} = require('react');
const {Text, View, Button} = require('react-native');
const {Image} = require('react-native-elements');
const FireBase = require('../../core/db/firebase').FireBase;
import { ActivityIndicator } from 'react-native';
const fireBase = new FireBase();


export default class AddPost extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ScrollView
                style={{flex: 1}}>
                <View>
                    <Image
                        style={{ width: 200, height: 200 }}
                        PlaceholderContent={<ActivityIndicator />}
                        source={{uri: this.props?.route?.params?.uri}}/>
                    <Text> Image here </Text>
                </View>
            </ScrollView>
        );
    }
}