import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { useSelector } from 'react-redux';

//boarderColor
//backgroundColor
//buttonWidth
//textColor
//buttonWidth
//textTransform

const CustomButton = (props) => {
  const { theme } = useSelector(state => state.theme);
  const { title, onPress, type,boarderColor,customTextStyle, buttonContainStyle,buttonType} = props
  const { buttonStyle, textStyle,smallButtonStyle,smallTextStyle,borderColorAdd,backGroundAndBorder, } = styles(props,theme);
  
  let buttonStyles 
  let textStyles 

  switch (buttonType) {
    case 'small':
      buttonStyles = boarderColor ? type == 'outline' ? {...smallButtonStyle, ...buttonContainStyle, ...borderColorAdd} : {...smallButtonStyle, ...buttonContainStyle,...backGroundAndBorder} : {...smallButtonStyle, ...buttonContainStyle,...backGroundAndBorder};
    textStyles = customTextStyle ? [smallTextStyle, customTextStyle] : smallTextStyle;
      break;
    default:
      buttonStyles = boarderColor ? type == 'outline' ? {...buttonStyle, ...buttonContainStyle, ...borderColorAdd} : {...buttonStyle, ...buttonContainStyle,...backGroundAndBorder} : {...buttonStyle, ...buttonContainStyle,...backGroundAndBorder};
      textStyles = customTextStyle ? [textStyle, customTextStyle] : textStyle;
      break;
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
    borderColor: props.boarderColor,
    backgroundColor: props.backgroundColor 
  },
  backGroundAndBorder:{
    borderColor: props.type == 'outline' ? props.boarderColor ? props.boarderColor : props.backgroundColor : props.backgroundColor,
    backgroundColor: props.backgroundColor
  },
  buttonStyle: {
    width: props.buttonWidth ? props.buttonWidth : '100%',
    borderRadius: 100,
    borderWidth: 4,
    marginTop: 8,
    marginBottom: 8,
    paddingTop: 8,
    paddingBottom: 8,
  },
  smallButtonStyle: {
    width: props.buttonWidth ? props.buttonWidth : '100%',
    borderRadius: 100,
    borderWidth: 4,
    marginTop: 8,
    marginBottom: 12,
    paddingTop: 1,
    paddingBottom: 1,
  },
  textStyle: {
    ...theme.Theme.defaultButtonStyle.textStyle,
    textAlign: 'center',
    color:props.textColor,
    textTransform:props.textTransform ? props.textTransform : 'none'
  },
  smallTextStyle: {
    ...theme.Theme.defaultButtonStyle.smallTextStyle,
    textAlign: 'center',
    color:props.textColor,
    textTransform:props.textTransform ? props.textTransform : 'none'
  }
})
export default CustomButton;