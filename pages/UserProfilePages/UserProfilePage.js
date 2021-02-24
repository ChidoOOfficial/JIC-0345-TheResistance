import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, Alert} from 'react-native';
  

export default class UserProfilePage extends Component {

    render(){
        return (
            <View style = {styles.container}>
                <View style={styles.heading}>
                    <Text style = {styles.headingtext}> Hi User</Text>
                </View>
                <View style={styles.userProfileImageContainter}>
                    <Image source={require('../../assets/icon.png')} style={styles.userProfileImage}/>
                </View>

                <View style={[styles.textContainer, {paddingTop: 30}]}>
                    <Text style = {styles.textLabel}> Progress:</Text>
                    <Text style = {styles.textValue}> 65%</Text>                    
                </View>
                <View style={[styles.textContainer, {paddingBottom: 40}]}>
                <Text style = {styles.textLabel}> Date Joined:</Text>
                    <Text style = {styles.textValue}> 2/3/21</Text>
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    textLabel: {
        flex: 1,
        fontSize: 20,
    },
    textValue: {
        flex: 1,
        fontSize: 20,
        textAlign: 'right',
    },
    textContainer: {
        paddingRight: 30,
        paddingLeft: 30,
        paddingTop: 0,
        paddingBottom: 0,
        flex: 1,
        flexDirection: 'row',
        
    },
    container: {
        flex: 1,
        backgroundColor: "#87cefa"
    },
    userProfileImageContainter: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 10
    },
    userProfileImage: {
        width: 280,
        height: 280,
        borderColor: 'gray',
        borderWidth: 1,
    },
    heading: {
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingtext: {
        fontSize: 30,
    }
});