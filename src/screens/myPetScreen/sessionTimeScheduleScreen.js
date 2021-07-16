import React, { useState, useRef } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Dimensions, Button, PermissionsAndroid } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DocumentScanner from "@woonivers/react-native-document-scanner"
import { Layout2, ScheduleTitle, InputField, ProfilePicture } from '../../components'
import { images } from '../../constants';
import { styles } from './styles';

// Connect redux store.
import { useSelector } from 'react-redux';

const {height, width} = Dimensions.get('window')

const SessionTimeConfirmScreen = props => {
    const documentScannerElement = useRef(null)
    const { theme } = useSelector(state => state.theme);
    const { container, layoutContanier, profileText,mainContanier,subContanier,dayText,timeText,customButtonContent,testAudVid } = styles(theme)
    
    const handleOnPictureTaken=()=> {

        console.warn('ccc');
    }

    const capture = () => {
        documentScannerElement.current.capture()
    }

    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "Cool Photo App Camera Permission",
              message:
                "Cool Photo App needs access to your camera " +
                "so you can take awesome pictures.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            documentScannerElement.current.capture()
            console.log("You can use the camera");
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: 50, borderWidth: 2, height: height * 0.6, width: '80%'}}>
      <DocumentScanner
        ref={documentScannerElement}
        style={{height: height * 0.6, width: '80%'}}
        onPictureTaken={(data)=>console.warn('kkkkk',data)}
        onDocumentScanned={()=>console.warn('kkkkk')}
        overlayColor="rgba(255,130,0, 0.7)"
        enableTorch={false}
        quality={0.5}
        detectionCountBeforeCapture={5}
        detectionRefreshRateInMS={50}
      />
      <Button onPress={requestCameraPermission} title={'CAPTURE'} />
    </View>
    //   <View style={container}>
    //         <Layout2
    //             type={'fullScreen'} // {halfScreen, small }
    //             layoutColor={theme.Theme.colors.PURPLE}
    //             backgroundColor={theme.Theme.colors.WHITE}
    //             title={'pet harmony'}
    //             curve={'secondary'}
    //         >
    //             <View flex={1} style={{ alignItems: "center", paddingTop: height * 0.05 }}>

    //               <ScheduleTitle>{"Schedule a virtual session"}</ScheduleTitle>
    //               <Text style={{
    //                 fontFamily: 'Source Sans Pro',
    //                 fontWeight: '300',
    //                 fontSize: 64,
    //                 lineHeight: 76,
    //                 color: 'white',
    //                 marginTop: 40
    //               }}>May 15</Text>
    //               <InputField
    //                 placeholderColor={theme.Theme.colors.WHITE}
    //                 placeholder={'select time'}
    //                 customMainContanier={{borderColor: theme.Theme.colors.WHITE, height: 52, width: 213, marginTop: 20, paddingTop: 0, paddingBottom: 2,}}
    //                 rightImageExist
    //                 editable={false}
    //                 TouchableAndroid={TouchableOpacity}
    //               />
    //             </View>
                    
    //         </Layout2>
    //     </View>
       
    );
};

export default SessionTimeConfirmScreen;
