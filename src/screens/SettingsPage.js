import AsyncStorage from '@react-native-async-storage/async-storage';
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

import {RadioButton} from 'react-native-paper';
import colors from '../config/colorProfile';
import CustomButton from '../utils/CustomButton';

export default function SettingsPage({navigation}, props) {
  useEffect(() => {
    //deleteData();
    getData();
  }, []);

  const [userName, setUserName] = useState('');
  const [gender, setGender] = useState('');
  const [dateUserCreated, setDateUserCreated] = useState(
    new Date().toLocaleString(),
  );
  const [avatar, setAvatar] = useState('1');
  const [level, setLevel] = useState('beginner');
  const [language, setLanguage] = useState('English');
  const [confirmed, setConfirmed] = useState(true);

  const getData = async () => {
    Alert.alert('settings page:getData');
    try {
      await AsyncStorage.getItem('userData').then(val => {
        if (val != null) {
          let user = JSON.parse(val);

          if (user.dateUserCreated.length > 0) {
            setDateUserCreated(user.dateUserCreated);
          }

          setUserName(user.userName);
          setGender(user.gender);
          setAvatar(user.avatar);
          setLevel(user.level);
          setLanguage(user.language);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    Alert.alert('settings page:setData');
    if (userName.trim().length == 0) {
      Alert.alert('Warning!', 'Insert your user name.');
    } else if (gender.trim().length == 0) {
      Alert.alert('Warning!', 'Select your gender.');
    } else if (avatar.trim().length == 0) {
      Alert.alert('Warning!', 'Select avatar.');
    } else if (level.trim().length == 0) {
      Alert.alert('Warning!', 'Select level.');
    } else {
      try {
        //const currentDate = new Date();

        let user = {
          userName: userName,
          gender: gender,
          dateUserCreated: dateUserCreated,
          avatar: avatar,
          level: level,
          language: language,
          confirmed: confirmed,
        };

        await AsyncStorage.setItem('userData', JSON.stringify(user));

        Alert.alert('Successful', 'Data Saved.');
        navigation.navigate('free Talk');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const updateData = async (name, value) => {
    Alert.alert('settings page:updateData');
    if (value.trim().length == 0) {
      Alert.alert('Warning!', {name} + ' is empty or null');
    } else {
      try {
        //const currentDate = new Date();

        let user = {
          [name]: value,
        };

        await AsyncStorage.mergeItem('userData', JSON.stringify(user));

        Alert.alert('Successful', 'Data Updated.');
        navigation.navigate('free Talk');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteData = async name => {
    try {
      if (name.trim().length > 0) {
        await AsyncStorage.removeItem(name);
      } else {
        await AsyncStorage.clear();
      }

      Alert.alert('Successful', 'AsyncStorage Cleared.');
    } catch (error) {
      console.log(error);
    }
  };

  const onSave = async () => {
    //setData();
    //updateData('userName', 'amal');
    deleteData('userData');
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

        <Text> {dateUserCreated}</Text>
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
