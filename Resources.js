import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, Linking, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'
const Resources = ({navigation}) => {
  
    
  const resourcesData = [
    { id: '1', name: 'Bus schedule', url: 'https://ltp.umich.edu/campus-transit/routes-and-schedules/', nav: 'BusSchedule' },
    { id: '2', name: 'Parking information', url: 'https://ltp.umich.edu/parking/permit-parking/', nav: 'Parking' },
    { id: '3', name: 'Mental health resources', url: 'https://uhs.umich.edu/stressresources', nav: 'MentalHealth' },
    { id: '4', name: 'Interactive campus map', url: 'https://campusinfo.umich.edu/campusmap', nav: 'InteractiveMap' },
    { id: '5', name: 'University acronyms', url: 'https://www.google.com/', nav: 'BuildingsAcronyms' },
    { id: '6', name: 'More resources', url:'https://www.google.com/', nav: 'Compass' },
  ];
  
  const renderResourceItem = ({ item }) => {
    const handlePress1 = () => {
    navigation.navigate(item.nav);
  };
  const handlePress2 = () => {
    Linking.openURL(item.url)
  }
  return(
    <View>
    <View style={styles.resourceItem}>
      <Text style={styles.resourceName}>{item.name}</Text>
      <TouchableOpacity onPress={item.id === '5' || item.id === '6' ? handlePress1 : handlePress2}>
      <Text style={styles.readMore}>Read more</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.separator} />
    </View>
  );}

  return (
    <View style={styles.container}>

      <ScrollView >
        <View style={styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Important resources</Text>
      
      <View style={styles.resourcesList}>
        <FlatList
          data={resourcesData}
          renderItem={renderResourceItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      </View>
      </ScrollView>
      <BottomNavigation navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  scroll: { alignItems: 'center'},
  logo: {
    marginTop: '10%',
    width: 240,
    height: 50,
    marginBottom: '15%',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: '8%',
    alignSelf: 'flex-start',
    paddingHorizontal: '10%'
  },
  resourcesList: {
    marginTop: '3%',
    width: '90%',
    backgroundColor: '#115BFB',
    borderRadius: 40,
    marginBottom: '70%'
  },
  resourceItem: {
    marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '6%',
    paddingHorizontal: '5%',
    paddingVertical: '1.5%',
  },
  resourceName: {
    color: 'white',
    fontSize: 16,

    fontFamily: 'AHBold'  },
  readMore: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'AHItalic'

  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    
  },
});

export default Resources;
