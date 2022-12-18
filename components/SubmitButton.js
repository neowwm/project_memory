import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {themeColor} from './Color';

export default function SubmitButton({onSubmit}) {
  return (
    <Pressable style={styles.block} onPress={onSubmit}>
      <Icon name="edit" size={30} color={themeColor.submitPencilColor} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    borderRadius: 10,
    backgroundColor: themeColor.submitColor,
    padding: 5,
    elevation: 8,
  },
});
