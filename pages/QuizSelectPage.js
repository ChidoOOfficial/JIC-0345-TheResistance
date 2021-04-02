import React, {Component} from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, Alert, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Card } from 'react-native-paper';
import Toolbar from './Toolbar';
import quizData from '../assets/quizzes.json';
import {FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons} from '@expo/vector-icons';

export default class QuizSelectPage extends React.Component {

    constructor() {
        super();
        this.state = {
            buttonName: ' '
        }
        ;
    }
    _onPressButton() {
    }
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <View style={styles.screen}>
                        <ScrollView contentContainerStyle={styles.screen}>
                            
                            <Text style={styles.logo}> QUIZZES </Text>

                            <TextInput
                                placeholder="            Search for quizzes..."
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
                                    marginBottom: 20,
                                    shadowOpacity: 0
                                }}
                            />

                            {quizData.map(card => {
                                let categories = card.categories.map((cat, index) => {
                                    let colors = ['#f15bb5', '#fee440', '#00f5d4', '#9b5de5'];
                                    return (
                                        <TouchableOpacity key={index}
                                            style={[styles.buttons,{backgroundColor: colors[index]}]}
                                            onPress={() => this.props.navigation.navigate('QuizPage', {title: card.title, category: cat.name})}>
                                            
                                            <View style={styles.viewButtons}>
                                                <Ionicons name="ios-chatbubbles-outline" size={24} color="black" />
                                                <Text style={styles.normalText}>{cat.name}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                });
                                return (
                                    <Card style={styles.card}>
                                        <Card.Title title={card.title}/>
                                        <View style={styles.arrangeButtons}>{categories}</View>
                                    </Card>
                                );
                            })}
                        </ScrollView>
                    </View>
                </View>
                <Toolbar navigation={navigate}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewButtons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrangeButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: "wrap"
    },
    image: {
        flex: 1,
        aspectRatio: 1.5,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
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
        backgroundColor: '#74B4E0',
        alignItems: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"black",
        paddingBottom: 10
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
        alignItems: 'center',
        padding: 2,
        color:'black',
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 10,
    },
    search: {
        backgroundColor: "#d3d3d3",
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
    normalText: {
        color: "black",
        fontSize: 18,
        fontWeight: '800',
        flexDirection: 'row'
    },
    settings: {
        color: 'black',
        fontSize: 20,
        fontWeight: '800',
        flexDirection: 'row'
    },
    card: {
        backgroundColor:'lightblue', //blue coloring =  #74B4E0
        width: 300,
        marginBottom:20,
        borderRadius:20,
        shadowOpacity: 0
    }
});
