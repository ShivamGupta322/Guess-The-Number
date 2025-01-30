import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/color'

const GuessLogItems = ({roundNumber,guess}) => {
  return (
    <View style={styles.ListItems}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponents Guess:  {guess}</Text>
    </View>
  )
}

export default GuessLogItems

const styles = StyleSheet.create({
    ListItems:{
        borderColor:colors.primary800,
        borderWidth:1,
        padding:12,
        marginVertical:8,
        backgroundColor:colors.accent,
        borderRadius:40,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        //shadow in iOS
        shadowColor:'black',
        shadowOpacity:0.1,
        shadowRadius:4,
        shadowOffset:{
            width:0,
            height:2
        }
    },
    itemText:{
        fontFamily:'open-sans'
    }
})