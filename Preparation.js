import React, {useEffect} from 'react';
import { View, Image, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'

const Preparation = ({navigation}) => {
  
  const handle2FA = () => {
    Linking.openURL('https://its.umich.edu/accounts-access/computing-accounts/friend-accounts')
  }
  const handleCanvasAccount = () => {
    Linking.openURL('https://canvas.it.umich.edu/')
  }
  const handleZoom = () => {
    Linking.openURL('https://its.umich.edu/communication/videoconferencing/zoom')
  }
  const handleSoftware =() => {
    Linking.openURL('https://www.r-project.org./')
  }
  const handleHorizon =() => {
    Linking.openURL('https://www.icpsr.umich.edu/VDE/vmware-client-installation.html')
  }
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style= {styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Preparation</Text>
      <Text style= {{marginBottom:'5%', fontSize: 16, fontFamily: 'AHRegular', textAlign: 'justify',}}>
        We strongly urge you prepare prior to the start date of your workshop.</Text>
        <Text style={styles.paragraph} >{'\u2022'}  Set your your UM Friend Account, password and enroll in for DUO two-factor authentication using this<Text style={styles.linkText} onPress={handle2FA}> link.</Text>{'\n'}</Text>
        <Text style={styles.paragraph} >{'\u2022'}  Log in to your Canvas account using this <Text style={styles.linkText} onPress={handleCanvasAccount}>link.</Text> {'\n'}</Text>
        <Text style={styles.paragraph} >{'\u2022'}  Install the Zoom application on your computer using this <Text style={styles.linkText} onPress={handleZoom}>link.</Text>{'\n'}</Text>
        <Text style={styles.paragraph} >{'\u2022'}  Install any additional required software on your computer (Stata, R, etc.) using this <Text style={styles.linkText} onPress={handleSoftware}>link. </Text>{'\n'} </Text>
        <Text style={styles.paragraph} onPress={handleHorizon}>{'\u2022'}  Install the VMware Horizon client if your intend to use the Summer Program Virtual Desktop (optional, consult your instructor) using this <Text style={styles.linkText} onPress={handleHorizon}>link.</Text></Text>

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
  scroll: {
    paddingHorizontal: '5%',
    marginBottom: '50%'
  },
  logo: {
    marginTop: '10%',
    width: 240,
    height: 50,
    marginBottom: '15%',
    alignSelf: 'center',
    
  },
  heading: {
    fontSize: 24,
    fontFamily: 'AHBold',
    marginBottom: '8%',
    color: '#313131'
  },
  linkText: {
    alignSelf: 'flex-start',
    fontFamily: 'AHRegular',
    fontSize: 16,
    textAlign: 'justify',
    color: '#115BFB',
    marginBottom: '7%'
  },
  paragraph: {
    fontSize: 16,
    fontFamily: 'AHRegular',
    textAlign: 'left',
    paddingLeft: '5%',
    color: '#313131'
  },
});

export default Preparation;