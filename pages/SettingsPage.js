import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import React from "react";

import Toolbar from './Toolbar';
//import all the components we are going to use.

export default class SettingsPage extends React.Component {

    render() {
    	const showAboutAlert = () =>
		    Alert.alert(
		        "About",
		        "Prototype made by Team 0345",
		    	[],
		    	{ cancelable: true, }
		);
		const showHelpAlert = () =>
		    Alert.alert(
		        "Help",
		        "Help alert",
		    	[],
		    	{ cancelable: true, }
		);
		const showFeedbackAlert = () =>
		    Alert.alert(
		        "Submit Feedback",
		        "Please submit feedback",
		    	[],
		    	{ cancelable: true, }
		);

        const { navigate } = this.props.navigation;
        return (
        	<View style={{flex: 1}}>
	            <View style={styles.screen}>
                    <View style={styles.options}>
                        {/*<TouchableOpacity style={styles.optionBtn}>
                            <View style={{alignItems: 'center', flexDirection: "row",
                                justifyContent: 'center', padding:6}}>
                                <Text style={styles.optionText}>Change Profile Picture</Text>
                            </View>
                        </TouchableOpacity>*/}

                        <TouchableOpacity onPress={() =>navigate('ChangePasswordPage')} style={styles.optionBtnFirst}>
                            <View style={{alignItems: 'center', flexDirection: "row",
                                justifyContent: 'center', padding:6}}>
                                <Text style={styles.optionText}>Change Password</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={showAboutAlert} style={styles.optionBtn}>
                            <View style={{alignItems: 'center', flexDirection: "row",
                                justifyContent: 'center', padding:6}}>
                                <Text style={styles.optionText}>About</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={showHelpAlert} style={styles.optionBtn}>
                            <View style={{alignItems: 'center', flexDirection: "row",
                                justifyContent: 'center', padding:6}}>
                                <Text style={styles.optionText}>Help</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={showFeedbackAlert} style={styles.optionBtn}>
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
                </View>
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
        justifyContent: 'flex-start',
    },
    options: {
    	flex: 1,
    	width: "100%",
    	alignItems: "center",
    },
    optionBtn:{
    	width: "70%",
    	height: 45,
        backgroundColor: "#FFA934",
    	borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        margin: 15,
    },
    optionBtnFirst:{
    	width: "70%",
    	height: 45,
        backgroundColor: "#FFA934",
    	borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        margin: 15,
    },
    optionText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '800',
        flexDirection: 'row',
        padding: 4
    },
    logoutBtn:{
        width: "70%",
        height: 45,
        borderRadius: 25,
        backgroundColor: "#fb5b5a",
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