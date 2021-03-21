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
            lessonType: ''
        }
        ;
    }

    _onPressButton() {
        alert('You tapped the button')
    }

    learn = (navigate, words) => {
        navigate('LessonCourse', {lessonType: words});
        /*the lesson type will conditionally render the lesson course depending on the button pressed*/
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
                        <Card style={styles.card}>
                            <Card.Title title="                 ANIMALS"/>
                            <View style={styles.arrangeButtons}>
                                <TouchableOpacity style={styles.buttons1} onPress={() => this.learn(navigate, "dogs")}>
                                    <View style={styles.viewButtons}>
                                        <FontAwesome5 name="dog" size={24} color="black" />
                                        <Text style={styles.normalText}>DOGS</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons2} onPress={() => this.learn(navigate, "farm")}>
                                    <View style={styles.viewButtons}>
                                        <MaterialCommunityIcons name="barn" size={24} color="black" />
                                        <Text style={styles.normalText}>FARM</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.arrangeButtons}>
                                <TouchableOpacity style={styles.buttons3} onPress={() => this.learn(navigate, "pets")}>
                                    <View style={styles.viewButtons}>
                                        <MaterialIcons name="pets" size={24} color="black" />
                                        <Text style={styles.normalText}>PETS</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons4} onPress={() => this.learn(navigate, "wild")}>
                                    <View style={styles.viewButtons}>
                                        <MaterialCommunityIcons name="panda" size={24} color="black" />
                                        <Text style={styles.normalText}>WILD</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Card>

                        <Card style={styles.card}>
                            <Card.Title title="      COMMON PHRASES"/>
                            <View style={styles.arrangeButtons}>
                                <TouchableOpacity style={styles.buttons1} onPress={() => this.learn(navigate, "phrases1")}>
                                    <View style={styles.viewButtons}>
                                        <Ionicons name="ios-chatbubbles-outline" size={24} color="black" />
                                        <Text style={styles.normalText}>1</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons2} onPress={() => this.learn(navigate, "phrases2")}>
                                    <View style={styles.viewButtons}>
                                        <Octicons name="pencil" size={24} color="black" />
                                        <Text style={styles.normalText}>2</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.arrangeButtons}>
                                <TouchableOpacity style={styles.buttons3} onPress={() => this.learn(navigate, "phrases3")}>
                                    <View style={styles.viewButtons}>
                                        <MaterialIcons name="phone-in-talk" size={24} color="black" />
                                        <Text style={styles.normalText}>3</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Card>

                        <Card style={styles.card}>
                            <Card.Title title="                 COLORS"/>
                            <View style={styles.arrangeButtons}>
                                <TouchableOpacity style={styles.buttons1} onPress={() => this.learn(navigate, "colors1")}>
                                    <View style={styles.viewButtons}>
                                        <FontAwesome5 name="paint-brush" size={24} color="mediumblue"/>
                                        <Text style={styles.normalText}>1</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons2} onPress={() => this.learn(navigate, "colors2")}>
                                    <View style={styles.viewButtons}>
                                        <Ionicons name="md-color-palette-outline" size={24} color="black" />
                                        <Text style={styles.normalText}>2</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.arrangeButtons}>
                                <TouchableOpacity style={styles.buttons3} onPress={() => this.learn(navigate, "colors3")}>
                                    <View style={styles.viewButtons}>
                                        <Ionicons name="md-color-fill-outline" size={24} color="black" />
                                        <Text style={styles.normalText}>3</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Card>

                        <Card style={styles.card}>
                            <Card.Title title="               NUMBERS"/>
                            <View style={styles.arrangeButtons}>
                                <TouchableOpacity style={styles.buttons1} onPress={() => this.learn(navigate, "numbers1")}>
                                    <View style={styles.viewButtons}>
                                        <MaterialCommunityIcons name="numeric-1" size={36} color="blue" />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons2} onPress={() => this.learn(navigate, "numbers2")}>
                                    <View style={styles.viewButtons}>
                                        <MaterialCommunityIcons name="numeric-2" size={36} color="purple" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.arrangeButtons}>
                                <TouchableOpacity style={styles.buttons3} onPress={() => this.learn(navigate, "numbers3")}>
                                    <View style={styles.viewButtons}>
                                        <MaterialCommunityIcons name="numeric-3" size={36} color="deeppink" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Card>

                        <Card style={styles.card}>
                            <Card.Title title="               CLOTHING"/>
                            <View style={styles.arrangeButtons}>
                                <TouchableOpacity style={styles.buttons1} onPress={() => this.learn(navigate, 'Clothing1')}>
                                    <View style={styles.viewButtons}>
                                        <FontAwesome5 name="tshirt" size={24} color="white" />
                                        <Text style={styles.normalText}>1</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons2} onPress={() => this.learn(navigate, 'Clothing2')}>
                                    <View style={styles.viewButtons}>
                                        <MaterialCommunityIcons name="hat-fedora" size={24} color="purple" />
                                        <Text style={styles.normalText}>2</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.arrangeButtons}>
                                <TouchableOpacity style={styles.buttons3} onPress={() => this.learn(navigate, 'Clothing3')}>
                                    <View style={styles.viewButtons}>
                                        <FontAwesome5 name="socks" size={24} color="deeppink" />
                                        <Text style={styles.normalText}>3</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Card>

                        <Card style={styles.card}>
                            <Card.Title title="                HOUSING"/>
                            <View style={styles.arrangeButtons}>
                                <TouchableOpacity style={styles.buttons1} onPress={() => this.learn(navigate, "housing1")}>
                                    <View style={styles.viewButtons}>
                                        <FontAwesome5 name="house-user" size={24} color="blue" />
                                        <Text style={styles.normalText}>1</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons2} onPress={() => this.learn(navigate, "housing2")}>
                                    <View style={styles.viewButtons}>
                                        <MaterialCommunityIcons name="garage-variant" size={24} color="black" />
                                        <Text style={styles.normalText}>2</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.arrangeButtons}>
                                <TouchableOpacity style={styles.buttons3} onPress={() => this.learn(navigate, "housing3")}>
                                    <View style={styles.viewButtons}>
                                        <FontAwesome5 name="bed" size={24} color="black" />
                                        <Text style={styles.normalText}>3</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Card>

                        <Card style={styles.card}>
                            <Card.Title title="               GRAMMAR"/>
                            <View style={styles.arrangeButtons}>
                                <TouchableOpacity style={styles.buttons1} onPress={() => this.learn(navigate, "grammar1")}>
                                    <View style={styles.viewButtons}>
                                        <MaterialCommunityIcons name="format-letter-case" size={28} color="blue" />
                                        <Text style={styles.normalText}>1</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons2} onPress={() => this.learn(navigate, "grammar2")}>
                                    <View style={styles.viewButtons}>
                                        <MaterialCommunityIcons name="format-letter-case" size={28} color="purple" />
                                        <Text style={styles.normalText}>2</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.arrangeButtons}>
                                <TouchableOpacity style={styles.buttons3} onPress={() => this.learn(navigate, "grammar3")}>
                                    <View style={styles.viewButtons}>
                                        <MaterialCommunityIcons name="format-letter-case" size={28} color="deeppink" />
                                        <Text style={styles.normalText}>3</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Card>

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
        backgroundColor: '#f15bb5',
        alignItems: 'center',
        padding: 2,
        width: 80,
        borderRadius:80,
        color:'black',
        borderColor:'black',
        justifyContent: "center",
        height: 80,
        marginBottom:6,
        marginRight:5,
        marginLeft:39,
        marginTop: 10
    },
    buttons2: {
        fontWeight: 'bold',
        backgroundColor: '#fee440',
        alignItems: 'center',
        padding: 10,
        width: 80,
        borderRadius:80,
        color:'black',
        borderColor:'black',
        justifyContent: "center",
        height: 80,
        marginBottom:6,
        marginRight:40,
        marginLeft:40,
        marginTop: 10
    },
    buttons3: {
        fontWeight: 'bold',
        backgroundColor: '#00f5d4',
        alignItems: 'center',
        padding: 10,
        width: 80,
        borderRadius:80,
        color:'black',
        borderColor:'black',
        justifyContent: "center",
        height: 80,
        marginBottom:6,
        marginRight:5,
        marginLeft:0,
        marginTop: 20
    },
    buttons4: {
        fontWeight: 'bold',
        backgroundColor: '#9b5de5',
        alignItems: 'center',
        padding: 10,
        width: 80,
        borderRadius:80,
        color:'black',
        borderColor:'black',
        justifyContent: "center",
        height: 80,
        marginBottom:6,
        marginRight:2,
        marginTop: 20
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
    },
    card: {
        backgroundColor:'lightblue', //blue coloring =  #74B4E0
        height:260, //200 if 3 lessons, 260 if 4
        marginBottom:20,
        borderRadius:20,
        padding: 0,
        shadowOpacity: 0
    }
});
