import React from "react";
import { View, Text, Button } from "react-native";

import AddNewScreen from './Tab/Craft.js';
import FeedScreen from './Tab/Feed.js';
import ProfileScreen from './Tab/Profile.js';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class Dashboard extends React.Component {

   static navigationOptions = {
    title: 'Dashboard',
     headerStyle: {
      backgroundColor: '#f45fff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
     <AppTabNavigator/>
    );
  }
}


const AppTabNavigator = createBottomTabNavigator({

    Feed: {
        screen: FeedScreen
    },
    Craft: {
        screen: AddNewScreen

    },
    Profile: {
        screen: ProfileScreen
    }

}, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true
        }
    })

export default createAppContainer(AppTabNavigator);