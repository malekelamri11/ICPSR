import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native';
import * as Font from 'expo-font'
import BottomNavigation from './BottomNavigation';

const AddDrop = ({navigation}) => {
    
  const handleAddDrop = () => {
    Linking.openURL('https://docs.google.com/forms/d/1LVRKFg3oLFoV9Pm5F9P8aEOzH6Ux01HvR1-Y6IQ7XEM/edit')
  }
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style= {styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Add Drop classes</Text>
        <Text style={styles.paragraph}>
        You must fill out the following<Text style={styles.linkText}  onPress={handleAddDrop}> add/drop form</Text> to add or drop courses from your Second Session schedule. You will be unable to add or drop courses through the Summer Program registration portal.
        {'\n'}The Second Session add/drop deadline is Thursday, July 21, 11:59 p.m. EDT. After Thursday, July 21, no additional course changes will be allowed.
        {'\n'}A reminder that you may register for up to four (4) Courses (plus unlimited Lectures) during the Second Session. Summer Program staff are unable to add you to more than four Courses during the Second Session.
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
