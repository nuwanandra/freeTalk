import 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';

import {Text, View, Modal, Linking, Alert} from 'react-native';
import colors from '../config/colorProfile';
import CustomButton from '../utils/CustomButton';

export default function TermsAndConditions({navigation, route}) {
  useEffect(() => {
    getData();
    //deleteData('');
  }, []);

  const [user, setUser] = useState('');
  const [confirmed, setConfirmed] = useState();
  const [userName, setUserName] = useState('');

  const getData = async () => {
    try {
      await AsyncStorage.getItem('userData').then(val => {
        if (val != null && val != '') {
          let userOb = JSON.parse(val);
          setUser(val);
          setUserName(userOb.userName.trim());
        } else {
          let userOb = {
            userName: '',
            gender: '',
            dateFirstCall: '',
            dateFirstOpen: new Date().toLocaleDateString(),
            avatar: 0,
            level: 'Beginner',
            language: 'English',
            confirmed: 'false',
          };

          setUser(JSON.stringify(userOb));
          AsyncStorage.setItem('userData', JSON.stringify(userOb));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async itemName => {
    try {
      if (itemName.trim().length > 0) {
        await AsyncStorage.removeItem(itemName);
      } else {
        await AsyncStorage.clear();
      }

      Alert.alert('Successful', 'AsyncStorage Cleared.');
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async (name, value) => {
    //Alert.alert('settings page:updateData');
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

  const confirmFunction = () => {
    setConfirmed(true);

    if (userName.length > 0) {
      navigation.navigate('free Talk', {UserJSON: user, ItemID: 1});
    } else {
      navigation.navigate('Settings', {UserJSON: user, ItemID: 1});
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.transparentBackgroundColor1,
      }}>
      <View
        id="warnView"
        style={{
          width: 300,
          height: 300,
          backgroundColor: colors.backGroundColor1,
          //borderRadius: 5,
        }}>
        <View
          id="warnTitle"
          style={{
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Warning !</Text>
        </View>

        <View id="warnContent1" style={{alignItems: 'center'}}>
          <Text style={{padding: 3}}>
            -Hateful speech is strictly prohibited.
          </Text>
          <Text style={{padding: 3}}>-Do not offend users.</Text>
          <Text style={{padding: 3}}>-Do not share personal information.</Text>
          {/* <Text style={{padding: 3}}>
            -Suitable for the age grater than 15.
          </Text> */}

          <View
            id="linking"
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              top: 60,
              justifyContent: 'center',
            }}>
            <Text>By continuing you agree to our</Text>
            <Text
              style={{color: 'red'}}
              onPress={() => Linking.openURL('http://google.com')}>
              Terms of Services
            </Text>
            <Text> and </Text>
            <Text
              style={{color: 'red'}}
              onPress={() => Linking.openURL('http://google.com')}>
              Privacy Policy.
            </Text>
          </View>
        </View>

        <View
          id="confirmButton"
          style={{
            bottom: -1,
            position: 'absolute',
            height: 50,
            width: '100%',
            backgroundColor: colors.ThemeColor1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomButton
            title={confirmed === 'false' ? 'CONFIRM' : 'CONFIRMED'}
            //title={'CONFIRM'}
            onPressFunction={confirmFunction}
            radius={0}>
            {' '}
          </CustomButton>
        </View>
      </View>
    </View>
  );
}
