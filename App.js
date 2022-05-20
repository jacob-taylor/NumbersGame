import { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import {
  COMMANDER_BLUE,
  LIGHT_CYAN,
  MIDNIGHT_BLUE,
  PACIFIC_BLUE,
} from "./constants";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNum) => {
    setUserNumber(pickedNum);
  };

  let screen = <StartGameScreen onPickNum={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={[COMMANDER_BLUE, LIGHT_CYAN]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/oceanBG2.webp")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundsImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
  backgroundsImage: { opacity: 0.18 },
});
