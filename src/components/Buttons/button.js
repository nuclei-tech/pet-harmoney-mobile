
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { size } from '../../theme'


const CustomButton = ({ title, onPress, type, color, custonTextStyle, buttonContainStyle }) => {

  const { buttonStyle, textStyle } = styles;
  const buttonStyles = color ? type == 'outline' ? [buttonStyle, buttonContainStyle, { borderColor: color }] : [buttonStyle, buttonContainStyle, { borderColor: color, backgroundColor: color }] : [buttonStyle, buttonContainStyle];
  const textStyles = custonTextStyle ? [textStyle, custonTextStyle] : textStyle;

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress ? onPress : null}>
      <Text style={textStyles}>
        {title}
      </Text>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    borderRadius: size.SIZE.BASE * 2,
    borderWidth: 2,
    marginTop: 8,
    marginBottom: 8
  },
  containerStyle: {
    borderRadius: size.SIZE.BASE,
  },
  textStyle: {
    fontFamily: 'Source Sans Pro',
    fontSize: size.FONT_SIZES.BUTTON,
    fontWeight:'bold',
    paddingTop: 10.5,
    paddingBottom: 10.5,
    textAlign: 'center',
    textTransform:'uppercase'
  }
})
export default CustomButton;