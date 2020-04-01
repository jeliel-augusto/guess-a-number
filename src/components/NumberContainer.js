import React from 'react';
import {StyleSheet, View, Text} from 'react-native'
import Colors from '../constants/colors';

export default function NumberContainer({children}){
    return (
        <View style={styles.container}>
            <Text style={styles.selectedNumber}>{children}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        borderColor: Colors.secondary,
        borderWidth: 5,
        width: 60,
        height: 60,
        alignSelf: 'center',
        borderRadius: 60,
        
        justifyContent: 'center',
        marginVertical: 10
    },
    selectedNumber: {
        fontSize: 30,
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.secondary
    },
})