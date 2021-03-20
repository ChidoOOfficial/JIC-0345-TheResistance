import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from "react";
import Toolbar from './Toolbar';
import {CheckBox} from "react-native-elements";
import Swiper from 'react-native-swiper/src'
import {MaterialIcons, AntDesign} from "@expo/vector-icons";
import { Audio } from 'expo-av';

//import SoundPlayer from 'react-native-sound-player';



//import Swiper from 'react-native-swiper'
//import all the components we are going to use.


export default class LessonCourse extends React.Component {

    state={
        lessonName:"lesson",
    };

    render() {

        const { navigate } = this.props.navigation;
        const lessonType =  this.props.navigation.getParam('lessonType', 'no-name')
      //  let audio = new Audio("../assets/Wild/1_1_lynx.mp3")
        if (this.props.navigation.state.params.lessonType === 'wild') {
            return (
                <View style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <View style={styles.screen}>
                            <ScrollView contentContainerStyle={styles.screen}>
                                <Swiper showsButtons loop={true}>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>  </Text>
                                        <Image source={require('../assets/Wild/1_1_lynx_or_bobcat.png')} style={styles.image}>

                                        </Image>
                                        <TouchableOpacity style={styles.buttons3}>
                                            <View style={styles.viewButtons}>
                                                <AntDesign name="sound" size={24} color="black" />
                                            </View>
                                        </TouchableOpacity>
                                        <Text style={styles.bottomText}>Lynx</Text>
                                    </SafeAreaView>

                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>  </Text>
                                        <Image source={require('../assets/Wild/1_2_leopard.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>Leopard</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>  </Text>
                                        <Image source={require('../assets/Wild/1_3_tiger.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>Tiger</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}> </Text>
                                        <Image source={require('../assets/Wild/1_4_lion.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>Lion</Text>
                                    </SafeAreaView>
                                </Swiper>
                            </ScrollView>
                        </View>
                    </View>
                    <Toolbar navigation={navigate}/>
                </View>
            );
        }
        else if (this.props.navigation.state.params.lessonType === 'housing1') {
            {/*this if statement is for conditional rendering
            depending on what what button was pressed in the LessonsPage. It is not working as of yet so
            the else block is the default screen output*/}
            return (
                <View style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <View style={styles.screen}>
                            <ScrollView contentContainerStyle={styles.screen}>
                                <Swiper showsButtons loop={false}>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}> čɑn čɪkwɪlloməɫ hənməx̣oy </Text>
                                        <Image source={require('../assets/Housing/basket.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>Where am I weaving the basket?</Text>
                                    </SafeAreaView>

                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}> ayštuW hənceʔleʔjəktən </Text>
                                        <Image source={require('../assets/Housing/rug.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>Put away the rug</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}> čɪḳ̓wuʔlɑke tisɫil̓kɑltən </Text>
                                        <Image source={require('../assets/Housing/bucket.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>I'm emptying the bucket</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>t̓ɑʔɑnimɫɪn</Text>
                                        <Image source={require('../assets/Housing/pencil.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>It is a pencil</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>jɑčs čɑʔɫɑ</Text>
                                        <Image source={require('../assets/Housing/3oclock.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>Before three o'clock</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>čitcɑteejək tɑč cɑteejəktən</Text>
                                        <Image source={require('../assets/Housing/broom.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>I swept the floor with a broom</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>x̣əp̓ɑk tisx̣wɑksiɫɪntən</Text>
                                        <Image source={require('../assets/Housing/07dust_pan.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>The garbage is empty</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>kwitʔɑwWčic ɫil̓tɑʔɑmtən</Text>
                                        <Image source={require('../assets/Housing/suitcase.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>Give me the suitcase</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>čɪčins nisəl̓ḳeʔemin</Text>
                                        <Image source={require('../assets/Housing/pillow.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>I want this pillow</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>ƛ̓o kwitmuluḳɑme ʔɑʔmɑspepɑ</Text>
                                        <Image source={require('../assets/Housing/mail.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>Don't forget the mail</Text>
                                    </SafeAreaView>
                                </Swiper>
                            </ScrollView>
                        </View>
                    </View>
                    <Toolbar navigation={navigate}/>
                </View>
            );
        } else { {/*default page output until conditional rendering works*/}
            return (
                <View style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <View style={styles.screen}>
                            <ScrollView contentContainerStyle={styles.screen}>
                                <Swiper showsButtons loop={true}>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}> čɑn čɪkwɪlloməɫ hənməx̣oy </Text>
                                        <Image source={require('../assets/Housing/basket.png')} style={styles.image}>

                                        </Image>
                                        <Text>else block</Text>
                                        <Text style={styles.bottomText}>Where am I weaving the basket?</Text>
                                    </SafeAreaView>

                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}> ayštuW hənceʔleʔjəktən </Text>
                                        <Image source={require('../assets/Housing/rug.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>Put away the rug</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}> čɪḳ̓wuʔlɑke tisɫil̓kɑltən </Text>
                                        <Image source={require('../assets/Housing/bucket.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>I'm emptying the bucket</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>t̓ɑʔɑnimɫɪn</Text>
                                        <Image source={require('../assets/Housing/pencil.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>It is a pencil</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>jɑčs čɑʔɫɑ</Text>
                                        <Image source={require('../assets/Housing/3oclock.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>Before three o'clock</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>čitcɑteejək tɑč cɑteejəktən</Text>
                                        <Image source={require('../assets/Housing/broom.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>I swept the floor with a broom</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>x̣əp̓ɑk tisx̣wɑksiɫɪntən</Text>
                                        <Image source={require('../assets/Housing/07dust_pan.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>The garbage is empty</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>kwitʔɑwWčic ɫil̓tɑʔɑmtən</Text>
                                        <Image source={require('../assets/Housing/suitcase.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>Give me the suitcase</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>čɪčins nisəl̓ḳeʔemin</Text>
                                        <Image source={require('../assets/Housing/pillow.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>I want this pillow</Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.container}>
                                        <Text style={styles.logo}>ƛ̓o kwitmuluḳɑme ʔɑʔmɑspepɑ</Text>
                                        <Image source={require('../assets/Housing/mail.png')} style={styles.image}>

                                        </Image>
                                        <Text style={styles.bottomText}>Don't forget the mail</Text>
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

}
/*
async function playSound() {
    const sound = new Audio.Sound();
    try {
        await sound.loadAsync(require('./assets/Wild/1_1_lynx.mp3'));
        await sound.playAsync();
        // Your sound is playing!

        // Don't forget to unload the sound from memory
        // when you are done using the Sound object
        await sound.unloadAsync();
    } catch (error) {
        // An error occurred!
    }
} */

const styles = StyleSheet.create({
    mainWord: {
        textDecorationLine: 'underline',
        fontWeight:"bold",
        fontSize:20,
        color:"green",
        marginBottom:60,
        flexDirection: 'row'
    },
    screen: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:25,
        color:"#fb5b5a",
        marginBottom:40,
        marginTop:50
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
        width:70,
        height:70,
    },
    bottomText: {
        fontWeight:"bold",
        fontSize:20,
        color:"green",
        marginBottom:60,
        flexDirection: 'row'
    }
});
