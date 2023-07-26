import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'

const CourseDetails = ({route, navigation}) => {
const {course, day, location, time, instructor, url} = route.params;


  const handleClassroomLocation = () => {
    Linking.openURL(url)
  }
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Class Schedule</Text>
      <Text style={styles.regularText}>Class schedule for {course} is as following:</Text>
      <Text style={styles.boldText}>Day:<Text style={styles.regularText}> {day}.</Text></Text>
      <Text style={styles.boldText}>Time:<Text style={styles.regularText}> {time}.</Text></Text>
      <Text style={styles.boldText}>Location:<Text style={styles.linkText} onPress={handleClassroomLocation} > {location}.</Text></Text>
      <Text style={styles.boldText}>Instructor:<Text style={styles.regularText}> Dr. {instructor}.</Text></Text>
      <BottomNavigation navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'

  },
  logo: {
    marginTop: '10%',

    width: 240,
    height: 50,
    marginBottom: '15%',
  },
  heading: {
    alignSelf: 'flex-start',
    paddingHorizontal: '10%',
    color: '#313131',
    fontSize: 24,
    fontFamily: 'AHBold',
    marginBottom: '8%',
    
  },
  boldText: {
    alignSelf: 'flex-start',
    fontWeight: 400,
    fontSize: 16,
    fontFamily: 'AHBold',
    paddingHorizontal: '10%',
    marginBottom: '7%',
  },
  linkText: {
    alignSelf: 'flex-start',
    fontFamily: 'AHRegular',
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: '10%',
    color: '#115BFB',
  },
  regularText: {
    alignSelf: 'flex-start',
    fontFamily: 'AHRegular',
    fontSize: 16,
    paddingHorizontal: '10%',
    marginBottom: '7%',
  },
  normalText: {
    fontFamily: 'AHRegular',
    alignSelf: 'flex-start',
    paddingHorizontal: '10%',
    marginBottom: '1%',
  },
});

export default CourseDetails;
