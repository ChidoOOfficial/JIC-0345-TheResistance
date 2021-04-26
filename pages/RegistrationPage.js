import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native';
import React from "react";
import Toolbar from './Toolbar';

//import all the components we are going to use.


export default class LoginPage extends React.Component {

    //Copied from Loginp=Page.js, should have it so login is persistent through the app
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }
    
    state={
        username:"",
        firstname: "",
        lastname: "",
        email: "",
        accounttype: "",
        password:"",
        retypePassword:""
    };

    login = (navigate) => {

        //need to add url to the line below once an endpoint is created
        fetch('https://junior-design-resistence.herokuapp.com/user/register' , {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            // didnt include body like in LoginPage because we dont want an autologin
        }}) // don't know why it doesnt like these parentheses
        .then((res) => res.json())
        .then((json) => {
            //changed json variable to registered
            if (json.registered) {
                console.log('registered')
                Alert.alert('Registration Successful. You will now be taken to the Login Page.')
                navigate('LoginPage');
            }
            else {
                Alert.alert(
                    'Invalid Login Credentials',
                    'Username or Password do not match or username is already registered',
                    [
                      {
                        text: 'Try Again',
                        style: 'cancel'
                      }
                    ]
                  ); 
            }
        });
    }
    

    render(){       
        const { navigate } = this.props.navigation;

        return (
            <ScrollView style={{flex: 1}}>
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
                                    style={styles.userInput}
                                    placeholder="First Name"
                                    placeholderTextColor="white"
                                    onChangeText={name => this.setState({name})}/>
                            </View>
                            <View style={styles.inputView} >
                                <TextInput
                                    style={styles.userInput}
                                    placeholder="Last Name"
                                    placeholderTextColor="white"
                                    onChangeText={name => this.setState({name})}/>
                            </View>
                            <View style={styles.inputView} >
                                <TextInput
                                    style={styles.userInput}
                                    placeholder="Email"
                                    placeholderTextColor="white"
                                    onChangeText={name => this.setState({name})}/>
                            </View>
                            <View style={styles.inputView} >
                                <TextInput
                                    style={styles.userInput}
                                    placeholder="Account Type (Student or Teacher)"
                                    placeholderTextColor="white"
                                    onChangeText={name => this.setState({name})}/>
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
                            <TouchableOpacity onPress={() => navigate('HomePage')} style={styles.registerBtn}>
                                <View style={{alignItems: 'center', flexDirection: "row",
                                    justifyContent: 'center', padding:6,}}>
                                    <Text style={styles.registerText}>Register</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
            </ScrollView>
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
        backgroundColor:"#9b5de5",
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
    registerBtn:{
        width: "25%",
        height: 45,
        borderRadius: 25,
        backgroundColor: "#f15bb5",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 35,
    },
    registerText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '800',
        flexDirection: 'row'
    }, 
    
});