import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';

class ProfileScreen extends React.Component {

	 static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="person" style={{ color: tintColor }} />
        )
    }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen!</Text>
      </View>
    );
  }
}


export default ProfileScreen;