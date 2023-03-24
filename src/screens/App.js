import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//const stack = createDrawerNavigator();
const stack = createNativeStackNavigator();

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
  Settings,
} from 'react-native';

import CustomButton from '../utils/CustomButton';
import colors from '../config/colorProfile';

import TermsAndConditions from './TermsAndConditions';
import Home from './Home';
import SettingsPage from './SettingsPage';

const App = () => {
  // const [modalVisible, setmodalVisible] = useState(true);
  // const confirmPress = () => {
  //   Alert.alert('Confirmed');
  //   setmodalVisible(false);
  // };

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="free Talk"
          component={Home}
          options={{drawerLabel: 'Home'}}
        />
        <stack.Screen
          name="Settings"
          component={SettingsPage}
          options={{drawerLabel: 'Settings'}}
        />
        <stack.Screen
          name="Terms And Conditions"
          component={TermsAndConditions}
          options={{drawerLabel: 'Terms And Conditions'}}
        />
        {/* <stack.Screen
          name="Terms And Conditions"
          component={TermsAndConditions}
          options={{drawerLabel: 'Terms And Conditions', header: () => null}}
        /> */}
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.backGroundColor1,
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  text: {
    fontSize: 60,
    color: colors.textColor1,
  },
});

export default App;
