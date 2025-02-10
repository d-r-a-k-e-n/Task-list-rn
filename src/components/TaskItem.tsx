import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type TaskItemProps = {
  text: string;
};

export default function TaskItem({text}: TaskItemProps): React.JSX.Element {
  return (
    <View style={styles.taskItem}>
      <BouncyCheckbox
        style={styles.checkbox}
        size={24}
        fillColor="#007bff"
        // unFillColor="#f5f5f5"
        text={text}
        innerIconStyle={{borderWidth: 2}}
        textStyle={{fontFamily: 'JosefinSans-Regular', color: 'black'}}
        // onPress={(isChecked: boolean) => {
        //   console.log(isChecked);
        // }}
      />
      <Image source={require('../assets/img/trash.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: '#fff',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 20,
    justifyContent: 'space-between',
    gap: 10,
  },
  checkbox: {
    width: '90%',
  },
  image: {
    width: 22,
    height: 22,
  },
});
