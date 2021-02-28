import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React from "react";
import Toolbar from './Toolbar';

//import all the components we are going to use.


export default class LoginPage extends React.Component {

    state={
        username:"",
        password:"",
        retypePassword:""
    };

    render(){       
        const { navigate } = this.props.navigation;

        return (
            <View style={{flex: 1}}>
                    <KeyboardAvoidingView
                        behavior={"padding"}
                        style={styles.screen}
                    >
                        <Text style={styles.header}>Register Your Account</Text>
                        <View style={styles.accountInput}>
                            <View style={styles.inputView} >
                                <TextInput
                                    style={styles.userInput}
                                    placeholder="Username"
                                    placeholderTextColor="white"
                                    onChangeText={username => this.setState({username})}/>
                            </View>
                            <View style={styles.inputView} >
                                <TextInput
                                    secureTextEntry
                                    style={styles.userInput}
                                    placeholder="Password"
                                    placeholderTextColor="white"
                                    onChangeText={password => this.setState({password:password})}/>
                            </View>
                            <View style={styles.inputView} >
                                <TextInput
                                    secureTextEntry
                                    style={styles.userInput}
                                    placeholder="Retype Password"
                                    placeholderTextColor="white"
                                    onChangeText={retypePassword => this.setState({password:retypePassword})}/>
                            </View>
                            <TouchableOpacity onPress={() =>navigate('HomePage')} style={styles.saveBtn}>
                                <View style={{alignItems: 'center', flexDirection: "row",
                                    justifyContent: 'center', padding:6}}>
                                    <Text style={styles.save}>Register</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
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
    header:{
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 50
    },
    accountInput:{
        flex: 1,
        alignItems: 'center',
        width: "100%"
    },
    inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    userInput:{
        height:50,
        color:"white"
    },
    saveBtn:{
        width: "25%",
        height: 45,
        borderRadius: 25,
        backgroundColor: "#7af59b",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },
    save: {
        color: 'black',
        fontSize: 16,
        flexDirection: 'row'
    }
});