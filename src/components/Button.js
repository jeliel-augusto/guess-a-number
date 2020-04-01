import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Colors from '../constants/colors';
export default function Button(props){
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.5}>
            <View style={{...styles.button, ...props.style}}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    }
});