
import { ImageBackground, StyleSheet} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()

  const pickedNumberHnadler=(pickedNumber)=>{
    setUserNumber(pickedNumber)
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHnadler}/>
  if(userNumber){
    screen=<GameScreen userNumber={userNumber}/>
  }

  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/Images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
      {screen}
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
