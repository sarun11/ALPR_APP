// Import Libraries for making a registerComponent
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

// Make the component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>

    </View>
  );
};

const styles = {

  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 3,
    position: 'relative'

  },

  textStyle: {
    fontSize: 30,
    color: 'black'
  }
};

// Make the Component available to other parts of the App
export { Header };
