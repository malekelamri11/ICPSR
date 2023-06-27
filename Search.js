import React, {useState, useEffect} from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import BottomNavigation from './BottomNavigation';

const SearchScreen = ({navigation}) => {
  const data = [
    { id: 1, course: 'course1', day: 'Monday-friday', location: 'Location 1', time: '9am-5pm' },
    { id: 2, course: 'course2', day: 'Monday-friday', location: 'Location 2', time:'10am-4pm' },
    { id: 3, course: 'course3', day: 'Monday-thursday', location: 'Location 3', time: '12pm-6pm' },
  ];
    const [selectedClass, setSelectedClass] = useState('');
    const [data2, setData2] = useState([])

    const fetchData = async () => {
    try {
      const jsonData = require('./assets/data/classSchedule.json')
      setData2(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

    const handleNextPress = () => {
    const selectedItem = data2.find(item => item.Course === selectedClass);
    if (selectedItem) {
      navigation.navigate('CourseDetails', {
        course: selectedItem.Course,
        day: selectedItem.Day,
        location: selectedItem.Location,
        time: selectedItem.Time,
        instructor: selectedItem.Instructor
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
      <Text style={styles.text}>What class are you enrolled in?</Text>
      <View style={styles.pickerContainer}>
      <Picker
        
        selectedValue={selectedClass}
        onValueChange={(value) => setSelectedClass(value)}
        style={styles.picker}
        mode='dropdown'
        
      >
        <Picker.Item label="select a Class..." value="" />
        {data2.map((item) => (
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
    marginTop : '12%',
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 260 ,
    height: 50,
    marginBottom: '20%',
  },
  scroll: {
    alignItems: 'center',
    marginBottom: '50%'
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '10%',
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

export default SearchScreen;