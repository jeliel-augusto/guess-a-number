import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home'
import Header from './src/components/Header';
import GameScreen from './src/screens/GameScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
const fetchFonts = () => { return Font.loadAsync({
  'roboto': require('./assets/fonts/Roboto-Thin.ttf')
}) }
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const selectedHandler = (number) => {
    setUserNumber(number);
  };
  const [loaded, setLoaded] = useState(false);
  if(!loaded){
    return (<AppLoading startAsync={fetchFonts} onFinish={() => setLoaded(true) }
    onError={(e) => console.log(e)}/>)
  }
  const reset = () => {   
    setUserNumber(undefined);
  }
  let content = <Home onStartGame={selectedHandler} />
  if(userNumber){
    content = <GameScreen number={userNumber} reset={reset}/>
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a number"/> 
      {content}
    </View>
    
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1}
});
