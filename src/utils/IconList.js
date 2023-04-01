import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
  Alert,
  StyleSheet,
} from 'react-native';
import {useState} from 'react';

const data = [{value: '1.jpg'}, {value: '2.jpg'}, {value: '3.jpg'}];

export default function IconList({gender, onSelect}) {
  const [userOption, setUserOption] = useState(null);
  //const [iconFolder, setIconFolder] = useState('');

  // if (gender === 'male') {
  //   setIconFolder('male');
  // } else {
  //   setIconFolder('female');
  // }

  //Alert.alert(iconFolder);

  return (
    <View style={{flexDirection: 'column'}}>
      {data.map(item => {
        return (
          /*Change the 'onPress' handler here */
          // <TouchableOpacity onPress={() => setUserOption(item.value)}>
          //   <Text style={{padding: 10}}> {item.value}</Text>
          //   <Image
          //     style={{width: 100, height: 100}}
          //     source={
          //       gender === 'male'
          //         ? require('../assets/avatar/male/1.jpg')
          //         : gender === 'female'
          //         ? require('../assets/avatar/female/1.jpg')
          //         : require('../assets/avatar/empty/1.jpg')
          //     }
          //   />
          // </TouchableOpacity>

          <Pressable
            style={
              item.value === userOption ? styles.selected : styles.unselected
            }
            onPress={() => selectHandler(item.value)}>
            <Text style={styles.option}> {item.value}</Text>
          </Pressable>
        );
      })}
      <Text> User option: {userOption}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  option: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  unselected: {
    backgroundColor: 'red',
    margin: 5,
  },
  selected: {
    backgroundColor: 'blue',
    margin: 6,
    padding: 10,
    borderRadius: 10,
  },
});
