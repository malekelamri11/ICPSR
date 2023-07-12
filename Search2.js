import React, {useState, useEffect} from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'

const SearchScreen2 = ({navigation}) => {
 
    const [selectedClass, setSelectedClass] = useState('');
    const [data1, setData1] = useState([])
    const loadFonts = async () => {
  await Font.loadAsync({
        'AHBold': require('./fonts/AtkinsonHyperlegible-Bold.ttf'),
        'AHBoldItalic': require('./fonts/AtkinsonHyperlegible-BoldItalic.ttf'),
        'AHItalic': require('./fonts/AtkinsonHyperlegible-Italic.ttf'),
        'AHRegular': require('./fonts/AtkinsonHyperlegible-Regular.ttf'),
      });}

    const fetchData = async () => {
    try {
      const jsonData = require('./assets/data/classScheduleS1.json')
      setData1(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    loadFonts();

    fetchData();
  }, []);

    const handleNextPress = () => {
    const selectedItem = data1.find(item => item.Course === selectedClass);
    if (selectedItem) {
      navigation.navigate('CourseDetails', {
        course: selectedItem.Course,
        day: selectedItem.Day,
        location: selectedItem.Location,
        time: selectedItem.Time,
        instructor: selectedItem.Instructor,
        url: selectedItem.url
      });
    }
    // Handle the "Next" button press
    // console.log('Next button pressed');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.scroll}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
       
      <Text style={styles.title}>Class schedule</Text>
      <Text style={styles.text}>What classes are you enrolled in the first 3-week session?</Text>
      <View style={styles.pickerContainer}>
      <Picker

        selectedValue={selectedClass}
        onValueChange={(value) => setSelectedClass(value)}
        style={styles.picker}
        mode='dropdown'
        
      >
        <Picker.Item label="select a Class..." value="" />
        {data1.map((item) => (
          <Picker.Item
            key={item.Course}
            label={item.Course}
            value={item.Course}
            
            
          />
        ))}
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

export default SearchScreen2;
