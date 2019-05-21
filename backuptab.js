import React from 'react';
import { StyleSheet,Text, View, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


class FeedScreen extends React.Component {

  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed Screen!</Text>
      </View>
    );
  }
}

class AddNewScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add New Feed Screen!</Text>
      </View>
    );
  }
}
class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Feed: FeedScreen,
  Craft: AddNewScreen,
  Profile : ProfileScreen
},{
  
});

export default createAppContainer(TabNavigator);



const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    marginTop : 10,
    color : 'white'
  }
})





===============================================
app.js
===============================================
import React from "react";
import { View, Text, ImageBackground, TextInput, Button, Image} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Register from './Register.js';
import Dashboard from './Dashboard.js';

class LoginScreen extends React.Component {
  static navigationOptions ={
    header : null
  };
  render() {
    return (
   
        <ImageBackground source={require('./assets/background.png')} style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
         <Image source={require('./assets/insta-logo.png')} style={{ marginBottom: 30,width: 90, height: 90}} />
         <Text style={{fontSize:20,fontWeight: 'bold', color:'white', marginBottom:30}}> Login</Text>
         <TextInput placeholder = "Enter Email Address"  style={{ paddingLeft : 10, height: 50, width:400, borderColor: 'transparent', borderWidth: 1, backgroundColor: 'rgba(210, 215, 211, 0.3)', marginBottom:10}}/>
         <TextInput placeholder = "Enter Password" style={{ paddingLeft : 10, height: 50, width:400, borderColor: 'transparent', borderWidth: 1, backgroundColor: 'rgba(210, 215, 211, 0.3)', marginBottom:10}}/>
         <Button title=" Login Now !" onPress={() => this.props.navigation.push('Dashboard')} color="#841584"/>
         <Text style={{marginTop : 50}}> or</Text>
         <Text style={{marginTop : 50, marginBottom:20}}> Don't have any account yet?</Text>
         <Button title=" Register Now !" onPress={() => this.props.navigation.push('Register')} color="#841584"/>

        </ImageBackground>


     

        
       
    );
  }
}

const AppNavigator = createStackNavigator(
{
    Login : LoginScreen,
    Register : Register,
    Dashboard : Dashboard
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);