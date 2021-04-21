import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert, LogBox} from 'react-native';
import React from "react";
import Toolbar from './Toolbar';
import configs from '../app_config.json';

//import all the components we are going to use.

var AutoLogin = true

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    state={
        username:"", //need to set username by retrieving it from db
        password:"",
        id: "",
        userMode: "Teacher", //default -> will retrieve from database,
    };

    login = (navigate) => {

        fetch(configs.Server_Address + "user/login", {
            
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: AutoLogin ? 'chido' : this.state.userName,
                password: AutoLogin ? 'x' : this.state.password
            })
        })
        .then((res) => res.json())
        .then((json) => {
            if (json.loggedIn) {
                console.log('loggedin')
                let ID = this.state.id;

                fetch('https://junior-design-resistence.herokuapp.com/user/specialID', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                })
                    .then((res) => res.json())
                    .then((json) => {
                        ID = json["SpecialID"];
                        this.setState({
                            id: ID
                        });
                    });
                console.log('hello')
                console.log(this.state.id)
                // default for now will be set to Teacher mode for coding purposes
                let User = this.state.user;
                fetch('https://junior-design-resistence.herokuapp.com/user/bySpecialID', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "SpecialID": this.state.id
                    })
                })
                    .then((res) => res.json())
                    .then((json) => {
                        User = json["user"][0];
                        this.setState({
                            userMode: User.AccountType,
                            username: User.Username
                        });
                        //console.log(this.state.user)
                        //console.log(User)
                        //console.log(User.AccountType)
                        //console.log('Below is the username')
                        //console.log(this.state.username)
                        this.setState({
                            userMode: "Teacher" //this is to allow for coding the teacher
                        })
                    });
                navigate('HomePage');
            }
            else {
                Alert.alert(
                    'Invalid Login Credentials',
                    'Username or Password do not match',
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
            global.uniqueID = this.state.id,
            global.userType = this.state.userMode,
            global.studentName = this.state.username, //for some reason it won't display the name
            LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']),
            <View style={styles.screen}>
                <Text style={styles.logo}>Welcome!</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.userInput}
                        placeholder="Username"
                        placeholderTextColor="white"
                        onChangeText={(username) => this.setState({username})}/>
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.userInput}
                        placeholder="Password"
                        placeholderTextColor="white"
                        onChangeText={text => this.setState({password:text})}/>
                </View>
                <TouchableOpacity onPress={() => this.login(navigate)}>
                    <View style={{backgroundColor: "#f15bb5" ,alignItems: 'center', flexDirection: "row",
                        justifyContent: 'center', borderRadius: 15, padding:6}}>
                        <Text style={styles.login}>Login</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{alignItems: 'center', flexDirection: "row",
                        justifyContent: 'flex-end', float:"right", marginTop: 15}}>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>navigate('RegistrationPage')} styles={styles.signupBtn}>
                    <View style={{backgroundColor: "#00f5d4" ,alignItems: 'center', flexDirection: "row",
                        justifyContent: 'center', borderRadius: 15, padding:6, marginTop: 50}}>
                        <Text style={styles.login}>Signup</Text>
                    </View>
                </TouchableOpacity>
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
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"white",
        marginBottom:40
    },
    inputView:{
        width:"80%",
        //#465881
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
    forgot:{
        color:"white",
        fontSize:11
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#9b5de5",
        borderRadius:25,
        height:50,
        //alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    signupBtn:{
        width: "25%",
        height: 45,
        borderRadius: 25,
        backgroundColor: "#00f5d4",
        //alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },
    forgotPassword:{
        color:"black",
        fontSize: 20,
        fontWeight: '800',
        alignItems: 'flex-end'
    },
    login: {
        color: 'black',
        fontSize: 20,
        fontWeight: '800',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    }
});
