import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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

const drawer = createDrawerNavigator();
//const stack = createNativeStackNavigator();

const App = () => {
  // const [modalVisible, setmodalVisible] = useState(true);
  // const confirmPress = () => {
  //   Alert.alert('Confirmed');
  //   setmodalVisible(false);
  // };

  return (
    <NavigationContainer>
      <drawer.Navigator
        initialRouteName="free Talk"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.themeColor1,
          },
          headerTintColor: colors.themeTextColor1,
          headerTitleStyle: {
            fontSize: 25,
          },
        }}>
        <drawer.Screen
          name="free Talk"
          component={Home}
          options={{drawerLabel: 'Home'}}
        />

        <drawer.Screen
          name="Settings"
          component={SettingsPage}
          options={{drawerLabel: 'Settings'}}
        />

        <drawer.Screen
          name="Terms And Conditions"
          component={TermsAndConditions}
          options={{drawerLabel: 'Terms And Conditions'}}
        />
        {/* <drawer.Screen
          name="Terms And Conditions"
          component={TermsAndConditions}
          options={{drawerLabel: 'Terms And Conditions', header: () => null}}
        /> */}
      </drawer.Navigator>
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
