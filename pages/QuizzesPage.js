import React, {Component} from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, Alert, Dimensions } from 'react-native';
import Toolbar from './Toolbar';

//import all the components we are going to use.

class QuizHolder extends Component {
    render() {
        return(
            // Fix the lines below - to what???
            <View style={styles.quizContainer}>
                <Image style={styles.quizImage} source={this.props.imageSrc}/>
                <Text style={styles.quizNameText}>  {this.props.quizName} </Text>                
            </View>
            
        )
    }
}

export default class QuizzesPage extends React.Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{flex: 1}}>
                <SafeAreaView style={styles.screen}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}> Quizzes </Text>
                    </View>
                    <View style={styles.quizSlots}>
                        <ScrollView>
                            <QuizHolder quizName="Quiz 1"  imageSrc={require("../assets/icon.png")} />
                            <QuizHolder quizName="Quiz 2"  imageSrc={require("../assets/icon.png")} />
                            <QuizHolder quizName="Quiz 3"  imageSrc={require("../assets/icon.png")} />
                            <QuizHolder quizName="Quiz 4"  imageSrc={require("../assets/icon.png")} />
                            <QuizHolder quizName="Quiz 5"  imageSrc={require("../assets/icon.png")} />
                            <QuizHolder quizName="Quiz 6"  imageSrc={require("../assets/icon.png")} />
                            <QuizHolder quizName="Quiz 7"  imageSrc={require("../assets/icon.png")} />
                        </ScrollView>
                    </View>
                    <View style={styles.startButton}>
                        <Button title='Start Quiz' onPress={() => Alert.alert('Press OK to Start', '', (i) => console.log(i))}/>
                    </View>
                </SafeAreaView>
                <Toolbar navigation={navigate}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,        
        alignItems: "center",
        paddingTop: 30,
    },
    headerText: {
        fontSize: 24
    },
    quizSlots: {
        flex: 10,
        padding: 10
    },
    quizImage: {
        marginLeft: 5,
        marginRight: 15,
        width: 65,
        height: 65
    },
    quizNameText: {
        fontSize: 18
    },
    quizContainer: {
        height: 80, //this heigh makes the spacing around the image border look better
        width: Dimensions.get('window').width * 0.7, //made 0.7 of the screen to allow padding
        backgroundColor: 'green',
        marginBottom: 25, //number of pixels offset from the bottom
        flexDirection: 'row', // aligns the quiz images and names to the left
        alignItems: 'center' // aligns boxes to be centered
    },
    startButton: {
        alignItems: 'center',
        paddingTop: 5
    }

});
