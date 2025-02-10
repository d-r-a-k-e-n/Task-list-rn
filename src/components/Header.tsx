import React from 'react';
import {StyleSheet, Text} from 'react-native';

type TaskItemProps = {
  text: string;
};

export default function Header({text}: TaskItemProps): React.JSX.Element {
  return <Text style={styles.header}>{text}</Text>;
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginVertical: 24,
    fontFamily: 'Segoe UI',
    fontWeight: 700,
    fontSize: 23,
    textTransform: 'uppercase',
  },
});
