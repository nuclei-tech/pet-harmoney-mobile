import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window')


export const styles = props =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical:10
    },
    profileTextStyle:{
      ...props.Theme.myCard.profileTextStyle,
      paddingVertical:10,
      marginBottom:19
    },
    subTotalText:{
      ...props.Theme.myCard.subTotalText,
    },
    subPriceText:{
      ...props.Theme.myCard.subPriceText,
    },
    customButtonStyle:{
     paddingTop:4.5,
     paddingBottom:4.5
    },
    customTextStyle:{
      ...props.Theme.myCard.customTextStyle,
    },
    flexMain:{ 
      flex: 2,
      marginTop:height*0.03
    },
    flexMainTop:{ 
      flex: 1.6,
      justifyContent:'space-between' 
    },
    flexMainBottom:{
      flex:0.4
    },
    flexTopProfile:{ 
      flex: 0.4,
      justifyContent:'center',
      alignItems:'center' 
    },
    flexTopCard:{ 
      flex: 0.8,
      minHeight:100 
    },
    flexTopButtonMain:{ 
      flex: 0.3,
      flexDirection:'row',
      alignItems:'center',
      marginTop:50 
    },
    flexSubButton:{
      flex:0.6
    },
    flexBottomMain:{ 
      flex: 0.4 
    },

    //my card 
    flexTopCardOrder:{
      flex: 0.6,
    },
    flexTopButtonMainOrder:{
      flex: 0.6,
    },
    flexMainTopOrder:{
      flex: 1.85
    }, 
    flexBottomMainOrder:{
      flex: 0.35,
    },
    flexTopProfileOrder:{ 
      flex: 0.4,
      justifyContent:'center',
      alignItems:'center' 
    },
    orderText:{
      ...props.Theme.myCard.orderText,
      marginBottom:10
    }
  });
