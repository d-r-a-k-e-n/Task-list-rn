import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function HomeScreen(): React.JSX.Element {
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task list</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a task"
        onChangeText={onChangeText}
        value={text}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },

  header: {
    textAlign: 'center',
    margin: 5,
    fontFamily: 'Segoe UI',
    fontWeight: 700,
    fontSize: 23,
    textTransform: 'uppercase',
  },

  input: {
    borderRadius: 16,
    fontFamily: 'Segoe UI',
    fontWeight: 400,
    fontSize: 16,
    paddingVertical: 18,
    paddingHorizontal: 22,
    width: '100%',
    height: 62,
    borderWidth: 2,
    borderColor: '#27272a',
    borderStyle: 'solid',
    // justifyContent: 'flex-end',

    // background: var(--background-light);
    // color: var(--text-light);
  },
});
