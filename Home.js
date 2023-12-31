import React, {useEffect} from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import BottomNavigation from './BottomNavigation';
import { Dimensions } from 'react-native';
import * as Font from 'expo-font';


const HomeScreen = ({navigation}) => {
  const windowDimensions = Dimensions.get('window');
  const screenWidth = windowDimensions.width;
  const screenHeight = windowDimensions.height;
  const calculateSpacing = () => {
  // Define your spacing logic here
  // Example: Divide the screen width by a factor to get the spacing
  const spacingFactor = 10;
  const spacing = screenWidth / spacingFactor;
  return spacing;
  };
 
  const spacing = calculateSpacing();
    const handleEvents = () => {
        navigation.navigate('Events')
    }
    const handleAnnouncement = () => {
        navigation.navigate('Announcements')
    }
    const handleResources = () => {
        navigation.navigate('Resources')
    }
    const handleClasses = () => {
      navigation.navigate('Classes')

    }
    const handlePicnics = () => {
      navigation.navigate('Picnics')
    }
    const handleBlacklock = () => {
      navigation.navigate('Blacklock')
    }

    const handleLunch = () => {
      navigation.navigate('Lunch')
    }
    const handleCoffee = () => {
      navigation.navigate('Coffee')
    }
    const renderFirstSliderItem = ({item}) => {
      const handleResourcePress1 = () => {
        navigation.navigate(item.nav)
      }
      const handleResourcePress2 = () => {
        Linking.openURL(item.url)
      }
        return (
          <TouchableOpacity onPress={item.id === '2' ? handleResourcePress1 : handleResourcePress2}>
            <View style={styles.sliderItemOne}>
                <Text style={styles.sliderText}>{item.name}</Text>
            </View>
            </TouchableOpacity>
        )
    }
    const renderSecondSliderItem = ({item}) => {
      const handleEventPress = () => {
      const data= {
            id : item.id,
            name : item.name,
            date : item.date,
            img : item.img,
            description : item.description,
            location : item.location,
            url : item.url,
            location2 : item.location2
        }
        navigation.navigate('SummerFest', {data} )
      }
        return (
          <TouchableOpacity onPress={item.id === '1'   ? handleLunch: handleEventPress && item.id === '2'   ? handleCoffee : handleEventPress  && item.id === '3'   ? handlePicnics: handleEventPress && item.id === '4'   ? handleBlacklock: handleEventPress  }  >
                          
            <View style={styles.sliderItemTwo}>              
                <Text style={styles.sliderText}>{item.name}</Text>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}> {item.date}</Text>
                </View>              
            </View>
            </TouchableOpacity>



        )        
    }
    
    const data = [
    { id: '1', title: 'First in-person workshops', subtitle: 'Monday, June 5, 2023' },
    { id: '2', title: 'First 3-week session', subtitle: 'Monday, June 18, 2023' },
    { id: '3', title: 'First picnic', subtitle: 'Saturday, July 1, 2023' },
    { id: '4', title: 'Intersession workshops, blalocks and events', subtitle: 'Monday, July 10, 2023' },
    { id: '5', title: 'Second 3-week session', subtitle: 'Monday, July 17, 2023' },
    { id: '6', title: 'Second picnic', subtitle: 'Saturday, July 29, 2023' },
  ];
  return (
    <View style={styles.container}>
      <ScrollView >
        <View style= {styles.scrollview}>
          <View style= {styles.menuLogoContainer}>
            <TouchableOpacity onPress={handleResources}>
        <Entypo name="menu" size={45} color="#115BFB" style={styles.menuIcon} />
        </TouchableOpacity>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>
      <TouchableOpacity  style={styles.button} onPress={handleAnnouncement}>
        {/* <Image source={require('./assets/yellfla.png')} style={styles.flag} /> */}
        <Image source={require('./assets/whiteAnnouncement.png')} style={styles.icon} />
        {/* <MaterialIcons name="volume-up" size={24} color="white" style={styles.icon} /> */}
        <Text style={styles.buttonText}>Announcements</Text>
        <Entypo name="chevron-right" size={30} color="white" style={styles.arrowIcon} />        
      </TouchableOpacity>
      <View style= {styles.ClassesContainer}>
      <Text style={styles.classesText}> Upcoming Classes</Text>
          <TouchableOpacity onPress={handleClasses}>
            <View>
          <Text style={styles.seeAllText}>See All</Text>
          </View>
          </TouchableOpacity>
      </View>
      <Text style={styles.noClasses}> No upcoming classes</Text>
      {/* here */}
      <View style={styles.eventsContainer}>
        <Text style={styles.eventsText}>Events</Text>
        <TouchableOpacity onPress={handleEvents}>
            <View>
          <Text style={styles.seeAllText}>See All</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Carousel
      
    //   data = {['Summer festival', 'Juneteenth', 'Eid-al-Adha','First picnic', 'Art fair', 'Second picnic']}
    data = {[
    { id: '1', name: 'Tidy tuesdays lunch meetup', date: 'Tuesdays noon', url:'#',  location:'location', location2:'', img:'./assets/events/juneteenth.png', description: 'description' },    
    { id: '2', name: 'Coffee and donuts', date: 'Wendesdays mornings', url:'#', location:'location', location2: '', img:'./assets/events/summerFest.png', description: 'description'   },
    { id: '3', name: 'Picnics', date: 'July 1 and July 29', url:'#', location:'location', location2:'', img:'./assets/events/summerFest.png', description: 'description' },    
    { id: '4', name: 'Blalock', date: 'July 3 - July 12', location:'', location2:'', url:'', img:'', description: ' ' }]}
      renderItem={renderSecondSliderItem}
      sliderWidth={400}
      itemWidth={200}
      layout='default'
      />
      <View style={styles.resourcesContainer}>
        <Text style={styles.resourcesText}>Resources</Text>
        <TouchableOpacity onPress={handleResources}>
            <View>
          <Text style={styles.seeAllText}>See All</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Carousel
      data = {[
         {id: '1', name: 'Bus schedule', url: 'https://ltp.umich.edu/campus-transit/routes-and-schedules/', nav: 'BusSchedule'},
         {id: '2', name: 'University acronyms', url: 'https://www.google.com/', nav: 'BuildingsAcronyms'},
         {id: '3', name: 'Parking information', url: 'https://ltp.umich.edu/parking/permit-parking/', nav: 'Parking' },
         {id: '4', name: 'Mental health resources', url: 'https://uhs.umich.edu/stressresources', nav: 'MentalHealth' },
        ]}
      renderItem={renderFirstSliderItem}
      sliderWidth={400}
      itemWidth={200}
      layout='default'
      />
      </View>
      <View style={styles.itineraryContainer}>
      <Text style={styles.itineraryHeader}>Summer 2023 program itinerary</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itineraryItemContainer}>
            <Text style={styles.itineraryTitle}>{item.title}</Text>
            <Text style={styles.itineraryDate}>{item.subtitle}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={styles.itinerarySeparator} />
        )}
      />
    </View>
      </ScrollView>
      <BottomNavigation navigation={navigation}/>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuLogoContainer: {
    marginTop : '20%',
    flexDirection : 'row'
  },
  menuIcon:{
    marginRight: '10%',
    
  },
  scrollview : {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'AHRegular',
    flexDirection : 'row'
  },
  logo: {
    
    width: '60%',
    height: '90%'
  },
  noClasses: {    
    marginBottom : '5%',
    fontSize : 16,
  },
  button: {
    margin : '7%',
    marginTop: '12%',
    backgroundColor: '#115BFB',
    flexDirection: 'row',
    borderRadius: 45,
    paddingVertical: '3%',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  icon: {
    marginRight: '3%',
    width: '10%',
    height: '90%'
  },
  
  buttonText: {
    color: 'white',
    fontSize: 16,
    flex: 1,
    fontFamily: 'AHRegular',
    textAlign: 'left',
    marginLeft: '5%'
  },
  arrowIcon: {
    marginRight : '3%'
  },
  resourcesContainer: {    

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    width: '100%',
  },
  eventsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    width: '100%',
  },
  ClassesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    width: '100%',
  },
  
  resourcesText: {
    margin: '5%',
    fontSize: 20,
    fontFamily: 'AHBold',
    marginRight: 'auto',
  },
  eventsText: {
    marginTop: 0,
    margin: '5%',
    fontSize: 20,
    fontFamily: 'AHBold',
    marginRight: 'auto',
  },
  classesText: {
    margin: '5%',
    fontSize: 20,
    fontFamily: 'AHBold',
    marginRight: 'auto',
  },
  seeAllText: {
    color: '#115BFB',
    fontSize: 16,
    fontFamily: 'AHItalic'
  },
  sliderItemOne: {
    height: 150,
    width: 200,
    backgroundColor: '#115BFB',
    borderRadius: 45,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },
  sliderItemTwo: {
    height: 150,
    width: 200,
    backgroundColor: '#115BFB',
    borderRadius: 45,
    padding: 20,
    marginBottom: 40,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'AHBold'
  },
  dateContainer: {
    position: 'absolute',
    top: 150,
    backgroundColor: 'white',
    borderRadius: 45,
    padding: 5,
    marginBottom: '5%',
    width: 175,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  dateText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'AHRegular',
  
  },
  footer: {
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingHorizontal : '5%',
    alignItems: 'center',
    position : 'absolute',
    bottom : 0,
    borderRadius : 45,
    width: '100%',
    backgroundColor: '#0E3880' 
  },
  itineraryContainer: {
    paddingHorizontal: '8%',
    marginBottom: '50%'

  },
  itineraryHeader: {
    fontSize: 20,
    fontFamily:'AHBold',
    marginBottom: '3%'
  },
  itineraryItemContainer: {},
  itineraryTitle: {
    fontSize: 12,
    fontFamily: 'AHRegular'
  },
  itineraryDate: {
    color: '#D9D9D9',
    fontSize: 12,
    fontFamily: 'AHRegular'
  },
  itinerarySeparator: {
    height: 1,
    backgroundColor: '#D9D9D9',
    marginVertical: '3%',
  },
});

export default HomeScreen;
