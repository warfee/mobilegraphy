import React from "react";
import { View, Text} from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from './Login.js';
import Dashboard from './Dashboard.js';
import Loading from './Loading.js';

import * as firebase from 'firebase';
import { firebaseConfig } from './Config.js';
firebase.initializeApp(firebaseConfig);


class LoginScreen extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Loading: Loading,
  Login: Login,
  Dashboard: Dashboard
});


export default createAppContainer(AppSwitchNavigator);
const AppNavigator = createAppContainer(AppSwitchNavigator);