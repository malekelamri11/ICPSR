import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';



const BottomNavigation = ({navigation}) => {
    const handleSupport = () => {
        navigation.navigate('Support')
    }
    const handleSearch = () => {
        navigation.navigate('Search')
    }
    const handleCompass = () => {
        navigation.navigate('BuildingsAcronyms')
    }
    const handleHome = () => {
        navigation.navigate('Home')
    }
    const handleResources = () => {
        navigation.navigate('Resources')
    }
  return (
    <View style={styles.screenContainer}>
        <View style={styles.footer} >
        <TouchableOpacity onPress={handleHome}>
        <Entypo name="home" size={45} color="#FFFFFF" style={styles.menuIcon} />



      </TouchableOpacity>
      <TouchableOpacity onPress={handleCompass}>
      <Entypo name="location-pin" size={45} color="#FFFFFF" style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleResources}>
      <Entypo name="menu" size={45} color="#FFFFFF" style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSupport}>
      <Entypo name="help" size={45} color="#FFFFFF" style={styles.menuIcon} />
      </TouchableOpacity>
      
      
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginRight: '3.5%',
    
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 0,
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingHorizontal : '9%',
    
    alignItems: 'center',
    
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
    backgroundColor: '#020BA9',
    
  },
  support: {
    marginTop: '-5%',
    width: 60,
    height: 60,
    marginBottom: '15%',
  },
  

});
 

export default BottomNavigation;
