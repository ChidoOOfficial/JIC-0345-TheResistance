import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from "react";
import Toolbar from './Toolbar';
import {CheckBox} from "react-native-elements";
import Swiper from 'react-native-swiper/src'
import {MaterialIcons, AntDesign} from "@expo/vector-icons";
import { Audio } from 'expo-av';
import LessonComponent from './LessonComponent';
import lessonData from '../assets/lessons.json';

//import SoundPlayer from 'react-native-sound-player';



//import Swiper from 'react-native-swiper'
//import all the components we are going to use.


export default class LessonCourse extends React.Component {

    // state={
    //     lessonName:"lesson",
    // };
    constructor(props) {
        super(props);

        const { navigate } = this.props.navigation;
        
        this.title = this.props.navigation.getParam('title');
        this.category = this.props.navigation.getParam('category');

        let lessonContainer;
        this.lesson = null;

        

        for (let i = 0; i < lessonData.length; i++) {
            if (lessonData[i].title == this.title) {
                lessonContainer = lessonData[i]
                break
            }
        }

        if (lessonContainer == null) {
            this.setDefault();
        } else {

            for (let i = 0; i < lessonContainer.categories.length; i++) {
                if (lessonContainer.categories[i].name == this.category) {
                    this.lesson = lessonContainer.categories[i]
                    break
                }
            }

            if (this.lesson == null) {
                this.setDefault();
            }
        }
    }
    
    setDefault() {
        let lessonContainer;
        
        this.title =  "ANIMALS"
        this.category = "WILD"

        for (let i = 0; i < lessonData.length; i++) {
            if (lessonData[i].title == this.title) {
                lessonContainer = lessonData[i]
                break
            }
        }

        for (let i = 0; i < lessonContainer.categories.length; i++) {
            if (lessonContainer.categories[i].name == this.category) {
                this.lesson = lessonContainer.categories[i]
                break
            }
        }

        
    }

    state={
        lessonName:"lesson",
    };

    render() {

        const { navigate } = this.props.navigation;

        let num_lessons = this.lesson.lessons.length;


        var lessons = [];
        for(let i = 0; i < num_lessons; i++){
            lessons.push(
                <LessonComponent lesson_title={this.title} lesson_category={this.category} lesson_number={i}/>
            )
        }

        

        return (
            <View style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <View style={styles.screen}>
                            <ScrollView contentContainerStyle={styles.screen}>
                                <Swiper showsButtons loop={true}>
                                    { lessons }
                                </Swiper>
                            </ScrollView>
                        </View>
                    </View>
                    <Toolbar navigation={navigate}/>
                </View>
        )
      //  let audio = new Audio("../assets/Wild/1_1_lynx.mp3")
      // <AntDesign name="sound" size={24} color="black" />
        /**else { {/*default page output until conditional rendering works*///}
            /*return (
                <View style={{flex: 1}}>
                    <View style={styles.screen}>
                        <ScrollView contentContainerStyle={styles.screen}>
                            <Swiper showsButtons loop={true}>
                                {lessonComponents}
                            </Swiper>
                        </ScrollView>
                    </View>
                </View>
            );
        }**/
    }
}

/*
async function playSound() {
    const sound = new Audio.Sound();
    try {
        await sound.loadAsync(require('./assets/Wild/1_1_lynx.mp3'));
        await sound.playAsync();
        // Your sound is playing!

        // Don't forget to unload the sound from memory
        // when you are done using the Sound object
        await sound.unloadAsync();
    } catch (error) {
        // An error occurred!
    }
} */

const styles = StyleSheet.create({
    mainWord: {
        textDecorationLine: 'underline',
        fontWeight:"bold",
        fontSize:20,
        color:"green",
        marginBottom:60,
        flexDirection: 'row'
    },
    screen: {
        flex: 1,
        backgroundColor: '#74B4E0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:25,
        color:"#fb5b5a",
        marginBottom:40,
        marginTop:50
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
    forgot:{
        color:"white",
        fontSize:11
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    forgotPassword:{
        color:"black",
        fontSize: 20,
        fontWeight: '800',
        alignItems: 'flex-end'
    },
    login: {
        color: 'black',
        fontSize: 20,
        fontWeight: '800',
        flexDirection: 'row'
    },
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
        width:70,
        height:70,
    },
    bottomText: {
        fontWeight:"bold",
        fontSize:20,
        color:"green",
        marginBottom:60,
        flexDirection: 'row'
    }
});
