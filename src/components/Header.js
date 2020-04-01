import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({title}){
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#0288D1',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});