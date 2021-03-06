import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, Alert} from 'react-native';

import Swiper from 'react-native-swiper/src'

import Toolbar from './Toolbar';
import UserProfilePage from './UserProfilePages/UserProfilePage'
import UserProfileListPage from './UserProfilePages/UserProfileListPage'
import TeacherQuizSelectPage from './TeacherQuizSelectPage'

class TitleText extends Component {
    render() {
      return (
        <Text style={{ fontSize: 48, color: 'white' }}>
          {this.props.label}
        </Text>
      )
    }
  }


export default class MainUserProfilePage extends Component {

    render(){
        const { navigate } = this.props.navigation;
        if (global.userType === "Teacher") {
            return (
                <View style={{flex: 1}}>
                    <Swiper
                        loop={false}
                        showsPagination={true}
                        index={0}>

                        <UserProfilePage />
                        <UserProfileListPage navigation={this.props.navigation}/>
                    </Swiper>
                    <Toolbar navigation={navigate}/>
                </View>

            );
        } else {
            return (
                <View style={{flex: 1}}>
                    <Swiper
                        loop={false}
                        showsPagination={true}
                        index={0}>

                        <UserProfilePage />
                    </Swiper>
                    <Toolbar navigation={navigate}/>
                </View>

            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    userProfileImageContainter: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 10
    },
    userProfileImage: {
        width: 280,
        height: 280,
        borderColor: 'gray',
        borderWidth: 1,
    },
    heading: {
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingtext: {
        fontSize: 30,
    }
});
