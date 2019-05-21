import React from "react";
import { View, Text} from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from './Login.js';
import Dashboard from './Dashboard.js';
import Loading from './Loading.js';
import tryupload from './Tryupload.js';

import { db } from './Config.js';


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
  Dashboard: Dashboard,
  Try : tryupload
});


export default createAppContainer(AppSwitchNavigator);
const AppNavigator = createAppContainer(AppSwitchNavigator);