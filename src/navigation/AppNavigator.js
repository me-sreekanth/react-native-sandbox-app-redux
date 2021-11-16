import React, { useState } from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from '../screens/splash/SplashScreen';
import HomeScreen from '../screens/dashboard/home';

import Colors from '../constants/Colors';


//import configuratins from JSON
import config from '../utils/config.json';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};

const AppStackNavigator = createStackNavigator();

export const RootNavigator = () => {

  // const hasHomeScreen = config.screens.contains("home");
  const hasHomeScreen = useState(true);

  return (
    <AppStackNavigator.Navigator
      initialRouteName="splash"
      screenOptions={defaultNavOptions}>
      <AppStackNavigator.Screen
        name="splash"
        component={SplashScreen}
        // visibility={config}
        options={{
          headerShown: false,
        }}
      />


        {
          hasHomeScreen &&  <AppStackNavigator.Screen
          name="home"
          component={HomeScreen}
          options={dashBoardScreenOptions}
        />
        }
     
    </AppStackNavigator.Navigator>
  );
};

export const dashBoardScreenOptions = navData => {
  return {
    headerTitle: 'Dashboard',
  };
};

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
