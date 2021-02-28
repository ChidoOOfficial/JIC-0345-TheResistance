import {StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Button, SafeAreaView} from 'react-native';
import { Card } from 'react-native-paper';
import GestureRecognizer from 'react-native-swipe-gestures';
import React from "react";
import Toolbar from './Toolbar';
import {FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons} from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import LessonCourse from "./LessonCourse";
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

    learn = (navigate, words) => {
        words = 'testword'
        navigate('LessonCourse', {lessonType: words});
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

                            <Text style={styles.titleText}> COMMON PHRASES </Text>
                        <View style={styles.arrangeButtons}>
                            <TouchableOpacity style={styles.buttons1} onPress={() => this.learn(navigate)}>
                                <View style={styles.viewButtons}>
                                    <Ionicons name="ios-chatbubbles-outline" size={24} color="black" />
                                    <Text style={styles.normalText}> 1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons2} onPress={() => this.learn(navigate)}>
                                <View style={styles.viewButtons}>
                                    <Octicons name="pencil" size={24} color="black" />
                                    <Text style={styles.normalText}> 2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons3} onPress={() => this.learn(navigate)}>
                                <View style={styles.viewButtons}>
                                    <MaterialIcons name="phone-in-talk" size={24} color="black" />
                                    <Text style={styles.normalText}> 3</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.titleText}> COLORS </Text>
                        <View style={styles.arrangeButtons}>
                            <TouchableOpacity style={styles.buttons1} onPress={() => this.learn(navigate)}>
                                <View style={styles.viewButtons}>
                                    <FontAwesome5 name="paint-brush" size={24} color="mediumblue"/>
                                    <Text style={styles.normalText}> 1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons2} onPress={() => this.learn(navigate)}>
                                <View style={styles.viewButtons}>
                                    <Ionicons name="md-color-palette-outline" size={24} color="black" />
                                    <Text style={styles.normalText}> 2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons3} onPress={() => this.learn(navigate)}>
                                <View style={styles.viewButtons}>
                                    <Ionicons name="md-color-fill-outline" size={24} color="black" />
                                    <Text style={styles.normalText}> 3</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                            <Text style={styles.titleText}> NUMBERS </Text>
                        <View style={styles.arrangeButtons}>
                            <TouchableOpacity style={styles.buttons1} onPress={() => this.learn(navigate)}>
                                <View style={styles.viewButtons}>
                                    <MaterialCommunityIcons name="numeric-1" size={36} color="blue" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons2} onPress={() => this.learn(navigate)}>
                                <View style={styles.viewButtons}>
                                    <MaterialCommunityIcons name="numeric-2" size={36} color="purple" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons3} onPress={() => this.learn(navigate)}>
                                <View style={styles.viewButtons}>
                                    <MaterialCommunityIcons name="numeric-3" size={36} color="deeppink" />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.titleText}> CLOTHING </Text>
                        <View style={styles.arrangeButtons}>
                            <TouchableOpacity style={styles.buttons1} onPress={() => this.learn(navigate, 'Clothing1')}>
                                <View style={styles.viewButtons}>
                                    <FontAwesome5 name="tshirt" size={24} color="white" />
                                    <Text style={styles.normalText}> 1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons2} onPress={() => this.learn(navigate, 'Clothing2')}>
                                <View style={styles.viewButtons}>
                                    <MaterialCommunityIcons name="hat-fedora" size={24} color="purple" />
                                    <Text style={styles.normalText}> 2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons3} onPress={() => this.learn(navigate)}>
                                <View style={styles.viewButtons}>
                                    <FontAwesome5 name="socks" size={24} color="deeppink" />
                                    <Text style={styles.normalText}> 3</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.titleText}> HOUSING </Text>
                        <View style={styles.arrangeButtons}>
                            <TouchableOpacity style={styles.buttons1} onPress={() => this.learn(navigate)}>
                                <View style={styles.viewButtons}>
                                    <FontAwesome5 name="house-user" size={24} color="blue" />
                                    <Text style={styles.normalText}> 1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons2} onPress={() => this.learn(navigate)}>
                                <View style={styles.viewButtons}>
                                    <MaterialCommunityIcons name="garage-variant" size={24} color="black" />
                                    <Text style={styles.normalText}> 2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons3} onPress={() => this.learn(navigate)}>
                                <View style={styles.viewButtons}>
                                    <FontAwesome5 name="bed" size={24} color="black" />
                                    <Text style={styles.normalText}> 3</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.titleText}> GRAMMAR </Text>
                        <View style={styles.arrangeButtons}>
                            <TouchableOpacity style={styles.buttons1} onPress={() => this.learn(navigate)}>
                                <View style={styles.viewButtons}>
                                    <MaterialCommunityIcons name="format-letter-case" size={28} color="blue" />
                                    <Text style={styles.normalText}> 1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons2} onPress={() => this.learn(navigate)}>
                                <View style={styles.viewButtons}>
                                    <MaterialCommunityIcons name="format-letter-case" size={28} color="purple" />
                                    <Text style={styles.normalText}> 2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons3} onPress={() => this.learn(navigate)}>
                                <View style={styles.viewButtons}>
                                    <MaterialCommunityIcons name="format-letter-case" size={28} color="deeppink" />
                                    <Text style={styles.normalText}> 3</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        </ScrollView>
                </View>
                </View>
                <Toolbar navigation={navigate}/>
            </View>
        );

    }

}
const styles = StyleSheet.create({
    arrangeButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    viewButtons: {
        flexDirection: 'row',
    },
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
        backgroundColor: 'lightskyblue',
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
    buttons1: {
        fontWeight: 'bold',
        backgroundColor: 'red',
        alignItems: 'center',
        padding: 10,
        width: 75,
        borderRadius:80,
        color:'black',
        borderColor:'black',
        justifyContent: "center",
        height: 75,
        marginBottom:6,
        marginRight:10
    },
    buttons2: {
        fontWeight: 'bold',
        backgroundColor: 'orange',
        alignItems: 'center',
        padding: 10,
        width: 75,
        borderRadius:80,
        color:'black',
        borderColor:'black',
        justifyContent: "center",
        height: 75,
        marginBottom:6,
        marginRight:10
    },
    buttons3: {
        fontWeight: 'bold',
        backgroundColor: 'green',
        alignItems: 'center',
        padding: 10,
        width: 75,
        borderRadius:80,
        color:'black',
        borderColor:'black',
        justifyContent: "center",
        height: 75,
        marginBottom:6,
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
        alignSelf: 'center',
    },
    normalText: {
        color: "black",
        fontSize: 20,
        fontWeight: '800',
        flexDirection: 'row'
    },
    settings: {
        color: 'black',
        fontSize: 20,
        fontWeight: '800',
        flexDirection: 'row'
    }
});
