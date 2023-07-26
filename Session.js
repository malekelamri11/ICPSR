import React, {useState, useEffect} from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'

const SearchSession = ({navigation}) => {
 
    const [selectedSession, setSelectedSession] = useState('');
   

  const handleNextPress = () => {
    switch(selectedSession) {
      case 's1':
        navigation.navigate('Search2');
        break
      
      case 'is':
        navigation.navigate('inter');
        break
      case 's2':
        navigation.navigate('Search');
        break
      default:
        return null
    }
    
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.scroll}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
       
      <Text style={styles.title}>Session selection </Text>
      <Text style={styles.text}>What session are you enrolled in?</Text>
     
     
      <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedSession}
        onValueChange={(value) => setSelectedSession(value)}
        style={styles.picker}
        mode='dropdown'
        
      >
         <Picker.Item label="select a Session..." value="" />
        <Picker.Item label = "First 3-week session" value = "s1" />
        <Picker.Item label = "Intersession and Blalocks" value = "is" />
        <Picker.Item label = "Second 3-week session" value = "s2" />
       </Picker>

      </View>
      <TouchableOpacity onPress={handleNextPress}>
        <View style={styles.nextButton}>
        <Text style={styles.buttonText}> Next </Text>
        </View>
      </TouchableOpacity>
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
   logo: {
    marginTop: '10%',
    width: 240,
    height: 50,
    marginBottom: '15%',
  },
  scroll: {
    alignItems: 'center',
    marginBottom: '50%'
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'AHBold',
    paddingHorizontal: '7%',
    marginBottom: '5%',
    alignSelf: 'flex-start'
  },
 
  text: {
    fontSize: 16,
    paddingHorizontal: '7%',
    fontFamily: 'AHRegular',
    alignSelf: 'flex-start',
    marginBottom: '10%'
  },
  nextButton : {  
    width: '100%',
    alignItems : 'center',
    paddingHorizontal: '18%',
    paddingVertical: '1%',
    borderRadius : 20,
    backgroundColor : 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  buttonText:{
    color : '#00274C',
    fontSize: 20,
    fontWeight: 500,
  },
  pickerContainer: {
    borderWidth: 2,
    borderColor: '#2F65A780',
    borderRadius: 20,
    width: '90%',
    marginBottom: '5%',

    
  },
  picker: { 
    width: '100%',
  },
});

export default SearchSession;