import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/color'
const PrimaryButton = ({children,onPress}) => {
    
  return (
    <View style={styles.buttonOuterContainer}>
    <Pressable onPress={onPress} style={({pressed})=>pressed ?[styles.buttonInnercontainer,styles.pressed] :styles.buttonInnercontainer} android_ripple={{color:colors.primary600}}>
        
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
        backgroundColor:colors.primary500,
        
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