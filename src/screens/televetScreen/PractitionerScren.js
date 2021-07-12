import React, { useState } from 'react';
import { Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { styles } from './styles';
import { Layout2, Button, ScheduleTitle, PractitionerCard } from '../../components'
import { images, practitioners } from '../../constants'
import { navigate } from '../../navigation/navigation';
// Connect redux store.
import { useSelector } from 'react-redux';
import { he } from 'date-fns/locale';

const { width, height } = Dimensions.get('window');
const PractitionerScren = props => {

  const { theme } = useSelector(state => state.theme);
  const [selectedId, setSelectedId] = useState(null);

  const { container, containee, inputContainer } = styles(props, theme);
  const { btnMrginTop, ListContainer,imageContainer } = customStyles;
  
  const renderItem = ({item}) => {
    return (
      <View>
        <PractitionerCard item={item} />
      </View>
    )
  }
  return (
    <SafeAreaView style={container}>
      <Layout2
        type={'fullScreen'} // {halfScreen, small }
        layoutColor={theme.Theme.colors.PURPLE}
        title={'pet harmony'}
      >
        <View flex={1} style={containee}>

          <ScheduleTitle customTextSyle={{opacity:0.5}}>{"Choose an available practitioner"}</ScheduleTitle>
          <View style={ListContainer}>
            <FlatList
              data={practitioners}
              renderItem={(item)=>renderItem(item)}
              keyExtractor={(practitioner) => practitioner.id}
              extraData={selectedId}
            />
          </View>
        </View>
      </Layout2>
    </SafeAreaView>
  );
};

const customStyles = StyleSheet.create({
  btnMrginTop: {
    marginTop: height * 0.07
  },
  imageContainer: {
    marginTop: height * 0.10
  },
  ListContainer:{
  paddingTop:height*0.02,
  minHeight:458

}
});


export default PractitionerScren;