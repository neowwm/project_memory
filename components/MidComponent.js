import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RemoveAlert} from './AlertButton';
import TodoList from './TodoList';

export default function MidComponent({data, setData}) {
  const isDoneHandler = id => {
    const nextData = data.map(item =>
      item.id === id ? {...item, isDone: !item.isDone} : item,
    );
    setData(nextData);
  };

  const onRemoveHandler = id => {
    RemoveAlert(data, id, setData);
  };

  return (
    <View style={styles.middle}>
      {data.length === 0 ? (
        <View style={styles.catConatiner}>
          <Image
            style={styles.catStyle}
            resizeMode="cover"
            source={require('../assets/cat.png')}
          />
          <Text style={[styles.text, {marginTop: 10}]}>할 일이 없습니다.</Text>
          <Text style={styles.text}>강아지가 심심해 합니다.</Text>
        </View>
      ) : (
        <TodoList
          data={data}
          onRemoveHandler={onRemoveHandler}
          isDoneHandler={isDoneHandler}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  middle: {flex: 5, height: 80},
  catConatiner: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  catStyle: {width: 300, height: 300, opacity: 0.7},
  text: {fontSize: 18},
});
