import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import Title from "../components/Title";
import { Ionicons } from "@expo/vector-icons";
import { COMMANDER_BLUE, LIGHT_CYAN, MIDNIGHT_BLUE } from "../constants";
import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, gameOverHandler, count, updateCount }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [guess, setGuess] = useState(initialGuess);

  useEffect(() => {
    if (guess === userNumber) {
      gameOverHandler();
    }
  }, [guess, userNumber, gameOverHandler]);

  const guessHandler = (response) => {
    if (
      (response === "lower" && guess < userNumber) ||
      (response === "higher" && guess > userNumber)
    ) {
      Alert.alert("Don't Lie", "You know that this is wrong!", {
        text: "Sorry!",
        style: "cancel",
      });
      updateCount(count + 1);
      return;
    }

    if (response === "lower") {
      maxBoundary = guess;
    } else {
      minBoundary = guess + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, guess);
    setGuess(newRndNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guess}</NumberContainer>
      <View style={styles.responseContainer}>
        <TouchableOpacity
          onPress={() => {
            guessHandler("higher");
          }}
        >
          <Ionicons name="add-circle-outline" color={LIGHT_CYAN} size={64} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            guessHandler("lower");
          }}
        >
          <Ionicons name="remove-circle-outline" color={LIGHT_CYAN} size={64} />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{count}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24 },
  responseContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default GameScreen;
