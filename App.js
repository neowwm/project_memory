import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TodoApp from './components/TodoApp';

export default function App() {
  return (
    <SafeAreaView style={styles.block}>
      <TodoApp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});
