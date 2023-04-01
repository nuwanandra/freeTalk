import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {useState, useEffect, useLayoutEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  Modal,
  TouchableOpacity,
  Pressable,
  TouchableHighlight,
  Linking,
  Alert,
  Settings,
} from 'react-native';

import CustomButton from '../utils/CustomButton';
import colors from '../config/colorProfile';

import TermsAndConditions from './TermsAndConditions';
import Home from './Home';
import SettingsPage from './SettingsPage';
import AvatarPage from './AvatarPage';

//const drawer = createDrawerNavigator();
const drawer = createNativeStackNavigator();

const App = ({navigation, route}) => {
  //const {UserJSON, ItemID} = route.params;

  return (
    <NavigationContainer>
      <drawer.Navigator
        initialRouteName="Terms And Conditions"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.themeColor1,
          },
          headerTintColor: colors.themeTextColor1,
          headerTitleStyle: {
            fontSize: 25,
          },
        }}>
        <drawer.Screen
          name="free Talk"
          component={Home}
          options={{drawerLabel: 'Home'}}
          //initialParams={{params: route.params}}
        />

        <drawer.Screen
          name="Settings"
          component={SettingsPage}
          options={{drawerLabel: 'Settings'}}
          //initialParams={{ItemName: user, ItemID: 1}}
        />
        <drawer.Screen
          name="Avatar"
          component={AvatarPage}
          options={{drawerLabel: 'Avatar'}}
          //initialParams={{ItemName: user, ItemID: 3}}
        />

        <drawer.Screen
          name="Terms And Conditions"
          component={TermsAndConditions}
          options={{drawerLabel: 'Terms And Conditions'}}

          //initialParams={{ItemName: user, ItemID: 4}}
        />

        {/* <drawer.Screen
          name="Terms And Conditions"
          component={TermsAndConditions}
          options={{drawerLabel: 'Terms And Conditions', header: () => null}}
        /> */}
      </drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.backGroundColor1,
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  text: {
    fontSize: 60,
    color: colors.textColor1,
  },
});

export default App;
