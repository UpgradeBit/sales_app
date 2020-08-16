const React = require('react');
const {Component} = require('react');
const {ScrollView, View} = require('react-native');
const {Text, ButtonGroup, Tile, ListItem, Image} = require('react-native-elements');

const kindsOfShops = [
    {
        name: "Бар",
        imageUrl: require('./images/bar.jpg'),
        count: 15
    },
    {
        name: "Ресторан",
        imageUrl: require('./images/restaurant.jpg'),
        count: 7
    }
];

export default class Main extends Component{
    constructor () {
        super();

        this.state = {
            selectedIndex: 0
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

                <View style={{ flexDirection: "row", margin: 2}}>
                    {
                        kindsOfShops.map((shop, i) => (
                            <Tile
                                featured
                                imageContainerStyle={{
                                    borderRadius: 20,
                                    height: 100,
                                    width: 100
                                }}
                                containerStyle={{
                                    flex: 1,
                                    flexDirection: "row"
                                }}
                                key={i}
                                imageSrc={shop.imageUrl}
                                title={shop.name}
                            />
                        ))
                    }
                </View>

                <View>
                    <ListItem
                        key={0}
                        leftAvatar={{ source: { uri: "http://vsefranshizi.ru/cms/cms-images/publication_item/0137/image/McDonalds.jpg" } }}
                        title={"Макдоналс"}
                        subtitle={"Мак"}
                        bottomDivider
                    >
                        <Image
                        sourse={{ uri: "http://vsefranshizi.ru/cms/cms-images/publication_item/0137/image/McDonalds.jpg" }}
                        style={{ width: 200, height: 200 }}
                        />
                    </ListItem>
                </View>

            </ScrollView>
        )
    }
}