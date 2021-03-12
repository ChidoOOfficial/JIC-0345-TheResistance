import React, {Component} from "react"; // maybe add {useState}
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, 
    Alert, Dimensions, TouchableOpacity, TextInput } from 'react-native';
//import { Card } from 'react-native-paper';
import Toolbar from './Toolbar';
import { Checkbox } from 'react-native-elements'
import Swiper from 'react-native-swiper'



export default class QuizSamplePage extends React.Component {

    constructor(props) {
        super(props);
    }

    state={
        score: 0,
        attemptsQ1: 2,
        attemptsQ2: 2,
        attemptsQ3: 2,
        tl1Color: 'ivory',
        tr1Color: 'ivory',
        bl1Color: 'ivory',
        br1Color: 'ivory',
        tl2Color: 'ivory',
        tr2Color: 'ivory',
        bl2Color: 'ivory',
        br2Color: 'ivory',
        tl3Color: 'ivory',
        tr3Color: 'ivory',
        bl3Color: 'ivory',
        br3Color: 'ivory'
    };



    handleTL1 = () => {  //CORRECT (Chihuahua)
        const { attemptsQ1 } = this.state;
        const { attemptsQ2 } = this.state;
        const { attemptsQ3 } = this.state;
        const { score } = this.state;
        if (attemptsQ1 > 0){  // Checks for attempts to eliminate alert showing or user getting score after losing all attempts
            this.setState({ tl1Color: '#7af59b' });
            this.setState({ tr1Color: '#fb5b5a' });
            this.setState({ bl1Color: '#fb5b5a' });
            this.setState({ br1Color: '#fb5b5a' });    // Sets correct button to green, all others red, disallow attempts, and update score
            this.setState({ attemptsQ1: 0});
            this.setState({ score: score + 1});
            alert('Correct! Great Job!');

            if (attemptsQ2 == 0 && attemptsQ3 == 0) {
                console.log('gets here?');
                this.props.navigation.navigate('SettingsPage');
            }
        }
    }
    handleTR1 = () => { // INCORRECT (Bulldog)
        const { attemptsQ1 } = this.state;
        if (attemptsQ1 > 1) {  // If more attempts are allowed, sets button just pressed to red and reduces attempts to let user try again
            this.setState({ tr1Color: '#fb5b5a' });
            this.setState({ attemptsQ1: attemptsQ1 - 1});
            console.log(attemptsQ1);
            alert('That is incorrect. Try again.');
        } else if (attemptsQ1 == 1) {  // No more attempts are allowed, and buttons are updated accordingly
            this.setState({ attemptsQ1: 0});
            this.setState({ tl1Color: '#7af59b' });
            this.setState({ tr1Color: '#fb5b5a' });
            this.setState({ bl1Color: '#fb5b5a' });
            this.setState({ br1Color: '#fb5b5a' });
            alert('That is incorrect.');
        }
    }
    handleBL1 = () => {  // INCORRECT (Labrador)
        const { attemptsQ1 } = this.state;
        if (attemptsQ1 > 1) {
            this.setState({ bl1Color: '#fb5b5a' });
            this.setState({ attemptsQ1: attemptsQ1 - 1});
            console.log(attemptsQ1);
            alert('That is incorrect. Try again.');
        } else if (attemptsQ1 == 1) {
            this.setState({ attemptsQ1: 0});
            this.setState({ tl1Color: '#7af59b' });
            this.setState({ tr1Color: '#fb5b5a' });
            this.setState({ bl1Color: '#fb5b5a' });
            this.setState({ br1Color: '#fb5b5a' });
            alert('That is incorrect.');
        }
    }
    handleBR1 = () => {  // INCORRECT (Pitbull)
        const { attemptsQ1 } = this.state;
        if (attemptsQ1 > 1) {
            this.setState({ br1Color: '#fb5b5a' });
            this.setState({ attemptsQ1: attemptsQ1 - 1});
            console.log(attemptsQ1);
            alert('That is incorrect. Try again.');
        } else if (attemptsQ1 == 1) {
            this.setState({ attemptsQ1: 0});
            this.setState({ tl1Color: '#7af59b' });
            this.setState({ tr1Color: '#fb5b5a' });
            this.setState({ bl1Color: '#fb5b5a' });
            this.setState({ br1Color: '#fb5b5a' });
            alert('That is incorrect.');
        }
    }



