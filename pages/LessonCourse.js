import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import React from "react";
import Toolbar from './Toolbar';
import {CheckBox} from "react-native-elements";
import {FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons} from "@expo/vector-icons";
import Swiper from 'react-native-swiper'
//import all the components we are going to use.


export default class LessonCourse extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        const lessonType =  this.props.navigation.getParam('lessonType', 'no name')
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <View style={styles.screen}>
                        <ScrollView contentContainerStyle={styles.screen}>
                            <Text style={styles.logo}> Quinault Text </Text>
                            <Text> {lessonType} </Text>
                            <Swiper showsButtons loop={true}>
                                <SafeAreaView style={styles.container}>
                                    <Image source={require('../assets/8_2_striped_shirt.png')} style={styles.image}>

                                    </Image>
                                    <Text style={styles.bottomText}> SHIRT</Text>
                                </SafeAreaView>

                                <SafeAreaView style={styles.container}>
                                    <Image source={require('../assets/8_5_shorts.png')} style={styles.image}>

                                    </Image>
                                    <Text style={styles.bottomText}> SHORTS</Text>
                                </SafeAreaView>
                                <SafeAreaView style={styles.container}>
                                    <Image source={require('../assets/8_9_socks.png')} style={styles.image}>

                                    </Image>
                                    <Text style={styles.bottomText}> SOCKS</Text>
                                </SafeAreaView>
                            </Swiper>
                        </ScrollView>
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
    },
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        aspectRatio: 0.5,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomText: {
        fontWeight:"bold",
        fontSize:40,
        color:"green",
        marginBottom:60
    }
});
