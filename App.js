import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { COMMANDER_BLUE, LIGHT_CYAN } from "./constants";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNum) => {
    setUserNumber(pickedNum);
  };

  let screen = <StartGameScreen onPickNum={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
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
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
  backgroundsImage: { opacity: 0.18 },
});
