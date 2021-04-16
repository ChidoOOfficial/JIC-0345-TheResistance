import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, TouchableOpacity, SafeAreaView, Text} from 'react-native';
import quizData from '../assets/quizzes.json';
import ImageImports from '../assets/ImageImports'

export default class QuizComponent extends Component {    

    constructor(props) {
        super(props);

        let quizContainer;
        let quiz;

        for (let i = 0; i < quizData.length; i++) {
            if (quizData[i].title == this.props.quiz_title) {
                quizContainer = quizData[i]
            }
        }
        for (let i = 0; i < quizContainer.categories.length; i++) {
            if (quizContainer.categories[i].name == this.props.quiz_category) {
                quiz = quizContainer.categories[i]
            }
        }
        
        this.question_number = this.props.quiz_number;
        this.question =  quiz.questions[this.question_number]
        this.isCompleted = false
    }


    state={
        score: 0,
        attempts: 2,
        number_of_answers: 4,
        opsColor: ['ivory', 'ivory', 'ivory', 'ivory']
    };

    green = '#7af59b';
    red = '#fb5b5a';

    
    buttonStyle={
        flex: 1,
        flexDirection: "row", //changes nothing if commented
        backgroundColor: 'ivory',
        alignItems: 'center', //moves text to top of box
        padding: 10, //bigger numbers moves text down
        height: 100,
        borderRadius: 30, //originally 80
        justifyContent: "center",
        margin: 12,
        marginBottom: 0
    }
    
    selectAnswerHandler(answerNum) {
        let isCorrect = this.question.options[answerNum].isCorrect

        if (this.state.attempts > 0 && !this.isCompleted) {  
            if (isCorrect) {
                this.isCompleted = true
                this.props.log_score(this.question_number, true)


                let newState = this.state.opsColor
                newState[answerNum] = this.green

                this.setState({
                    opsColor: newState
                });

                alert('Correct! Great Job!');
            } else {
                let newState = this.state.opsColor
                
                if (this.state.attempts > 1) {
                    newState[answerNum] = this.red
                    this.setState({
                        opsColor: newState,
                        attempts: this.state.attempts - 1
                    });
                    alert('That is incorrect. Try again.');

                } else {
                    this.isCompleted = true
                    this.props.log_score(this.question_number, false)
                    for (let i = 0; i < this.state.number_of_answers; i++) {
                        newState[i] = this.question.options[i].isCorrect ? this.green : this.red
                    }

                    this.setState({
                        opsColor: newState,
                        attempts: this.state.attempts - 1
                    });
                    alert('That is incorrect.');
                }
                
            }
        }
        
        
    }

    render() {      
        
        return( 
            <SafeAreaView style={styles.container}>
                <Text style={styles.prompt}> {this.question.prompt} </Text>
                        
                <Image source={ImageImports[this.question.image_resource]} style={styles.image}/> 
                <View style={styles.topButtons}>
                    <TouchableOpacity style={[this.buttonStyle, {backgroundColor: this.state.opsColor[0]}]} onPress={() => this.selectAnswerHandler(0)}>
                        <Text style={styles.text}> {this.question.options[0].text} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[this.buttonStyle, {backgroundColor: this.state.opsColor[1]}]} onPress={() => this.selectAnswerHandler(1)}>
                        <Text style={styles.text}> {this.question.options[1].text} </Text>
                    </TouchableOpacity>
                </View>  
                <View style={styles.bottomButtons}>
                    <TouchableOpacity style={[this.buttonStyle, {backgroundColor: this.state.opsColor[2]}]} onPress={() => this.selectAnswerHandler(2)}>
                        <Text style={styles.text}> {this.question.options[2].text} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[this.buttonStyle, {backgroundColor: this.state.opsColor[3]}]} onPress={() => this.selectAnswerHandler(3)}>
                        <Text style={styles.text}> {this.question.options[3].text} </Text>
                    </TouchableOpacity>
                </View>  
                {/* The line below was added so swipe dots don't interfere with answer choices*/}
                <TouchableOpacity styles={styles.spaceButton} onPress={this.buffer}>
                    <Text style={styles.bufferText}>a</Text>
                </TouchableOpacity>
            </SafeAreaView>
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
        fontSize:30, //used to be 40
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
        fontSize: 25,
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