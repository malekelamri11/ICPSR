import React, {useEffect} from 'react';
import { View, Image, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'

const Welcome = ({navigation}) => {
   

  const handleRegistration = () => {
    Linking.openURL('mailto:sumprogram@icpsr.umich.edu')
  }
  return(
    <View style={styles.container}>
    <ScrollView>
        <View style= {styles.scroll}>
  <Image source={require('./assets/logo.png')} style={styles.logo} />
  <Text style={styles.heading}>Welcome to the 2023 ICPSR Summer Program!</Text>
  <Text style={styles.paragraph}>
    We are delighted that you are able to participate in the Summer Program, whether in Ann Arbor or at one of the remote locations with which we cosponsor short workshops. We are striving to create a stimulating and enjoyable environment by combining in-person and remote instruction. Along with workshops and lectures, we continue to try to provide new and different opportunities for professional networking and making new friends. As part of this, we want to do everything we can to make sure your participation is a smooth, productive, and happy experience!
    As you will see, the Summer Program comprises an extremely diverse set of people. We're very proud of this diversity and consider it an important strength of the program. We ask (and expect) everyone to respect the diversity and individual rights of all other members of the Summer Program community. If, at any time during your participation in the Summer Program, you feel that this respect has been violated, then please let us know immediately. In this handbook you can find further information, including the University of Michigan's official diversity statement and the names of several individuals you can contact about incidents involving problematic behaviour.
    Once again, many thanks for participating in the 2023 ICPSR Summer Program! If you have any questions, need additional assistance, or would just like to talk, please do not hesitate to contact me or any of the other Summer Program staff members. You can also contact all staff at <Text style={styles.underlined} onPress={handleRegistration}>sumprog@icpsr.umich.edu.</Text> We want you to have a great time here at the "Summer Camp for Social Scientists"!
    {'\n'}Robert Franzese
    {'\n'}Director, ICPSR Summer Program
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


  },
  scroll: {
    paddingHorizontal: '5%',
    marginBottom: '50%'
  },
  logo: {
   
    alignSelf: 'center',
    marginTop: '10%',
    width: 240,
    height: 50,
    marginBottom: '15%',
   
  },
  
  heading: {
    fontSize: 24,
    fontFamily: 'AHBold',
    marginBottom: '8%',
    color: '#313131'
  },
  underlined : {
    fontFamily: 'AHRegular',
    color: '#115BFB',
    textDecorationLine: 'underline'

  },
  paragraph: {
    fontSize: 16,
    fontFamily: 'AHRegular',
    textAlign: 'justify',
  },
});

export default Welcome;