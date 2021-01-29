import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from "react";
import Toolbar from './Toolbar';
//import all the components we are going to use.

export default class LessonsPage extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <View style={[styles.screen, {flex: 1}]}>
                    <Text style={styles.logo}>Lessons!</Text>
                    
                </View>
                <Toolbar />
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
