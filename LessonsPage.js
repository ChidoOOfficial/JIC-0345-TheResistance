import {StyleSheet, View, Text, TextInput, TouchableOpacity, Picker,ScrollView} from 'react-native';
import React from "react";
//import all the components we are going to use.

export default class LessonsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            phrases: '',
            firstLanguage: 'java',
            secondLanguage: 'js',
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1}}>
                <ScrollView contentContainerStyle={styles.screen}>

                    <View style={{ marginLeft: 80, marginRight: 80, marginTop: 80, borderWidth: 5, borderColor: 'black',
                        borderRadius: 15, width: 240}}>
                        <Picker
                            style={styles.picker} itemStyle={styles.pickerItem}
                            selectedValue={this.state.phrases}
                            onValueChange={(itemValue) => this.setState({language: itemValue})}
                        >
                            <Picker.Item label="PHRASES" value="cp1" />
                            <Picker.Item label="PHRASES 1" value="cp2" />
                            <Picker.Item label="PHRASES 2" value="cp3" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: 80, marginRight: 80, marginTop: 30, borderWidth: 5, borderColor: 'black',
                        borderRadius: 15, width: 240}}>
                        <Picker
                            style={styles.picker} itemStyle={styles.pickerItem}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue) => this.setState({language: itemValue})}
                        >
                            <Picker.Item label="COLORS" value="colors1" />
                            <Picker.Item label="COLORS 2" value="colors2" />
                            <Picker.Item label="COLORS 3" value="colors3" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: 80, marginRight: 80, marginTop: 30, borderWidth: 5, borderColor: 'black',
                        borderRadius: 15, width: 240}}>
                        <Picker
                            style={styles.picker} itemStyle={styles.pickerItem}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue) => this.setState({language: itemValue})}
                        >
                            <Picker.Item label="NUMBERS" value="numbers1" />
                            <Picker.Item label="NUMBERS 1" value="numbers2" />
                            <Picker.Item label="NUMBERS 2" value="numbers3" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: 80, marginRight: 80, marginTop: 30, borderWidth: 5, borderColor: 'black',
                        borderRadius: 15, width: 240}}>
                        <Picker
                            style={styles.picker} itemStyle={styles.pickerItem}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue) => this.setState({language: itemValue})}
                        >
                            <Picker.Item label="CLOTHING" value="clothing1" />
                            <Picker.Item label="CLOTHING 1" value="clothing2" />
                            <Picker.Item label="CLOTHING 2" value="clothing3" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: 80, marginRight: 80, marginTop: 30, borderWidth: 5, borderColor: 'black',
                        borderRadius: 15, width: 240 }}>
                        <Picker
                            style={styles.picker} itemStyle={styles.pickerItem}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue) => this.setState({language: itemValue})}
                        >
                            <Picker.Item label="HOUSEHOLD" value="household1" />
                            <Picker.Item label="HOUSEHOLD 1" value="household2" />
                            <Picker.Item label="HOUSEHOLD 2" value="household3" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: 80, marginRight: 80, marginTop: 30, borderWidth: 5, borderColor: 'black',
                        borderRadius: 15, width: 240 }}>
                        <Picker
                            style={styles.picker} itemStyle={styles.pickerItem}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue) => this.setState({language: itemValue})}
                        >
                            <Picker.Item label="GRAMMAR" value="grammar1" />
                            <Picker.Item label="GRAMMAR 1" value="grammar2" />
                            <Picker.Item label="GRAMMAR 2" value="grammar3" />
                        </Picker>
                    </View>
                </ScrollView>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    screen: {
        flexGrow: 1,
        backgroundColor: 'aliceblue',
        alignItems: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"black",
        marginBottom:40,
        textDecorationLine: 'underline'
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
    buttons: {
        fontWeight: 'bold',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10,
        width: 340,
        borderRadius:80,
        marginTop: 20,
        color:'black',
        borderColor:'black'
    },
    search: {
        backgroundColor: "grey",
        fontSize: 20,
        width: 340,
        borderRadius:80,
    },
    picker: {
        width: 200,
        borderColor: 'black',
        borderWidth: 1,
        fontSize:32,
    },
    pickerItem: {
        color: 'red',
        fontSize:17,
        marginTop:20,
        backgroundColor: "grey",
    },
    pickerIcon: {
        color: "black",
        position: "absolute",
        bottom: 15,
        right: 10,
        fontSize: 20
    },
});
