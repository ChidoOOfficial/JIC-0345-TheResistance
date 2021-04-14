import React, {Component} from "react"; // maybe add {useState}
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, 
    Alert, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph,
    StackedBarChart } from "react-native-chart-kit";
import Toolbar from './Toolbar';
import quizData from '../assets/quizzes.json';
import { Card } from 'react-native-paper';

    export default class TeacherQuizSelectPage extends React.Component {
    
        constructor(props) {
            super(props);
        }
    
    
    
        //buffer() { }  // Used for proper spacing of SafeAreaView and Navigation Bar
    
    
        render () {
            const { navigate } = this.props.navigation;
    
            return (
                <View style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <View style={styles.screen}>
                            

                            <ScrollView contentContainerStyle={styles.screen}>
                                <Text style={styles.header}> Total Quiz Scores </Text>

                                <LineChart
                                    data={{
                                        labels: ["u8ddu87uty", "t2", "t3", "t4", "t5", "t6", "t7"],
                                        datasets: [{ data: [30, 12, 17, 24, 16, 27, 6] }]  // Needs to be linked with db
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
                            


                                {quizData.map(card => {
                                    let categories = card.categories.map((cat, index) => {
                                        let colors = ['#f15bb5', '#fee440', '#00f5d4', '#9b5de5'];
                                        return (
                                            <TouchableOpacity key={index}
                                                style={[styles.buttons,{backgroundColor: colors[index]}]}
                                                onPress={() => this.props.navigation.navigate('TeacherQuizResultsPage', {title: card.title, category: cat.name, maxScore: cat.possiblescore})}>

                                                <View style={styles.viewButtons}>
                                                    <Text style={styles.normalText}>{cat.name}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        );
                                    });
                                    return (
                                        <Card style={styles.card}>
                                            <Card.Title title={card.title}/>
                                            <View style={styles.arrangeButtons}>{categories}</View>
                                        </Card>
                                    );
                                })}
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
            paddingTop: 40,
            backgroundColor: '#ecf0f1',
        },
        screen: {
            flexGrow: 1,
            backgroundColor: '#74B4E0',
            alignItems: 'center',
        },
        header:{
            fontWeight:"bold",
            fontSize: 25,
            color:"black",
            paddingTop: 10
        },
        buttons: {
            alignItems: 'center',
            padding: 2,
            color:'black',
            width: 100,
            height: 100,
            borderRadius: 50,
            margin: 10,
        },
        viewButtons: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        arrangeButtons: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexWrap: "wrap"
        },
        normalText: {
            color: "black",
            fontSize: 18,
            fontWeight: '800',
            flexDirection: 'row'
        },
        card: {
            backgroundColor:'lightblue', //blue coloring =  #74B4E0
            width: 300,
            marginTop: 10,
            marginBottom:10,
            borderRadius:20,
            shadowOpacity: 0
        }
    });