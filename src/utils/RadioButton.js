import React from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import {useState} from 'react';

export default function RadioButton({data, onSelect}) {
  const [userOption, setUserOption] = useState(null);

  return (
    <View style={{flexDirection: 'column'}}>
      {data.map(item => {
        return (
          /*Change the 'onPress' handler here */
          <Pressable onPress={() => setUserOption(item.value)}>
            <Text style={{padding: 10}}> {item.value}</Text>
          </Pressable>
        );
      })}
      <Text> User option: {userOption}</Text>
    </View>
  );
}
