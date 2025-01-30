import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/color'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container:{
        
        padding: 24,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth:4,
        borderColor:colors.accent,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
        color:colors.accent,
        fontSize:36,
        // fontWeight:'bold'
        fontFamily:'open-sans-bold'
    }
})