import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import BottomNavigation from './BottomNavigation';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

import * as Font from 'expo-font';

const SummerFest = ({route, navigation}) => {
    const {data} = route.params;
    console.log(data.location2)
    
    let imagePath;
    switch (data.name) {
    case 'Summer Festival':
      imagePath = require('./assets/events/summerFest.png');
      break;
    case 'Juneteenth symposium':
      imagePath = require('./assets/events/juneteenth.png');
      break;
    case 'Art Fair':
      imagePath = require('./assets/events/artFair.png');
      break;
    case 'Pride':
      imagePath = require('./assets/events/pride.png');
      break;
    default:
      imagePath = require('./assets/events/summerFest.png');
  }
    const handleMoreInfo = () => {
      Linking.openURL(data.url)
    }
  return (
    <View style={styles.container}>
      <ScrollView style= { styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Upcoming Events This Summer!</Text>
      <View style={styles.imageContainer} >
      <Image source={imagePath} style={styles.eventImage} />
      </View>
      <Text style={styles.eventName}>{data.name}</Text>
      <Text style={styles.eventDate}>{data.date}</Text>
      <Text style={styles.description}> { data.description}</Text>
      <View style={styles.locationContainer}>
      <Entypo name="location-pin" size={20} color="#000000" style={styles.vector} />
      <Text style={styles.locationText}> {data.location} </Text>
      </View>
      {data.location2 !== '' ? (
        <View style={styles.location2Container}>
        <Image source={require('./assets/Vector.png')} style={styles.vector} />
        <Text style={styles.locationText}> {data.location2} </Text>
        </View>
      ) : (
        null
      )}
      
      
        <TouchableOpacity onPress={handleMoreInfo}>
            <View style={styles.registerButton}>
                <Text style={styles.buttonText}> More info </Text>
            </View>
        </TouchableOpacity>
        </ScrollView >
        <BottomNavigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },


  logo: {
    alignSelf: 'center',
    marginTop: '10%',
    width: 240,
    height: 50,
    marginBottom: '15%',
  },
  
  title: {
    fontSize: 24,
    paddingHorizontal: '7%',
    fontFamily: 'AHBold',
    marginTop: '5%',
    marginBottom: '7%',
    color: "#313131"
  },
  eventImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: '6%',
    borderRadius: 20
  },
  eventName: {
    fontSize: 26,
    fontFamily: 'AHBold',
    marginTop: '7%',
    color: "#313131",
    paddingHorizontal: '7%',
  },
  eventDate: {
    fontSize: 26,
    fontFamily: 'AHBold',
    marginTop: '3%',
    color: "#313131",
    paddingHorizontal: '7%'
  },
  imageContainer: {
    borderRadius: 45
  },
  registerButton: {
    alignSelf: 'flex-end',
    paddingVertical: '5%',
    paddingHorizontal: '10%',    
    width: '50%',
    backgroundColor: "#115BFB",
    borderRadius: 45,
    justifyContent: 'center',
    marginRight: '4%',
    marginTop: '12%',
    marginBottom: '60%'   
},
  buttonText: {
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    fontFamily: 'AHRegular',
    marginTop: '3%',
    textAlign: 'justify',

    paddingHorizontal: '7%',
    color: '#313131'
  },
  locationContainer: {
    paddingVertical: '6%',
    flexDirection : 'row'

  },
  location2Container: {
    paddingBottom: '6%',
    flexDirection : 'row'
  },
  vector: {
    marginTop: '0%',
    marginLeft : '7%',
  },
  locationText: {
    fontSize: 14,
    fontWeight: 600,
    color: '#313131',
    paddingHorizontal : '3%'

  },
});

export default SummerFest;
