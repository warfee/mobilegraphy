import React from 'react';
import { Text, View, Button, TextInput} from 'react-native';
import { db } from './Config.js';

let addItem = item => {  
  db.ref('/items').push({
    name: item
  });
};

class AddNewScreen extends React.Component {

   state = {
    name: ''
  };
   handleChange = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };
  handleSubmit = () => {
    addItem(this.state.name);
    alert('Item saved successfully');
  };



  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <TextInput onChange={this.handleChange} multiline={true} numberOfLines = {4} placeholder = "Description" style={{ paddingLeft : 10, width:400, borderColor: 'transparent', borderWidth: 1, backgroundColor: 'rgba(210, 215, 211, 0.3)', marginBottom:20}}/>
         
         <Button onPress={this.handleSubmit} title="Post"/>

      </View>
    );
  }
}

export default AddNewScreen;