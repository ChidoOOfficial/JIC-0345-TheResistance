import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, Alert, Dimensions } from 'react-native';

import Toolbar from './Toolbar';

class StudentHolder extends Component {
    render() {
        return (
            <View style={styles.studentContainer}>
                <Image style={styles.studentImage} source={this.props.imageSrc}/>
                <Text style={styles.studentNameText}> {this.props.studentName} </Text>
                <Text style={styles.studentResults}> {this.props.studentResults} </Text>
            </View>
        )
    }
}

export default class RankingsPage extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <SafeAreaView style={styles.screen}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Student Quiz Averages</Text>
                        </View>
                        <View style={styles.studentSlots}>
                            <ScrollView>
                                <StudentHolder studentName="Student 1" imageSrc={require("../assets/icon.png")} studentResults="99%"/>
                                <StudentHolder studentName="Student 2" imageSrc={require("../assets/icon.png")} studentResults="95%"/>
                                <StudentHolder studentName="Student 3" imageSrc={require("../assets/icon.png")} studentResults="89%"/>
                                <StudentHolder studentName="Student 4" imageSrc={require("../assets/icon.png")} studentResults="88%"/>
                                <StudentHolder studentName="Student 5" imageSrc={require("../assets/icon.png")} studentResults="84%"/>
                                <StudentHolder studentName="Student 6" imageSrc={require("../assets/icon.png")} studentResults="82%"/>
                                <StudentHolder studentName="Student 7" imageSrc={require("../assets/icon.png")} studentResults="79%"/>
                                <StudentHolder studentName="Student 8" imageSrc={require("../assets/icon.png")} studentResults="79%"/>
                                <StudentHolder studentName="Student 9" imageSrc={require("../assets/icon.png")} studentResults="74%"/>
                                <StudentHolder studentName="Student 10" imageSrc={require("../assets/icon.png")} studentResults="22%"/>
                            </ScrollView>
                        </View>
                    </SafeAreaView>
                </View>
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
  studentResults: {
    flex: 1,
    textAlign: 'right',
    padding: 10,
    fontSize: 28
  }
});