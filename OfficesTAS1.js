import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import BottomNavigation from './BottomNavigation';
import {Picker} from '@react-native-picker/picker'


const OfficeScreen = ({navigation}) => {
    const [selectedClass, setSelectedClass] = useState('');
    const [data2, setData2] = useState([])
    const fetchData = async () => {
    try {
      const jsonData = require('./assets/data/x.json')
      setData2(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

    const handleNextPress = () => {
    const selectedItem = data2.find(item => item.Id === selectedClass);
    if (selectedItem) {
      navigation.navigate('InstructorDetails', {
        room: selectedItem.Room,
        firstName: selectedItem.FirstName,
        lastName: selectedItem.LastName,
      });
    
    console.log(selectedItem)
    }
  
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.scroll}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Instructors office</Text>
      <Text style={styles.text}>What instructor office you are looking for in the first three-week session?</Text>

     

      <View style={styles.pickerContainer}>
      <Picker
        
        selectedValue={selectedClass}
        onValueChange={(value) => setSelectedClass(value)}
        style={styles.picker}
        mode='dropdown'
        
      >
        <Picker.Item label="select an Instructor..." value="" />
        {data2.map((item) => {
            let fullName = item.FirstName + ' ' + item.LastName
            return (            
          <Picker.Item
            key={item.Id}
            label= {fullName}
            value={item.Id}
            
            
          />
        )})}
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
  text: {
    fontSize: 16,
    paddingHorizontal: '7%',
    fontFamily: 'AHRegular',
    alignSelf: 'flex-start',
    marginBottom: '10%'
  },

  title: {
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'AHBold',
    paddingHorizontal: '7%',
    marginBottom: '5%',
    alignSelf: 'flex-start'
  },
  
  subtitle: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontFamily: 'AHRegular',
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
    width: '95%',
    marginBottom: '5%',

    
  },

});

export default OfficeScreen;