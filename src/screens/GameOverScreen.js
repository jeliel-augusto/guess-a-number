import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Button from '../components/Button';

export default function GameOverScreen({guessedNumber, steps, reset}){
    return (
        <ScrollView>
            <View container={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        // source={require('../../assets/original.png')}
                        source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fto3dnGVxfl0%2Fhqdefault.jpg&f=1&nofb=1'}}
                        style={styles.image} resizeMode="cover"/>
                </View>

                <Text style={styles.text}>Nice try! Your number is: {guessedNumber}</Text>
                <Button onPress={reset} style={styles.buttonRestart}>Restart Game</Button>
            </View>
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    buttonRestart: {
        marginHorizontal: 30,
        marginVertical: 30
    },
    text: {
      textAlign: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        borderColor: 'black',
        
    },
    imageContainer: {
        width: Dimensions.get('window').height * 0.4,
        height: Dimensions.get('window').height * 0.4,
        alignSelf: 'center',
        borderRadius: Dimensions.get('window').height * 0.6 / 2,
        borderWidth: 1,
        overflow: 'hidden',
        marginVertical: 10
    }
});