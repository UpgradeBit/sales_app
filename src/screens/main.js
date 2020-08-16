const React = require('react');
const {Component} = require('react');
const {ScrollView, View} = require('react-native');
const {Text, ButtonGroup, Tile, ListItem, Card} = require('react-native-elements');

const kindsOfShops = [
    {
        name: "Бар",
        imageUrl: {uri: "https://avatars.mds.yandex.net/get-zen_doc/135437/pub_5d4540e2027a1500adcef2f0_5d45444935c8d800ad0d594e/scale_1200"},
        count: 15
    },
    {
        name: "Ресторан",
        imageUrl: {uri: "https://sovcominvest.ru/uploads/products/155a40b4c3151476fbbfbbbfdc1b8c90.jpg"},
        count: 7
    },
    {
        name: "Кафе",
        imageUrl: {uri: "https://img2.goodfon.ru/original/2560x1600/0/4f/zermatt-switzerland-cermatt-6874.jpg"},
        count: 2
    }
];

export default class Main extends Component{
    constructor () {
        super();

        this.state = {
            selectedIndex: 0,
        };

        this.updateIndex = this.updateIndex.bind(this);
    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex});
    }

    render () {

        const choiceButton1 = () => <Text>Все акции</Text>;
        const choiceButton2 = () => <Text>Мои подписки</Text>;

        const choiceButtons = [{ element: choiceButton1 }, { element: choiceButton2 }];

        const { selectedIndex } = this.state

        return (
            <ScrollView style={{
                backgroundColor: '#ffffff',
                padding: 10,
            }}>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={choiceButtons}
                    selectedButtonStyle={{backgroundColor: "white"}}
                    buttonStyle={{
                        borderRadius: 6
                    }}
                    containerStyle={{height: 35,
                        borderRadius: 10,
                        backgroundColor: "#DCDCDC",
                        padding: 2}} />

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

                <View style={{borderColor: "black"}}>
                    <ListItem
                        key={0}
                        leftAvatar={{ source: { uri: "http://vsefranshizi.ru/cms/cms-images/publication_item/0137/image/McDonalds.jpg" } }}
                        title={"Макдоналс"}
                        subtitle={"Мак"}
                    />

                    <Card
                        image={{uri: "http://sc-globalcity.ru/sites/default/files/offers/800x800_site_mccombo_bm.jpg"}}/>
                </View>
                </ScrollView>
        )
    }
}