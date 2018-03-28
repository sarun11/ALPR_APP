import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Alert, YellowBox } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
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
        imageSource: null,
        data: null,
        value: '',
        jsonData: [],
        ownerName: '',
        processing: false
      };
  }

//A method to select photo in the GUI using React-Native-Image-Picker
selectPhoto() {
  this.setState({ ownerName: '' });
  this.setState({ jsonData: [] });
  this.setState({ processing: true });

  ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
    this.setState({ processing: false });
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
    this.setState({ processing: false });
  } else {
    let source = { uri: response.uri };

    // You can also display the image using data:
    // let source = { uri: 'data:image/jpeg;base64,' + response.data };

    this.setState({
      imageSource: source,
      data: response.data,
      value: 'image Loaded',
      processing: false
    });
  }
});
}


// A method to upload image to the server using React-Native-Fetch-Blob
uploadPhoto() {
  this.setState({ processing: true });
  RNFetchBlob.fetch('POST', 'http://192.168.1.102:8000/api/v1/reader/', {
    Authorization: 'Bearer access-token',
    otherHeader: 'foo',
    'Content-Type': 'multipart/form-data',
  }, [
    { name: 'image', filename: 'image.png', type: 'image/png', data: this.state.data },
  ]).then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             jsonData: responseJson,
             ownerName: responseJson.owner.full_name,
             processing: false
           }, () => {
             //alert(` Vehicle Number Plate:  ${responseJson.processed_text}`);
             //alert(this.state.processing);
             //Alert.alert(" Vehicle Owner Name:  " + this.state.ownerName);
           });
         })
         .catch((error) => {
           console.error(error);
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
            source={this.state.imageSource != null ?
            this.state.imageSource : require('../Images/ALPR.png')}
            />
            <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.selectPhoto.bind(this)}
            >
              <Text style={styles.btnTextStyle}> Select Photo </Text>
            </TouchableOpacity>
          </View>


        </View>


        <TouchableOpacity
         style={styles.btnProcessStyle}
         onPress={this.uploadPhoto.bind(this)}
         disabled={!this.state.value}
        >

          <Text style={styles.btnTextStyle}> Process Photo</Text>
        </TouchableOpacity>

        <View style={styles.viewStyle}>
          <Text style={styles.textStyle1}>VEHICLE DETAILS</Text>
          <Text style={styles.textStyle2}>
            License Plate Number:
          </Text>
            <Text style={styles.textStyle3}> {this.state.jsonData.processed_text}  </Text>
          <Text style={styles.textStyle2}>
            Vehicle Owned By:
          </Text>
          <Text style={styles.textStyle3}> {this.state.ownerName}  </Text>

          <View style={styles.spinnerViewStyle}>
          {this.state.processing ? <ActivityIndicator size="large" color="white" /> : null }
          </View>
        </View>

      </ScrollView>
    );
  }
  }

  YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Module RCTImageLoader requires',
  ]);


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
    backgroundColor: '#330066',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#27AAE1',
    marginTop: 60,
    width: 300,
    height: 60,
    marginRight: 400


  },
  btnProcessStyle: {
    alignSelf: 'center',
    backgroundColor: '#330066',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#27AAE1',
    marginTop: -62,
    marginLeft: 390,
    width: 300,
    height: 60
  },

  viewStyle: {
    backgroundColor: '#27AAE1',
    marginTop: 50,
    height: 400,
    paddingTop: 15,
    shadowColor: '#330066',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.9,
    elevation: 10,
    position: 'relative'

  },

  textStyle1: {
    fontSize: 30,
    marginLeft: 50,
    color: 'white',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },

  textStyle2: {
    fontSize: 20,
    marginLeft: 50,
    color: 'white',
    marginTop: 30
  },

  textStyle3: {
    fontSize: 35,
    marginLeft: 280,
    color: 'red',
    marginTop: -40,
    fontWeight: 'bold',
  },

  spinnerViewStyle: {
    marginTop: -100,
    marginLeft: 450
  }

  });
