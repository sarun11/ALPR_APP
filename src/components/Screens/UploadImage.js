import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import { Header } from '../common';

const options = {
  title: 'Select a photo',
  takePhotoButtonTitle: 'Take a Photo',
  chooseFromLibraryButtonTitle: 'Choose from Gallery',
  quality: 1
};


export default class UploadImage extends Component {

  static navigationOptions = {
    tabBarLabel: 'Screen 2',
    drawerIcon: () => (
        <MaterialIcons
        name="camera-alt"
        size={24}
        />
      )
  }


  constructor() {
      super();
      this.state = {
        imageSource: null
      };
  }


selectPhoto() {
  ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
    let source = { uri: response.uri };

    // You can also display the image using data:
    // let source = { uri: 'data:image/jpeg;base64,' + response.data };

    this.setState({
      imageSource: source
    });
  }
});
}


render() {
      return (
        <ScrollView style={{ flex: 1, }}>

        <View>
          <Header headerText="Process Image" />
          <TouchableOpacity
           style={styles.menuIcon}
           onPress={() => this.props.navigation.navigate('DrawerOpen')
         }>
            <Image source={require('../../Icons/menu.png')} />
          </TouchableOpacity>


          <View style={styles.contentStyle}>

            <Image
            style={styles.ImageStyle}
            source={this.state.imageSource != null ? this.state.imageSource : require('../Images/ALPR.png')}
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={this.selectPhoto.bind(this)}>
              <Text style={styles.btnTextStyle}> Select </Text>
            </TouchableOpacity>
          </View>


        </View>


        <TouchableOpacity
         style={styles.buttonStyle}
         onPress={() => this.props.navigation.navigate('DrawerOpen')
       }>
          <Text style={styles.btnTextStyle}> Process Image</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
  }

  const styles = StyleSheet.create({
  menuIcon: {
    marginLeft: 20,
    marginTop: -60,
    elevation: 10
  },
  contentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyle: {
    marginTop: 100,
    height: 640,
    width: 480
  },
  headerTextStyle: {
    fontSize: 30,
    color: 'red',
    marginTop: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  btnTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
  },
  buttonStyle: {
      alignSelf: 'center',
    backgroundColor: '#27AAE1',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'red',
    marginTop: 100,
    width: 250,

  },
  });
