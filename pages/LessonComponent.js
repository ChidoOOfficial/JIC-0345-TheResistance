import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, TouchableOpacity, SafeAreaView, Text} from 'react-native';
import lessonData from '../assets/lessons.json';
import ImageImports from '../assets/ImageImports'

export default class LessonComponent extends Component { 

    constructor(props) {
        super(props);

        this.lesson_title = this.props.lesson_title;
        this.lesson_category =  this.props.lesson_category;
        this.lesson_number =  this.props.lesson_number;

        let lessonContainer;

        for (let i = 0; i < lessonData.length; i++) {
            if (lessonData[i].title == this.lesson_title) {
                lessonContainer = lessonData[i]
                break
            }
        }

        for (let i = 0; i < lessonContainer.categories.length; i++) {
            if (lessonContainer.categories[i].name == this.lesson_category) {
                this.lesson = lessonContainer.categories[i].lessons[this.lesson_number]
                break
            }
        }
    }
    
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.logo}>  {this.lesson.quinault_text_resource} </Text>
                <Image source={ImageImports[this.lesson.image_resource]} style={styles.image}></Image>
                <Text style={styles.bottomText}>{this.lesson.english_text_resource}</Text>
            </SafeAreaView>
        )
    }

}

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
        backgroundColor: 'white',
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
