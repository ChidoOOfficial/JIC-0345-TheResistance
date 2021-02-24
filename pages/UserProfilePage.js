import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, Alert} from 'react-native';

import Toolbar from './Toolbar';

export default class UserProfilePage extends React.Component {
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <SafeAreaView style = {styles.container}>
                    <View style={styles.heading}>
                        <Text style = {styles.headingtext}> Hi User</Text>
                    </View>
                    <Image source={require('../assets/icon.png')} style={styles.userProfileImage}/>
                    <View>
                    </View>
                </SafeAreaView>
                <Toolbar navigation={navigate}/>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    userProfileImage: {
        width: 120,
        height: 120,
        top: 20,
        left: 20,
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