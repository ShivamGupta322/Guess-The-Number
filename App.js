
import { ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)

  const pickedNumberHnadler=(pickedNumber)=>{
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  const gameOverHandler=()=>{
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHnadler}/>
  if(userNumber){
    screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if(gameIsOver && userNumber){
    screen=<GameOverScreen/>
  }


  
  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/Images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
      <SafeAreaView style={styles.rootScreen}>
      {screen}
      </SafeAreaView>
      
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    // backgroundColor:'#ddb52f',
    flex:1,
  },
  backgroundImage:{
    opacity:0.15
  }
});
