import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'

const SupportScreen = ({navigation}) => {
  const loadFonts = async () => {
  await Font.loadAsync({
    'AHBold': require('./fonts/AtkinsonHyperlegible-Bold.ttf'),
    'AHBoldItalic': require('./fonts/AtkinsonHyperlegible-BoldItalic.ttf'),
    'AHItalic': require('./fonts/AtkinsonHyperlegible-Italic.ttf'),
    'AHRegular': require('./fonts/AtkinsonHyperlegible-Regular.ttf'),
  });}
  useEffect(() => {
    loadFonts();
  }, []);

  const handleTechSupp = () => {
    Linking.openURL('mailto:icpsr-sptechsupp@umich.edu')
  }

  const handleRegistration = () => {
    Linking.openURL('mailto:sumprogram@icpsr.umich.edu')
  }

  const handle911 = () => {
    Linking.openURL(`tel:${911}`)

  }

  const handleonCampusDPSS = () => {
    Linking.openURL(`tel:${7347631131}`)

  }
  const handleUnvierstiyHealthServices = () => {
    Linking.openURL(`tel:${7347648320}`)

  }

  const handleUManonymous = () => {
    Linking.openURL(`tel:${8008631355}`)

  }
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Support</Text>
      <Text style={styles.texthere}>{'\u2022'}   Computing support: <Text style={styles.underlined} onPress={handleTechSupp}  > icpsr-sptechsupp@umich.edu</Text>  </Text>
      
      <Text style={styles.texthere}>{'\u2022'}    Registration questions (add/drop, withdrawal, etc.): <Text style={styles.underlined} onPress={handleRegistration}>sumprog@icpsr.umich.edu </Text></Text>
      <Text style={styles.textEm}>Emergency numbers</Text>
      <Text style={styles.texthere}  onPress={handle911}> Call 911</Text>
      
      <View style= {styles.seperator}></View>
      <Text style={styles.texthere} onPress={handleonCampusDPSS}> On Campus U-M DPSS</Text>
      <Text style={styles.phone}>+1 (734) 763-1131</Text>
      <View style= {styles.seperator}></View>
      <Text style={styles.texthere} onPress={handleUnvierstiyHealthServices}> University Health Services</Text>
      <Text style={styles.phone}>+1 (734) 764-8320</Text>
      <View style= {styles.seperator}></View>
      <Text style={styles.texthere}onPress={handleUManonymous}> U-M’s Anonymous Tip Line</Text>
      <Text style={styles.phone}>+1 (800) 863-1355</Text>
      <BottomNavigation navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  bullet: {
    marginRight: '1%',
    fontSize: 12,
    lineHeight: 16,
    paddingLeft: '10%'
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  logo: {
    marginTop: '10%',
    width: 240,
    height: 50,
    marginBottom: '15%',
    alignSelf : 'center',
     
  },
  text: {
    textAlign : 'left',
    paddingLeft : '10%',
    fontSize: 24,
    fontFamily: 'AHBold',
    marginBottom : '3%',
  },
  textEm: {
    marginTop : '10%',
    textAlign : 'left',
    paddingLeft : '10%',
    fontSize: 24,
    fontFamily: 'AHBold',
    marginBottom : '3%',
  },
  underlined : {
    fontFamily: 'AHRegular',
    color: '#115BFB',
    textDecorationLine: 'underline'

  },
  texthere: {
    textAlign : 'left',
    paddingLeft : '10%',
    fontSize: 16,
    fontFamily: 'AHRegular'
  },
  seperator: {
    borderBottomWidth: 1,
    marginTop: '2%',
    marginBottom: '2%',
    width : '85%',
    alignSelf : 'center',
    borderBottomColor: '#D9D9D9',
    
  },
  phone: {
    color: '#D9D9D9',
    fontSize: 16,
    fontFamily: 'AHRegular',
    paddingLeft: '12%'
  }
});

export default SupportScreen;
