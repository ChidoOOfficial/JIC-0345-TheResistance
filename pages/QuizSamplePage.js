import React, {Component} from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, Alert, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Card } from 'react-native-paper';
import Toolbar from './Toolbar';
//import { Checkbox } from 'react-native-elements'
import Swiper from 'react-native-swiper'

export default class QuizSamplePage extends React.Component {
    
    _onPressButton() {
        alert('You pressed the button')
    }
    
    render () {
        const { navigate } = this.props.navigation;

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <View style={styles.screen}>
                    <ScrollView contentContainerStyle={styles.screen}>
                        <Text style={styles.prompt}> Prompt Goes Here </Text>
                        <Swiper style={styles.wrapper} showsButtons loop={true}>
                            <SafeAreaView style={styles.container}>
                                <Image source={require('../assets/Animals/01chihuahua.png')} style={styles.image}/>   
                                <TouchableOpacity style={styles.tlbutton} onPress={this._onPressButton}>
                                        <Text style={styles.text}> Chihuahua </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.trbutton} onPress={this._onPressButton}>
                                        <Text style={styles.text}> Bulldog </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.blbutton} onPress={this._onPressButton}>
                                        <Text style={styles.text}> Labrodor </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.brbutton} onPress={this._onPressButton}>
                                        <Text style={styles.text}> Pitbull </Text>
                                </TouchableOpacity>
                            </SafeAreaView>
                            <SafeAreaView> 
                                <Text style={styles.text}> Test </Text>
                            </SafeAreaView>
                        </Swiper>
                    </ScrollView>
                    </View>
                </View>
                <Toolbar navigation={navigate}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        aspectRatio: 0.5,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },
    screen: {
        flex: 1,
        backgroundColor: '#74B4E0',
        alignItems: 'center',
    },
    wrapper : {},
    prompt:{
        fontWeight:"bold",
        fontSize:40,
        color:"black",
        textDecorationLine: 'underline',
        paddingBottom: 10,
        paddingTop: 10
    },
    tlbutton: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: "center",
        color:'black',
        backgroundColor: 'ivory',
        flexDirection: 'row',
        padding: 10,
        width: 200,
        borderRadius: 10, //originally 80
        height: 50,
        marginBottom: 6
    },
    trbutton: {
        fontWeight: 'bold',
        backgroundColor: 'ivory',
        alignItems: 'flex-end',
        padding: 10,
        width: 200,
        borderRadius: 10, //originally 80
        color:'black',
        justifyContent: "center",
        height: 50,
        marginBottom: 6, 
        flexDirection: 'row',
    },
    blbutton: {
        fontWeight: 'bold',
        backgroundColor: 'ivory',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        width: 200,
        borderRadius: 10, //originally 80
        color:'black',
        justifyContent: "center",
        height: 50,
        marginBottom: 6
    },
    brbutton: {
        fontWeight: 'bold',
        backgroundColor: 'ivory',
        alignItems: 'center',
        padding: 10,
        width: 200,
        borderRadius: 10, //originally 80
        color:'black',
        justifyContent: "center",
        height: 50,
        marginBottom: 6
    }, 
    text: {
        color: "black",
        fontSize: 20,
        fontWeight: '800',
        flexDirection: 'row'
    }
});