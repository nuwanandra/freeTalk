import React, {useState} from 'react';

import {Text, View, Modal, Linking} from 'react-native';
import colors from '../config/colorProfile';
import CustomButton from './CustomButton';

const PrivacyPolicy = props => {
  return (
    <Modal visible={props.modalVisible} transparent>
      <View
        id="modalView"
        style={{
          flex: 1,
          backgroundColor: colors.transparentBackgroundColor1,
          justifyContent: 'center',
          alignItems: 'center',
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

          <View id="warnContent1" style={{left: 20}}>
            <Text>-Hateful and offended speech is strictly prohibited.</Text>
            <Text>-Do not share personal information.</Text>

            <View
              id="linking"
              style={{flexDirection: 'row', flexWrap: 'wrap', top: 60}}>
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
    </Modal>
  );
};

export default PrivacyPolicy;
