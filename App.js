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
} from 'react-native';

import CustomButton from './CustomButton';

import colors from './colorProfile';
//import CustomButton from './CustomButton';

const App = () => {
  const [modalVisible, setmodalVisible] = useState(true);

  const confirmPress = () => {
    Alert.alert('Confirmed');
    setmodalVisible(false);
  };

  return (
    <SafeAreaView style={styles.background}>
      <Modal visible={modalVisible} transparent>
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
                title="CONFIRM"
                onPressFunction={confirmPress}></CustomButton>

              {/* <TouchableOpacity
                style={{width: '100%', alignItems: 'center'}}
                onPress={confirmPress}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: colors.ThemeTextColor1,
                  }}>
                  CONFIRM
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </Modal>

      <StatusBar hidden={true}></StatusBar>
      <Text style={styles.text}>aaaaaaaaaa</Text>
    </SafeAreaView>
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
