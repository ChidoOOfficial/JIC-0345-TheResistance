import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from "react";
//import all the components we are going to use.

export default class SettingsPage extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.screen}>
                
                <TouchableOpacity onPress={() =>navigate('LoginPage')}>
                    <View style={{backgroundColor: "lightgray", alignItems: 'center', flexDirection: "row",
                        justifyContent: 'center', padding:6}}>
                        <Text style={styles.logout}>Log out</Text>
                    </View>
                </TouchableOpacity>
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
    logout: {
        color: 'red',
        fontSize: 20,
        fontWeight: '800',
        flexDirection: 'row'
    }
});