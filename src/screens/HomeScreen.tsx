import React, {useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import Header from '../components/Header';
import TaskItem from '../components/TaskItem';
import CreateTask from '../components/CreateTask';

export default function HomeScreen(): React.JSX.Element {
  const [list, setList] = useState([
    {text: 'first task', id: '123'},
    {text: 'second task', id: '132'},
    {text: 'three task', id: '213'},
    {text: 'four task', id: '231'},
    {text: 'faef task', id: '312'},
    {text: 'six task', id: '321'},
    {text: 'first task', id: '2344'},
    {text: 'second task', id: '45756'},
    {text: 'three task', id: '7662'},
    {text: 'four task', id: '900'},
    {text: 'faef task', id: '700'},
    {text: 'six task', id: '590'},
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header text={'Task list'} />}
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
