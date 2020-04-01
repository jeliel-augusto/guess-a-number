import React, {useEffect, useState} from 'react'
import { Dimensions, View, StyleSheet, Text, Keyboard, Button, TouchableWithoutFeedback, Alert, ScrollView, KeyboardAvoidingView } from 'react-native'
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import GameScreen from './GameScreen';
import BodyText from '../components/BodyText';
import CustomButton from '../components/Button';

export default function Home({onStartGame}){
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width/4);
    const inputHandle = (text) => setEnteredValue(text.replace(/[^(0-9)]/g, ''));
    const resetButtonHandler = () => { 
        setEnteredValue(''); 
        setConfirmed(false);
    };
    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width/4);
        };
        Dimensions.addEventListener('change', updateLayout);
        return () => Dimensions.removeEventListener('change', updateLayout); //Cleanup
    });
    const confirmButtonHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){ 
            Alert.alert('The entered number was invalid', 'Number has to be a number between 1 and 99',
            [{text: 'OK', style: 'destructive', onPress: resetButtonHandler}]);
            return
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }
    let confirmedOutput;
    
    if(confirmed){
        confirmedOutput = (
        <Card style={styles.summaryCard}>
            <Text style={styles.selectedText}>You selected number: </Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <CustomButton  onPress={() => onStartGame(selectedNumber)}>Start Game</CustomButton>
        </Card>);
    }
    return(
        <ScrollView>
            {/*This is a component for Keyboard not overlay the app*/}
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.screen}>
                        <Text style={styles.title}>Start a New Game</Text>
                        <Card style={styles.card}>
                            <BodyText>Select a number</BodyText>
                            <Input style={styles.input} blurOnSubmit onChangeText={inputHandle} value={enteredValue}
                                   keyboardType="number-pad" maxLength={2} />
                            <View style={styles.buttonContainer}>
                                <View style={{width: buttonWidth}}><Button title="Reset" onPress={resetButtonHandler} color={Colors.primary}/></View>
                                <View style={{width: buttonWidth}}><Button title="Confirm" onPress={confirmButtonHandler} color={Colors.secondary}/></View>
                            </View>
                        </Card>
                        {confirmedOutput}

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    screen: {
        padding: 10,
        flex: 1,
        alignItems: 'center',
        
    },
    // button: {
    //     width: Dimensions.get('window').width/4 //Give the dimension of entire device
    // },
    input: {
        width: '50%',
        textAlign: 'center'
    },
    summaryCard: {
        marginVertical: 10,
        width: 300,
    },
    selectedText: {
        fontSize: 17,
        textAlign: 'center',
        fontStyle: 'italic'
    },
    
    card: {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    title: {
        fontSize: 30,
        fontFamily: 'roboto',
        marginVertical: 10
    }
});
  