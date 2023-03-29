import React, {useState, useEffect} from 'react';

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

import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../config/colorProfile';

import CustomButton from '../utils/CustomButton';
import PrivacyPolicy from '../utils/PrivacyPolicy';
import Header from '../utils/Header';
import SettingsPage from './SettingsPage';

export default function Home({navigation}, props) {
  // const [modalVisible, setmodalVisible] = useState(true);

  const [userName, setUserName] = useState('');

  const gotoSettings = () => {
    Alert.alert('clicked');
    //setmodalVisible(false);
    //props.navigate('SettingsPage');
    navigation.navigate('Settings');
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    Alert.alert('home page');
    try {
      await AsyncStorage.getItem('userName').then(val => {
        if (val != null) {
          setUserName(val);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <Header></Header>
      <StatusBar hidden={true}></StatusBar>
      <Text>Home. Welcome to {userName}</Text>
      <CustomButton title="go to" onPressFunction={gotoSettings}></CustomButton>
    </SafeAreaView>
  );
}
