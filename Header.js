import React from 'react';
import {Text, View} from 'react-native';
import colors from './colorProfile';

const Header = props => {
  return (
    <View
      id="Header"
      style={{
        backgroundColor: colors.ThemeColor1,
        height: 60,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: colors.ThemeTextColor1,
          fontWeight: 'bold',
          fontSize: 30,
          marginLeft: 60,
        }}>
        free Talk
      </Text>
    </View>
  );
};

export default Header;
