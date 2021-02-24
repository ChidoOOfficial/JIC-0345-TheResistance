import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

export default class Toolbar extends Component {
    render() {
        console.log('toolbar running!')
        return(
            <View style={[styles.toolbarContainer]}>
                <View style={styles.toolbarButton}>
                    <TouchableOpacity onPress={() => {this.props.navigation('QuizzesPage');}}> 
                        <View style={styles.container}>
                            <Image source={require('../assets/home.png')} style={styles.image} />
                        </View>  
                    </TouchableOpacity>                  
                </View>
                <View style={styles.toolbarButton}>
                    <TouchableOpacity onPress={() => {this.props.navigation('RankingsPage'); }}>
                        <View style={styles.container}>
                            <Image source={require('../assets/score.png')} style={styles.image} />
                        </View>   
                    </TouchableOpacity>                             
                </View>    
                <View style={styles.toolbarButton}>
                    <TouchableOpacity onPress={() => {this.props.navigation('MainUserProfilePage'); }}>
                        <View style={styles.container}>
                            <Image source={require('../assets/user.png')} style={styles.image} />
                        </View>  
                    </TouchableOpacity>                             
                </View>
                <View style={styles.toolbarButton}>
                    <TouchableOpacity onPress={() => {this.props.navigation('StorePage'); }}>
                        <View style={styles.container}>
                            <Image source={require('../assets/shop.png')} style={styles.image} />
                        </View>  
                    </TouchableOpacity>                             
                </View>
                <View style={styles.toolbarButton}>
                    <TouchableOpacity onPress={() => {this.props.navigation('Settings');}}>
                        <View style={styles.container}>
                            <Image source={require('../assets/settings.png')} style={styles.image} />
                        </View>  
                    </TouchableOpacity>                             
                </View>                          
            </View>
        )
    }
}

const styles = StyleSheet.create({
    toolbarContainer: {
        height: 75,
        width: "100%",
        bottom: 0,
        flexDirection: 'row'
    },
    toolbarButton: {        
        height: "100%",
        width: "20%",        
        alignContent: 'center',
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: 1,
    },
    image: {
        width: 50,
        height: 50,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }

});
