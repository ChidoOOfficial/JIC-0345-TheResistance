import {StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Button, SafeAreaView} from 'react-native';
import { Card } from 'react-native-paper';
import GestureRecognizer from 'react-native-swipe-gestures';
import React from "react";
//import all the components we are going to use.

export default class LessonsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonName: ' '
        }
        ;
    }
    _onPressButton() {
        alert('You tapped the button')
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.screen}>

                <Text style={styles.logo}> LESSONS </Text>
                <TextInput
                    placeholder="            Search for lessons..."
                    placeholderTextColor="black"
                    style={{
                        backgroundColor: 'grey',
                        height: 30,
                        width:300,
                        fontSize:20,
                        color: "black",
                        borderRadius:80,
                        borderBottomWidth:0.5,
                        borderBottomColor: '#7d90a0',
                        marginBottom: 20
                    }}
                />
                    <Card style={{backgroundColor:"ivory", height:200, marginBottom:20}}>
                        <Text style={styles.titleText}> COMMON PHRASES </Text>
                        <TouchableOpacity style={styles.buttons} onPress={this._onPressButton}>
                            <Text style={styles.normalText}> COMMON PHRASES 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={this._onPressButton}>
                            <Text style={styles.normalText}> COMMON PHRASES 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons}>
                            <Text style={styles.normalText}> COMMON PHRASES 3</Text>
                        </TouchableOpacity>
                    </Card>

                <Card style={{backgroundColor:"ivory", height:200, marginBottom:20}}>
                    <Text style={styles.titleText}> COLORS </Text>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.normalText}> COLORS 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.normalText}> COLORS 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.normalText}> COLORS 3</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={{backgroundColor:"ivory", height:200, marginBottom:20}}>
                    <Text style={styles.titleText}> NUMBERS </Text>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.normalText}> NUMBERS 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.normalText}> NUMBERS 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.normalText}> NUMBERS 3</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={{backgroundColor:"ivory", height:200, marginBottom:20}}>
                    <Text style={styles.titleText}> CLOTHING </Text>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.normalText}> CLOTHING 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.normalText}> CLOTHING 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.normalText}> CLOTHING 3</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={{backgroundColor:"ivory", height:200, marginBottom:20}}>
                    <Text style={styles.titleText}> HOUSING </Text>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.normalText}> HOUSING 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.normalText}> HOUSING 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.normalText}> HOUSING 3</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={{backgroundColor:"ivory", height:200, marginBottom:20}}>
                    <Text style={styles.titleText}> GRAMMAR </Text>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.normalText}> GRAMMAR 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.normalText}> GRAMMAR 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.normalText}> GRAMMAR 3</Text>
                    </TouchableOpacity>
                </Card>
            </ScrollView>
        );
    }

}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        aspectRatio: 1.5,
        resizeMode: 'contain',

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    screen: {
        flexGrow: 1,
        backgroundColor: 'floralwhite',
        alignItems: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"black",
        textDecorationLine: 'underline'
    },
    inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    userInput:{
        height:50,
        color:"white"
    },
    buttons: {
        fontWeight: 'bold',
        backgroundColor: 'honeydew',
        alignItems: 'center',
        padding: 10,
        width: 340,
        borderRadius:80,
        color:'black',
        borderColor:'black',
        justifyContent: "center",
        height: 50,
        marginBottom:6
    },
    search: {
        backgroundColor: "grey",
        fontSize: 20,
        width: 340,
        borderRadius:80,
    },
    picker: {
        width: 200,
        borderColor: 'black',
        borderWidth: 1,
        fontSize:32,
    },
    pickerItem: {
        color: 'red',
        fontSize:17,
        marginTop:20,
        backgroundColor: "grey",
    },
    pickerIcon: {
        color: "black",
        position: "absolute",
        bottom: 15,
        right: 10,
        fontSize: 20
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: 'notoserif',
        alignSelf: 'center',
    },
    normalText: {
        color: "black",
        fontSize: 20,
    }
});
