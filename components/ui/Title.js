import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/color'

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        // fontWeight:'bold',
        marginBottom:20,
        color:'#fff',
        textAlign:'center',
        borderWidth:2,
        borderColor:'white',
        borderRadius:5,
        padding:12,
        fontFamily:'open-sans-bold'
      }
})