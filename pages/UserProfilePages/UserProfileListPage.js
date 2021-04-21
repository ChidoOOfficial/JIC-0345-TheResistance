import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    Button,
    Alert,
    TextInput,
    TouchableOpacity,
    FlatList, LogBox
} from 'react-native';

import Toolbar from '../Toolbar';

class UserProfileHolder extends Component {
    render() {
        return(
            <View style={styles.userContainer}>
                <Image style={styles.userImage} source={this.props.imageSrc}/>
                <Text style={styles.userNameText}>  {this.props.userName} </Text>
                <TouchableOpacity style={{marginLeft: "auto"}} onPress={this.remove.bind(this)}>
                    <View >
                        <Text style={styles.remove}>Remove</Text>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }

    remove() {
        // uncomment this when user remove is set up on db
        /*
        fetch('https://junior-design-resistence.herokuapp.com/user', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "SpecialID": this.props.userName
            })
        })
        .then((res) => res.json())
        .then((json) => {
        });
        */
        console.log("removed -> " + this.props.userName)
    }

}

export default class UserProfileListPage extends Component {
    constructor(props) {
        super(props);
        this.array = [],
            this.state = {
                arrayHolder: [],
                textInput_Holder: '',
                studentID: "",
                user: "",
                index: 0
            }
    }
    componentDidMount() {
        this.setState({ arrayHolder: [...this.array] })
    }
    joinData = () => {
        this.array.push({title : this.state.textInput_Holder});
        this.setState({ arrayHolder: [...this.array] })
    }
    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 4,
                    width: "1000%",
                    backgroundColor: "#607D8B",
                }}
            />
        );
    }
    GetItem(item) {
        Alert.alert(item);
    }
    addToRoster = () => { //add a student to the class list
        //let id = "0SAH3WRGQ880"
        let id = this.state.textInput_Holder //enter the id in the line prior
        //console.log("here")
        console.log(id)
        let User = this.state.user;
        fetch('https://junior-design-resistence.herokuapp.com/user/bySpecialID', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "SpecialID": id
            })
        })
        .then((res) => res.json())
        .then((json) => {
            User = json["user"][0];
            this.setState({
                user: User.Username,
                index: this.state.index + 1
            });
            console.log(this.state.user)
            console.log(User)
            if (!this.array.find(p => p.userName === user)) {
                this.array.push({title : <UserProfileHolder userName={this.state.user}  imageSrc={require("../../assets/icon.png")} />})
                this.setState({ arrayHolder: [...this.array] })
            }
        });
        //this.array.push({title : this.state.textInput_Holder});
        /*if (this.state.textInput_Holder !== "") {
            this.array.push({title : <UserProfileHolder userName={this.state.textInput_Holder}  imageSrc={require("../../assets/icon.png")} />})
            this.setState({ arrayHolder: [...this.array] })
        } */
    }

    render(){
        const { navigate } = this.props.navigation;
        return (
            LogBox.ignoreLogs(['VirtualizedLists should never be nested']),
            LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']),
            <View style={styles.container}>
                <SafeAreaView style={styles.screen}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}> CLASS ROSTER</Text>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            secureTextEntry
                            styles={styles.userInput}
                            placeholder="Enter Student ID"
                            placeholderTextColor="black"
                            onChangeText={data => this.setState({ textInput_Holder: data })}
                            //onChangeText={(studentID) => this.setState({studentID})}
                        />
                    </View>
                    <View style={styles.userSlots}>
                        <ScrollView>
                            <FlatList
                                data={this.state.arrayHolder}
                                width='100%'
                                extraData={this.state.arrayHolder}
                                keyExtractor={() => this.state.index.toString()}
                                ItemSeparatorComponent={this.FlatListItemSeparator}
                                renderItem={({ item }) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.title)} > {item.title} </Text>}
                                contentContainerStyle={{
                                    flexGrow: 1,
                                }}
                            />
                            <UserProfileHolder userName="u8ddu87uty"  imageSrc={require("../../assets/icon.png")} />
                            <UserProfileHolder userName="t2"  imageSrc={require("../../assets/icon.png")} />
                            <UserProfileHolder userName="t3"  imageSrc={require("../../assets/icon.png")} />
                            <UserProfileHolder userName="t4"  imageSrc={require("../../assets/icon.png")} />
                            <UserProfileHolder userName="t5"  imageSrc={require("../../assets/icon.png")} />
                            <UserProfileHolder userName="t6"  imageSrc={require("../../assets/icon.png")} />
                            <UserProfileHolder userName="t7"  imageSrc={require("../../assets/icon.png")} />
                        </ScrollView>
                    </View>

                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.lowerBtn} onPress={() => navigate('TeacherQuizSelectPage')}>
                            <Text style={styles.btnText}> View Quiz Scores </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.lowerBtn} onPress={() => this.addToRoster()}>
                            <Text style={styles.btnText}> Add Student </Text>
                        </TouchableOpacity>
                    </View>
                    
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#87cefa"
    },
    screen: {
        flex: 1,
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
    },
    remove: {
        color: "darkred",
        paddingRight: 12
    },
    inputView:{
        width:"80%",
        //#465881
        backgroundColor:"#9b5de5",
        borderRadius:25,
        marginLeft: 40,
        justifyContent: 'center',
        height: 40
    },
    lowerBtn:{
        width:"40%",
        backgroundColor:"#9b5de5",
        borderRadius:25,
        height:40,
        //alignItems:"center",
        justifyContent:"center",
        marginBottom: 20,
        marginTop: 20
    },
    userInput:{
        height:50,
        color:"white",
        marginLeft: 70,
        fontSize: 20
    },
    btnText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '800',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    btnView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 60
    }
});
