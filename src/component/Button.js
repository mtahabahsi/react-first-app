import React from 'react';


import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const Button = (props) => {
    return (
        <View style={[styles.ViewButton]}>
        <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
    buttonText: {color: '#ffffff', fontSize: 22, fontWeight: 'bold'},
    button: {
        flex: 1,
        backgroundColor: '#CE4646',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        marginVertical: 30,
        borderRadius: 10,
      },
    
    ViewButton: {flex: 2},
});

export default Button;