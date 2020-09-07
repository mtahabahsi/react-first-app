import React from 'react';

import {StyleSheet, TextInput, View} from 'react-native';
const Input = (props) => {
  return (
    <View style={[styles.commonfl1]}>
      <TextInput
        style={[styles.input, props.input]}
        placeholder={props.placeHolder}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  commonfl1: {flex: 1},
  input: {
    height: 50,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: '#ff0003',
    marginHorizontal: 30,
    color: '#D4D4D4',
  },
});
export default Input;
