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
  Button,
  Platform,
  Modal,
  TouchableOpacity,
  Pressable,
  TouchableHighlight,
  Linking,
  Alert,
  TextInput,
} from 'react-native';

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //document.title = `You clicked ${count} times`;
    //setCount(5);
    //Alert.alert('you clecked ' + count + ' times.');
    //setCount(10);
    getData();
    Alert.alert(user);
  });

  const [user, setUser] = useState('');

  const getData = async () => {
    //Alert.alert('settings page:getData');
    try {
      await AsyncStorage.getItem('userData').then(val => {
        if (val != null && val != '') {
          setUser(val);
          console.log('old: ' + user);
        } else {
          let userOb = {
            userName: '',
            gender: '',
            dateFirstCall: '',
            dateFirstOpen: new Date().toLocaleDateString(),
            avatar: 0,
            level: '',
            language: 'English',
            confirmed: false,
          };

          setUser(JSON.stringify(userOb));
          console.log('new: ' + user);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>
        You clicked {count} times. {user}
      </Text>

      <Button title="Click me" onPress={() => setCount(count + 1)}></Button>
    </View>
  );
}
