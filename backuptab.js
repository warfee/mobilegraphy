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