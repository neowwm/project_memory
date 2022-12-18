import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {themeColor} from './Color';

export default function AllSelectAndRemoveButtons({
  onAllSelectHandler,
  onAllRemoveHandler,
  isAllDone,
  onAllCancelHandler,
}) {
  return (
    <View style={styles.block}>
      {isAllDone ? (
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: themeColor.allCancelButtonColor},
          ]}
          onPress={onAllCancelHandler}>
          <Text style={styles.text}>전체해제</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={onAllSelectHandler}>
          <Text style={styles.text}>전체선택</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: themeColor.allRemoveButtonColor},
        ]}
        onPress={onAllRemoveHandler}>
        <Text style={styles.text}>선택삭제</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
    backgroundColor: themeColor.allSelectButtonColor,
    margin: 10,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 20, fontFamily: 'Puradak Gentle Gothic', color: 'white'},
});
