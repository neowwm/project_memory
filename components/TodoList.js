import React, {useState} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {themeColor} from './Color';
import TodoItem from './TodoItem';

export default function TodoList({data, onRemoveHandler, isDoneHandler}) {
  const renderItem = ({item}) => (
    <TodoItem
      id={item.id}
      text={item.text}
      isDone={item.isDone}
      onRemoveHandler={onRemoveHandler}
      isDoneHandler={isDoneHandler}
    />
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={<View style={styles.separtor} />}
    />
  );
}

const styles = StyleSheet.create({
  separtor: {height: 1.25, backgroundColor: themeColor.headerAndInputColor},
});