    handleTL2 = () => {  // INCORRECT (Shiba Inu)
        const { attemptsQ2 } = this.state;
        if (attemptsQ2 > 1) {
            this.setState({ tl2Color: '#fb5b5a' });
            this.setState({ attemptsQ2: attemptsQ2 - 1});
            console.log(attemptsQ2);
            alert('That is incorrect. Try again.');
        } else if (attemptsQ2 == 1) {
            this.setState({ attemptsQ2: 0});
            this.setState({ tl2Color: '#fb5b5a' });
            this.setState({ tr2Color: '#7af59b' });
            this.setState({ bl2Color: '#fb5b5a' });
            this.setState({ br2Color: '#fb5b5a' });
            alert('That is incorrect.');
        }
    }
    handleTR2 = () => {  // CORRECT (Beagle)
        const { attemptsQ2 } = this.state;
        const { score } = this.state;
        if (attemptsQ2 > 0){
            this.setState({ tl2Color: '#fb5b5a' });
            this.setState({ tr2Color: '#7af59b' });
            this.setState({ bl2Color: '#fb5b5a' });
            this.setState({ br2Color: '#fb5b5a' });
            this.setState({ attemptsQ2: 0});
            this.setState({ score: score + 1});
            alert('Correct! Great Job!');
        }
    }
    handleBL2 = () => {  // INCORRECT (Terrier)
        const { attemptsQ2 } = this.state;
        if (attemptsQ2 > 1) {
            this.setState({ bl2Color: '#fb5b5a' });
            this.setState({ attemptsQ2: attemptsQ2 - 1});
            console.log(attemptsQ2);
            alert('That is incorrect. Try again.');
        } else if (attemptsQ2 == 1) {
            this.setState({ attemptsQ2: 0});
            this.setState({ tl2Color: '#fb5b5a' });
            this.setState({ tr2Color: '#7af59b' });
            this.setState({ bl2Color: '#fb5b5a' });
            this.setState({ br2Color: '#fb5b5a' });
            alert('That is incorrect.');
        }
    }
    handleBR2 = () => {  // INCORRECT (Shetland)
        const { attemptsQ2 } = this.state;
        if (attemptsQ2 > 1) {
            this.setState({ br2Color: '#fb5b5a' });
            this.setState({ attemptsQ2: attemptsQ2 - 1});
            console.log(attemptsQ2);
            alert('That is incorrect. Try again.');
        } else if (attemptsQ2 == 1) {
            this.setState({ attemptsQ2: 0});
            this.setState({ tl2Color: '#fb5b5a' });
            this.setState({ tr2Color: '#7af59b' });
            this.setState({ bl2Color: '#fb5b5a' });
            this.setState({ br2Color: '#fb5b5a' });
            alert('That is incorrect.');
        }
    }



