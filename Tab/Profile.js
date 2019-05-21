import React from 'react';
import { Text, View, Button } from 'react-native';
import { Icon } from 'native-base';
import firebase from 'firebase';

class ProfileScreen extends React.Component {

	 static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="person" style={{ color: tintColor }} />
        )
    }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
      </View>
    );
  }
}


export default ProfileScreen;