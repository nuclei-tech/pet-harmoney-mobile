import React,{useState} from 'react'
import { StyleSheet, View,Text } from 'react-native'
import CheckBox from '@react-native-community/checkbox';

import { useSelector } from 'react-redux';

const CheckBoxField = ({ customMainFlex, customBoxFlex, customBoxContentFlex,title,customTextStyle,checkBoxState }, props) => {
    const { theme } = useSelector(state => state.theme);
    const {  mainFlex, boxFlex, boxContentFlex,textStyle } = styles(theme, props)

    const [checkState,setCheckState] = useState(false)

    const handleTerms = () =>{
        setCheckState(!checkState)
        checkBoxState(checkState)
    }

    return (
        <View style={{ ...mainFlex, customMainFlex }}>
            <View style={{ ...boxFlex, ...customBoxFlex }}>
            <CheckBox
                  disabled={false}
                  value={false}
                  boxType="square"
                  onFillColor={theme.Theme.colors.DARK_BLUE}
                  onCheckColor={theme.Theme.colors.GREEN}
                  onTintColor={theme.Theme.colors.GREEN}
                  tintColor={theme.Theme.colors.GREEN}
                  //onValueChange={newValue => setAgreeCheck(newValue)}
                  onChange={handleTerms}
                  style={
                    Platform.OS == 'ios' && {
                      transform: [{scaleX: 0.8}, {scaleY: 0.8}],
                      marginTop:5
                    }
                  }
                />
            </View>
            <View style={{ ...boxContentFlex, ...customBoxContentFlex }}>
                    <Text style={{...textStyle,...customTextStyle}}>{title}</Text>
            </View>
        </View>
    )
}

const styles = (theme, props) => StyleSheet.create({
    mainFlex: {
        flex: 5,
        flexDirection: 'row',
        justifyContent:'center',
        marginLeft:-10
    },
    boxFlex: {
        flex: 0.8,
        alignItems:'center',
        justifyContent:'center'
    },
    boxContentFlex: {
        flex: 4.2,
        justifyContent: 'center',
    },
    textStyle: {
        ...theme.Theme.boxFieldStyle.textStyle,
    },
})

export default CheckBoxField