
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { size, colors } from '../../theme'


const CustomButton = ({ title, onPress, type, color, textColor }) => {

  const onPressHandle = () => {
    console.log("innnnnn");
  }

  const { buttonStyle, textStyle, buttonContainer,containerStyle } = styles;
  const buttonStyles = buttonStyle;
  const textStyles = textStyle;
  
  return (
    <View style={buttonContainer}>
      <Button
        type="solid"
        buttonStyle={buttonStyles}
        onPress={onPress ? onPress : onPressHandle}
        containerStyle={containerStyle}
        icon={
            <Icon
              name="plus"
              size={size.SIZE.BASE*1.2}
              color={colors.BLACK}
              type='font-awesome'
            />
          }
     />
    </View>

  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: size.SIZE.MARGIN
  },
  containerStyle:{
    borderRadius: size.SIZE.BASE*2,
    backgroundColor:colors.WHITE,
  },
  buttonStyle: {
    width: size.SIZE.BASE*3,
    height: size.SIZE.BASE*3,
    borderRadius: size.SIZE.BASE*2,
    borderWidth: 2,
    borderColor: colors.WHITE,
    backgroundColor:colors.WHITE,
  },
  textStyle: {
    fontSize: size.FONT_SIZES.BUTTON,
    color: colors.BLACK
  }
})
export default CustomButton;