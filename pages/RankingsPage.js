import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, Alert, Dimensions } from 'react-native';

class StudentHolder extends Component {
    render() {
        return (
            <View style={styles.studentContainer}>
                <Image style={styles.studentImage} source={this.props.imageSrc}/>
                <Text style={styles.studentNameText}> {this.props.studentName} </Text>
                <Text style={styles.studentScore}> {this.props.studentScore} </Text>
            </View>
        )
    }
}

export default class RankingsPage extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <SafeAreaView style={styles.screen}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Top 10 students by quizzes passed</Text>
                    </View>
                    <View style={styles.studentSlots}>
                        <ScrollView>
                            <StudentHolder studentName="Student 1" imageSrc={require("../assets/icon.png")} studentScore="22"/>
                            <StudentHolder studentName="Student 2" imageSrc={require("../assets/icon.png")} studentScore="21"/>
                            <StudentHolder studentName="Student 3" imageSrc={require("../assets/icon.png")} studentScore="19"/>
                            <StudentHolder studentName="Student 4" imageSrc={require("../assets/icon.png")} studentScore="16"/>
                            <StudentHolder studentName="Student 5" imageSrc={require("../assets/icon.png")} studentScore="13"/>
                            <StudentHolder studentName="Student 6" imageSrc={require("../assets/icon.png")} studentScore="10"/>
                            <StudentHolder studentName="Student 7" imageSrc={require("../assets/icon.png")} studentScore="8"/>
                            <StudentHolder studentName="Student 8" imageSrc={require("../assets/icon.png")} studentScore="6"/>
                            <StudentHolder studentName="Student 9" imageSrc={require("../assets/icon.png")} studentScore="4"/>
                            <StudentHolder studentName="Student 10" imageSrc={require("../assets/icon.png")} studentScore="3"/>
                        </ScrollView>
                    </View>
                </SafeAreaView>
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
  studentSlots: {
    flex: 10,
    padding: 10
  },
  studentImage: {
    marginLeft: 5,
    marginRight: 15,
    width: 65,
    height: 65
  },
  studentNameText: {
    fontSize: 20
  },
  studentContainer: {
    height: 80, //this heigh makes the spacing around the image border look better
    width: Dimensions.get('window').width * 0.7, //made 0.7 of the screen to allow padding
    backgroundColor: 'green',
    marginBottom: 25, //number of pixels offset from the bottom
    flexDirection: 'row', // aligns the quiz images and names to the left
    alignItems: 'center' // aligns boxes to be centered
  },
  studentScore: {
    flex: 1,
    textAlign: 'right',
    padding: 10,
    fontSize: 28
  }
});