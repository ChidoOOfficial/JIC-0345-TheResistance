import React, {Component} from "react"; // maybe add {useState}
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, 
    Alert, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph,
    StackedBarChart } from "react-native-chart-kit";
import Toolbar from './Toolbar';

import quizData from '../assets/quizzes.json';

class UserProfileHolder extends Component {
    render() {
        return(
            <View style={styles.userContainer}>
                <Image style={styles.userImage} source={this.props.imageSrc}/>
                <Text style={styles.userNameText}>  {this.props.userName} </Text>
                <Text style={styles.userScoreText}> {this.props.score} / {this.props.maxScore} </Text>
            </View>
            
        )
    }
}

export default class TeacherQuizResultsPage extends React.Component {

    constructor(props) {
        super(props);        
        this.title = this.props.navigation.getParam('title')
        this.category = this.props.navigation.getParam('category')
        this.maxScore = this.props.navigation.getParam('maxScore')
        this.score = 0;

        // let quizContainer;
        // let quiz;

        // for (let i = 0; i < quizData.length; i++) {
        //     if (quizData[i].title == this.title) {
        //         quizContainer = quizData[i]
        //     }
        // }
        // for (let i = 0; i < quizContainer.categories.length; i++) {
        //     if (quizContainer.categories[i].name == this.category) {
        //         quiz = quizContainer.categories[i];
        //     }
        // }

    }



    getTopic() {
        return this.title.charAt(0) + this.title.slice(1).toLowerCase() + " (" +
            this.category.charAt(0) + this.category.slice(1).toLowerCase() + ")";
    }


    render () {
        const { navigate } = this.props.navigation;

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <View style={styles.screen}>
                    <ScrollView contentContainerStyle={styles.screen}>
                        <Text style={styles.header}> Scores for {this.getTopic()} </Text>

                        <LineChart
                            data={{
                                labels: ["u8ddu87uty", "t2", "t3", "t4", "t5", "t6", "t7"],
                                datasets: [{ data: [5, 4, 4, 5, 2, 4, 3] }]  // Needs to be linked with db
                            }}
                            width={Dimensions.get('window').width - 20} // from react-native
                            height={200}
                            chartConfig={{
                                backgroundColor: "#F25AB4",
                                backgroundGradientFrom: "#F25AB4",
                                backgroundGradientTo: "#F25AB4",
                                fromZero: true,
                                decimalPlaces: 0,
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#F25AB4"
                                }
                                }}
                                bezier
                                style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                        <View style={styles.userSlots}>
                            <ScrollView contentContainerStyle={styles.userList}>
                                <UserProfileHolder userName="u8ddu87uty"  imageSrc={require("../assets/user.png")} score={5} maxScore= {this.maxScore} />
                                <UserProfileHolder userName="t2"  imageSrc={require("../assets/user.png")} score={4} maxScore= {this.maxScore} />
                                <UserProfileHolder userName="t3"  imageSrc={require("../assets/user.png")} score={4} maxScore= {this.maxScore} />
                                <UserProfileHolder userName="t4"  imageSrc={require("../assets/user.png")} score={5} maxScore= {this.maxScore} />
                                <UserProfileHolder userName="t5"  imageSrc={require("../assets/user.png")} score={2} maxScore= {this.maxScore} />
                                <UserProfileHolder userName="t6"  imageSrc={require("../assets/user.png")} score={4} maxScore= {this.maxScore} />
                                <UserProfileHolder userName="t7"  imageSrc={require("../assets/user.png")} score={3} maxScore= {this.maxScore} />
                            </ScrollView>
                        </View>
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
    header:{
        fontWeight:"bold",
        fontSize: 25,
        color:"black",
        paddingTop: 10
    },
    headerText: {
        fontSize: 24
    },
    userSlots: {
        flex: 1,
        width: Dimensions.get('window').width,
        padding: 10
    },
    userList: {
        justifyContent: 'center',
    },
    userContainer: {
        height: 80,
        backgroundColor: '#aaa9ad',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userImage: {
        marginLeft: 15,
        marginRight: 15,
        width: 65,
        height: 65
    },
    userNameText: {
        fontSize: 18
    },
    userScoreText: {
        fontSize: 18,
        marginRight: 20
    }
});