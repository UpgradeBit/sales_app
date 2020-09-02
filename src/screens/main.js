import {Image} from "react-native-elements";
import {Button, FlatList, SafeAreaView} from 'react-native';
import {HeaderTitle} from '@react-navigation/stack';
import { LayoutAnimation, RefreshControl } from 'react-native';
import ImagePicker from "react-native-image-picker";

const logger = require('../../core/util/log').logger;
const React = require('react');
const {Component} = require('react');
const {ScrollView, View, ImageBackground} = require('react-native');
const {Text, ButtonGroup, Tile, ListItem, Card, Icon} = require('react-native-elements');
const FireBase = require('../../core/db/firebase').FireBase;
const fireBase = new FireBase();

const kindsOfShops = [
    {
        id: 1,
        name: "Бар",
        imageUrl: {uri: "https://avatars.mds.yandex.net/get-zen_doc/135437/pub_5d4540e2027a1500adcef2f0_5d45444935c8d800ad0d594e/scale_1200"},
        count: 15
    },
    {
        id: 2,
        name: "Ресторан",
        imageUrl: {uri: "https://sovcominvest.ru/uploads/products/155a40b4c3151476fbbfbbbfdc1b8c90.jpg"},
        count: 7
    },
    {
        id: 3,
        name: "Кафе",
        imageUrl: {uri: "https://img2.goodfon.ru/original/2560x1600/0/4f/zermatt-switzerland-cermatt-6874.jpg"},
        count: 2
    }
];

const Shops = [
    {
        name: "Макдональдс",
        imageUrl: {uri: "http://sc-globalcity.ru/sites/default/files/offers/800x800_site_mccombo_bm.jpg"},
        kinds: ["Bar", "Restaurant", "Cafe"]
    }
]

export default class Main extends Component {
    constructor() {
        super();

        this.state = {
            selectedIndex: 0,
        };

        this.updateIndex = this.updateIndex.bind(this);
        this.getOrganizations = this.getOrganizations.bind(this);

        this.getOrganizations();
    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex});
    }

    getOrganizations(){
        fireBase.get("organizations", organizations => {
            this.setState({organizations});
        });
    }

    chooseImage(){
        let options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                this.props.navigation.navigate('addingPost', {uri: `data:image/jpeg;base64,${response.data}`});
            }
        });
    }

    render() {
        if (this.props?.route?.resetPopLib)
            this.setState({dontPopLib: false});

        if (this.props?.route?.name === 'AddPost' && !this.state.dontPopLib){
            this.chooseImage();
            this.setState({dontPopLib: true});
        }

        LayoutAnimation.easeInEaseOut();
        const choiceButton1 = () => <Text>Все акции</Text>;
        const choiceButton2 = () => <Text>Мои подписки</Text>;

        const choiceButtons = [{element: choiceButton1}, {element: choiceButton2}];

        const {selectedIndex} = this.state


        return (
            <View style={{flex: 1}}>
                <View style={{padding: 10, backgroundColor: "#fff"}}>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={choiceButtons}
                    selectedButtonStyle={{backgroundColor: "white"}}
                    buttonStyle={{
                        borderRadius: 6
                    }}
                    containerStyle={{
                        height: 35,
                        borderRadius: 10,
                        backgroundColor: "#DCDCDC",
                        padding: 2
                    }}/>

                <ScrollView horizontal
                            contentContainerStyle={{marginBottom: 10, marginTop: 10}}>
                    {
                        kindsOfShops.map((shop, i) => (
                            <Tile
                                width={150}
                                height={100}
                                featured
                                imageContainerStyle={{
                                    borderRadius: 20,
                                    height: 100,
                                    width: 130
                                }}
                                key={i}
                                imageSrc={shop.imageUrl}
                                title={shop.name}
                                titleStyle={{
                                    position: "absolute",
                                    top: 0,
                                    left: 6,
                                    color: "white",
                                }}
                                caption={"Предложений: " + shop.count}
                                captionStyle={{
                                    position: "absolute",
                                    bottom: -5,
                                    left: -10,
                                }}
                            />
                        ))
                    }
                </ScrollView>
                </View>
                <ScrollView
                style={{flex: 1}}>
                    {
                        this.state?.organizations?.map((organization, i) =>
                            <View
                                key={i}
                                style={{borderColor: "black"}}>
                                <ListItem
                                    key={0}
                                    leftAvatar={{source: {uri: organization.imageUrl.uri}}}
                                    rightIcon={<Icon
                                        name="bars"
                                        type="font-awesome"
                                    />}
                                    title={organization.name}
                                    subtitle={"0.8 км"}
                                />
                                <ImageBackground source={{uri: organization.imageUrl.uri}}
                                                 style={{width: "100%", height: 350}}>
                                    <FlatList
                                        data={kindsOfShops}
                                        horizontal={true}
                                        renderItem={({item}) =>
                                            <View
                                                style={{
                                                    padding: 4
                                                }}>
                                                <Text style={{
                                                    height: 20,
                                                    borderColor: "#b0b0b0",
                                                    borderRadius: 4,
                                                    textAlignVertical: 'center',
                                                    borderWidth: 15,
                                                    textAlign: 'center',}}
                                                >{item.name}</Text>
                                            </View>
                                        }
                                        style={{
                                            alignSelf: 'flex-end',
                                            paddingTop: 4
                                        }}
                                    />
                                    <View style={{
                                        alignSelf: 'stretch',
                                        margin: 20,
                                    }}>
                                        <Text style={{
                                            fontSize: 20,
                                            fontWeight: 'bold'
                                        }}>Акция на бургер</Text>
                                        <Text style={{
                                            fontSize: 18,
                                            color: "#5d5c5c",
                                            fontWeight: 'bold'
                                        }}>27.08.2020 - 31.12.2020</Text>
                                    </View>
                                </ImageBackground>
                            </View>

                        )
                    }
                </ScrollView>
            </View>
        );
    }
}
