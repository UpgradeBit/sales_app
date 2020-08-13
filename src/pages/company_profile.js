import {logger} from "react-native-logs";
import {Alert} from "react-native";

const React = require('react');
const {Component} = require('react');
const {
    StyleSheet,
    View,
    ScrollView,
    FlatList,
} = require('react-native');

const {
    Text,
    Icon,
    ListItem,
} = require('react-native-elements');

const Auctions = [
    {
        id: 0,
        title: 'Акция 0',
        data: '12.08.20'
    },
    {
        id: 1,
        title: 'Акция 1',
        data: '12.08.20'
    },
    {
        id: 2,
        title: 'Акция 2',
        data: '12.08.20'
    },
    {
        id: 3,
        title: 'Акция 3',
        data: '12.08.20'
    },
    {
        id: 4,
        title: 'Акция 4',
        data: '12.08.20'
    },
]

export default class Company_profile extends Component {

    render() {
        return (
            <ScrollView style={styles.scroll}>
                {/*Компания*/}
                <ListItem
                    leftAvatar={{
                        size: 'small',
                        source: {
                            uri: 'https://cdn1.zp.ru/job/attaches/2018/09/70/97/709707a9493e933767019d6aafb66e7a.jpg'
                        }
                    }}
                    titleStyle={{fontSize: 20}}
                    title="CoffeeLike"
                    subtitle="Рейтинг"
                />
                <Text
                    onPress={}
                    >Адрес (на карте)</Text>
                <Text h4>Избранные акции ({Auctions.length})</Text>
                <ScrollView horizontal>
                    <FlatList
                        numColumns={Auctions.length}
                        data={Auctions}
                        renderItem={({item}) =>
                            (<Text style={styles.textList}>{item.title}</Text>)
                        }
                    />
                </ScrollView>
                <Text h4>Избранные компании ({Auctions.length})</Text>
                <ScrollView horizontal>
                    <FlatList
                        numColumns={Auctions.length}
                        data={Auctions}
                        renderItem={({item}) =>
                            (<Text style={styles.textList}>{item.title}</Text>)
                        }
                    />
                </ScrollView>
                <ListItem
                    title="Статистика"
                    rightIcon={
                        <Icon
                            name="info"
                            type="font-awesome"
                        />
                    }
                    type="clear"
                    topDivider={1}
                    bottomDivider={1}
                    onPress={() => Alert.alert("Test")}
                />
                <ListItem
                    title="Настройки"
                    rightIcon={
                        <Icon
                            name="gear"
                            type="font-awesome"
                        />
                    }
                    bottomDivider={1}
                    onPress={() => Alert.alert("Test")}
                />
                <ListItem
                    title="Выйти"
                    rightIcon={
                        <Icon
                            name="sign-out"
                            type="font-awesome"
                        />
                    }
                    bottomDivider={1}
                    onPress={() => Alert.alert("Test")}
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
    textList: {
        backgroundColor: '#95a5a6',
        marginTop: 5,
        marginLeft: 5,
        padding: 20,
    },
    buttonList:{
        borderBottomWidth:1,

    }
});
