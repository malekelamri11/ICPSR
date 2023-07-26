import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native';
import BottomNavigation from './BottomNavigation';

import * as Font from 'expo-font'


const DesignContext = ({navigation}) => {
    
  const handleGradeForm = () => {
    Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdD-oLpbK1mtStPsGUUIECHg9C3gfFkcckkyxz3HQCpoAu1Uw/viewform')
  }
  const handleEITMCertification = () => {
    Linking.openURL('https://eitminstitute.org/programs/certificate-program')
  }
  const handleTshirtForm = () => {
    Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSf43b45mnRzxBecFtkZIB6xkwNlpOvK5phhJXGC7rFHjdbdCQ/viewform')
  }
  const handlePreviousTshirt = () => {
    Linking.openURL('https://drive.google.com/drive/u/1/folders/1ofWLOj7arIZnwsLHd8sojsKW97avrxGT')
  }
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style= {styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>T-Shirt Design Contest</Text>
       
      <Text style={styles.paragraph}>
        Our yearly T-shirts are designed and voted on by you! You can use this <Text style={styles.linkText}  onPress={handleTshirtForm}>Google Form</Text> to submit your design, and you can see some past shirts <Text style={styles.linkText}  onPress={handleTshirtForm}>here</Text> if you need inspiration.

        {'\n'}We'll hold a vote in mid-August after everyone has had a chance to submit a design, and the shirts will be available for purchase soon after that, shipped right to you!
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

export default DesignContext;
