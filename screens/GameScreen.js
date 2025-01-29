import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';



const GameScreen = ({userNumber,onGameOver}) => {

  const generateRamdomNumber=(min,max,exclude)=>{
    rndNum=Math.floor(Math.random()*(max-min))+min;
  
    if(rndNum==exclude){
      return generateRamdomNumber(min,max,exclude);
    }
    else{
      return rndNum;
    }
  }
  
  let minBoundary=1;
  let maxBoundary=100;
  
  initialGuess=generateRamdomNumber(1,100,userNumber)
  
      const [currentGuess, setCurrentGuess] = useState(initialGuess)

      useEffect(()=>{
        if(currentGuess===userNumber){
          onGameOver()
        }
      },[currentGuess,userNumber,onGameOver])
  
      const nextGuessHandler=(direction)=>{
        if((direction==='lower'&& currentGuess<userNumber) || (direction==='greater'&& currentGuess>userNumber)) {
          Alert.alert('Don\'t lie!','You know that this is wrong...',[{text:'Sorry!',style:'cancel'}])
          return;
          
        }
        //Lower or Higher
        if(direction==='lower'){
          maxBoundary=currentGuess-1;
          // const newRndNumber= generateRamdomNumber(minBoundary,maxBoundary,currentGuess)
        }
        else{
          minBoundary=currentGuess+1;
        }
        const newRndNumber= generateRamdomNumber(minBoundary,maxBoundary,currentGuess)
        setCurrentGuess(newRndNumber)
      }
  
 
  return (
    

    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
       <View style={styles.btnContainer}>
       <PrimaryButton onPress={()=>nextGuessHandler('lower')}>-</PrimaryButton>
       <PrimaryButton onPress={()=>nextGuessHandler('greater')}>+</PrimaryButton>
       </View>
      </View>
      {/* <View>Log Round</View> */}
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding:24,
    marginTop:15
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'95%'
  }
  
})