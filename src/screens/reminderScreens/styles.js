import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window')


export const styles = props =>
  StyleSheet.create({
    container:{
      flex:1,
     
    },
    profileText:{
      ...props.Theme.reminderSession.profileText,
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
      ...props.Theme.reminderSession.dayText,
      paddingVertical:2.5
    },
    timeText:{
      ...props.Theme.reminderSession.timeText,
     marginTop:5.5,
     marginBottom:height*0.05
    },
    customButtonContent:{
      width:width * 0.7
    },
    testAudVid:{
      ...props.Theme.reminderSession.testAudVid,
      paddingVertical:3.5
    },

    //remiders screen
    mainContanierReminders:{
      flex: 2,
    },
    subContanierTop:{
      flex: 1.8,
    },
    subContanierOther:{
      flex: 0.3,
    },
    remiderProfileText:{
      ...props.Theme.reminderSession.remiderProfileText,
      marginTop:7,
      paddingVertical:7
    },
    imageContent:{ 
      flex: 0.4, 
      justifyContent: 'center' ,
      paddingTop:height*0.05,
      paddingBottom:height*0.05
    },
    subImageContent:{ 
      alignItems: 'center' 
    },
    tableContanier:{ 
      flex: 0.9,
    },
    reminderAddButton:{ 
      flex: 0.4, 
      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center',
      paddingTop:height*0.04,
      paddingBottom:height*0.03
    },
    reminderButtonLeft:{
      flex:0.9,
      alignItems:'flex-end',
      marginRight:9
    },
    reminderButtonRight:{
      flex:1.1,
      alignItems:'flex-start',
      marginLeft:9
    },
    remindAddContent:{
      ...props.Theme.reminderSession.remindAddContent,
    }
  });
