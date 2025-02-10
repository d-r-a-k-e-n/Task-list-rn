import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function CreateTask(): React.JSX.Element {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.write}>
      <TextInput
        style={[styles.input, {borderColor: isFocused ? '#007BFF' : '#fff'}]}
        placeholder="Add a task"
        onChangeText={setText}
        value={text}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 16,
    fontFamily: 'Segoe UI',
    fontWeight: '400',
    fontSize: 16,
    paddingVertical: 18,
    paddingHorizontal: 22,
    width: '100%',
    height: 62,
    borderWidth: 2,
    marginBottom: 40,
  },
  write: {
    bottom: -10,
  },
});
