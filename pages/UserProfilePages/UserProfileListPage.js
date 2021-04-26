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
import configs from '../../app_config.json';

class UserProfileHolder extends Component {
    render() {
        return(
            <View style={styles.userContainer}>
                <TouchableOpacity>
                    <View>
                        <Image style={styles.userImage} source={this.props.imageSrc}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text style={styles.userNameText}>  {this.props.userName} </Text>
                    </View>
                </TouchableOpacity>
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
                index: 0,
                alreadyPresent: [] //keeps track of the names already on the page of the roster ... used to check duplicates
            }
            let studentRoster = this.state.arrayHolder;
        fetch(configs.Server_Address + 'user/allAssociatedSpecialID', {
            /*gets all the ids of the students in the roster*/
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((json) => {
                studentRoster = json["specialIDs"].StudentSpecialIDList;
                let tempArray = [];
                for (let i = 0; i < studentRoster.length; i++) {
                    if (studentRoster[i] !== null) {tempArray[i] = studentRoster[i];}
                }
                tempArray = tempArray.filter(function( element ) {
                    return element !== undefined;
                });
                for (let id of tempArray) {
                    this.setState({studentID: id, textInput_Holder: id}) //gets each individual id and then gets the username with that id
                    this.populateRoster(); //populates the roster with each id from the array
                }
            });
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
        Alert.alert(item); //popup with the student name
    }
    
    addToDB = () => { //adds a student to the db and then calls populate roster to add the student to the class roster
                      //that is displayed on the page
        //BUG: Isn't updating the actual database for some reason
        //let id = "0SAH3WRGQ880"
        let id = this.state.textInput_Holder //enter the id in the line prior
        fetch(configs.Server_Address + 'user/addAssociatedSpecialID', {
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
        });
    }
    populateRoster = () => { //adds the student's name to the screen
        let id = this.state.textInput_Holder //enter the id in the line prior
        let User = this.state.user;
        fetch(configs.Server_Address + 'user/bySpecialID', {
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
                if (!this.state.alreadyPresent.includes(User.Username)) {
                    this.array.push({title : <UserProfileHolder userName={this.state.user}  imageSrc={require("../../assets/icon.png")} />})
                    this.setState({ arrayHolder: [...this.array] })
                    this.state.alreadyPresent.push(User.Username)
                }
            });
        this.addToDB()
        this.setState({
            textInput_Holder: "" //set the input text holder (where the ids and typed) to null otherwise the same student
                                 //can be readded
        })
    }

    render(){
        const { navigate } = this.props.navigation;
        return (
            LogBox.ignoreLogs(['VirtualizedLists should never be nested']), //logbox ignores console warnings
            LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']),
                LogBox.ignoreLogs(['Encountered two children with the same']),
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

                        </ScrollView>
                    </View>

                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.lowerBtn} onPress={() => navigate('TeacherQuizSelectPage')}>
                            <Text style={styles.btnText}> View Quiz Scores </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.lowerBtn} onPress={() => this.populateRoster()}>
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
        color: "red",
        paddingRight: 15
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
    AddBtn:{
        width:"60%",
        backgroundColor:"#9b5de5",
        borderRadius:25,
        height:40,
        //alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:70,
        marginLeft: 75
    },
    userInput:{
        height:50,
        color:"white",
        marginLeft: 70,
        fontSize: 20
    },
    btnText: {
        color: 'black',
        fontSize: 19,
        fontWeight: '800',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 17
    },
    studentButton: {
        //width:50,
    },
    btnView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 60
    }
});
