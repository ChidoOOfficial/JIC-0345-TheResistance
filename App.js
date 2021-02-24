import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import LessonsPage from './pages/LessonsPage';
//import UserProfileListPage from './pages/UserProfilePages/UserProfileListPage';
import MainUserProfilePage from './pages/MainUserProfilePage';
import StorePage from './pages/StorePage';
import SettingsPage from './pages/SettingsPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import RankingsPage from './pages/RankingsPage';
import QuizzesPage from './pages/QuizzesPage';

//import all the screens we are going to switch
const App = createStackNavigator({
      //Constant which holds all the screens like index of any book
      LoginPage: { screen: LoginPage },
      HomePage: { screen: HomePage },
      //First entry by default be our first screen if we do not define initialRouteName
      LessonsPage: { screen: LessonsPage },
      MainUserProfilePage: { 
            screen: MainUserProfilePage,
            navigationOptions: {
                title: "Profile",
                headerLeft: () => null,
            }, 
        },
      StorePage: { screen: StorePage },
      Settings: {screen: SettingsPage },
      ChangePasswordPage: { screen: ChangePasswordPage},
      RankingsPage: { screen: RankingsPage },
      QuizzesPage : { screen: QuizzesPage },
    },
    {
      initialRouteName: 'LoginPage',
    }
);
export default createAppContainer(App);