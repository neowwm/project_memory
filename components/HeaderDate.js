import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {themeColor} from './Color';

export default function HeaderDate() {
  const currTime = new Date();
  const UTC = currTime.getTime() + currTime.getTimezoneOffset() * 60 * 1000;
  const KTC = new Date(UTC + 9 * 60 * 60 * 1000);

  return (
    <>
      <StatusBar
        backgroundColor={themeColor.headerAndInputColor}
        barStyle="light-content"
      />
      <View style={styles.block}>
        <Text style={styles.text}>{`${KTC.getFullYear()}년 ${
          KTC.getMonth() + 1
        }월 ${KTC.getDate()}일`}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 7,
    paddingTop: 8,
    backgroundColor: themeColor.headerAndInputColor,
    borderTopRadius: 10,
  },
  text: {
    fontSize: 26,
    color: themeColor.headerTextColor,
    fontFamily: 'Puradak Gentle Gothic',
  },
});
