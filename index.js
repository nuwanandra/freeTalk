/**
 * @format
 */

import {AppRegistry, Alert} from 'react-native';
//import App from './App';
//import App from './CustomButton';
import App from './Header';

import {name as appName} from './app.json';

// const GreetingProps = {
//   title: 'dffdfdfdfdf',

//   onPressFunction: function () {
//     Alert.alert('aaaaa');
//   },
// };

// AppRegistry.registerComponent(appName, () => CustomButton);
AppRegistry.registerComponent(appName, () => App);
