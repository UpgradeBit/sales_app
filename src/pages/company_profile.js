import {logger} from "react-native-logs";
import {Alert, Button, ListView} from 'react-native';
import ReactList from 'react-list'

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

const Id_feature = [
    {
        id: 0,
        text: "Кофе",
    },
    {
        id: 1,
        text: "Ресторан",
    },
    {
        id: 2,
        text: "Бар",
    }
]

const Comments = [
    {
        id: 0,
        user: 'Пользователь 1',
        data: '12.08.20',
        rating: "Рейтинг",
        content: "Краткое описание акции, ее оценка и может быть рекомендация другим пользователям использовать ее пока она действует"
    },
    {
        id: 1,
        user: 'Пользователь 2',
        data: '16.10.19',
        rating: "Рейтинг",
        content: "Краткое описание акции, ее оценка и может быть рекомендация другим пользователям использовать ее пока она действует"
    },
]

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
                        size: 'large',
                        source: {
                            uri: 'https://cdn1.zp.ru/job/attaches/2018/09/70/97/709707a9493e933767019d6aafb66e7a.jpg'
                        }
                    }}

                    titleStyle={{fontSize: 20}}
                    title="CoffeeLike"
                    subtitle="Рейтинг"
                    style={styles.list_item}
                />
                {/*Адрес*/}
                <Text style={styles.text_under_title}>
                    Адрес (на карте)
                </Text>
                {/*Расстояние*/}
                <Text style={styles.text}>
                    Расстояние (время на дорогу)
                </Text>
                <Text style={styles.text}>
                    Расстояние (время на дорогу)
                </Text>
                {/*Вид компании*/}
                <View style={{alignContent: 'center', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20}}>
                    <Text style={styles.text_id_feature}>Кафе</Text>
                    <Text style={styles.text_id_feature}>Бар</Text>
                    <Text style={styles.text_id_feature}>Ресторан</Text>
                </View>
                {/*Кнопка подписаться*/}
                <Text style={{
                    marginTop: 17,
                    color: "#000",
                    fontSize: 20,
                    borderWidth: 10,
                    borderColor: '#b8b8b8',
                    borderRadius: 7,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    backgroundColor: '#b8b8b8',
                    marginBottom: 23,
                }}>Подписаться</Text>
                <Text h4>Акции</Text>
                {/*Акции*/}
                <ScrollView horizontal>
                    <FlatList
                        numColumns={Auctions.length}
                        data={Auctions}
                        renderItem={({item}) =>
                            (<Text style={styles.textList}>{item.title}</Text>)
                        }
                    />
                </ScrollView>
                {/*Разделитель*/}
                <Text style={{backgroundColor: '#b8b8b8', height: 2, marginTop: 15, marginBottom: 15}}/>
                <Text h4>Комментарии</Text>
                {/*Комментарии*/}
                <FlatList
                    data={Comments}
                    renderItem={({item}) =>
                        (
                            /*<Text style={styles.textList}>{item.title}</Text>*/
                            <ListItem
                                title={item.user}
                                rightTitle={item.data}
                                rightTitleStyle={{alignItems: 'flex-start'}}
                                subtitle={
                                    <View>
                                        <Text>{item.rating}</Text>
                                        <Text>{item.content}</Text>
                                    </View>
                                }
                                bottomDivider="true"
                            />
                        )
                    }
                />
                {/*Список: настройки и выход*/}
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
                    title="Выйти"
                    rightIcon={
                        <Icon
                            name="sign-out"
                            type="font-awesome"
                        />
                    }
                    bottomDivider={1}
                    onPress={() => Alert.alert("Test")}
                    style={{marginBottom: 50}}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text_under_title: {
        marginLeft: 106,
        marginTop: -29,
        color: "#7a7a7a"
    },
    text_id_feature: {
        color: "#fff",
        height: 25,
        fontSize: 15,
        borderWidth: 10,
        borderColor: '#b8b8b8',
        borderRadius: 7,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#b8b8b8',
    },
    text: {
        marginLeft: 106,
        color: "#7a7a7a",
    },
    list_item: {
    },
    scroll: {
        backgroundColor: '#ffffff',
        padding: 30,
        flexDirection: 'column',
    },
    /*textList0: {
        backgroundImage: Rectangle,
    },*/
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
