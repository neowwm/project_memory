import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Alert, Platform} from 'react-native';
import {themeColor} from './Color';
import Icon from 'react-native-vector-icons/Feather';
import Icon_2 from 'react-native-vector-icons/Foundation';

export default function TodoItem({
  id,
  text,
  isDone,
  onRemoveHandler,
  isDoneHandler,
}) {
  const textInfo = () => {
    Alert.alert('할일', `${text}`, [
      {text: '확인', onPress: () => {}, style: 'cancel'},
    ]);
  };

  return (
    <View style={styles.block}>
      <View style={styles.doneContainer}>
        {isDone ? (
          <View style={styles.wrapper}>
            <Pressable
              android_ripple={{color: 'gary'}}
              style={styles.donePresscontainer}
              onPress={() => isDoneHandler(id)}>
              <Icon
                name="check-square"
                size={30}
                color={themeColor.checkBoxColor}
              />
            </Pressable>
          </View>
        ) : (
          <View style={styles.wrapper}>
            <Pressable
              android_ripple={{color: 'gary'}}
              style={styles.donePresscontainer}
              onPress={() => isDoneHandler(id)}>
              <Icon name="square" size={30} color={themeColor.checkBoxColor} />
            </Pressable>
          </View>
        )}
      </View>

      <View style={styles.textContainer}>
        <Pressable onPress={textInfo} android_ripple={{color: 'gary'}}>
          <Text
            numberOfLines={1}
            style={[
              styles.text,
              isDone && {textDecorationLine: 'line-through'},
            ]}>
            {text}
          </Text>
        </Pressable>
      </View>

      <View style={styles.removeContainer}>
        {isDone ? (
          <Pressable onPress={() => onRemoveHandler(id)}>
            <Icon_2 size={35} name="trash" color={themeColor.removeColor} />
          </Pressable>
        ) : (
          ''
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, flexDirection: 'row', padding: 5, height: 50},
  doneContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    borderRadius: 8,
    overflow: Platform.select({android: 'hidden'}),
  },
  donePresscontainer: {margin: -1},
  textContainer: {flex: 6, justifyContent: 'center'},
  text: {fontSize: 22, color: 'black', fontFamily: 'Puradak Gentle Gothic'},
  removeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
