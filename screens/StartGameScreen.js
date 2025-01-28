import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const startGameScreen = ({onPickNumber}) => {

  const [enteredNumber, setEnteredNumber] = useState('') 

  const numberInputHandler = (enteredText) =>{ //it is a prperty of react NAtive that it will automatically pass the entered text to the function
    setEnteredNumber(enteredText)
    // console.log(enteredText)
  }
  const setInputHandler =()=>{
    setEnteredNumber('')
    // console.log('reset')
  }

  const confirmInputHandler=()=>{
   const chossenNumber=parseInt(enteredNumber)
    if(chossenNumber<=0 || chossenNumber>99 || isNaN(chossenNumber)){
      //show alert..
      Alert.alert('Invalid Number','Number should be greater than 0 and less than 99',[{text:'Close',style:'destructive',onPress:setInputHandler}])
      return;
    }
    console.log("Valid Number!",chossenNumber)
    onPickNumber(chossenNumber)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={setInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default startGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: 100,
    backgroundColor: "#3b021f",
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
  numberInput: {
    height: 55,
    width: 50,
    fontSize: 30,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddbf52",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
});
