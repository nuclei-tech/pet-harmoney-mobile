
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { Button, Icon } from 'react-native-elements';

// Connect redux store.
import { useSelector } from 'react-redux';

const CustomButton = ({ title, onPress, type, color, textColor }) => {
  const { theme } = useSelector(state => state.theme);

  const { buttonStyle, textStyle, buttonContainer,containerStyle } = styles(theme);
  const buttonStyles = buttonStyle;
  const textStyles = textStyle;

  onPressHandle = () =>{
    console.warn('eeee=>>');
  }
  
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
              size={theme.Theme.size.BASE*1.2}
              color={theme.Theme.colors.BLACK}
              type='ant-design'
            />
          }
     />
    </View>

  );
};

const styles =(theme)=> StyleSheet.create({
  buttonContainer: {
    //margin: theme.Theme.size.BASE,
    width:theme.Theme.size.BASE*2.5
  },
  containerStyle:{
    borderRadius: theme.Theme.size.BASE*2,
    backgroundColor:theme.Theme.colors.WHITE,
  },
  buttonStyle: {
    width: theme.Theme.size.BASE*2.5,
    height: theme.Theme.size.BASE*2.5,
    borderRadius: theme.Theme.size.BASE*2,
    borderWidth: 2,
    borderColor: theme.Theme.colors.WHITE,
    backgroundColor:theme.Theme.colors.WHITE,
  },
  textStyle: {
    fontSize:  theme.Theme.size.BASE,
    color: theme.Theme.colors.BLACK
  }
})
export default CustomButton;