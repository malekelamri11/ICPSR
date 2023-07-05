import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native';
import * as Font from 'expo-font'
import BottomNavigation from './BottomNavigation';

const Pictures = ({navigation}) => {
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
  const handleProgramScapbook = () => {
    Linking.openURL('https://www.youtube.com/watch?v=bWBkUAvUrs8')
  }
  const handleFormSubmit = () => {
    Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSf-O3i5bOLglnuLsVbwOOc1dfF82jz2Qky50d7LICxbvlhHDw/viewform')
  }
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style= {styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Send in your pictures and memories!</Text>
        <Text style={styles.paragraph}>
        For the past couple of years, we've put together a <Text style={styles.linkText}  onPress={handleProgramScapbook}>Summer Program scrapbook</Text> containing pictures, memories, tweets, or anything else to commemorate the summer. Send in your material and we'll feature it in this year's video! 
        {'\n'}You can use this <Text style={styles.linkText}  onPress={handleFormSubmit}>form</Text> to submit anything you like.
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
    
  }
});

export default Pictures;
