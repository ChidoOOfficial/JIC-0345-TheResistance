import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import LoginPage from './pages/LoginPage';
import LessonsPage from './pages/LessonsPage';
import SettingsPage from './pages/SettingsPage';
//import all the screens we are going to switch
const App = createStackNavigator({
      //Constant which holds all the screens like index of any book
      LoginPage: { screen: LoginPage },
      //First entry by default be our first screen if we do not define initialRouteName
      LessonsPage: { screen: LessonsPage },
      Settings: {screen: SettingsPage },
      
    },
    {
      initialRouteName: 'LoginPage',
    }
);
export default createAppContainer(App);



