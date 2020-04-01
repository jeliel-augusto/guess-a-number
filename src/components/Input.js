import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input({ style, ...otherProps }){
    return (<TextInput style={{...styles.input, ...style}} {...otherProps} />)
}
const styles = StyleSheet.create({
    input: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        
        height: 30,
        borderColor: 'grey',
        marginTop: 10,
        marginBottom: 10
    }
});