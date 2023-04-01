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
} from 'react-native';

import colors from '../config/colorProfile';

import CustomButton from '../utils/CustomButton';
import Header from '../utils/Header';

export default function Home({navigation, route}) {
  const {UserJSON, ItemID} = route.params;
  const [UserOb, setUserOb] = useState(JSON.parse(UserJSON));

  const [userName, setUserName] = useState('');

  const gotoSettings = () => {
    //Alert.alert('clicked');
    //setmodalVisible(false);
    //props.navigate('SettingsPage');
    //navigation.navigate('Settings');

    navigation.navigate('Settings', {UserJSON: UserJSON, ItemID: 1});
  };

  // useEffect(() => {
  //   //getData();
  // }, []);

  return (
    <SafeAreaView
      style={
        {
          //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }
      }>
      <StatusBar hidden={false}></StatusBar>
      <Text>Home. Welcome to {userName}</Text>
      <CustomButton
        title="Settings"
        onPressFunction={gotoSettings}></CustomButton>
    </SafeAreaView>
  );
}
