import { Dimensions, ScrollView, TextInput } from 'react-native'

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
            fireBase.setEntity(`posts`, {
                imageUrl: {
                    uri: this.state.uri,
                },
                kind: ['1', '2', '3'],
                orgName: this.state.orgName,
                text: this.state.text,
            })
        }
    }
    
    render () {
        const image = this.state?.uri ? { uri: this.state?.uri } : require(
            './images/imagePlaceholder.png')
        return (
            <ScrollView
                style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'column', margin: 20 }}>
                    <Input
                        placeholder="Enter organization name"
                        onChangeText={(text) => {
                            this.setState({ orgName: text })
                        }}/>
                        
                    <Image
                        style={{ width: "100%", height:  Dimensions.get('window').width, marginRight: 10 }}
                        onPress={() => {this.chooseImage()}}
                        PlaceholderContent={<ActivityIndicator/>}
                        source={image}/>
                </View>
                
                <View style={{
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1,
                    margin: 20,
                }}>
                    <TextInput
                        placeholder={'Enter post text'}
                        multiline={true}
                        onChangeText={(text) => {
                            this.setState({ text: text })
                        }}
                    />
                </View>
                
                <View style={{ padding: 20 }}>
                    <Button title="Add post"
                            onPress={() => {
                                if (this.checkOrgName(this.state.orgName))
                                    this.savePost()
                                else
                                    console.log("Wrong organization name")
                                    // alert("Wrong organization name")
                            }}/>
                </View>
            </ScrollView>
        )
        
    }
    
    checkOrgName (orgName) {
        let re = /[\sA-Za-zа-яА-Я0-9_-]{1,25}/
        return re.test(orgName)
    }
}
