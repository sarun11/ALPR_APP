import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Header } from '../common';

export default class Home extends Component {
  static navigationOptions = {
    Label: 'Screen 1',
    drawerIcon: ({ tintColor }) => {
      return (
        <MaterialIcons
        name='home'
        size={24}
        style={{ color: tintColor }}
        />
      );
    }
  }

render() {
      return (
        <View style={{ flex: 1, }}>

        <View>
          <Header headerText="Home" />
          <TouchableOpacity
           style={styles.menuIcon}
           onPress={() => this.props.navigation.navigate('DrawerOpen')
         }>
            <Image source={require('../../Icons/menu.png')} />
          </TouchableOpacity>
          <View style={styles.contentStyle}>
            <Image source={require('../Images/ALPR.png')} style={styles.ImageStyle} />
          </View>
        </View>
        <Text style={styles.welcomeTextStyle}>
          WELCOME
        </Text>
        <Text style={styles.textStyle1}>Click Vehicle image</Text>
        <Text style={styles.textStyle2}>  License plate Should be Clearly Visible</Text>
        <Text style={styles.textStyle2}> Upload Image to Server </Text>
        <Text style={styles.textStyle2}> Validate The result </Text>

        <TouchableOpacity
         style={styles.buttonStyle}
         onPress={() => this.props.navigation.navigate('DrawerOpen')
       }>
          <Text style={styles.btnTextStyle}> Proceed</Text>
        </TouchableOpacity>

        <Text style={styles.disclaimerStyle}>
          * This is a beta version and not a full version!
        </Text>
        <Text style={{ marginLeft: 50 }}>
          * Only intended to be used for development and Testing!
        </Text>
      </View>
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
  },
  welcomeTextStyle: {
    fontSize: 60,
    color: 'red',
    marginTop: 80,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textStyle1: {
    fontSize: 20,
    color: 'black',
    marginTop: 50,
    marginLeft: 50
  },
  textStyle2: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
    marginLeft: 40
  },
  btnTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 35,
    fontWeight: '600',
  },
  buttonStyle: {
      alignSelf: 'center',
      backgroundColor: '#330066',
      borderRadius: 20,
      borderWidth: 5,
      borderColor: '#27AAE1',
    marginTop: 100,
    width: 250,
    height: 65

  },
  disclaimerStyle: {
    marginLeft: 50,
    marginTop: 100
  }

});
