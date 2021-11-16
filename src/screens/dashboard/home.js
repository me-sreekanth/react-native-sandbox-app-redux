import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import ProgressDialog from '../../components/ProgressDialog';

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);

  // const getData = async () => {
  //   try {
  //     //   const value = await AsyncStorage.getItem('email')
  //     //   if(value !== null) {
  //     // value previously stored
  //     navigation.replace('home');
  //     //   } else {
  //     //     navigation.replace("login")
  //     //   }
  //   } catch (e) {
  //     // error reading value
  //     navigation.replace('home');
  //   }
  // };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      console.log('isLoading', isLoading);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ProgressDialog visible={isLoading} />
      <ImageBackground
        source={require('../../../assets/background.png')}
        resizeMode="cover"
        style={styles.splash_bg}>
        <View style={styles.header}>
          {/* <Animatable.Image
            animation="bounceIn"
            duration={1500}
            source={require('../../../assets/logo.png')}
            resizeMode="stretch"
          /> */}

          <Text style={styles.logo_title}>Home Page</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.site_url_text}></Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  splash_bg: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#009387',
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  logo_title: {
    fontWeight: 'bold',
    color: '#05375a',
    fontSize: 30,
    marginTop: 20,
  },
  error_text: {
    color: '#05375a',
    fontSize: 20,
  },

  site_url_text: {
    alignItems: 'baseline',
  },
  header: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
