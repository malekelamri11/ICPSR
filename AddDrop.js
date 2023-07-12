import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native';
import * as Font from 'expo-font'
import BottomNavigation from './BottomNavigation';

const AddDrop = ({navigation}) => {
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
  const handleAddDrop = () => {
    Linking.openURL('https://www.google.com/maps/place/Burns+Park+Warming+Hut/@42.2664407,-83.7273434,15z/data=!4m2!3m1!1s0x0:0x1f86bb587ae224f5?sa=X&ved=2ahUKEwih_8K-j-v_AhWkj4kEHYifDRQQ_BJ6BAhZEAA&ved=2ahUKEwih_8K-j-v_AhWkj4kEHYifDRQQ_BJ6BAhdEAc')
  }
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style= {styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Add Drop classes</Text>
        <Text style={styles.paragraph}>
        If you don't already, you should have access to all of your classes you requested in the<Text style={styles.linkText}  onPress={handleAddDrop}> add/drop form.</Text> Please let us know if you're still waiting on a change before July 21! 
        {'\n'}As a reminder, you will have access to your classes, including the recorded lectures, through December 31.
        {'\n'}If you're taking a Course for a grade, work must be completed by the end of the Session! It is not required that you take any Course for a grade, you can audit any of them as you like and follow along at your own pace.
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

export default AddDrop;
