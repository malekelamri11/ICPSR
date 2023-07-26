import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native';
import * as Font from 'expo-font'
import BottomNavigation from './BottomNavigation';

const Lunch = ({navigation}) => {
    
  const handleLunchLocation = () => {
    Linking.openURL('https://www.google.com/maps/place/Helen+Newberry+Residence,+432+S+State+St,+Ann+Arbor,+MI+48109/@42.2769217,-83.7442561,17z/data=!3m1!4b1!4m6!3m5!1s0x883cae38aec5b077:0xa0470f57204df141!8m2!3d42.2769217!4d-83.7416758!16s%2Fg%2F1yl495hnr?entry=ttu')
  }
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style= {styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Tidy Tuesdays Lunch Meetup</Text>
      <Text style={styles.paragraph}>Every Tuesday from noon-1:00 pm EST, the R4DS team posts a raw dataset, a chart or article related to that dataset, and invites interested R users from around the globe to explore the data. The goal of TidyTuesday is to apply your R skills, get feedback, explore other’s work, and connect with the greater #RStats community! As such we encourage everyone of all skills to participate!
      </Text>
      <Text style= {styles.normalText}>{'\u2022'} How to participate in-person:
      <Text style={styles.paragraph}>
     {'\n'}All in-person participants, instructors, and TAs are invited to stop by the back lounge in the Newberry Building on Wednesday mornings for free coffee and donuts.
      </Text> 
   </Text>
   <Text style= {styles.normalText}>{'\u2022'} How to participate virtually: 
      <Text style={styles.paragraph}>
     {'\n'}Virtual participants can join the #coffeechats channel on the Summer Program Slack forum; channel members will be randomly paired on a weekly basis for virtual coffee. Participants in the #coffeechats channel can arrange to meet via Zoom during the scheduled coffee & donuts times listed above, or you can coordinate a different day and time that suits both your schedules.
      </Text> 
   </Text>
    
    < Text style={styles.boldText}>
         Location:<Text style={styles.linkText}  onPress={handleLunchLocation}> Helen Newberry lounge area </Text>
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
    fontFamily: 'AHBold',
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: '10%'
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
    fontFamily: 'AHBold',
    fontSize: 16,
    textAlign: 'justify'
  }
});

export default Lunch;
