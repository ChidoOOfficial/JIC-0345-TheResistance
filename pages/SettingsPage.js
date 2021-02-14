import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from "react";

import Toolbar from './Toolbar';
//import all the components we are going to use.

export default class SettingsPage extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.screen}>
                <View style={{flex: 1}}>
                    <View style={styles.options}>
                        <TouchableOpacity style={styles.optionBtn}>
                            <View style={{alignItems: 'center', flexDirection: "row",
                                justifyContent: 'center', padding:6}}>
                                <Text style={styles.optionText}>Change Profile Picture</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionBtn}>
                            <View style={{alignItems: 'center', flexDirection: "row",
                                justifyContent: 'center', padding:6}}>
                                <Text style={styles.optionText}>Change Password</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionBtn}>
                            <View style={{alignItems: 'center', flexDirection: "row",
                                justifyContent: 'center', padding:6}}>
                                <Text style={styles.optionText}>Submit Feedback</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity onPress={() =>navigate('LoginPage')} style={styles.logoutBtn}>
                        <View style={{alignItems: 'center', flexDirection: "row",
                            justifyContent: 'center', padding:6}}>
                            <Text style={styles.logout}>Log out</Text>
                        </View>
                    </TouchableOpacity>
                    <Toolbar navigation={navigate}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
    	flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    options: {
    	flex: 1,
        backgroundColor: 'white',
    },
    optionBtn:{
    	backgroundColor: 'lightgray',
    	borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,

    },
    optionText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '800',
        flexDirection: 'row'
    },
    logoutBtn:{
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20
    },
    logout: {
        color: 'white',
        fontSize: 20,
        fontWeight: '800',
        flexDirection: 'row'
    }
});