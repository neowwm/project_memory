import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import HeaderDate from './HeaderDate';
import InputBox from './InputBox';
import {allRemoveAlert} from './AlertButton';
import AllSelectAndRemoveButtons from './AllSelectAndRemoveButtons';
import 'react-native-get-random-values';
import {v4 as uuid4} from 'uuid';
import {useGetData, useSetData} from '../hooks/asyncHooks';
import MidComponent from './MidComponent';

const re = /^\s*$/;

export default function TodoApp() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  useGetData(setData);
  useSetData(data);

  const isAllDone = data.every(item => item.isDone === true) === true;

  const onAllSelectHandler = () => {
    const nextData = data.map(item => ({...item, isDone: true}));
    setData(nextData);
  };

  const onAllRemoveHandler = () => {
    allRemoveAlert(data, setData);
  };

  const onChangeTextHandler = text => {
    setText(text);
  };

  const onAllCancelHandler = () => {
    const nextData = data.map(item => ({...item, isDone: false}));
    setData(nextData);
  };

  const onSubmit = () => {
    if (re.test(text)) {
      Alert.alert('내용을 입력하세요.');
      return;
    }

    const nextId = uuid4();
    const nextData = data.concat({id: nextId, text: text, isDone: false});
    setData(nextData);
    setText('');
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View style={styles.block}>
        <HeaderDate />
        <MidComponent data={data} setData={setData} />
        {data.length !== 0 && (
          <AllSelectAndRemoveButtons
            onAllSelectHandler={onAllSelectHandler}
            onAllRemoveHandler={onAllRemoveHandler}
            isAllDone={isAllDone}
            onAllCancelHandler={onAllCancelHandler}
            data={data}
          />
        )}
        <InputBox
          onChangeTextHandler={onChangeTextHandler}
          text={text}
          onSubmit={onSubmit}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},

  bottom: {flex: 1, height: 40, backgroundColor: 'black'},
});
