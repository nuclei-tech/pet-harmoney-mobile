import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { size } from '../../theme'

import { useSelector } from 'react-redux';


const CustomButton = (props) => {
  const { theme } = useSelector(state => state.theme);
  const { title, onPress, type, color, customTextStyle, buttonContainStyle,buttonType} = props
  const { buttonStyle, textStyle,smallButtonStyle,smallTextStyle,borderColorAdd,backGroundAndBorder } = styles(props,theme);
  
  let buttonStyles 
  let textStyles 

  if(buttonType == 'small'){
    buttonStyles = color ? type == 'outline' ? [smallButtonStyle, buttonContainStyle, borderColorAdd] : [smallButtonStyle, buttonContainStyle,backGroundAndBorder] : [smallButtonStyle, buttonContainStyle];
    textStyles = customTextStyle ? [smallTextStyle, customTextStyle] : smallTextStyle;
  }else{
    buttonStyles = color ? type == 'outline' ? [buttonStyle, buttonContainStyle, borderColorAdd] : [buttonStyle, buttonContainStyle,backGroundAndBorder] : [buttonStyle, buttonContainStyle];
    textStyles = customTextStyle ? [textStyle, customTextStyle] : textStyle;
  }

return (
    <TouchableOpacity style={buttonStyles} onPress={onPress ? onPress : null}>
      <Text style={textStyles}>
        {title}
      </Text>
    </TouchableOpacity>
  )
};

const styles =(props,theme) => StyleSheet.create({
  borderColorAdd:{
    borderColor: props.color
  },
  backGroundAndBorder:{
    borderColor: props.color,
    backgroundColor: props.color
  },
  buttonStyle: {
    width: '100%',
    borderRadius: 100,
    borderWidth: 4,
    marginTop: 8,
    marginBottom: 8,
    paddingTop: 10,
    paddingBottom: 10,
  },
  smallButtonStyle: {
    width: '100%',
    borderRadius: 100,
    borderWidth: 4,
    marginTop: 8,
    marginBottom: 12,
    paddingTop: 4,
    paddingBottom: 4,
  },
  containerStyle: {
    borderRadius: size.SIZE.BASE,
  },
  textStyle: {
    ...theme.Theme.defaultButtonStyle.textStyle,
    textAlign: 'center',
    textTransform:props.textTransform ? props.textTransform : 'none'
  },
  smallTextStyle: {
    ...theme.Theme.defaultButtonStyle.smallTextStyle,
    textAlign: 'center',
    textTransform:props.textTransform ? props.textTransform : 'none'
  }
})
export default CustomButton;