import React, {useState} from 'react';

import {Text, View, Modal, Linking} from 'react-native';
import colors from '../config/colorProfile';
import CustomButton from '../utils/CustomButton';
import Header from '../utils/Header';

export default function TermsAndConditions({navigation}) {
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
            bottom: 0,
            position: 'absolute',
            height: 50,
            width: '100%',
            backgroundColor: colors.ThemeColor1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomButton
            title={'CONFIRM'}
            onPressFunction={props.confirmPress}></CustomButton>
        </View>
      </View>
    </View>
  );
}
