import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, Alert} from 'react-native';
import React from "react";

import Toolbar from './Toolbar';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <View style={styles.screen}>
                    <Text style={styles.header}>Choose an Activity</Text>
                    <TouchableOpacity style={[styles.optionBox, {backgroundColor: "#7af59b"}]} onPress={() => navigate('LessonsPage')}>
                        <View>
                            <Text style={styles.optionText}>Lessons</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.optionBox, {backgroundColor: "#F45BB5"}]} onPress={() => navigate('QuizSelectPage')}>
                        <View>
                            <Text style={[styles.optionText, {"color": "white"}]}>Quizzes</Text>
                        </View>
                    </TouchableOpacity>
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
    },
    header: {
        color: "white",
        fontSize: 40,
        margin: 20,
        textAlign: "center"
    },
    optionBox: {
        width: "100%",
        margin: 10,
        padding: 50,
        width: "95%",
        borderRadius: 15
    },
    optionText: {
        color: "black",
        fontSize: 45,
        textAlign: "center"
    }
});
