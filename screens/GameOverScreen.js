import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title'
import colors from '../constants/color'
import PrimaryButton from '../components/ui/PrimaryButton'

const GameOverScreen = ({roundsNumber,userNumber,onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!! ⛳</Title>
      <View style={styles.imageContainer}>
        
        <Image style={styles.image} source={require('../assets/Images/success.png')}/>
      </View>
      <Text style={styles.summaryText}>Your Phone takes <Text style={styles.highlights}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlights}>{userNumber}</Text>.</Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:24
  },
  imageContainer:{
    width:300,
    height:300,
    borderRadius:150,
    borderWidth:3,
    borderColor:colors.primary800,
    overflow:'hidden',
    margin:36,
    
  },
  image:{
    width:'100%',
    height:'100%'
  },
  summaryText:{
    fontFamily:'open-sans',
    fontSize:24,
    marginVertical:24,
    textAlign:'center'
  },
  highlights:{
    color:colors.primary500,
    fontFamily:'open-sans-bold'
  }
})