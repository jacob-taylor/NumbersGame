import { View, Text, StyleSheet } from "react-native";
import { MIDNIGHT_BLUE } from "../constants";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Card from "../components/UI/Card";

const GameOverScreen = ({ count, startAgain }) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <PrimaryButton>Would you like to play again?</PrimaryButton>
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
});

export default GameOverScreen;
