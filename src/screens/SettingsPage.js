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

export default function SettingsPage({navigation, route}) {
  useEffect(() => {
    getData();
    //deleteData('');
  }, []);

  //{UserJASON: user, ItemID: 1}
  const {UserJSON, ItemID} = route.params;
  const [UserOb, setUserOb] = useState(JSON.parse(UserJSON));

  const [userName, setUserName] = useState(UserOb.userName);
  const [gender, setGender] = useState(UserOb.gender);
  const [dateFirstCall, setDateFirstCall] = useState(UserOb.dateFirstCall);
  const [dateFirstOpen, setDateFirstOpen] = useState(UserOb.dateFirstOpen);
  const [avatar, setAvatar] = useState(UserOb.avatar);
  const [level, setLevel] = useState(UserOb.level);
  const [language, setLanguage] = useState(UserOb.language);
  const [confirmed, setConfirmed] = useState('true');

  const getData = () => {
    //Alert.alert(level);
    //let userOb = JSON.parse(UserJSON);
    //setUserName();
    //Alert.alert(UserOb.dateFirstOpen);
  };

  const updateData = async (name, value) => {
    //Alert.alert('settings page:updateData');
    if (value.trim().length == 0) {
      console.log(
        'SettingsPage:updateData : Warning!' + {name} + ' is empty or null',
      );
    } else {
      try {
        //const currentDate = new Date();

        let user = {
          [name]: value,
        };

        await AsyncStorage.mergeItem('userData', JSON.stringify(user));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getObjectFromAsyncStorage = () => {
    try {
      AsyncStorage.getItem('userData').then(val => {
        if (val != null && val != '') {
          let userOb = JSON.parse(val);
          //navigation.setParams({UserJSON: val});
          setUserOb(userOb);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSave = () => {
    //setData();
    //updateData('userName', 'amal');
    //deleteData('userData');
    //console.log(confirmed);
    updateData('userName', userName);
    updateData('gender', gender);
    updateData('level', level);
    updateData('language', language);
    updateData('confirmed', confirmed);

    //Get User String from AsyncStorage and update navigation params
    getObjectFromAsyncStorage();
    //console.log(UserJSON);

    Alert.alert('successful', 'Successfully Updated.');
  };

  const goBack = () => {
    navigation.setParams({UserJSON: JSON.stringify(UserOb)});
    navigation.navigate('free Talk', {
      UserJSON: JSON.stringify(UserOb),
      ItemID: 1,
    });
  };

  return (
    <SafeAreaView
      style={{
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        left: 10,
      }}>
      {/* <Header></Header> */}
      <StatusBar hidden={false}></StatusBar>
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
            value="Female"
            status={gender === 'Female' ? 'checked' : 'unchecked'} //if the value of checked is Apple, then select this button
            onPress={() => setGender('Female')} //when pressed, set the value of the checked Hook to 'Apple'
          />
          <Text>Female</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            value="Male"
            status={gender === 'Male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('Male')}
          />
          <Text>Male</Text>
        </View>

        {/* <Text> {dateUserCreated}</Text> */}
      </View>

      <View style={{}}>
        <Text style={{fontSize: 20, paddingTop: 2}}>
          Choose Level in {language}.
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            value="Beginner"
            status={level === 'Beginner' ? 'checked' : 'unchecked'} //if the value of checked is Apple, then select this button
            onPress={() => setLevel('Beginner')} //when pressed, set the value of the checked Hook to 'Apple'
          />
          <Text>Beginner</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            value="Intermediate"
            status={level === 'Intermediate' ? 'checked' : 'unchecked'}
            onPress={() => setLevel('Intermediate')}
          />
          <Text>Intermediate</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            value="Expert"
            status={level === 'Expert' ? 'checked' : 'unchecked'}
            onPress={() => setLevel('Expert')}
          />
          <Text>Expert</Text>
        </View>
      </View>

      <View style={{width: '50%', flexDirection: 'column', paddingTop: 20}}>
        <CustomButton
          title="save"
          onPressFunction={onSave}
          radius={5}></CustomButton>
      </View>

      <View style={{width: '50%', flexDirection: 'column', paddingTop: 20}}>
        <CustomButton
          title="Back"
          onPressFunction={goBack}
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
