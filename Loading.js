import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

class Loading extends Component {

  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function(user) {
        console.log('AUTH STATE CHANGED CALLED ');
        if (user) {
          console.log('Done LogIn');
          this.props.navigation.navigate('Dashboard');
        } else {
          console.log('Failed LogIn ');
          this.props.navigation.navigate('Login');
        }
      }.bind(this)
    );
  };
 
  render() {
    return (
      <View style={styles.container}>
       <ActivityIndicator size="large" />
      </View>
    );
  }
}
export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});