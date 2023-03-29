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
  TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {RadioButton} from 'react-native-paper';

import colors from '../config/colorProfile';

import CustomButton from '../utils/CustomButton';
import PrivacyPolicy from '../utils/PrivacyPolicy';
import Header from '../utils/Header';

export default function SettingsPage({navigation}, props) {
  //   const [modalVisible, setmodalVisible] = useState(true);
  //   const confirmPress = () => {
  //     Alert.alert('Confirmed');
  //     setmodalVisible(false);
  //   };

  const [userName, setUserName] = useState('');
  const [gender, setGender] = useState(''); //initial choice
  const [dateUserCreated, setDateUserCreated] = useState('');
  const [avatar, setAvatar] = useState('');
  const [level, setLevel] = useState('');
  const [language, setLanguage] = useState('');

  const onSave = async () => {
    if (userName.trim().length == 0) {
      Alert.alert('Warning!', 'Insert your user name.');
    } else if (gender.trim().length == 0) {
      Alert.alert('Warning!', 'Insert your gender.');
    } else {
      try {
        await AsyncStorage.setItem('userName', userName);

        Alert.alert('Successful', 'Data Saved.');
        navigation.navigate('free Talk');
      } catch (error) {
        console.log(error);
      }
    }
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

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert('Storage successfully cleared!');
    } catch (e) {
      alert('Failed to clear the async storage.');
    }
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        left: 10,
      }}>
      {/* <Header></Header> */}
      <StatusBar hidden={true}></StatusBar>
      <Text style={{fontSize: 20, paddingTop: 5}}>Insert User Name:</Text>
      <TextInput
        id="UserName"
        style={styles.inputBox}
        placeholder="Will be displayed to public"
        value={userName}
        onChangeText={val => setUserName(val)}></TextInput>
      {/* <Text style={{fontSize: 20}}>User Name is {name}</Text> */}

      <View>
        <Text style={{fontSize: 20, paddingTop: 20}}>Choose Your Gender:</Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            value="female"
            status={gender === 'female' ? 'checked' : 'unchecked'} //if the value of checked is Apple, then select this button
            onPress={() => setGender('female')} //when pressed, set the value of the checked Hook to 'Apple'
          />
          <Text>Female</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            value="male"
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('male')}
          />
          <Text>Male</Text>
        </View>

        {/* <Text> {gender}</Text> */}
      </View>

      <View style={{width: '50%', flexDirection: 'column', paddingTop: 20}}>
        <CustomButton
          title="save"
          onPressFunction={onSave}
          radius={5}></CustomButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderColor: colors.textInputBorderColor1,
    width: '80%',
    //left: 50,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    top: 5,
  },
});
