import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PrimaryButton = ({children}) => {
    function pressHandler(){
        console.log('Button Pressed');
    }
  return (
    <View style={styles.buttonOuterContainer}>
    <Pressable onPress={pressHandler} style={({pressed})=>pressed ?[styles.buttonInnercontainer,styles.pressed] :styles.buttonInnercontainer} android_ripple={{color:'#640233'}}>
        
      <Text style={styles.buttonText}>{children}</Text>
    
    </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden',
    },
    buttonInnercontainer:{
        backgroundColor:'#72063c',
        
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
        
    },
    buttonText:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center'
    },
    //ripple effect for iOS
    pressed:{
        backgroundColor:'#72063c',
        opacity:0.75,
    }
})