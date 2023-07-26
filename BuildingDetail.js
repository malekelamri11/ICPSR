 import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'

const BuildingDetails = ({route, navigation}) => {
    const {acronym, location, name, url } = route.params;
    
       const handleBuildingLocation = () => {
          Linking.openURL(url)
        }
      ;
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>University buildings acronyms</Text>
      <Text style={styles.boldText}>The building acronym name and location for {acronym} are:</Text>
      <Text style={styles.boldLocation}>Name: <Text style={styles.normalText}> {name}.</Text></Text>
      <Text style={styles.boldLocation}>
        Location:<Text style={styles.linkText} onPress={handleBuildingLocation}> {location}.</Text>
    </Text>
      <BottomNavigation navigation={navigation}/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'

  },
  logo: {
    
    marginTop: '10%',
    width: 240,
    height: 50,
    marginBottom: '15%',
  },
  heading: {
    alignSelf: 'flex-start',
    color: '#313131',
    fontSize: 24,
    fontFamily: 'AHBold',
    marginBottom: '10%',
    paddingHorizontal:'10%',
  },
  linkText: {
    alignSelf: 'flex-start',
    fontFamily: 'AHRegular',
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: '10%',
    color: '#115BFB',
  },
  boldText: {
    alignSelf: 'flex-start',
    fontWeight: 400,
    fontSize: 16,
    paddingHorizontal: '10%',
    marginBottom: '7%',
  },
  boldLocation: {
    alignSelf: 'flex-start',
    fontWeight: 400,
    fontSize: 16,
    fontFamily: 'AHBold',
    paddingHorizontal: '10%',
    marginBottom: '7%',
  },
  normalText: {
    alignSelf: 'flex-start',
    fontFamily: 'AHRegular',

    paddingHorizontal: '10%',
    marginBottom: '1%',
  },
  locationText: {
    alignSelf: 'flex-start',
    fontFamily: 'AHRegular',
    fontSize: 16,
    paddingHorizontal: '10%',
    textAlign: 'justify',
    marginBottom: '1%',
    color: '#115BFB',
  },

});

export default BuildingDetails;
