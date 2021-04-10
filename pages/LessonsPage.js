import {StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Button, SafeAreaView, Image} from 'react-native';
import { Card } from 'react-native-paper';
import GestureRecognizer from 'react-native-swipe-gestures';
import React from "react";
import Toolbar from './Toolbar';
import {FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons} from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import LessonCourse from "./LessonCourse";
import lessonData from '../assets/lessons.json';
//import all the components we are going to use.

export default class LessonsPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <View style={styles.screen}>
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

                            {lessonData.map((card, i) => {
                                let categories = card.categories.map((cat, index) => {
                                    let colors = ['#f15bb5', '#fee440', '#00f5d4', '#9b5de5'];
                                    let completed = 1; // <-use value from the database here
                                    return (
                                        <TouchableOpacity key={index}
                                            style={[styles.buttons,{backgroundColor: colors[index%colors.length]}]}
                                            onPress={() => navigate('LessonCourse', {title: card.title, category: cat.name})}>

                                            <View style={styles.viewButtons}>
                                                <Ionicons name="ios-chatbubbles-outline" size={24} color="black" />
                                                <Text style={styles.normalText}>{cat.name}</Text>
                                            </View>
                                            <Image source={require('../assets/Checkmark.png')} style={[styles.checkmark, {opacity: completed}]}/>
                                        </TouchableOpacity>
                                    );
                                });
                                return (
                                    <Card style={styles.card} key={i}>
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
    screen: {
        flexGrow: 1,
        backgroundColor: '#74B4E0',
        alignItems: 'center',
    },
    logo: {
        fontWeight:"bold",
        fontSize:50,
        color:"black",
        paddingBottom: 10
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
    normalText: {
        color: "black",
        fontSize: 18,
        fontWeight: '800',
        flexDirection: 'row'
    },
    card: {
        backgroundColor:'lightblue', //blue coloring =  #74B4E0
        width: 300,
        marginBottom:20,
        borderRadius:20,
        shadowOpacity: 0
    },
    checkmark : {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "green",
        position: "absolute",
        right: 0
    }
});