    handleTL3 = () => {  // INCORRECT (Great Dane)
        const { attemptsQ3 } = this.state;
        if (attemptsQ3 > 1) {
            this.setState({ tl3Color: '#fb5b5a' });
            this.setState({ attemptsQ3: attemptsQ3 - 1});
            console.log(attemptsQ3);
            alert('That is incorrect. Try again.');
        } else if (attemptsQ3 == 1) {
            this.setState({ attemptsQ3: 0});
            this.setState({ tl3Color: '#fb5b5a' });
            this.setState({ tr3Color: '#fb5b5a' });
            this.setState({ bl3Color: '#7af59b' });
            this.setState({ br3Color: '#fb5b5a' });
            alert('That is incorrect.');
        }
    }
    handleTR3 = () => {  // INCORRECT (Husky)
        const { attemptsQ3 } = this.state;
        if (attemptsQ3 > 1) {
            this.setState({ tr3Color: '#fb5b5a' });
            this.setState({ attemptsQ3: attemptsQ3 - 1});
            console.log(attemptsQ3);
            alert('That is incorrect. Try again.');
        } else if (attemptsQ3 == 1) {
            this.setState({ attemptsQ3: 0});
            this.setState({ tl3Color: '#fb5b5a' });
            this.setState({ tr3Color: '#fb5b5a' });
            this.setState({ bl3Color: '#7af59b' });
            this.setState({ br3Color: '#fb5b5a' });
            alert('That is incorrect.');
        }
    }
    handleBL3 = () => {  // CORRECT (Dachshund)
        const { attemptsQ3 } = this.state;
        const { score } = this.state;
        if (attemptsQ3 > 0){  // Checks for attempts to eliminate alert showing or user getting score after losing all attempts
            this.setState({ tl3Color: '#fb5b5a' });
            this.setState({ tr3Color: '#fb5b5a' });
            this.setState({ bl3Color: '#7af59b' });
            this.setState({ br3Color: '#fb5b5a' });
            this.setState({ attemptsQ3: 0});
            this.setState({ score: score + 1});
            alert('Correct! Great Job!');
        }
    }
    handleBR3 = () => {  // INCORRECT (German Shepard)
        const { attemptsQ3 } = this.state;
        if (attemptsQ3 > 1) {
            this.setState({ br3Color: '#fb5b5a' });
            this.setState({ attemptsQ3: attemptsQ3 - 1});
            console.log(attemptsQ3);
            alert('That is incorrect. Try again.');
        } else if (attemptsQ3 == 1) {
            this.setState({ attemptsQ3: 0});
            this.setState({ tl3Color: '#fb5b5a' });
            this.setState({ tr3Color: '#fb5b5a' });
            this.setState({ bl3Color: '#7af59b' });
            this.setState({ br3Color: '#fb5b5a' });
            alert('That is incorrect.');
        }
    }



    buffer() { }  // Used for proper spacing of SafeAreaView and Navigation Bar

    buttonStyle={
        flex: 1,
        flexDirection: "row", //changes nothing if commented
        backgroundColor: 'ivory',
        alignItems: 'center', //moves text to top of box
        padding: 10, //bigger numbers moves text down
        height: 100,
        borderRadius: 30, //originally 80
        justifyContent: "center",
        margin: 12,
        marginBottom: 0
    }

    // _onPressButton() {
    //     alert('You pressed the button')
    // }

    // correctAnswer() {
    //     buttonStyle = rightStyle;
    //     alert('Correct! Great job!')
        
    // }
    // incorrectAnswer() {
    //     alert('That is incorrect. Try again.')
    // }


