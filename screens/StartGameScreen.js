import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'

const startGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false}/>
      <View style={styles.buttonContainer}>
      <View style={styles.btnContainer}>
      <PrimaryButton>Reset</PrimaryButton>
      </View>
      <View style={styles.btnContainer}>
      <PrimaryButton>Confirm</PrimaryButton>
      </View>
      </View>
    </View>
  )
}

export default startGameScreen

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
       marginHorizontal:24,
       borderRadius:8,
        padding:16,
        marginTop:100,
        backgroundColor:'#3b021f',
        elevation:4,//shadow in android only
        //Shadow in iOS-
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowRadius:6,
        shadowOpacity:0.25,
    },
    numberInput:{
        height:55,
        width:50,
        fontSize:30,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color:'#ddbf52',
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        
    },
    btnContainer:{
        flex:1,
    }
})