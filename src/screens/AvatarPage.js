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
  FlatList,
  Image,
} from 'react-native';

import colors from '../config/colorProfile';
import CustomButton from '../utils/CustomButton';
import Header from '../utils/Header';
//import IconList from '../utils/IconList';
let gender;
export default function AvatarPage({navigation, route}) {
  useEffect(() => {
    getData();
  }, []);

  const [maleImages, setMaleImages] = useState([
    {name: require('../assets/avatar/male/1.png')},
    {name: require('../assets/avatar/male/2.png')},
    {name: require('../assets/avatar/male/3.png')},
    {name: require('../assets/avatar/male/4.png')},
    {name: require('../assets/avatar/male/5.png')},
    {name: require('../assets/avatar/female/3.png')},
    {name: require('../assets/avatar/female/4.png')},
    {name: require('../assets/avatar/female/5.png')},
  ]);

  const [femaleImages, setFemaleImages] = useState([
    {name: require('../assets/avatar/female/1.png')},
    {name: require('../assets/avatar/female/2.png')},
    {name: require('../assets/avatar/female/3.png')},
    {name: require('../assets/avatar/female/4.png')},
    {name: require('../assets/avatar/female/5.png')},
  ]);

  //const [images, setImages] = useState([]);

  const [avatar, setAvatar] = useState(0);

  const getData = async () => {
    //Alert.alert('settings page:getData');
    try {
      await AsyncStorage.getItem('userData').then(val => {
        if (val === null || val === '') {
          //Alert.alert('navigate Settings');
          navigation.navigate('Settings');
        } else {
          //Alert.alert(val);
          console.log('1: ' + val);
          let user = JSON.parse(val);
          //setGender(user.gender);

          if (user.gender === 'male') {
            //setFolderPath('../assets/avatar/male');
            //setGender('male');
            //setImages(maleImages);
            imagesArray = maleImages;
            gender = 'male';
            console.log(
              '2: copy items to male Array ' + imagesArray.length.toString(),
            );
            //setAvatar(images[0].name);
          } else if (user.gender === 'female') {
            //setFolderPath('../assets/avatar/female');
            //setGender('female');
            //setImages(femaleImages);
            imagesArray = femaleImages;
            gender = 'female';
            console.log(
              '2: copy items to female Array ' + images.length.toString(),
            );
            //setAvatar(images[0].name);
          } else {
            r;
            //setFolderPath('../assets/avatar/empty');
            //setGender('');
            //setImages([]);
            imagesArray = [];
            console.log('2: no gender');
          }

          console.log('images item count: ' + imagesArray.length.toString());
          //Alert.alert(user.avatar.toString());
          if (user.avatar > 0) {
            //Alert.alert(user.avatar.toString());
            setAvatar(user.avatar);
          } else {
            //console.log(images[0].name);
            setAvatar(imagesArray[0].name);
          }
          //Alert.alert(images[0].name.toString());
          Alert.alert(gender);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <Text> Your Avatar: {gender}</Text>
      <Image style={{width: 100, height: 100}} source={avatar}></Image>

      <Text> Select Your Avatar: </Text>
      <FlatList
        numColumns={7}
        keyExtractor={(item, index) => index.toString()}
        data={gender === 'male' ? maleImages : femaleImages}
        renderItem={({item, index}) => (
          <View>
            <Text>
              Name: {item.name} gender: {gender}
            </Text>

            <TouchableOpacity
              onPress={() => {
                setAvatar(item.name);
                //Alert.alert('Avatar changed.');
              }}>
              <Image
                key={index}
                style={{width: 100, height: 100}}
                source={item.name}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
