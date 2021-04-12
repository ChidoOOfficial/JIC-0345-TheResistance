import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, Alert, Dimensions } from 'react-native';
import Toolbar from './Toolbar';

class StudentHolder extends Component {
    render() {
        return (
            <View style={styles.studentContainer}>
                <Image style={styles.studentImage} source={this.props.imageSrc}/>
                <Text style={styles.studentNameText}> {this.props.studentName} </Text>
                <View style={styles.studentScoreContainer} flex right>
                  <Text style={styles.studentScore}> {this.props.studentScore} </Text>
                </View>
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
                        <Text style={styles.headerText}>Number of Quizzes Passed</Text>
                    </View>
                    <View style={styles.studentSlots}>
                        <ScrollView>
                            <StudentHolder studentName="Student ID 1" imageSrc={require("../assets/icon.png")} studentScore="22"/>
                            <StudentHolder studentName="Student ID 2" imageSrc={require("../assets/icon.png")} studentScore="21"/>
                            <StudentHolder studentName="Student ID 3" imageSrc={require("../assets/icon.png")} studentScore="19"/>
                            <StudentHolder studentName="Student ID 4" imageSrc={require("../assets/icon.png")} studentScore="16"/>
                            <StudentHolder studentName="Student ID 5" imageSrc={require("../assets/icon.png")} studentScore="13"/>
                            <StudentHolder studentName="Student ID 6" imageSrc={require("../assets/icon.png")} studentScore="10"/>
                            <StudentHolder studentName="Student ID 7" imageSrc={require("../assets/icon.png")} studentScore="8"/>
                            <StudentHolder studentName="Student ID 8" imageSrc={require("../assets/icon.png")} studentScore="6"/>
                            <StudentHolder studentName="Student ID 9" imageSrc={require("../assets/icon.png")} studentScore="4"/>
                            <StudentHolder studentName="Student ID 10" imageSrc={require("../assets/icon.png")} studentScore="3"/>
                        </ScrollView>
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
    backgroundColor: '#74B4E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,        
    alignItems: "center",
    paddingTop: 30,
  },
  headerText: {
    fontSize: 30
  },
  studentSlots: {
    flex: 10,
    padding: 10
  },
  studentImage: {
    marginLeft: 25,
    marginRight: 15,
    width: 65,
    height: 65
  },
  studentNameText: {
    fontSize: 18 
  },
  studentContainer: {
    height: 80, //this heigh makes the spacing around the image border look better
    width: Dimensions.get('window').width * 0.7, //made 0.7 of the screen to allow padding
    backgroundColor: 'white',
    marginBottom: 25, //number of pixels offset from the bottom
    flexDirection: 'row', // aligns the quiz images and names to the left
    alignItems: 'center', // aligns boxes to be centered
    borderRadius: 25
  },
  studentScoreContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: "white",
    borderRadius: 40
  },
  studentScore: {
    fontSize: 20
  }
});