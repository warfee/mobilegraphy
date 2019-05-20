import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';

class AddNewScreen extends React.Component {

	 static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-add-circle" style={{ color: tintColor }} />
        )
    }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add New Feed Screen!</Text>
      </View>
    );
  }
}


export default AddNewScreen;