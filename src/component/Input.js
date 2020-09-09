import React from 'react';
import {useState} from 'react';

import {StyleSheet, TextInput, View} from 'react-native';

const Input = (props) => {
const [focus, setFocus] = useState(false);
const customStyle= focus ? styles.inputFocus: styles.input;


  return (
    <View style={[styles.commonfl1]}>
      
      <TextInput 
        style={customStyle}
        placeholder={props.placeHolder}
        placeHolderTextColor='#D4D4D4'
        onFocus = {() => setFocus(true)}
        onBlur={() => setFocus(false)}
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
    borderBottomColor: '#9CA5B2',
    marginHorizontal: 30,
    color: '#000000',
  },
  inputFocus: {
    height: 50,
    borderColor: 'gray',
    borderBottomWidth: 2,
    marginHorizontal: 30,
    color: '#000000',
      borderBottomColor: '#FF5B7F',
  }

});

export default Input;
