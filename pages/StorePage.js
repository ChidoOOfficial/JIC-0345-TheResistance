import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, Alert} from 'react-native';
import React from "react";

import Toolbar from './Toolbar';

export default class StorePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 500,
            items: [{name: "Cow", price: 100, owned: 0, src: require('../assets/cow.png')}, 
                    {name: "Goose", price: 150, owned: 0, src: require('../assets/goose.png')},
                    {name: "Snake", price: 250, owned: 0, src: require('../assets/snake.png')},]
        };
    }

    buy(itemNum) {
        if (this.state.items[itemNum].price <= this.state.points) { //enough points
            let updatedItems = this.state.items;
            updatedItems[itemNum].owned++;

            this.setState({
                points: this.state.points - this.state.items[itemNum].price,
                items: updatedItems
            });
        } else {
            //not enough points
        }
    };
  
    sell(itemNum) {
        if (this.state.items[itemNum].owned > 0) {
            let updatedItems = this.state.items;
            updatedItems[itemNum].owned--;

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
                {text: "Yes", onPress: () => updateDatabase()}
            ],
            {cancelable: false}
        );
    }

    updateDatabase() {
        //send the order through to the database here
    }

    render() {
        const { navigate } = this.props.navigation;
        
        var itemList = [];
        for (let i = 0; i < this.state.items.length; i++) {
            itemList.push(
               <View style={styles.itemGroup}>
                    <View style={styles.subContainer}>
                        <Image source={this.state.items[i].src} style={styles.itemPic} />

                        <View stlye={styles.nameQtyBox}>
                            <Text style={styles.itemTitle}>{this.state.items[i].name}</Text>
                            <Text>You have: 9</Text>
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
                            <Text style={styles.itemAmount}>{this.state.items[i].owned}</Text>
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
                    <Text style={styles.available}>Available Points: {this.state.points}</Text>
                    
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