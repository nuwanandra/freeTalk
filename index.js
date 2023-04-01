/**
 * @format
 */

import {AppRegistry, Alert} from 'react-native';
import {name as appName} from './app.json';

//import App from './src/screens/TermsAndConditions';
//import App from './src/screens/App';
//import App from './src/screens/Settings';
//import App from './src/screens/App';
//import App from './src/screens/App';

import App from './src/screens/App';

//import App from './src/screens/Example';

// const GreetingProps = {
//   title: 'dffdfdfdfdf',

//   onPressFunction: function () {
//     Alert.alert('aaaaa');
//   },
// };

// AppRegistry.registerComponent(appName, () => CustomButton);
AppRegistry.registerComponent(appName, () => App);
