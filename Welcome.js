import React, {useEffect} from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'

const Welcome = ({navigation}) => {
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
  return(













    
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  scroll: {
    paddingHorizontal: '5%',
    marginBottom: '50%'
  },
  logo: {
    marginTop: '10%',
    alignSelf: 'center',
    width: 242,
    height: 40,
    marginBottom: '12%',
  },
  heading: {
    fontSize: 24,
    fontFamily: 'AHBold',
    marginBottom: '8%',
    color: '#313131'
  },
  paragraph: {
    fontSize: 16,
    fontFamily: 'AHRegular',
    textAlign: 'justify',
  },
});

export default Welcome;