import React from 'react';
import { Text, View, Button, Image, TextInput} from 'react-native';
import { Icon } from 'native-base';
import expo from 'expo';

class tryupload extends React.Component {

	 static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-add-circle" style={{ color: tintColor }} />
        )
    }

     state = {
    chosenImage: null,
    location: null
  };

  _launchCameraRollAsync = async () => {
    let { status } = await Expo.Permissions.askAsync(
      Expo.Permissions.CAMERA_ROLL
    );
    if (status !== "granted") {
      console.error("Camera not granted");
      return;
    }
    let image = await Expo.ImagePicker.launchImageLibraryAsync({
      aspect: [4, 3],
      exif: true
    });
    this.setState({ chosenImage: image });
    console.log(image);
  };

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  constructor(props){
    super(props);
    this.state={
      Desc : '',
      error : false 
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      name : e.nativeEvent.text
    });
  }
  handleSubmit(){
    console.log(this.state.name)
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Gallery" onPress={() => this._launchCameraRollAsync()} />
        <Text style={{marginBottom : 50, marginTop:50}}> Choosed Image</Text>
        {this.state.chosenImage && (
          <Image
            source={{ uri: this.state.chosenImage.uri }}
            style={{
              height: 150,
              width: 150
            }}
          />
        )}
        <TextInput multiline={true} numberOfLines = {4} placeholder = "Description" style={{ paddingLeft : 10, width:400, borderColor: 'transparent', borderWidth: 1, backgroundColor: 'rgba(210, 215, 211, 0.3)', marginBottom:20}}/>
         <Button onPress={this.findCoordinates} title="Embed Current Location"/>
          <Text>Location: {this.state.location}</Text>
         <Text></Text>
         <Button onPress={() => this.props.navigation.navigate('Feed')} title="Post"/>

      </View>
    );
  }
}


export default tryupload;