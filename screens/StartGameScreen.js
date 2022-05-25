import { useState } from "react";
import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { COMMANDER_BLUE, LIGHT_CYAN, MIDNIGHT_BLUE } from "../constants";

const StartGameScreen = ({ onPickNum }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (value) => {
    setEnteredNumber(value);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNum = parseInt(enteredNumber);

    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNum(chosenNum);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Numbers Game</Title>
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: LIGHT_CYAN }}>
          Pick A Number Between 1-99
        </Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: { flex: 1, marginTop: 20, alignItems: "center" },
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    alignItems: "center",
    padding: 16,
    backgroundColor: MIDNIGHT_BLUE,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: LIGHT_CYAN,
    borderBottomWidth: 2,
    color: COMMANDER_BLUE,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: { flexDirection: "row" },
  buttonContainer: { flex: 1 },
});
export default StartGameScreen;