    render () {
        const { navigate } = this.props.navigation;

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <View style={styles.screen}>
                    <ScrollView contentContainerStyle={styles.screen}>
                        <Text style={styles.prompt}> Prompt Goes Here </Text>
                        <Swiper style={styles.wrapper} showsButtons loop={false}>
                            <SafeAreaView style={styles.container}>
                                <Image source={require('../assets/Animals/01chihuahua.png')} style={styles.image}/> 
                                <View style={styles.topButtons}>
                                    <TouchableOpacity style={[this.buttonStyle, {backgroundColor: this.state.tl1Color}]} onPress={this.handleTL1}>
                                        <Text style={styles.text}> Chihuahua </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[this.buttonStyle, {backgroundColor: this.state.tr1Color}]} onPress={this.handleTR1}>
                                        <Text style={styles.text}> Bulldog </Text>
                                    </TouchableOpacity>
                                </View>  
                                <View style={styles.bottomButtons}>
                                    <TouchableOpacity style={[this.buttonStyle, {backgroundColor: this.state.bl1Color}]} onPress={this.handleBL1}>
                                        <Text style={styles.text}> Labrodor </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[this.buttonStyle, {backgroundColor: this.state.br1Color}]} onPress={this.handleBR1}>
                                        <Text style={styles.text}> Pitbull </Text>
                                    </TouchableOpacity>
                                </View>  
                                {/* The line below was added so swipe dots don't interfere with answer choices*/}
                                <TouchableOpacity styles={styles.spaceButton} onPress={this.buffer}>
                                    <Text style={styles.bufferText}>a</Text>
                                </TouchableOpacity>
                            </SafeAreaView>
                            <SafeAreaView style={styles.container}>
                                <Image source={require('../assets/Animals/02Beagle.png')} style={styles.image}/>   
                                <View style={styles.topButtons}>
                                    <TouchableOpacity style={[this.buttonStyle, {backgroundColor: this.state.tl2Color}]} onPress={this.handleTL2}>
                                        <Text style={styles.text}> Shiba Inu </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[this.buttonStyle, {backgroundColor: this.state.tr2Color}]} onPress={this.handleTR2}>
                                        <Text style={styles.text}> Beagle </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.bottomButtons}>
                                    <TouchableOpacity style={[this.buttonStyle, {backgroundColor: this.state.bl2Color}]} onPress={this.handleBL2}>
                                        <Text style={styles.text}> Terrier </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[this.buttonStyle, {backgroundColor: this.state.br2Color}]} onPress={this.handleBR2}>
                                        <Text style={styles.text}> Shetland </Text>
                                    </TouchableOpacity>
                                </View>
                                {/* The line below was added so swipe dots don't interfere with answer choices*/}
                                <TouchableOpacity styles={styles.spaceButton} onPress={this.buffer}>
                                    <Text style={styles.bufferText}>a</Text>
                                </TouchableOpacity>
                            </SafeAreaView>
                            <SafeAreaView style={styles.container}>
                                <Image source={require('../assets/Animals/03Dachshund.png')} style={styles.image}/>   
                                <View style={styles.topButtons}>
                                    <TouchableOpacity style={[this.buttonStyle, {backgroundColor: this.state.tl3Color}]} onPress={this.handleTL3}>
                                        <Text style={styles.text}> Great Dane </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[this.buttonStyle, {backgroundColor: this.state.tr3Color}]} onPress={this.handleTR3}>
                                        <Text style={styles.text}> Husky </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.bottomButtons}>
                                    <TouchableOpacity style={[this.buttonStyle, {backgroundColor: this.state.bl3Color}]} onPress={this.handleBL3}>
                                        <Text style={styles.text}> Dachshund </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[this.buttonStyle, {backgroundColor: this.state.br3Color}]} onPress={this.handleBR3}>
                                        <Text style={styles.text}> German Shepard </Text>
                                    </TouchableOpacity>
                                </View>
                                {/* The line below was added so swipe dots don't interfere with answer choices*/}
                                <TouchableOpacity styles={styles.spaceButton} onPress={this.buffer}>
                                    <Text style={styles.bufferText}>a</Text>
                                </TouchableOpacity>
                            </SafeAreaView>
                            <SafeAreaView style={styles.container}>
                                <View style={styles.container}>
                                        <Text style={styles.scoreHeader}> Score </Text>
                                        <Text style={styles.score}> {this.state.score} / 3 </Text>
                                </View>
                                {/* The line below was added so swipe dots don't interfere with answer choices*/}
                                <TouchableOpacity styles={styles.spaceButton} onPress={this.buffer}>
                                    <Text style={styles.bufferText}>a</Text>
                                </TouchableOpacity>
                            </SafeAreaView>
                        </Swiper>
                    </ScrollView>
                    </View>
                </View>
                <Toolbar navigation={navigate}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: "row",
        justifyContent: 'center',
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
    screen: {
        flex: 1,
        backgroundColor: '#74B4E0',
        alignItems: 'center',
    },
    wrapper : {},
    prompt:{
        fontWeight:"bold",
        fontSize:40,
        color:"black",
        textDecorationLine: 'underline',
        paddingBottom: 10,
        paddingTop: 10
    },
    topButtons: {
        flexDirection: "row",
        alignContent: 'center',
        alignItems: 'center',
    },
    bottomButtons: {
        flexDirection: "row",
        alignContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: "black",
        fontSize: 20,
        fontWeight: '800',
        flexDirection: 'row'
    },
    score: {
        color: "white",
        fontSize: 40,
        fontWeight: '800',
    },
    scoreHeader: {
        color: "white",
        fontSize: 50,
        fontWeight: '800',
    },
    bufferText: {
        color: "#74B4E0",
        fontSize: 40,
        fontWeight: '800',
        flexDirection: 'row'
    },
    spaceButton: {
        padding: 10,
        backgroundColor: '#74B4E0',
    },
});