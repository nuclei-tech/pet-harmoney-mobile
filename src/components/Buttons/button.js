
import React from 'react';
import { StyleSheet, View, TouchableNativeFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import { size, colors } from '../../theme'


const CustomButton = ({ title, onPress, type, color, custonTextStyle  }) => {

  const onPressHandle = () => {
    console.log("innnnnn");
  }

  const { buttonStyle, textStyle, buttonContainer, containerStyle } = styles;
  const buttonStyles = color ? type == 'outline' ? [buttonStyle, { borderColor: color }] : [buttonStyle, { borderColor: color, backgroundColor: color }] : buttonStyle;
  const textStyles = custonTextStyle ? [textStyle, custonTextStyle] : textStyle;

  return (
    <View style={buttonContainer}>
      <Button
        title={title ? title : 'title'}
        type={type}
        buttonStyle={buttonStyles}
        onPress={onPress ? onPress : onPressHandle}
        titleStyle={textStyles}
        containerStyle={containerStyle}
        TouchableComponent={props => {
          return (
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("white")}>
              {props.children}
            </TouchableNativeFeedback>
          )
        }}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: size.SIZE.MARGIN,
    flexDirection: 'row'
  },
  buttonStyle: {
    width: '100%',
    borderRadius:size.SIZE.BASE*2 ,
    borderWidth: 2,
  },
  containerStyle:{
    borderRadius: size.SIZE.BASE ,
  },
  textStyle: {
    fontSize: size.FONT_SIZES.BUTTON
  }
})
export default CustomButton;