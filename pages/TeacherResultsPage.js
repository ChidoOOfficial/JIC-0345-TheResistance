import React, {Component} from "react"; // maybe add {useState}
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, 
    Alert, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph,
    StackedBarChart } from "react-native-chart-kit";
import Toolbar from './Toolbar';

    export default class QuizSamplePage extends React.Component {

        state={
            score: 0,
            attemptsQ1: 2,
            attemptsQ2: 2,
            attemptsQ3: 2,
            tl1Color: 'ivory',
            tr1Color: 'ivory',
            bl1Color: 'ivory',
            br1Color: 'ivory',
            tl2Color: 'ivory',
            tr2Color: 'ivory',
            bl2Color: 'ivory',
            br2Color: 'ivory',
            tl3Color: 'ivory',
            tr3Color: 'ivory',
            bl3Color: 'ivory',
            br3Color: 'ivory'
        };
    
        green = '#7af59b';
        red = '#fb5b5a';
    
        constructor(props) {
            super(props);
            this.updateScore = this.updateScore.bind(this);
        }
    
    
        // Sends final score to database
        updateScore(score) {
            fetch('https://junior-design-resistence.herokuapp.com/user/quizscore/add', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({
                    topic: "dogs",
                    score: score,
                    possiblescore: 3
                })
            })
            .then((res) => res.json())
            .then((json) => {
                console.log("submitted quiz score of: " + score);
            });
        }
    
    
    
        buffer() { }  // Used for proper spacing of SafeAreaView and Navigation Bar
    
    
        render () {
            const { navigate } = this.props.navigation;
    
            return (
                <View style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <View style={styles.screen}>
                        <ScrollView contentContainerStyle={styles.screen}>
                            
                            <ScrollView horizontal = {true}>
                                <LineChart
                                    data={{
                                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
                                    datasets: [
                                        {
                                        data: [
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100
                                        ]
                                        }
                                    ]
                                    }}
                                    width={200} // from react-native
                                    height={220}
                                    yAxisLabel="$"
                                    yAxisSuffix="k"
                                    yAxisInterval={1} // optional, defaults to 1
                                    chartConfig={{
                                    backgroundColor: "#e26a00",
                                    backgroundGradientFrom: "#fb8c00",
                                    backgroundGradientTo: "#ffa726",
                                    decimalPlaces: 2, // optional, defaults to 2dp
                                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    style: {
                                        borderRadius: 16
                                    },
                                    propsForDots: {
                                        r: "6",
                                        strokeWidth: "2",
                                        stroke: "#ffa726"
                                    }
                                    }}
                                    bezier
                                    style={{
                                    marginVertical: 8,
                                    borderRadius: 16
                                    }}
                                />
                            </ScrollView>
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
    });