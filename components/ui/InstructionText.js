import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/color'

const InstructionText = ({children}) => {
  return (
    
        <Text style={styles.instructionText}>{children}</Text>
    
    
  )
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText: {
        color: colors.accent,
        fontFamily:'open-sans',
        fontSize: 24,
        // fontWeight: "bold",
        // marginBottom: 20,
      },
})