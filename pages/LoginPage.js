import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import React from "react";
import Toolbar from './Toolbar';

//import all the components we are going to use.


export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    state={
        username:"",
        password:""
    };

    login = (navigate) => {
        console.log('runnings');
        //navigate('HomePage');
        navigate('HomePage');
        /*fetch('http://128.61.76.39:3000/', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
        });*/
    }   

    render(){       
        
        const { navigate } = this.props.navigation;

        return (
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
                    <View style={{backgroundColor: "red" ,alignItems: 'center', flexDirection: "row",
                        justifyContent: 'center', borderRadius: 15, padding:6}}>
                        <Text style={styles.login}>Login</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{alignItems: 'center', flexDirection: "row",
                        justifyContent: 'flex-end', float:"right"}}>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>navigate('RegistrationPage')}>
                    <View style={{backgroundColor: "red" ,alignItems: 'center', flexDirection: "row",
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
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
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
    forgot:{
        color:"white",
        fontSize:11
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
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
        flexDirection: 'row'
    }
});
