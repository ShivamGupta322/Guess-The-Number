import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/color'


const Card = ({children}) => {
  return (
    <View style={styles.card}>{children} </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        marginTop: 36,
        backgroundColor: colors.primary800,
        elevation: 4, //shadow in android only
        //Shadow in iOS-
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})