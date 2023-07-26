import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native';
import BottomNavigation from './BottomNavigation';

import * as Font from 'expo-font'


const Certificates = ({navigation}) => {
  
  const handleGradeForm = () => {
    Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdD-oLpbK1mtStPsGUUIECHg9C3gfFkcckkyxz3HQCpoAu1Uw/viewform')
  }
  const handleEITMCertification = () => {
    Linking.openURL('https://eitminstitute.org/programs/certificate-program')
  }
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style= {styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style= {styles.boldText}>{'\u2022'} Participation certificates
      <Text style={styles.paragraph}>
     {'\n'}Participation certificates are available for every course and lecture you are registered for. There is no work or attendance requirement, they simply state that you took a class with us.  {'\n'}
      </Text> 
      </Text>

      <Text style= {styles.boldText}>{'\u2022'}EITM certification
      <Text style={styles.paragraph}>
      {'\n'}EITM certification is available for any course, but not lectures. They require that you get at least an A- in the course. Please note that the Summer Program does not send these! We send grades over to EITM, and they will send the certificate after the program is complete.
      Check out this <Text style={styles.linkText} onPress={handleEITMCertification}>link</Text> for more information
       {'\n'}
      </Text> 
      </Text>

      <Text style= {styles.boldText}>{'\u2022'}Grade letter memorandums
      <Text style={styles.paragraph}>
      {'\n'}Grade letter memorandums are available for any course, but not lectures. They require you to complete work in the course, but it's up to you what course appears on your memorandum. We do not assign credit, and we do not transfer credit. We will send the memorandum to anyone you like, even yourself or your department, and it's up to your department to give you credit. We only include the courses you ask for! If you don't want a grade for a class, or you thought you did but changed your mind later, just leave it off the form. {'\n'}  {'\n'}
      </Text> 
      </Text>

     
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
