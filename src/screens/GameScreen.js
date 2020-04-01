import React, { useState, useEffect } from 'react';
import { StyleSheet,Dimensions, View, Text , ScrollView } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Button from '../components/Button';

import { Ionicons } from '@expo/vector-icons'
import GameOverScreen from './GameOverScreen';
// import { ScreenOrientation } from 'expo'; Useful for locking orientation dynamically
import BodyText from "../components/BodyText";
const guessNumber = (min, max) => {
    return Math.ceil((min + max)/2);
};
export default function GameScreen({ number, reset}){
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(99);
    const initGuess = guessNumber(min, max);
    const [steps, setSteps] = useState([]);
    const [availableDevHeight, setAvailableDevHeight] = useState(Dimensions.get('screen').height);
    const [guessedNumber, setGuessedNumber] = useState(initGuess);
    useEffect(() => {
        setGuessedNumber(guessNumber(min, max));
    }, [min, max]);
    useEffect(() => {
        const updateLayout = () => setAvailableDevHeight(Dimensions.get('screen').height);
        Dimensions.addEventListener('change', updateLayout);
        return () => Dimensions.removeEventListener('change', updateLayout);
    });
    if(guessedNumber === number){
        return (
            <GameOverScreen guessedNumber={guessedNumber} steps={steps.length} reset={reset} />
        )
    }
    if(availableDevHeight < 400){
        return (
            <View style={styles.containerRow}>
                <View style={styles.container}>
                    <Text style={styles.title}>Oponent Guess: </Text>
                    <NumberContainer>{guessedNumber}</NumberContainer>
                    <Text style={styles.secondaryTitle}>Give the computer a hint!</Text>
                    <Card style={styles.buttonContainer}>

                        <Button onPress={() => {
                            setMax(guessedNumber-1);
                            setSteps((prevSteps) =>  [guessedNumber, ...prevSteps])
                        }
                        }>
                            <Ionicons name="md-remove" size={24} color="white"/>
                        </Button>
                        <Button onPress={() => {
                            setMin(guessedNumber+1);
                            setSteps((prevSteps) =>  [guessedNumber, ...prevSteps])
                        }}>
                            <Ionicons name="md-add" size={24} color="white"/>
                        </Button>

                    </Card>
                </View>
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={{flexGrow: 1}}>
                        {steps.map((guess, index) => (<ListItem key={index} try={steps.length - index}>{guess}</ListItem>))}
                    </ScrollView>
                </View>
            </View>
        )
    }else{
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Oponent Guess: </Text>
                <NumberContainer>{guessedNumber}</NumberContainer>
                <Text style={styles.secondaryTitle}>Give the computer a hint!</Text>
                <Card style={styles.buttonContainer}>

                    <Button onPress={() => {
                        setMax(guessedNumber-1);
                        setSteps((prevSteps) =>  [guessedNumber, ...prevSteps])
                    }
                    }>
                        <Ionicons name="md-remove" size={24} color="white"/>
                    </Button>
                    <Button onPress={() => {
                        setMin(guessedNumber+1);
                        setSteps((prevSteps) =>  [guessedNumber, ...prevSteps])
                    }}>
                        <Ionicons name="md-add" size={24} color="white"/>
                    </Button>

                </Card>

                <ScrollView>
                    {steps.map((guess, index) => (<ListItem index={index} try={steps.length - index}>{guess}</ListItem>))}
                </ScrollView>


            </View>
        )
    }

}

const ListItem = props => (
    <View style={styles.listItem}>
        <BodyText style={styles.text}>Try #{props.try} -- <BodyText>{props.children}</BodyText></BodyText>
    </View>);
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerRow: {
        flexDirection: 'row'
    },
    listItem: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    text: {
        fontSize: Dimensions.get('window').width < 600 ? 20 : 13
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'roboto',
        color: Colors.primary
    },
    secondaryTitle: {
        fontSize: 20,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 5
    }
});