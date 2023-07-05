import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'

const Logo = () => (
  <View style={styles.logoContainer}>
    <Image source={require('./assets/logo.png')} style={styles.logo} />
  </View>
);



const Announcements = ({navigation}) => {
  const loadFonts = async () => {
  await Font.loadAsync({
    'AHBold': require('./fonts/AtkinsonHyperlegible-Bold.ttf'),
    'AHBoldItalic': require('./fonts/AtkinsonHyperlegible-BoldItalic.ttf'),
    'AHItalic': require('./fonts/AtkinsonHyperlegible-Italic.ttf'),
    'AHRegular': require('./fonts/AtkinsonHyperlegible-Regular.ttf'),
  });}
  useEffect(() => {
    loadFonts();
  }, []);
  const handleLinkPress = () => {
    Linking.openURL('https://wolverineaccess.umich.edu/task/all/textbooks')
  }
  const handleWelcome = () => {
    navigation.navigate('WelcomeToProgram')
  }
  const handleCertificates = () => {
    navigation.navigate('Certificates')
  }
  const handlePreparation = () => {
    navigation.navigate('Preparation')
  }
  const handleAddDrop = () => {
    navigation.navigate('AddDrop')
  }
  const handleDesignContext = () => {
    navigation.navigate('DesignContext')
  }
  const handlePicnics =()=> {
    navigation.navigate('Picnics')

  }
  const handlePictures =()=> {
    navigation.navigate('Pictures')

  }
  return (
    <View style={styles.container}>
      <Logo />
      <ScrollView>
      <View style= {styles.scroll}>
          <Text style={styles.title}>Important Announcements</Text>
      <View style={styles.squareContainer}>
    
        <TouchableOpacity style={{ width : '95%'}} onPress={handleWelcome}> 
        <View style={styles.square}>
            <Text style={styles.squareText}>3-Week courses second session starts today!</Text>
             
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={{ width : '95%'}} onPress={handlePreparation}>
        <View style={styles.square}>
            <Text style={styles.squareText}>Preparation</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={{ width : '95%'}} onPress={handleAddDrop}>
        <View style={styles.square}>
            <Text style={styles.squareText}>Add and drop is due</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ width : '95%'}} onPress={handleCertificates}>
        <View style={styles.square}>
            <Text style={styles.squareText}>Certificates</Text>
            
        </View>
        </TouchableOpacity>
         

        <TouchableOpacity style={{ width : '95%'}} onPress={handleDesignContext}>
        <View style={styles.square}>
            <Text style={styles.squareText}>T-Shirt Design Contest</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ width : '95%'}} onPress={handlePicnics}> 
        <View style={styles.square}>
            <Text style={styles.squareText}>Newberry building is closed Saturday, July 30</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ width : '95%'}} onPress={handlePictures}> 
        <View style={styles.square}>
            <Text style={styles.squareText}>Send in your pictures and memories!</Text>
        </View>
        </TouchableOpacity>

       
      </View>
      </View>
      </ScrollView>
      
      <BottomNavigation navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',

  },
  scroll :{
    marginBottom: '30%'
  },
  title: {
    paddingHorizontal: '4%',
    fontSize: 24,
    fontFamily: 'AHBold',
    alignSelf: 'center'
  },
  logoContainer: {
    width: '100%',
    marginTop: '7%',
    alignItems: 'center',
  },
  
  logo: {
   
    width: 240,
    height: 50,
    marginBottom: '15%',
  },
  
  squareContainer: {
    marginTop: "10%",
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom : '0%',
  },
  square: {
    width: '95%',
    padding: '4%',
    paddingHorizontal: '5%',    
    backgroundColor: '#115BFB',
    borderRadius: 45,
    marginBottom: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareText: {
    color: 'white',
    fontSize: 24,
    paddingHorizontal: '2%',
    paddingVertical: '4%',
    fontFamily: 'AHRegular',
    textAlign: 'center',
  },
  squareTextSmall: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'AHRegular',
    paddingVertical: '2%',
    marginBottom: '7%'
}
});

export default Announcements;
