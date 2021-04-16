import React, {Component} from "react"; // maybe add {useState}
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, 
    Alert, Dimensions, TouchableOpacity, TextInput } from 'react-native';
//import { Card } from 'react-native-paper';
import Toolbar from './Toolbar';
import QuizComponent from './QuizComponent';
import { Checkbox } from 'react-native-elements'
import Swiper from 'react-native-swiper/src'

import quizData from '../assets/quizzes.json';



export default class QuizPage extends React.Component {

    constructor(props) {
        super(props);        
        this.logResult = this.logResult.bind(this);
        this.updateScore = this.updateScore.bind(this);
        this.title = this.props.navigation.getParam('title');
        this.category = this.props.navigation.getParam('category');

        let quizContainer;
        let quiz;

        for (let i = 0; i < quizData.length; i++) {
            if (quizData[i].title == this.title) {
                quizContainer = quizData[i];
            }
        }
        for (let i = 0; i < quizContainer.categories.length; i++) {
            if (quizContainer.categories[i].name == this.category) {
                quiz = quizContainer.categories[i];
            }
        }

        this.possiblescore = quiz.possiblescore;
    }

    state={
        score: 0,
        completed: 0,
    };

    getTopic() {
        return  this.title + '.' + this.category
    }

    // Sends final score to database
    updateScore() {
        fetch('https://junior-design-resistence.herokuapp.com/user/quizscore/add', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                topic: this.getTopic(),
                score: this.state.score,
                possiblescore: this.possiblescore
            })
        })
        .then((res) => res.json())
        .then((json) => {
            console.log("submitted quiz score of: " + this.state.score);
        });
    }

    //Log score function
    async logResult(question_number, isCorrect) {
        if (isCorrect) {
            await this.setState({
                score: this.state.score + 1
            })
        }
        await this.setState({
            completed: this.state.completed + 1
        })

        if (this.state.completed == this.possiblescore) {
            this.updateScore()
            console.log('completed')
        }
    }

    render () {
        const { navigate } = this.props.navigation;

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <View style={styles.screen}>
                        <ScrollView contentContainerStyle={styles.screen}>
                            <Swiper style={styles.wrapper} showsButtons loop={false}>
                                <QuizComponent quiz_title={this.title} quiz_category={this.category} quiz_number={0} log_score={this.logResult}/>
                                <QuizComponent quiz_title={this.title} quiz_category={this.category} quiz_number={1} log_score={this.logResult}/>
                                <QuizComponent quiz_title={this.title} quiz_category={this.category} quiz_number={2} log_score={this.logResult}/>

                                <SafeAreaView style={styles.container}>
                                    <View style={styles.container}>
                                            <Text style={styles.scoreHeader}> Score </Text>
                                            <Text style={styles.score}> {this.state.score} / 3 </Text>
                                    </View>
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
        justifyContent: 'center',
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
        fontSize: 25, //used to be 40
        color:"black",
        textDecorationLine: 'underline',
        paddingBottom: 10,
        paddingTop: 10
    },
    topButtons: {
        flexDirection: "row",
        alignContent: 'center',
        alignItems: 'center',
    },
    bottomButtons: {
        flexDirection: "row",
        alignContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: "black",
        fontSize: 25, //used to be 20
        fontWeight: '800',
        flexDirection: 'row'
    },
    score: {
        color: "white",
        fontSize: 40,
        fontWeight: '800',
    },
    scoreHeader: {
        color: "white",
        fontSize: 50,
        fontWeight: '800',
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