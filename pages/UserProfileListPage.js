import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, Alert} from 'react-native';

import Toolbar from './Toolbar';

class UserProfileHolder extends Component {
    render() {
        return(
            <View style={styles.userContainer}>
                <Image style={styles.userImage} source={this.props.imageSrc}/>
                <Text style={styles.userNameText}>  {this.props.userName} </Text>                
            </View>
            
        )
    }
}

export default class UserProfileListPage extends React.Component {
    render(){
        return (
            <View style={{flex: 1}}>
                <SafeAreaView style={styles.screen}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}> CLASS ROSTER </Text>
                    </View>
                    <View style={styles.userSlots}>
                        <ScrollView>
                            <UserProfileHolder userName="u8ddu87uty"  imageSrc={require("../assets/icon.png")} />
                            <UserProfileHolder userName="t2"  imageSrc={require("../assets/icon.png")} />
                            <UserProfileHolder userName="t3"  imageSrc={require("../assets/icon.png")} />
                            <UserProfileHolder userName="t4"  imageSrc={require("../assets/icon.png")} />
                            <UserProfileHolder userName="t5"  imageSrc={require("../assets/icon.png")} />
                            <UserProfileHolder userName="t6"  imageSrc={require("../assets/icon.png")} />
                            <UserProfileHolder userName="t7"  imageSrc={require("../assets/icon.png")} />
                        </ScrollView>
                    </View>
                    <View style={styles.LowerButton}>
                        <Button title='ADD STUDENT' onPress={() => Alert.prompt('Add Student', 'Enter Student ID', (i) => console.log(i))}/>
                    </View>
                </SafeAreaView>
                <Toolbar />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        flex: 1,        
        alignItems: "center",
        paddingTop: 30,
    },
    headerText: {
        fontSize: 24
    },
    userSlots: {
        flex: 10,
        padding: 10
    },
    userContainer: {
        height: 80,
        backgroundColor: '#aaa9ad',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userImage: {
        marginLeft: 5,
        marginRight: 15,
        width: 65,
        height: 65
    },
    userNameText: {
        fontSize: 18
    },
    LowerButton: {
        flex: 1.2,
        alignItems: 'center',
        paddingTop: 5
    }
});

