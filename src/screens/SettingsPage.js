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

export default function SettingsPage({navigation}) {
  //   const [modalVisible, setmodalVisible] = useState(true);
  //   const confirmPress = () => {
  //     Alert.alert('Confirmed');
  //     setmodalVisible(false);
  //   };

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <Header></Header>
      <StatusBar hidden={true}></StatusBar>
      <Text>Settings</Text>
    </SafeAreaView>
  );
}
