import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window')


export const styles = props =>
  StyleSheet.create({
    container:{
      flex:1
    },
    profileText:{
      ...props.Theme.reminderSession.profileText,
      textAlign:'center',
      marginVertical:21.5
    },
    mainContanier:{
      flex: 2, 
      flexDirection: 'column',
      paddingHorizontal:19
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
      ...props.Theme.rateSession.rateTopText,
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
    subContanier:{
      flex: 0.6, alignItems: 'center', justifyContent: 'center',
      marginTop:0
    },
    subContanierBottom:{
      flex: 1.4, alignItems: 'center', justifyContent: 'flex-start',
      borderWidth:3,
      borderColor:props.Theme.colors.BLUE,
      marginBottom:80,
      marginTop:80,
      backgroundColor:"white",
      borderRadius:20,
      paddingHorizontal:34,
      paddingTop:32,
      paddingBottom:61
    },
    commentText:{
      ...props.Theme.rateSession.commentText,
    }
  });
