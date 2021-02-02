import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, Alert} from 'react-native';

export default class Toolbar extends Component {
    render() {
        console.log('nice')
        return(
            <View style={[styles.toolbarContainer]}>
                <View style={[styles.toolbarButton, {backgroundColor: 'blue'}]}>
                              
                </View>
                <View style={[styles.toolbarButton, {backgroundColor: 'green'}]}>
                              
                </View>
                <View style={[styles.toolbarButton, {backgroundColor: 'orange'}]}>
                              
                </View>
                <View style={[styles.toolbarButton, {backgroundColor: 'pink'}]}>
                              
                </View>
                <View style={[styles.toolbarButton, {backgroundColor: 'purple'}]}>
                              
                </View>                              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    toolbarContainer: {
        height: 75,
        width: "100%",
        bottom: 0,
        backgroundColor: 'red',
        flexDirection: 'row'
    },
    toolbarButton: {        
        height: "100%",
        width: "20%",

    }
});