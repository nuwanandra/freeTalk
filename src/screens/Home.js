import React, {useState} from 'react';

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
import PrivacyPolicy from '../utils/PrivacyPolicy';
import Header from '../utils/Header';
import SettingsPage from './SettingsPage';

export default function Home({navigation}) {
  // const [modalVisible, setmodalVisible] = useState(true);

  const gotoSettings = () => {
    Alert.alert('clicked');
    //setmodalVisible(false);
    //props.navigate('SettingsPage');
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <Header></Header>
      <StatusBar hidden={true}></StatusBar>
      <Text>Home</Text>
      <CustomButton title="go to" onPressFunction={gotoSettings}></CustomButton>
    </SafeAreaView>
  );
}
