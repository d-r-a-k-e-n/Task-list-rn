import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Header from '../components/Header';
import TaskItem from '../components/TaskItem';
import CreateTask from '../components/CreateTask';

export default function ComplitedScreen(): React.JSX.Element {
  const [list, setList] = useState([
    {text: 'first task', id: '123'},
    {text: 'second task', id: '132'},
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header text={'Complited'} />}
        data={list}
        renderItem={({item}) => <TaskItem text={item.text} />}
      />
      <CreateTask />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
