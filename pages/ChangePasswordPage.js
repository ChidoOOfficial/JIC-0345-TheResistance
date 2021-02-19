import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from "react";

import Toolbar from './Toolbar';
//import all the components we are going to use.

export default class ChangePasswordPage extends React.Component {

    state={
        oldPassword:"",
        newPassword:"",
        retypeNewPassword:""
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
        	<View style={{flex: 1}}>
	            <View style={styles.screen}>
                    <View style={styles.passwordInput}>
                        <Text style={styles.passwordText}>Current password</Text>
                        <View style={styles.inputView} >
                            <TextInput
                                secureTextEntry
                                style={styles.userInput}
                                placeholder=""
                                placeholderTextColor="white"
                                onChangeText={oldPassword => this.setState({password:oldPassword})}/>
                        </View>
                        <Text style={styles.passwordText}>New password</Text>
                        <View style={styles.inputView} >
                            <TextInput
                                secureTextEntry
                                style={styles.userInput}
                                placeholder=""
                                placeholderTextColor="white"
                                onChangeText={newPassword => this.setState({password:newPassword})}/>
                        </View>
                        <Text style={styles.passwordText}>Retype new password</Text>
                        <View style={styles.inputView} >
                            <TextInput
                                secureTextEntry
                                style={styles.userInput}
                                placeholder=""
                                placeholderTextColor="white"
                                onChangeText={retypeNewPassword => this.setState({password:retypeNewPassword})}/>
                        </View>
                        <TouchableOpacity style={styles.saveBtn}>
                            <View style={{alignItems: 'center', flexDirection: "row",
                                justifyContent: 'center', padding:6}}>
                                <Text style={styles.save}>Save</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
    passwordInput:{
        flex: 1,
        width: "100%"
    },
    passwordText:{
        color: 'black',
        fontSize: 18,
        padding: 8,
        marginLeft: 24
    },
    inputView:{
        width:"90%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginLeft: 20,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    userInput:{
        height:50,
        color:"white"
    },
    saveBtn:{
        width: "20%",
        height: 45,
        borderRadius: 25,
        backgroundColor: "#7af59b",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20
    },
    save: {
        color: 'black',
        fontSize: 16,
        flexDirection: 'row'
    }
});