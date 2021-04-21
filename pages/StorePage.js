import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, Alert} from 'react-native';
import React from "react";

import Toolbar from './Toolbar';
import configs from '../app_config.json';

export default class StorePage extends React.Component {
    state = {
        points: 0,
        items: []
    };

    constructor(props) {
        super(props);

        let usersInventory = this.state.items;
        let itemDetailList = [{Item: "Cow", price: 100, owned: 0, selected: 0, src: require('../assets/cow.png')},
                              {Item: "Goose", price: 150, owned: 0, selected: 0, src: require('../assets/goose.png')},
                              {Item: "Snake", price: 250, owned: 0, selected: 0, src: require('../assets/snake.png')},];

        fetch(configs.Server_Address + 'user/inventory', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then((res) => res.json())
        .then((json) => {
            usersInventory = json["Inventory"];

            for (let storeItem of itemDetailList) {
                for (let userItem of usersInventory) {
                    if(storeItem.Item == userItem.Item) {
                        storeItem.owned = userItem.Quantity;
                    }
                }
            }

            this.setState({
                points: this.state.points,
                items: itemDetailList
            });
        });

        let userCoins = this.state.points;
        fetch(configs.Server_Address + 'user/coins', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then((res) => res.json())
        .then((json) => {
            userCoins = json["Coins"];

            this.setState({
                points: userCoins,
                items: this.state.items
            });
        });
    }

    buy(itemNum) {
        if (this.state.items[itemNum].price <= this.state.points) { //enough points
            let updatedItems = this.state.items;
            updatedItems[itemNum].selected++;

            this.setState({
                points: this.state.points - this.state.items[itemNum].price,
                items: updatedItems
            });
        } else {
            //not enough points
        }
    };

    sell(itemNum) {
        if (this.state.items[itemNum].selected > 0) {
            let updatedItems = this.state.items;
            updatedItems[itemNum].selected--;

            this.setState({
                points: this.state.points + this.state.items[itemNum].price,
                items: updatedItems
            });
        } else {
            //you've none to sell
        }
    };

    confirm() {
        Alert.alert("Confirm", "Are you sure?",
            [
                {text: "No", style: "cancel"},
                {text: "Yes", onPress: () => this.updateDatabase()}
            ],
            {cancelable: false}
        );
    }

    updateDatabase() {
        let newInventory = [];
        for (let storeItem of this.state.items) {
            newInventory.push({
                "Item": storeItem.Item,
                "Quantity": storeItem.owned + storeItem.selected
            });
        }

        fetch(configs.Server_Address + 'user/inventory', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Inventory": newInventory
            })
        })
        .then((res) => res.json())
        .then((json) => {
        });

        fetch(configs.Server_Address + 'user/coins', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Coins": this.state.points
            })
        })
        .then((res) => res.json())
        .then((json) => {
        });

        // update onscreen content
        let updatedOnScreenItems = [];
        for (let i = 0; i < this.state.items.length; i++) {
            updatedOnScreenItems[i] = this.state.items[i];
            updatedOnScreenItems[i].owned += updatedOnScreenItems[i].selected;
            updatedOnScreenItems[i].selected = 0;
        }

        this.setState({
            points: this.state.points,
            items: updatedOnScreenItems
        });

    }

    render() {
        const { navigate } = this.props.navigation;

        var itemList = [];
        for (let i = 0; i < this.state.items.length; i++) {
            itemList.push(
               <View style={styles.itemGroup} key={i}>
                    <View style={styles.subContainer}>
                        <Image source={this.state.items[i].src} style={styles.itemPic} />

                        <View stlye={styles.nameQtyBox}>
                            <Text style={styles.itemTitle}>{this.state.items[i].Item}</Text>
                            <Text>{this.state.items[i].owned} owned</Text>
                        </View>
                    </View>
                    <View style={[styles.subContainer, {'justifyContent': 'flex-end'}]}>
                        <View>
                            <Text style={styles.price}>Price</Text>
                            <Text>{this.state.items[i].price}</Text>
                        </View>
                        <View style={styles.itemBuyBox}>
                            <TouchableOpacity onPress={this.sell.bind(this, i)}>
                                <View style={styles.itemBuyButton}>
                                    <Text style={styles.plusMinusText}>-</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.itemAmount}>{this.state.items[i].selected}</Text>
                            <TouchableOpacity onPress={this.buy.bind(this, i)}>
                                <View style={styles.itemBuyButton}>
                                    <Text style={styles.plusMinusText}>+</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }
        return (
            <View style={{flex: 1}}>
                <View style={styles.screen}>
                    <Text style={styles.available}>Available Coins: {this.state.points}</Text>

                    {itemList}

                    <TouchableOpacity onPress={this.confirm.bind(this)}>
                        <View style={styles.confirmPurchases}>
                            <Text style={styles.login}>Purchase!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Toolbar navigation={navigate}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#74B4E0',
        alignItems: 'center',
    },
    available: {
        textAlign: "center",
        fontSize: 40,
        color: "#FFFFFF",
        margin: 20,
    },
    itemGroup: {
        margin: 10,
        padding: 10,
        width: "95%",
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },
    subContainer: {
        width: "50%",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    itemPic: {
        width: 50,
        height: 50,
        marginRight : 10
    },
    nameQtyBox: {
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    price: {
        fontSize: 20,
        //marginLeft: 50,
    },
    itemTitle: {
        fontSize: 25,
    },
    itemBuyBox: {
        height: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft: 10
    },
    itemAmount: {
        fontSize: 30,
        justifyContent: 'center',
        margin: 10
    },
    itemBuyButton: {
        backgroundColor: "#F45BB5",
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center',
        borderRadius: 5,
        padding:15
    },
    plusMinusText: {
        fontWeight: "bold",
        fontSize: 30,
        "fontFamily": "monospace",
        color: "white"
    },
    confirmPurchases: {
        backgroundColor: "#7af59b",
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center',
        borderRadius: 5,
        padding:15,
        marginTop: 15
    }
});
