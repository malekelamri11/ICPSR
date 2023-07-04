import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native';
import * as Font from 'expo-font'
import BottomNavigation from './BottomNavigation';

const Certificates = ({navigation}) => {
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
  const handleGradeForm = () => {
    Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdD-oLpbK1mtStPsGUUIECHg9C3gfFkcckkyxz3HQCpoAu1Uw/viewform')
  }

  return (
    <View style={styles.container}>
        <ScrollView>
            <View style= {styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Grade letter memorandum and EITM certificates</Text> 
       <Text style={styles.paragraph}>
       If you are interested in a grade letter memorandum and/or EITM certification, please use <Text style={styles.linkText}  onPress={handleGradeForm}>this form</Text> to indicate which Courses you took for a grade and which you would like a memorandum for.
      Grade letter memorandums will be sent in September, and EITM certification will come later in the year, directly from EITM.
      We will automatically generate a participation certificate that lists all of the Courses and Lectures you registered for.     
     </Text>
    </View>
    </ScrollView>
    <BottomNavigation navigation={navigation}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scroll: {
    paddingHorizontal: '7%',
    alignItems: 'center',
    marginBottom: '60%'
  },
  logo: {
    marginTop: '10%',
    width: 240,
    height: 50,
    marginBottom: '15%',
  },
  
  heading: {
    alignSelf: 'flex-start',
    fontSize: 24,
    fontFamily: 'AHBold',
    marginBottom: '10%',
  },
  paragraph: {
    alignSelf: 'flex-start',
    fontFamily: 'AHRegular',
    fontSize: 16,
    textAlign: 'justify',
    color: '#313131',
    marginBottom: '7%'
  },
  linkText: {
    alignSelf: 'flex-start',
    fontFamily: 'AHRegular',
    fontSize: 16,
    textAlign: 'justify',
    color: '#115BFB',
    marginBottom: '7%'
  },

  locationText: {
    alignSelf: 'flex-start',
    fontFamily: 'AHItalic',
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: '10%',
    color: '#115BFB',



  },
  normalText: {
    alignSelf: 'flex-start',
    fontFamily: 'AHRegular',
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: '10%'
  },
  boldText: {
    alignSelf: 'flex-start',
    fontFamily: 'AHBold',
    fontSize: 16,
    textAlign: 'justify'
  }
});

export default Certificates;
