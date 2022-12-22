import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {themeColor} from './Color';
import SubmitButton from './SubmitButton';

export default function InputBox({onChangeTextHandler, text, onSubmit}) {
  return (
    <View style={styles.block}>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder="할 일을 입력하세요."
          onChangeText={onChangeTextHandler}
          value={text}
          onSubmitEditing={onSubmit}
          returnKeyType="done"
        />
      </View>
      <View style={styles.buttonBox}>
        <SubmitButton onSubmit={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 3,
    flexDirection: 'row',
    backgroundColor: themeColor.headerAndInputColor,
  },
  input: {width: '85%'},
  textInput: {fontSize: 15},
  buttonBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
