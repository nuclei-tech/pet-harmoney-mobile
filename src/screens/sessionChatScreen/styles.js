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
  
    subImageContent:{ 
      alignItems: 'center' 
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
    },




    mainContanierReminders:{
      flex: 2,
      paddingHorizontal:19,
    },

    tableContanier:{ 
      flex: 0.5,
     
    },
    imageContent:{ 
      flex: 1.3, 
      justifyContent: 'center' ,
      marginTop:height * 0.05,
      marginBottom:height * 0.03,
      borderWidth:3,
      borderRadius:20,
      borderColor:props.Theme.colors.WHITE
    },
    chatMainContent:{
      marginHorizontal: 10,
      borderTopColor:props.Theme.colors.WHITE,
      borderTopWidth:0.5,
      borderBottomColor:props.Theme.colors.WHITE,
      borderBottomWidth:0.5,
      marginBottom:20,
      paddingVertical:14,
    },
    chatContent:{
      ...props.Theme.chatSession.chatContent,
      paddingHorizontal:20
    }
  });
