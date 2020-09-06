import { ScrollView, TextInput } from 'react-native'

const React = require('react')
const { Component } = require('react')
const { Text, View, Button } = require('react-native')
const { Image, Input } = require('react-native-elements')
const FireBase = require('../../core/db/firebase').FireBase
import { ActivityIndicator } from 'react-native'
import Main from './main'
import ImagePicker from 'react-native-image-picker'

const fireBase = new FireBase()

export default class AddPost extends Component {
    constructor (props) {
        super(props)
        
        this.chooseImage = this.chooseImage.bind(this)
    }
    
    chooseImage () {
        let options = {
            title: 'Select Image',
            customButtons: [
                {
                    name: 'customOptionKey',
                    title: 'Choose Photo from Custom Option',
                },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        }
        
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ',
                    response.customButton)
                alert(response.customButton)
            } else {
                this.setState(
                    { uri: `data:image/jpeg;base64,${response.data}` })
            }
        })
    }
    
    savePost () {
        if (!this.state.uri || !this.state.orgName) {
            alert('Bad request')
        } else {
            fireBase.setEntity(`organizations/${this.state.orgName}`, {
                imageUrl: {
                    uri: this.state.uri,
                },
                kind: ['1', '2', '3'],
                name: this.state.orgName,
            })
        }
    }
    
    render () {
        const image = this.state?.uri ? { uri: this.state?.uri } : require(
            './images/imagePlaceholder.png')
        return (
            <ScrollView
                style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row', margin: 20 }}>
                    <Image
                        style={{ width: 100, height: 100, marginRight: 10 }}
                        onPress={() => {this.chooseImage()}}
                        PlaceholderContent={<ActivityIndicator/>}
                        source={image}/>
                    
                    <Input
                        placeholder="Organization name"
                        onChangeText={(text) => {
                            this.setState({ orgName: text })
                        }}/>
                </View>
                
                <View style={{
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1,
                    margin: 20,
                }}>
                    <TextInput
                        placeholder={'Post text'}
                        multiline={true}
                    />
                </View>
                
                <View style={{ padding: 20 }}>
                    <Button title="Add post"
                            onPress={() => {this.savePost()}}/>
                </View>
            </ScrollView>
        )
        
    }
}
