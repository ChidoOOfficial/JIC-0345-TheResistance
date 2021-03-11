import React, {Component} from "react"; // maybe add {useState}
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, 
    Alert, Dimensions, TouchableOpacity, TextInput } from 'react-native';
//import { Card } from 'react-native-paper';
import Toolbar from './Toolbar';
import { Checkbox } from 'react-native-elements'
import Swiper from 'react-native-swiper/src'

export default class QuizSamplePage extends React.Component {
    
    _onPressButton() {
        alert('You pressed the button')
    }

    correctAnswer() {
        alert('Correct! Great job!')
    }
    incorrectAnswer() {
        alert('That is incorrect. Try again.')
    }

    rightAnswerState={
        backgroundColor: 'ivory',
        newBackgroundColor: 'green'
        //pressed: true,
    }

    wrongAnswerState={
        backgroundColor: 'ivory',
        newBackgroundColor: 'red',
        //pressed: true,
    }

    changeColor() {
        if(!this.state.pressed) {
            this.setState({pressed: true, })
        }
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
                                <TouchableOpacity style={styles.button} onPress={this.correctAnswer}>
                                    <Text style={styles.text}> Chihuahua </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={this.incorrectAnswer}>
                                     <Text style={styles.text}> Bulldog </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={this.incorrectAnswer}>
                                    <Text style={styles.text}> Labrodor </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={this.incorrectAnswer}>
                                    <Text style={styles.text}> Pitbull </Text>
                                </TouchableOpacity>
                                {/* The line below was added so swipe dots don't interfere with answer choices*/}
                                <TouchableOpacity styles={styles.spaceButton} onPress={this.incorrectAnswer}>
                                    <Text style={styles.bufferText}>a</Text>
                                </TouchableOpacity>
                            </SafeAreaView>
                            <SafeAreaView style={styles.container}>
                                <Image source={require('../assets/Animals/02Beagle.png')} style={styles.image}/>   
                                <TouchableOpacity style={styles.button} onPress={this.incorrectAnswer}>
                                    <Text style={styles.text}> Shiba Inu </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={this.correctAnswer}>
                                     <Text style={styles.text}> Beagle </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={this.incorrectAnswer}>
                                    <Text style={styles.text}> Terrier </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={this.incorrectAnswer}>
                                    <Text style={styles.text}> Shetland </Text>
                                </TouchableOpacity>
                                {/* The line below was added so swipe dots don't interfere with answer choices*/}
                                <TouchableOpacity styles={styles.spaceButton} onPress={this.incorrectAnswer}>
                                    <Text style={styles.bufferText}>a</Text>
                                </TouchableOpacity>
                            </SafeAreaView>
                            <SafeAreaView style={styles.container}>
                                <Image source={require('../assets/Animals/03Dachshund.png')} style={styles.image}/>   
                                <TouchableOpacity style={styles.button} onPress={this.incorrectAnswer}>
                                    <Text style={styles.text}> Great Dane </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={this.incorrectAnswer}>
                                     <Text style={styles.text}> Husky </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={this.correctAnswer}>
                                    <Text style={styles.text}> Dachshund </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={this.incorrectAnswer}>
                                    <Text style={styles.text}> German Shepard </Text>
                                </TouchableOpacity>
                                {/* The line below was added so swipe dots don't interfere with answer choices*/}
                                <TouchableOpacity styles={styles.spaceButton} onPress={this.incorrectAnswer}>
                                    <Text style={styles.bufferText}>a</Text>
                                </TouchableOpacity>
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
        //flexDirection: "row",
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
    /*
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
    */
    button: {
        flexDirection: "row", //changes nothing if commented
        fontWeight: 'bold',
        backgroundColor: 'ivory',
        alignItems: 'center', //moves text to top of box
        padding: 10, //bigger numbers moves text down
        width: 300,
        borderRadius: 50, //originally 80
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
    },
    bufferText: {
        color: "#74B4E0",
        fontSize: 40,
        fontWeight: '800',
        flexDirection: 'row'
    },
    spaceButton: {
        padding: 10,
        backgroundColor: '#74B4E0',
    },
});