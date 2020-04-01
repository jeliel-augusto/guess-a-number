import React from 'react'
import { StyleSheet, View } from 'react-native';
export default function Card({children, style: overrideStyles}){
    return (<View style={{...styles.card, ...overrideStyles}}>
        {children}
    </View>)
}
const styles = StyleSheet.create({
    card: {
        
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.6,
        elevation: 3,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 5
    }
    
})