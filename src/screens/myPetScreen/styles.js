import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window')


export const styles = props =>
  StyleSheet.create({
    container:{
      flex:1,
     
    },
    profileText:{
      ...props.Theme.confirmSession.profileText,
      textAlign:'center',
      paddingHorizontal:width*0.08,
      marginTop:18
    },
    mainContanier:{
      flex: 2, 
      flexDirection: 'column'
    },
    subContanier:{
      flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    dayText:{
      ...props.Theme.confirmSession.dayText,
      paddingVertical:2.5
    },
    timeText:{
      ...props.Theme.confirmSession.timeText,
     marginTop:5.5,
     marginBottom:height*0.05
    },
    customButtonContent:{
      width:width * 0.7
    },
    testAudVid:{
      ...props.Theme.confirmSession.testAudVid,
      paddingVertical:3.5
    },
  });
