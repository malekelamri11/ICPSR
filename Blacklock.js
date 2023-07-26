import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native';
import * as Font from 'expo-font'
import BottomNavigation from './BottomNavigation';

const Blacklock = ({navigation}) => {
    
  const handleBlacklockLocation = () => {
    Linking.openURL('https://www.google.com/maps/place/Burns+Park+Warming+Hut/@42.2664407,-83.7273434,15z/data=!4m2!3m1!1s0x0:0x1f86bb587ae224f5?sa=X&ved=2ahUKEwih_8K-j-v_AhWkj4kEHYifDRQQ_BJ6BAhZEAA&ved=2ahUKEwih_8K-j-v_AhWkj4kEHYifDRQQ_BJ6BAhdEAc')
  }

  const handleRossLocation = () => {
    Linking.openURL('https://www.google.com/maps/place/Ross+School+of+Business/@42.2729691,-83.7378629,15z/data=!4m2!3m1!1s0x0:0xa3fd9a485e608b85?sa=X&ved=2ahUKEwjS5f_bofP_AhWPHjQIHZikBa8Q_BJ6BAhYEAA&ved=2ahUKEwjS5f_bofP_AhWPHjQIHZikBa8Q_BJ6BAhvEAg')
  }
  const handleScheduleLectures = () => {
    Linking.openURL('https://www.icpsr.umich.edu/web/about/cms/4993')
  }
  const handle3JulyZoomLink = () => {
    Linking.openURL('https://umich.zoom.us/webinar/register/WN_31drlmjBSnq8cqpqveExeQ#/registration')
  }
  const handle5JulyZoomLink = () => {
    Linking.openURL('https://umich.zoom.us/webinar/register/WN_o2Q8WECPTEaqqA9hiDmq3w#/registration')
  }
  const handle10JulyZoomLink = () => {
    Linking.openURL('https://umich.zoom.us/webinar/register/WN_U1dcQYrURkG9eU2_g1hx8w#/registration')
  }
  const handle11JulyZoomLink = () => {
    Linking.openURL('https://umich.zoom.us/webinar/register/WN_KDCXWRv6QqeDrW3s6D77mg#/registration')
  }
  const handle12JulyZoomLink = () => {
    Linking.openURL('https://umich.zoom.us/webinar/register/WN_POIogH2ERc-_1rhIDSW5BQ#/registration')
  }
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style= {styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Blalock</Text> 
        <Text style={styles.paragraph}>
         Every summer we hold a series of lectures in honor of Tad Blalock, a distinguished sociologist and a longtime friend of ICPSR. As you may have noticed, our schedule this summer is particularly busy, and for our sake and yours we didn't want to pack 15 extra lectures into the session. But we still have a few!
         The schedule of lectures is<Text style={styles.link}  onPress={handleScheduleLectures}> here </Text>, along with links to register if you're joining via Zoom.
        </Text>
      <Text style= {styles.eventText}>{'\u2022'} July 3, 1-2:00 PM EDT:
        <Text style={styles.paragraph}>
        {'\n'}Two of our instructional staff will present a working paper, "Measuring Changes in Corruption over Time" in-person and online! Those joining via Zoom can<Text style={styles.link}  onPress={handle3JulyZoomLink}> register using this link </Text>, and in-person people can head over to the Robertson Auditorium at the <Text style={styles.link}  onPress={handleRossLocation}>Ross School of Business.</Text>
        </Text>
      </Text>

     <Text style= {styles.eventText}>{'\u2022'} July 5, 5-6:00 PM EDT: 
        <Text style={styles.paragraph}>
        {'\n'}Esther Friedman, Mengyao Hu, and Helen Levy: <Text style={styles.link}  onPress={handle5JulyZoomLink}>"Measuring the Impacts of a Global Pandemic: COVID-19 Data from HRS, NHATS, and PSID"    </Text>
        </Text>
     </Text>

     <Text style= {styles.eventText}>{'\u2022'} July 10: Academic Publishing and Editing: 
        <Text style={styles.paragraph}>
        {'\n'}A roundtable discussion and Q&A with editors from Cambridge University Press; Oxford University Press; University of Michigan Press; American Journal of Political Science; American Journal of Public Health; American Political Science Review; American Sociological Review; and Political Studies Journal   
        You can register via Zoom using this <Text style={styles.link}  onPress={handle10JulyZoomLink}>link.</Text>
                </Text>
        </Text>

        <Text style= {styles.eventText}>{'\u2022'} July 11: What Longitudinal Model Should I Choose? 
        <Text style={styles.paragraph}>
        {'\n'}Ken Bollen presents best practices and real-world results of choosing the right model to illustrate longitudinal data.
        You can register via Zoom using this <Text style={styles.link}  onPress={handle11JulyZoomLink}>link.</Text>
                </Text>
        </Text>

        <Text style= {styles.eventText}>{'\u2022'} July 12: Methods Journal Publishing and Non-Academic Careers in Social Data Analysis
        <Text style={styles.paragraph}>
        {'\n'}Another roundtable discussion featuring editors from American Journal of Sociology; Political Analysis; Political Science Research and Methods; and Sociological Methodology. Then in the second half four social scientists discuss careers outside academia.
        You can register via Zoom using this <Text style={styles.link}  onPress={handle12JulyZoomLink}>link.</Text>
                </Text>
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
  link: {
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
  eventText: {
    alignSelf: 'flex-start',
    fontFamily: 'AHBold',
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: '10%'
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

export default Blacklock;
