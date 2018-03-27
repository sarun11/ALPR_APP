import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class QueryDatabase extends Component {
  static navigationOptions = {
    Label: 'Screen 3',
    drawerIcon: ({ tintColor }) => {
      return (
        <MaterialIcons
        name='cloud'
        size={24}
        style={{ color: tintColor }}
        />
      );
    }
  }

render() {
      return (
        <View style={{ flex: 1, }}>
        <TouchableOpacity
         style={{ marginLeft: 20, marginTop: 20 }}
         onPress={() => this.props.navigation.navigate('DrawerOpen')
       }>
          <Image source={require('../../Icons/menu.png')} />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, color: 'green' }}>
          Screen 3
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});
